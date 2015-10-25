$(document).ready(function(){
	
	$(".proItem").keypress(function (event){
		if (event.which == 13) {
			var newProText = $('.proItem').val();
			if (newProText.length > 1) {
				AddProListItem(newProText);
				$('.proItem').val('');
			}
		}
	});

	$(".conItem").keypress(function (event){
		if (event.which == 13) {
			var newConText = $('.conItem').val();
			if (newConText.length > 1) {
				AddConListItem(newConText);
				$('.conItem').val('');
			}
		}
	});

	$(".addPro").click(function(){
		var newProText = $('.proItem').val();
		if (newProText.length > 1) {
			AddProListItem(newProText);
			$('.proItem').val('');
		}
	});

	$(".addCon").click(function(){
		var newConText = $('.conItem').val();
		if (newConText.length > 1) {
			AddConListItem(newConText);
			$('.conItem').val('');
		};
	});

	$(document).on('keypress', '.questionInput', function (event){
		if (event.which == 13) {
			var newQuestionText = $(".questionInput").val();
			if (newQuestionText.length > 1) {
				StartNewQuestion(newQuestionText);
			}
		}
	});

	$(document).on('click', '.proDelete', function(){
		var proToDelete = $(this).parents('.proListItem').first();
		DeleteProListItemHTML(proToDelete);
	});

	$(document).on('click', '.conDelete', function(){
		var conToDelete = $(this).parents('.conListItem').first();
		DeleteConListItemHTML(conToDelete);
	});

	$(document).on('click', '.startOver', function(){
		RemoveOldQuestion();
		var questionReset = '<h1 class="questionText">type your question here:</h1><input type="text" class="questionInput"></input>';
		ResetQuestion(questionReset);
		$(".proList").empty();
		$(".conList").empty();
	});

});

function AddProListItem(newProText){
	var proListItemHTML = '<li class="proListItem">'+newProText+' <button class="btn btn-danger btn-xs proDelete"><i class="fa fa-trash-o"></i></button></li>';
	$('.proList').append(proListItemHTML);
}

function AddConListItem(newConText){
	var conListItemHTML = '<li class="conListItem">'+newConText+' <button class="btn btn-danger btn-xs conDelete"><i class="fa fa-trash-o"></i></button></li>';
	$('.conList').append(conListItemHTML);
}

function DeleteProListItemHTML(proToDelete){
	proToDelete.remove();
}

function DeleteConListItemHTML(conToDelete){
	conToDelete.remove();
}

function StartNewQuestion(newQuestionText){
	var newQuestionHTML = '<h1 class="questionHere">'+newQuestionText+'</h1> <button class="btn btn-xl startOver">start over <i class="fa fa-refresh"></i></button>';
	$('.questionText').remove();
	$('.questionInput').remove();
	$('.jumbotron').append(newQuestionHTML);
}

function RemoveOldQuestion(){
	$('.questionHere').remove();
	$('.startOver').remove();
}

function ResetQuestion(questionReset){
	$('.jumbotron').append(questionReset);
}



