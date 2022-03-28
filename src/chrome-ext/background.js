chrome.tabs.onUpdated.addListener(
	function (tabId, changeInfo, tab) {
		console.log(changeInfo);
		if (changeInfo.url) {
			chrome.tabs.sendMessage(tabId, {
				message: 'eat-my-youtube-shorts-you-fucking-fool',
				url: changeInfo.url
			})
		}
	}
);