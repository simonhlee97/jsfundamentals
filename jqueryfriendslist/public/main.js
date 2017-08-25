var $friends = $('#friends');
var $name = $('#name');
var $age = $('#age');

var friendTemplate = "" +
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" +
	"<p><strong>Age:</strong> {{age}}</p>" +
	"<button id='{{id}}' class='remove'>X</button>" +
	"</li>";
 
function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
};
$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/friends',
		success: function(friends) {
			$.each(friends, function(i, friend){
				addFriend(friend);
			});
		},
		error: function(){
			alert('error loading Friends');
		}
	});	

	$('#add-friend').on('click', function(){
		var friend = {
			name: $name.val(),
			age: $age.val()
		};
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/friends',
			data: friend,
			success: function(newFriend) {
					addFriend(newFriend);
			},
			error: function(){
				alert('error saving');
			}
		});	
	});
	$friends.delegate('.remove', 'click', function(){
		var $li = $(this).closest('li');
			//Ajax Delete Function - click the .remove class button and the id identifies what to delete
		$.ajax({
			type: 'DELETE',
			url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
			success: function(){
				$li.fadeOut(300, function(){
					$(this).remove();
				});
			}
		});
	});


	// let names;

	// $.ajax({
	// 	type: 'GET',
	// 	url: 'http://rest.learncode.academy/api/learncode/javascriptfall'
	// 	// .done is a PROMISE
	// }).done(function(data){
	// 	names = data;
	// 	console.log(names);
	// });
	// console.log("Hello");
	// console.log(names);
	// ----------------------------------------------
	// $('#submitbtn').on('click', function(){
	// 	let user = {
	// 		name: $('#name').val(),
	// 		email: $('#email').val()
	// 	}
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
	// 		data: user
	// 	}).done(function(info){
	// 			console.log(info);
	// 	});
	// });
});