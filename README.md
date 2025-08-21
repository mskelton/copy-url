# Copy URL Chrome Extension

A simple Chrome extension that copies the current page URL to your clipboard with a keyboard shortcut.

## Features

- Copy current page URL to clipboard
- Keyboard shortcut: `Command+Shift+C` (Mac) / `Ctrl+Shift+C` (Windows/Linux)
- Visual feedback with badge indicator
- No build steps required - plain JavaScript

## Installation

### Manual Installation (Developer Mode)

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension will appear in your extensions list

### From Chrome Web Store

Not yet published to the Chrome Web Store.

## Usage

### Keyboard Shortcut

- Press `Command+Shift+C` (Mac) or `Ctrl+Shift+C` (Windows/Linux) to copy the current page URL

### Extension Icon

- Click the extension icon in the toolbar to copy the current page URL

### Visual Feedback

- Green checkmark badge: URL copied successfully
- Red X badge: Copy failed
- Badge disappears after 2 seconds

## Development

### Prerequisites

- Node.js (for Prettier formatting)

### Setup

```bash
npm install
```

### Code Formatting

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

## Files

- `manifest.json` - Extension configuration and permissions
- `background.js` - Service worker handling URL copying
- `package.json` - Dependencies and scripts
- `.prettierrc` - Code formatting configuration

## Permissions

- `activeTab` - Required to access the current tab's URL

## Browser Support

- Chrome 88+ (Manifest V3 support required)
- Other Chromium-based browsers with Manifest V3 support
