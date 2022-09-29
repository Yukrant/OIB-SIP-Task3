var celsius = document.getElementById('celsius');
var fahrenheit = document.getElementById('fahrenheit');

celsius.addEventListener('input', function(){
    let c = this.value;
    let f = (c * 1.8) + 32;
    fahrenheit.value = f;
})

fahrenheit.addEventListener('input', function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    celsius.value = c;
})

