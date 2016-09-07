
var $ = require('jquery');
var showResult = require('./showResult');

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
	 });
};
module.exports = getRequest;