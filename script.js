console.log('checking js');

var decodeURL = document.getElementById("decode");
decodeURL.addEventListener("keyup", a);

var encodeURL = document.getElementById("encode");
encodeURL.addEventListener("keyup", b);

function a() {
	console.log(decodeURL.value);
	encodeURL.value = encodeURIComponent(decodeURL.value).replace(/'/g,"%27").replace(/"/g,"%22");
}

function b() {
	console.log(encodeURL.value);
	decodeURL.value = decodeURIComponent(encodeURL.value.replace(/\+/g,  " "));
}