$(document).ready(function(){

	$("#search-term").submit(function(event){
		event.preventDefault();
		var searchTerm = $("#query").val();	
		getRequest(searchTerm);
	});
});
var getRequest = function(searchTerm){
	var params = {
		part: 'snippet',
		key: 'AIzaSyD4-c80_VrwBAZj3aGMOpgHzajxgQV9Vv4',
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url,params,function(data){
		var results = data.items;
		showResults(results);
	// console.log(data.items.snippet.thumbnails.medium.url);

	 });
};
var showResults = function(results){
	$.each(results,function(key,value){
		$('#search-result').append('<li>'+'<img src="'+ results[key].snippet.thumbnails.medium.url+'"/> </li>');
		//console.logresults[key].Title);
	});
};