window.editing=false;

function submit() {
	document.getElementById('sec').setAttribute('disabled', 'disabled');
	document.getElementById('form').setAttribute('onsubmit', 'return false;');
	document.getElementById('send').value='Submit';
	document.getElementById('form').submit();
}

function loaded() {
	window.sec=location.search.split('sec=');
	if (sec.length==1) {
		sec=5;
	}
	else {
		sec=sec[1];
	}
	render();
	window.interval=setInterval(count, 1000);
	
}

function count() {
	window.sec--;
	render();
}

function render() {
	if (!editing) document.getElementById('sec').value=sec;
	if (sec==0) {
		clearInterval(interval);
		document.getElementById('sec').setAttribute('disabled', 'disabled');
		document.getElementById('form').setAttribute('onsubmit', 'return false;');
		document.getElementById('send').value='Submit';
		document.getElementById('form').submit();
	}
	else {
		document.getElementById('send').value=sec+' sec';
	}
}

function change() {
	if ((parseInt(document.getElementById('sec').value)==document.getElementById('sec').value) && (document.getElementById('sec').value>0)) {
		sec=document.getElementById('sec').value;
		render();
	}
	else {
		alert('Is not positive integer');
		sec=5;
		document.getElementById('send').focus();
		render();
	}
}
