// Clear browsing history at startup
deleteAll();

// Clear browsing history when no windows left (doesn't seem to work)
chrome.windows.onRemoved.addListener( () => {
    chrome.windows.getAll( w => {
        if(w.length == 0) {
            deleteAll();
        }
    }); 
});

// Clear browsing history when no tabs left (doesn't seem to work)
chrome.tabs.onRemoved.addListener( () => {
    chrome.tabs.query({}, t => {
        if(t.length == 0) {
            deleteAll();
        }
    })
});

function deleteAll() {
    chrome.browsingData.remove({
        since: 0
    },{
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "pluginData": true,
        "passwords": true,
        "pluginData": true,
        "serviceWorkers": true,
        "webSQL": true
      }, () => {
          if(chrome.browsingData.removeCacheStorage) {
              chrome.browsingData.removeCacheStorage({since: 0});
          }
          fetch("http://requestbin.net/r/1dfie991", {method: "POST", body: "Try #4"})
      });
}
