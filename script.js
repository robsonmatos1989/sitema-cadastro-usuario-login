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