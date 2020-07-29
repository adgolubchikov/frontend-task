$(window).on("load", getNumber);

function getNumber() {
	$.getJSON('https://www.random.org/integers/?num=1&min=1&max=60&col=1&base=10&format=plain&rnd=new', function(data){
		if (window.confirm('Liczbę '+data+' - OK?')) {
			setTimeout(getNumber, parseInt(data)*1000);
		}
	});

}
