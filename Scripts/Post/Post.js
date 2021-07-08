CarregarPost();

function CarregarPost() {
	let urlParams = new URLSearchParams(window.location.search);
	let postId = urlParams.get('p');
	
	if(postId == null || postId == "")
		window.location.href = "/";
	
	$.get("Posts/PostList", function(data) {
		var postList = JSON.parse(data);
		
		var post = postList.find(elem => elem.Id == postId);
		
		$.get(post.Url, function(data2) {
			$('#post-titulo').html(post.Titulo);
			$('#post-conteudo').html(data2);
			
			AtualizarLayout();
		}).fail(function() {
			window.location.href = "/";
		});
	}).fail(function() {
		window.location.href = "/";
	});
}

function AtualizarLayout() {
	$('.conteudo-container')[0].style.height = ($('.conteudo-container')[0].scrollHeight) + 'px'; //10 é o valor de margin-bottom dos posts
}