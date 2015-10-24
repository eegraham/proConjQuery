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

});

function AddProListItem(newProText){
	var proListItemHTML = '<li>'+newProText+'</li>';
	$('.proList').append(proListItemHTML);
}

function AddConListItem(newConText){
	var conListItemHTML = '<li>'+newConText+'</li>';
	$('.conList').append(conListItemHTML);
}