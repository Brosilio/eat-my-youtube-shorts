/*
// https://stackoverflow.com/questions/6390341/
history.pushState = ( f => function pushState(){
	var ret = f.apply(this, arguments);
	window.dispatchEvent(new Event('pushstate'));
	window.dispatchEvent(new Event('locationchange'));
	return ret;
})(history.pushState);

history.replaceState = ( f => function replaceState(){
	var ret = f.apply(this, arguments);
	window.dispatchEvent(new Event('replacestate'));
	window.dispatchEvent(new Event('locationchange'));
	return ret;
})(history.replaceState);

window.addEventListener('popstate',()=>{
	window.dispatchEvent(new Event('locationchange'))
});
// end https://stackoverflow.com/questions/6390341/

window.addEventListener('locationchange', () => {
	redirectIfYoutubeIsFuckingRetarded();
});
*/

chrome.runtime.onMessage.addListener(
	(request, sender, sendResponse) => {
		if (request.message === 'eat-my-youtube-shorts-you-fucking-fool') {
			if (window.location.pathname.startsWith('/shorts/')
				&& (window.location.host === 'www.youtube.com' || window.location.host === 'youtube.com')) {
				console.log("eating shorts...");
				let unfuckedUrl = window.location.href.replace('/shorts/', '/watch?v=');
				history.replaceState(null, null, unfuckedUrl);
				window.location.href = unfuckedUrl;
			}
		}
	});
