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





function consultaEndereco(event) {
  event.preventDefault();

  let cep = document.querySelector('#f-cep').value;
  if (cep.length !== 8) {
    alert('CEP Inválido');
    return;
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      const rua = data.logradouro;
      const bairro = data.bairro;
      const cidade = data.localidade;
      const uf = data.uf;
      document.getElementById('f-endereco').value = rua;
      document.getElementById('f-bairro').value = bairro;
      document.getElementById('f-cidade').value = cidade;
      document.getElementById('f-uf').value = uf;
    });
}

document.getElementById('myForm').addEventListener('submit', consultaEndereco);

const botaoOcultar = document.getElementById('cadastro');
const formulario = document.getElementById('cont');

botaoOcultar.addEventListener('click', function() {
  formulario.style.display = 'none';

  // Obter o logradouro novamente e exibi-lo
  let cep = document.querySelector('#f-cep').value;
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const rua = data.logradouro;
      const bairro = data.bairro;
      const cidade = data.localidade;
      const uf = data.uf;

      // Atribuir valor ao elemento HTML
      const nome = document.getElementById('f-name').value;
      document.getElementById('informacao').innerHTML = "Nome: " + nome + "<br/>Endereço: "+
      										"<br/>" + rua + ";" + "<br/>" + "Bairro: "+ bairro + ";"  
      										+ "<br/>" + cidade + "-" + uf + ".";

    });
});








var uploadInput = document.getElementById("uploadInput");
        var previewImage = document.getElementById("previewImage");

        uploadInput.addEventListener("change", function() {
            var file = uploadInput.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    previewImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });


