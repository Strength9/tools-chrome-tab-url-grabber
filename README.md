# Tab URL Exporter

A simple Chrome extension that allows you to quickly export URLs from all your open tabs.

## Features

- One-click export of all open tab URLs
- Clean, simple interface
- Displays URLs in an easy-to-copy format

## How It Works

1. Click on the extension icon in your browser toolbar
2. Click the "Get URLs" button in the popup
3. All URLs from your currently open tabs will be displayed in the text area
4. Copy the URLs as needed for your use

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the directory containing this extension
5. The extension should now appear in your browser toolbar

## Files

- `manifest.json`: Extension configuration
- `popup.html`: The UI for the extension popup
- `popup.js`: JavaScript code that handles tab URL extraction

## Permissions

This extension requires the `tabs` permission to access the URLs of your open tabs.

## Privacy

This extension only accesses tab URLs when you click the "Get URLs" button. No data is sent to any external servers or stored permanently.
