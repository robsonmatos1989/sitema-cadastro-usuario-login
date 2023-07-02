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
		// O addEventListener serve para adicionar ouvinte de evento ao evento do envio do formulário
		// event.preventDefault() impede o padrão de envio do formulário, podendo manipular os dados
		//retornados pela api
		document.getElementById('myForm').addEventListener('submit', function(event) {
    	event.preventDefault();

		fetch(url).then(function(response){
			response.json().then(function(data){
				console.log(data);
				/*mostrarEndereco(data);*/
				const rua = data.logradouro;
				const bairro = data.bairro;
				const cidade = data.localidade;
				const uf = data.uf;
				document.getElementById('f-endereco').value = rua;
				document.getElementById('f-bairro').value = bairro;
				document.getElementById('f-cidade').value = cidade;
				document.getElementById('f-uf').value = uf;

			})
		});
		});
	}













