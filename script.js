const campos = document.querySelectorAll('.input');

const spans = document.querySelectorAll('.spans');

function setError(index){
	campos[index].style.border = '2px solid #e63636';
	spans[index].style.display = 'block';
}

function removeError(index){
	campos[index].style.border = '';
	spans[index].style.display = 'none';
}

function nameValidate(){
	if(campos[0].value.length < 3){
		setError(0);
	}
	else{
		removeError(0);
	}
}




function consultaEndereco(){
	let cep = document.querySelector('#f-cep').value;
	if(cep.length !== 8){
		alert('CEP Inválido');
		return;
	}
	
	
		let url = `https://viacep.com.br/ws/${cep}/json/`;

		fetch(url).then(function(response){
			response.json().then(function(data){
				console.log(data);
				mostrarEndereco(data);

			})
		});
	}

function mostrarEndereco(dados){
	let resultado = document.querySelector('#resultado');

	resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>	
							<p>Complemento: ${dados.complemento}</p> 
							<p>Bairro: ${dados.bairro}</p> 
							<p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
}