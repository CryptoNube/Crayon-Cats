
var colors = Object.values(allColors())

var defaultDNA = {
    //Color Combos
    "headcolor" : 10,
    "pawcolor" : 10,
    "markingcolor" : 20,
    "snoutcolor" : 30,
    "eyecolor" : 41,
    //Cattributes
    "eyesShape" : 2,
    "decorationOnOff" : 1,
    "snoutStyle": 1,
    "snoutOnlycolor" : 30,
    "stomachOnlycolor" : 30,
    "innerEarOnlycolor" : 20,
    "markingsOnlycolor" : 20,
    "animation" :  2,
//    "lastNum" :  1
    }

var burmeseDNA = {
    //Color Combos
    "headcolor" : 25,
    "pawcolor" : 15,
    "markingcolor" : 10,
    "snoutcolor" : 15,
    "eyecolor" : 29,
    //Cattributes
    "eyesShape" : 2,
    "decorationOnOff" : 2,
    "snoutStyle": 2,
    "snoutOnlycolor" : 15,
    "stomachOnlycolor" : 10,
    "innerEarOnlycolor" : 10,
    "markingsOnlycolor" : 20,
    "animation" :  3,
}

var tuxedoDNA = {
    //Color Combos
    "headcolor" : 60,
    "pawcolor" : 60,
    "markingcolor" : 15,
    "snoutcolor" : 30,
    "eyecolor" : 70,
    //Cattributes
    "eyesShape" : 2,
    "decorationOnOff" : 2,
    "snoutStyle": 3,
    "snoutOnlycolor" : 15,
    "stomachOnlycolor" : 13,
    "innerEarOnlycolor" : 15,
    "markingsOnlycolor" : 20,
    "animation" :  4,
}

var britishDNA = {
    //Color Combos
    "headcolor" : 19,
    "pawcolor" : 19,
    "markingcolor" : 18,
    "snoutcolor" : 18,
    "eyecolor" : 40,
    //Cattributes
    "eyesShape" : 3,
    "decorationOnOff" : 2,
    "snoutStyle": 4,
    "snoutOnlycolor" : 18,
    "stomachOnlycolor" : 18,
    "innerEarOnlycolor" : 18,
    "markingsOnlycolor" : 20,
    "animation" :  2,
}

// when page load
$( document ).ready(function() {
    //Color Combos
    $('#dnabody').html(defaultDNA.headcolor);
    $('#dnapaw').html(defaultDNA.pawcolor);
    $('#dnamarking').html(defaultDNA.markingcolor);
    $('#dnasnout').html(defaultDNA.snoutcolor);
    $('#dnaeye').html(defaultDNA.eyecolor);
    //Cattributes
    $('#dnashape').html(defaultDNA.eyesShape)
    $('#dnadecoration').html(defaultDNA.decorationPattern)
    $('#dnasnouttype').html(defaultDNA.snoutStyle)
    $('#dnaanimation').html(defaultDNA.animation)
    //Seperate Colors
    $('#dnasnoutOnly').html(defaultDNA.snoutOnlycolor)
    $('#dnastomachOnly').html(defaultDNA.stomachOnlycolor)
    $('#dnainnerEarOnly').html(defaultDNA.innerEarOnlycolor)
    $('#dnamarkingsOnly').html(defaultDNA.markingsOnlycolor)

    //$('#dnaspecial').html(defaultDNA.lastNum)

    renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    //Color Combos
    dna += $('#dnabody').html()
    dna += $('#dnapaw').html()
    dna += $('#dnamarking').html()
    dna += $('#dnasnout').html()
    dna += $('#dnaeye').html()
    //Cattributes
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnasnouttype').html()
    dna += $('#dnaanimation').html()
    //Seperate Colors
    dna += $('#dnasnoutOnly').html()
    dna += $('#dnastomachOnly').html()
    dna += $('#dnainnerEarOnly').html()
    dna += $('#dnamarkingsOnly').html()

    //dna += $('#dnaspecial').html()

    return dna
}

function renderCat(dna){

    //Color Combos
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)

    pawColor(colors[dna.pawcolor],dna.pawcolor)
    $('#pawcolor').val(dna.pawcolor)

    markingColor(colors[dna.markingcolor],dna.markingcolor)
    $('#markingcolor').val(dna.markingcolor)
    
    snoutColor(colors[dna.snoutcolor],dna.snoutcolor)
    $('#snoutcolor').val(dna.snoutcolor)


    eyeColor(colors[dna.eyecolor],dna.eyecolor)
    $('#eyecolor').val(dna.eyecolor)

    //Cattributes
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)

    decorationVariation(dna.decorationOnOff)
    $('#markingsOnOff').val(dna.decorationOnOff)

    snoutVariation(dna.snoutStyle)
    $('#snoutType').val(dna.snoutStyle)
    

 
    //Animation
    animationVariation(dna.animation)
    $('#animationType').val(dna.animation)


    //Individual colors
    /snoutOnlyColor(colors[dna.snoutOnlycolor],dna.snoutOnlycolor)
    $('#snoutOnlycolor').val(dna.snoutOnlycolor)

    stomachOnlyColor(colors[dna.stomachOnlycolor],dna.stomachOnlycolor)
    $('#stomachOnlycolor').val(dna.stomachOnlycolor)

    innerEarOnlyColor(colors[dna.innerEarOnlycolor],dna.innerEarOnlycolor)
    $('#innerEarOnlycolor').val(dna.innerEarOnlycolor)

    markingsOnlyColor(colors[dna.markingsOnlycolor],dna.markingsOnlycolor)
    $('#markingsOnlycolor').val(dna.markingsOnlycolor)

    //hide attributes initial render
    $('#attributes-group').hide();
}



// Changing cat colors
$('#bodycolor').change(()=>{
  var colorVal = $('#bodycolor').val()
  headColor(colors[colorVal],colorVal)
})
$('#pawcolor').change(()=>{
  var colorVal = $('#pawcolor').val()
  pawColor(colors[colorVal],colorVal)
})
$('#markingcolor').change(()=>{
  var colorVal = $('#markingcolor').val()
  markingColor(colors[colorVal],colorVal)
})
$('#snoutcolor').change(()=>{
  var colorVal = $('#snoutcolor').val()
  snoutColor(colors[colorVal],colorVal)
})
$('#eyecolor').change(()=>{
  var colorVal = $('#eyecolor').val()
  eyeColor(colors[colorVal],colorVal)
})

//style changes
$('#eyeshape').change(()=>{
  var shape = parseInt($('#eyeshape').val()) //value from slider (1 to 7)
  eyeVariation(shape)
})

$('#markingsOnOff').change(()=>{
  var shape = parseInt($('#markingsOnOff').val()) //value from slider (1 to 7)
  decorationVariation(shape)
})

$('#snoutType').change(()=>{
  var shape = parseInt($('#snoutType').val()) //value from slider (1 to 7)
  snoutVariation(shape)
})

//animations
$('#animationType').change(()=>{
  var animationVal = parseInt($('#animationType').val()) //value from slider (1 to 7)
  animationVariation(animationVal)
})



//individual color changes
$('#snoutOnlycolor').change(()=>{
  var colorVal = $('#snoutOnlycolor').val()
  snoutOnlyColor(colors[colorVal],colorVal)
})

$('#stomachOnlycolor').change(()=>{
  var colorVal = $('#stomachOnlycolor').val()
  stomachOnlyColor(colors[colorVal],colorVal)
})

$('#innerEarOnlycolor').change(()=>{
  var colorVal = $('#innerEarOnlycolor').val()
  innerEarOnlyColor(colors[colorVal],colorVal)
})

$('#markingsOnlycolor').change(()=>{
  var colorVal = $('#markingsOnlycolor').val()
  markingsOnlyColor(colors[colorVal],colorVal)
})

//Show/hide tab groups

$(".btn.colors").ready(()=>{
  $(".tab.colors").css('display', 'block');
  $(".tab.colors2").css('display', 'none');
})
$(".btn.colors").click(()=>{
  $(".tab.colors").css('display', 'block');
  $(".tab.colors2").css('display', 'none');
})
$(".btn.colors2").click(()=>{
  $(".tab.colors").css('display', 'none');
  $(".tab.colors2").css('display', 'block');
})

//functional Buttons
$(".btn.tabby").click(() => {
  renderCat(defaultDNA)
})

$(".btn.burmese").click(() => {
  renderCat(burmeseDNA)
  $('.cat').find('span2').css('background', 'transparent')
})

$(".btn.tuxedo").click(() => {
  renderCat(tuxedoDNA)
  $('.cat').find('span2').css('background', 'transparent')
  $('.cat').find('span3').css('background', 'transparent')
})

$(".btn.british").click(() => {
  renderCat(britishDNA)
  $('.cat').find('span2').css('background', 'transparent')
})

$(".btn.random").click(() => {
  var randomDNA = {
    //Color Combos
    "headcolor" : Math.floor(Math.random() * 89) + 10,
    "pawcolor" : Math.floor(Math.random() * 89) + 10,
    "markingcolor" : Math.floor(Math.random() * 89) + 10,
    "snoutcolor" : Math.floor(Math.random() * 89) + 10,
    "eyecolor" : Math.floor(Math.random() * 89) + 10,
    //Cattributes
    "eyesShape" : Math.floor(Math.random() * 3) + 1,
    "snoutStyle": Math.floor(Math.random() * 4) + 1,
    "decorationOnOff" : Math.floor(Math.random() * 3) + 1,
    //Seperate Colors
    "snoutOnlycolor" : Math.floor(Math.random() * 89) + 10,
    "stomachOnlycolor" : Math.floor(Math.random() * 89) + 10,
    "innerEarOnlycolor" : Math.floor(Math.random() * 89) + 10,
    "markingsOnlycolor" : Math.floor(Math.random() * 89) + 10,


    "animation" : Math.floor(Math.random() * 4) + 1,
  //    "lastNum" :  1
    }
    renderCat(randomDNA)
})


