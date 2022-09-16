
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.head, .chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html(code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function pawColor(color,code) {
    $('.paw_front_left, .paw_front_right, .paw_back_right, .paw_back_left, .tail, .ear').css('background', '#' + color)  //This changes the color of the cat
    $('#pawcode').html(code) //This updates text of the badge next to the slider
    $('#dnapaw').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function markingColor(color,code) {
    $('.forehead_markings_middle, .forehead_markings_left, .forehead_markings_right, .paw_stripe, .bottom_stripe, .tail_marking, .inner_ear').css('background', '#' + color)  //This changes the color of the cat
    $('#markingcode').html(code) //This updates text of the badge next to the slider
    $('#dnamarking').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function snoutColor(color,code) {
    $('.snout, .stomach').css('background', '#' + color)  //This changes the color of the cat
    $('#snoutcode').html(code) //This updates text of the badge next to the slider
    $('#dnasnout').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function eyeColor(color,code) {
    $('.irus').css('background', '#' + color)  //This changes the color of the cat
    $('#eyecode').html(code) //This updates text of the badge next to the slider
    $('#dnaeye').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//Cattributes
function snoutOnlyColor(color,code) {
    $('.snout').css('background', '#' + color)  //This changes the color of the cat
    $('#snoutOnlycode').html(code) //This updates text of the badge next to the slider
    $('#dnasnoutOnly').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function stomachOnlyColor(color,code) {
    $('.stomach').css('background', '#' + color)  //This changes the color of the cat
    $('#stomachOnlycode').html(code) //This updates text of the badge next to the slider
    $('#dnastomachOnly').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function innerEarOnlyColor(color,code) {
    $('.inner_ear').css('background', '#' + color)  //This changes the color of the cat
    $('#innerEarOnlycode').html(code) //This updates text of the badge next to the slider
    $('#dnainnerEarOnly').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function markingsOnlyColor(color,code) {
    $('.forehead_markings_middle, .forehead_markings_left, .forehead_markings_right, .paw_stripe, .bottom_stripe, .tail_marking').css('background', '#' + color)  //This changes the color of the cat
    $('#markingsOnlycode').html(code) //This updates text of the badge next to the slider
    $('#dnamarkingsOnly').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyename').html('None')
            break
        case 2: 
            normalEyes() // reset
            $('#eyename').html('Day') // set badge to "Chill"
            eyesType1() //Set border to change the shape of the eye
            break
        case 3: 
            normalEyes() // reset
            $('#eyename').html('Night') // set badge to "Chill"
            eyesType2() //Set border to change the shape of the eye
            break
    }
}

function decorationVariation(num) {

    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            normaldecoration()
            $('#markingsName').html('Tabby')
            break
        case 2: 
            normaldecoration() // reset
            $('#markingsName').html('None')
            nodecoration()
            break
        case 3: 
            normaldecoration() // reset
            $('#markingsName').html('Tabby')
            normaldecoration()
            break            
    }
}

function snoutVariation(num) {

    $('#dnasnouttype').html(num)
    switch (num) {
        case 1:
            normalSnout()
            $('#snoutName').html('Normal')
            break
        case 2: 
            normalSnout() // reset
            $('#snoutName').html('Burmese') // set badge to "Chill"
            burmeseSnout() //Set border to change the shape of the eye
            break
        case 3: 
            normalSnout() // reset
            $('#snoutName').html('Tuxedo') // set badge to "Chill"
            tuxedoSnout() //Set border to change the shape of the eye
            break
        case 4: 
            normalSnout() // reset
            $('#snoutName').html('British Shorthair') // set badge to "Chill"
            unicolorSnout() //Set border to change the shape of the eye
            break
    }
}

function animationVariation(num) {

    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            $('#animationName').html('None')
            noAnimation()
            break
        case 2: 
            earAnimation()
            $('#animationName').html('Ear') // set badge
            break
        case 3: 
            $('#animationName').html('Whiskers') // set badge to "Chill"
            whiskersAnimation() //Set border to change the shape of the eye
            break
        case 4: 
            $('#animationName').html('Tail') // set badge to "Chill"
            tailAnimation() //Set border to change the shape of the eye
            break
    }
}

function normalEyes() {
     $('.eyes').find('span').css('background', 'transparent')
}
function eyesType1() {
     $('.eyes').find('span').css({'background': '#18331d', 'width': '7px', 'left': '13px'})
}
function eyesType2() {
    $('.eyes').find('span').css({'background': '#18331d', 'width': '15px', 'left': '9px'})
}

function normaldecoration() {
    $('.cat').find('span2').css('background', '#d7c3a3')
}
function nodecoration() {
    $('.cat').find('span2').css('background', 'transparent')
}

function normalSnout() {
    $('.cat').find('span3').css({
        'background': '#fff3e0',
        'width': '132px', 
        'height': '64px', 
        'margin-top': '61px',
        'margin-left': '40px',
        'border-bottom': '0px solid transparent', 
        'border-left': '0px solid transparent', 
        'border-right': '0px solid transparent',
        'border-radius': '55% 55% 60% 60%',
})
}
function unicolorSnout() {
    $('.cat').find('span3').css({
        'background': '#fff3e0',
        'width': '51px', 
        'height': '44px', 
        'margin-top': '63px',
        'margin-left': '81px',
        'border-bottom': '0px solid transparent', 
        'border-left': '0px solid transparent', 
        'border-right': '0px solid transparent',
        'border-radius': '55% 55% 60% 60%',
})
}
function burmeseSnout() {
    $('.cat').find('span3').css({'width': '171px', 'height': '132px', 'margin-top': '-9px','margin-left': '21px'})
}
function tuxedoSnout() {
    $('.cat').find('span3').css({
        'background': 'transparent',
        'width': '0', 
        'height': '0', 
        'margin-top': '10px',
        'margin-left': '7px',
        'border-bottom': '120px solid #fff3e0', 
        'border-left': '100px solid transparent', 
        'border-right': '100px solid transparent',
        'border-radius': '50% 50% 50% 50%',
    })
}

function noAnimation() {
    resetAnimation()
}

function earAnimation() {
    resetAnimation()
    $('#left_ear').addClass("movingEar_left")
}

function whiskersAnimation() {
    resetAnimation()
    $("#whisker_mid_left").addClass('movingWhiskers_mid_left')
    $("#whisker_top_left").addClass('movingWhiskers_top_left')
    $("#whisker_bottom_left").addClass('movingWhiskers_bottom_left')
    $("#whisker_mid_right").addClass('movingWhiskers_mid_right')
    $("#whisker_top_right").addClass('movingWhiskers_top_right')
    $("#whisker_bottom_right").addClass('movingWhiskers_bottom_right')
}

function tailAnimation() {
    resetAnimation()
    $("#tail").addClass("movingTail")
}

function resetAnimation() {
    $("#left_ear").removeClass('movingEar_left')
    $("#tail").removeClass('movingTail')
    $("#whisker_mid_left").removeClass('movingWhiskers_mid_left')
    $("#whisker_top_left").removeClass('movingWhiskers_top_left')
    $("#whisker_bottom_left").removeClass('movingWhiskers_bottom_left')
    $("#whisker_mid_right").removeClass('movingWhiskers_mid_right')
    $("#whisker_top_right").removeClass('movingWhiskers_top_right')
    $("#whisker_bottom_right").removeClass('movingWhiskers_bottom_right')
}

/*async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}*/
