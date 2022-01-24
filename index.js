
notas = [
	{
		nome1: 'SOL MAIOR',
		nome2: 'MI MENOR',
		qtd_sus: 1,
	},
	{
		nome1: 'RE MAIOR',
		nome2: 'SI MENOR',
		qtd_sus: 2,
	},
	{
		nome1: 'LA MAIOR',
		nome2: 'FA# MENOR',
		qtd_sus: 3,
	},
	{
		nome1: 'MI MAIOR',
		nome2: 'DO# MENOR',
		qtd_sus: 4,
	},
	{
		nome1: 'SI MAIOR',
		nome2: 'SOL# MENOR',
		qtd_sus: 5,
	},
	{
		nome1: 'FA# MAIOR',
		nome2: 'RE# MENOR',
		qtd_sus: 6,
	},
	{
		nome1: 'DO MAIOR',
		nome2: 'LA MENOR',
		qtd_sus: 7,
	}
]



let nota_anterior = 0
function randomNota() {
	nota = notas[Math.floor(Math.random() * notas.length - nota_anterior)];

	if (nota && nota.qtd_sus !== nota_anterior) {
		return nota.qtd_sus
	} else if (nota && nota.qtd_sus === nota_anterior) {
		if (nota.qtd_sus == 1) {
			return nota.qtd_sus + 1
		}
		if (nota.qtd_sus == 7) {
			return nota.qtd_sus - 1
		}
	}


}

function generatorNote() {
	get_note = randomNota();

	if (get_note === nota_anterior) {
		generatorNote()
	}

	sus = Array.from({ length: get_note }, (v, k) => "#");

	ans = {
		claves: sus,
		len: sus.length,
		ansCorrect: notas[sus.length - 1]
	}


	return ans;
}

function genarateAnswer() {

	suggestAns = Array.from({ length: 3 }, (v, k) => notas[randomNota() - 1].nome1)

	validateSuggest = suggestAns.map((v) => {

		return v
	})

	return suggestAns
}

function sleep(t) {
	return new Promise(s => setTimeout(s, t))
}

function validaAns(ans, listAns, correctAns1, correctAns2) {
	if (ans == correctAns1) {
		alert("Correct!")

	}else	if (ans == correctAns2) {
		alert("Correct!")
	} else	if (ans == 'C') {
		main();
	} 
	else {
		alert("Wrong!!")
	}
}

sair = false;
function main(){
	while (sair != true) {

	// console.log(`asd`)
	// let name = prompt("Enter your name: ");
	let { claves, len, ansCorrect } = generatorNote();

	let genaratedAnswer = genarateAnswer()

	alert("What is this sus " + claves);
	// alert("What is this qty " + len);
	// alert("Correct ans " + ansCorrect.nome1);
	// alert("Correct ans " + ansCorrect.nome2);

	alert(genaratedAnswer)
	resp = prompt("Nota: ")

	validaAns(resp, genaratedAnswer, ansCorrect.nome1, ansCorrect.nome2)

	sleep(1000)
}
}

main();