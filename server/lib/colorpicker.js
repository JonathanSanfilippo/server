// ColorPicker

 let colorInput = document.querySelector('#colorpicker');
    let hexInput = document.querySelector('#color');
    colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color;
    
    var colorful = document.getElementById("colorful"); 
    colorful.style.color = color; 
});