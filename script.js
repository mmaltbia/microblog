$(document).ready(function(){

// $.backstretch("images/railroads.jpg");
$('.parallax-window').parallax();

//Post constructor
function Post(message, username) {
	this.message = message;
	this.username = username;
};

postArr = []

//Saves constructor to an array for all posts
Post.prototype.saveToArr = function() {
	postArr.push(this);
	console.log(postArr);
};

var post2 = new Post ("Hey world it's me!", "@michelle");
var underscoreTemplate = _.template($('#underscore-template').html());

//Renders underscore template
Post.prototype.renderTemplate = function() {
	$(underscoreTemplate(this));

};

var $message = $('#message');
var $username = $('#username');
var $form = $('#newPost');
var $postBtn = $('#postBtn');
var $othersPosts = $('#othersPosts')
var counter = postArr.length;
var $counterDiv1 = $('#counterDiv1');
var $counterDiv2 = $('#counterDiv2');
var $counterDiv3 = $('#counterDiv3');

var postCounter = function() {
	if(postArr.length == 0){
		$counterDiv1.append('<span>' + 'Be the first to post!' + '</span>');
	}
	else if(postArr.length == 1){
		$counterDiv2.append('<span>' + (counter +1) +' Post ' + '& Counting' + '</span>');
	}
	else{
		$counterDiv3.append('<span>' + (counter + 1) +' Posts ' + '& Counting' + '</span>');
	}
}

postCounter();


//When post button is clicked user input is printed to the "The Convo" page
$postBtn.on('click', function(event){
	event.preventDefault();
	var post1 = new Post($message.val(), $username.val());
	post1.saveToArr();
	$othersPosts.append('<li class="othersPosts"><p>' + post1.message + ' - ' + post1.username + '</p></li>');
	$form[0].reset();
	post1.renderTemplate();
	$counterDiv1.remove();
	postCounter();


})







//Document closing Tags
})