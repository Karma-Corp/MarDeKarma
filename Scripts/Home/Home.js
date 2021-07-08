CarregarPosts();

function CarregarPosts() {
	$.get("Posts/PostList", function(data) {
		var postList = JSON.parse(data);
		postList.reverse();
		
		var esquerdaContainer = $('#conteudo-esquerda-container');
		
		for (var i in postList) {
			$.get(postList[i].Url, function(data2) {
				var url = this.url;
				var post = postList.find(elem => elem.Url == url);
				
				esquerdaContainer.append(
				'<div class="esquerda-item-container">' +
					'<div class="fw dp02">' +
						'<div id="post-id-' + post.Id + '" class="post-home-container high-white fw fh">' +
							'<a href="/post?p=' + post.Id +'" class="link-reset">' +
								'<div class="post-titulo kumbh-sans">' +
								post.Titulo +
								'</div>'+
								'<div class="post-conteudo open-sans">' +
								data2 +
								'</div>' +
							'</a>' +
						'</div>' +
					'</div>' +
				'</div>');
				
			}).fail(function() {
				window.location.href = "/";
			});
		}
		
		AtualizarLayout();
	}).fail(function() {
		window.location.href = "/";
	});
}

function AtualizarLayout() {
	$('.conteudo-container')[0].style.height = ($('.conteudo-container')[0].scrollHeight - 10) + 'px'; //10 é o valor de margin-bottom dos posts
}

function AlterarStatusOlho(status) {
	switch (status) {
		case 0:
			SineWaveStatus = 0;
			$('#olho-img').removeClass('olho-shake-slow').removeClass('olho-shake-fast');
			$("#olho-img").attr("src", "/Content/images/olhos/olho-8.svg");
			break;
		case 1:
			SineWaveStatus = 1;
			$('#olho-img').removeClass('olho-shake-fast').addClass('olho-shake-slow');
			$("#olho-img").attr("src", "/Content/images/olhos/olho-6.svg");
			break;
		case 2:
			SineWaveStatus = 2;
			$('#olho-img').removeClass('olho-shake-slow').addClass('olho-shake-fast');
			$("#olho-img").attr("src", "/Content/images/olhos/olho-6.svg");
			break;

    }
}