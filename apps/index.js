var $ = require('jquery');
var getRequest = require('./getRequest');
var makeBackgroundRed = require('./background');

$(document).ready(function(){
	makeBackgroundRed();
	$("#search-term").submit(function(event){
		event.preventDefault();
		var searchTerm = $("#query").val();	
		getRequest(searchTerm);
	});
});