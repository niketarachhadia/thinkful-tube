var showResults = function(results){
	$.each(results,function(key,value){
		$('#search-result').append('<li id="'+key+'"><a href="https://www.youtube.com/watch?v='+results[key].id.videoId+'"><img src="'+ results[key].snippet.thumbnails.medium.url+'"/></a></li>');
	});
};
module.exports = showResults;