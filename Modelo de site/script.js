/* Pega um elemento do documento pelo Id*/
const searchInput = document.getElementById('search-input');

/* Cria um escutador de evento, que vai escutar a input
	`Para isso colocamos 'input' e uma função como parametrôs`
 */
document.addEventListener('input', function() {
	/* Cria uma constante para receber o valor da input e põe
	todas as letras em mínusculo*/
	const searchTerm = searchInput.value.toLowerCase();
	console.log(searchTerm);
})