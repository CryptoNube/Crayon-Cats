var slider = document.getElementById("slider")
var output = document.getElementById("value")

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove" , function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, #4a007b' + x + '%, #9802fb' + x +'%)';
    slider.style.background = color;
})