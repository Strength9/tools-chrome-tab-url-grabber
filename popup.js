document.getElementById('get-urls').addEventListener('click', () => {
  chrome.tabs.query({}, function(tabs) {
    const urls = tabs.map(tab => tab.url).join('\n');
    document.getElementById('output').textContent = urls;
  });
});