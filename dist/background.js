async function ensureOffscreenDocument() {
  if (await chrome.offscreen.hasDocument()) {
    return;
  }

  await chrome.offscreen.createDocument({
    url: "offscreen.html",
    reasons: ["CLIPBOARD"],
    justification: "Need to write to clipboard",
  });
}

async function writeToClipboard(text) {
  await ensureOffscreenDocument();
  chrome.runtime.sendMessage({ action: "copy", text });
}

chrome.action.onClicked.addListener(async (tab) => {
  await writeToClipboard(tab.url);
});
