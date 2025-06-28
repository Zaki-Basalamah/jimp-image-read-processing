const { Jimp } = require("jimp");

Jimp.read('imagens/image1.jpg').then(function(imagem)
	{console.log(imagem);
	})