/**  Retorna valor entre os limites minimos e máximo */
function clamp(valor, minimo, maximo) {
	if (valor < minimo) {
		// retona minimo caso valor seja menor que minimo
		return minimo;
	} else if (valor > maximo) {
		// retona máximo caso valor seja maior qur máximo
		return maximo;
	} else {
		// retonar o próprio valor
		return valor;
	}
}

function validar() {
	var q = parseInt(quantidade.value);
	// isNaN é uma função que retona se um número não é válido
	if (q < 6 || q > 15 || isNaN(q)) {
		resultado.innerHTML = "<span style='color: red;'>Digite um número entre 6 e 15</span>"
	} else {
		console.log(q);
		var v = new Array(q);

		// contador que rece
		for (var i = 0; i < q; i++) {
			v[i] = clamp(Math.random() * 61, 1, 60) | 0; // |(or) é um operador binário que quando usado com um 0 retorna o outro número como um inteiro
		}

		// começando o r vazio
		var r = "";

		for (i = 0; i < q; i++) {
			if (r !== "") {
				r += " ";
			}

			if (v[i] < 10) {
				r += "0";
			}

			r += v[i].toString();
		}

		resultado.innerText = r;
	}
}


/*
	Mega Sena:
	. Entre com a quantidade de números a serrem sorteados, que deve ser de 6 a 15.
	. Os números sorteados devem estar no intervalo de 1 a 60.
	. Os números sorteados devem ser armazenados no vetor.
	. Ao termino do sorteio mostre todos os números.
*/