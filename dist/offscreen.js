const textEl = document.querySelector("#text");

// Use the offscreen document's `document` interface to write a new value to the
// system clipboard.
//
// At the time this demo was created (Jan 2023) the `navigator.clipboard` API
// requires that the window is focused, but offscreen documents cannot be
// focused. As such, we have to fall back to `document.execCommand()`.
function handleClipboardWrite(data) {
  // `document.execCommand('copy')` works against the user's selection in a web
  // page. As such, we must insert the string we want to copy to the web page
  // and to select that content in the page before calling `execCommand()`.
  textEl.value = data;
  textEl.select();
  document.execCommand("copy");
}

chrome.runtime.onMessage.addListener((data) => {
  if (data.action === "copy") {
    handleClipboardWrite(data.text);
  }
});
