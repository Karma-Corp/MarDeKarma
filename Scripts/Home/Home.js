$(function () {
    CarregarPosts();
});

function CarregarPosts() {
	$.ajax({
		type: "POST",
		url: "/Home/CarregarPosts",
		success: function (response) {
			var esquerdaContainer = $('#conteudo-esquerda-container');

			for (var i in response) {
				esquerdaContainer.append(
					'<div class="esquerda-item-container">' +
						'<div class="fw dp02">' +
							'<div id="post-id-' + response[i].Id + '" class="post-home-container high-white fw fh">' +
								'<a href="/Post/Visualizar/' + response[i].Id +'" class="link-reset">' +
									'<div class="post-titulo kumbh-sans">' +
									response[i].Titulo +
									'</div>'+
									'<div class="post-conteudo open-sans">' +
									response[i].Conteudo +
									'</div>' +
								'</a>' +
							'</div>' +
						'</div>' +
					'</div>');
			}

			AtualizarLayout();
		},
		error: function (req, status, error) {
			console.log(req.responseText);
		}
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