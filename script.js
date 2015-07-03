$(document).ready(function(){

// $.backstretch("images/railroads.jpg");
$('.parallax-window').parallax();

function Post(message, username) {
	this.message = message;
	this.username = username;
};

postArr = []

Post.prototype.saveToArr = function() {
	postArr.push(this);
	console.log(postArr);
};

var post2 = new Post ("Hey world it's me!", "@michelle");

var underscoreTemplate = _.template($('#underscore-template').html());

Post.prototype.renderTemplate = function() {
	$(underscoreTemplate(this));

};

var $message = $('#message');
var $username = $('#username');

var $form = $('#newPost');

var $postBtn = $('#postBtn');

var $othersPosts = $('#othersPosts')

$postBtn.on('click', function(event){
	event.preventDefault();
	var post1 = new Post($message.val(), $username.val());
	post1.saveToArr();
	$othersPosts.append('<li class="othersPosts"><p>' + post1.message + ' - ' + post1.username + '</p></li>');
	$form[0].reset();
	
	post1.renderTemplate();

})




//Document closing Tags
})