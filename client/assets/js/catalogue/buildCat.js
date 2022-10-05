
// CSS properties to build each cat depending on the DNA


var colors = Object.values(allColors())

function headColor(code, id) {
    var color = colors[code]
    $('#head' + id + ', #chest' + id).css('background', '#' + color)
}

function pawColor(code, id) {
    var color = colors[code]
    $('#ear' + id + ', #paw_front_left' + id + ', #paw_front_right' + id + ', #paw_back_left' + id + ', #paw_back_right' + id + ', #tail' + id + ', #ear' + id).css('background', '#' + color)

}

function markingColor(code, id) {
    var color = colors[code]
    $('#forehead_markings_middle' + id + ', #forehead_markings_left' + id + ', #forehead_markings_right' + id + ', #paw_stripe' + id + ', #bottom_stripe' + id + ', #tail_marking' + id + ', #inner_ear' + id + ', #inner_ear_R' + id).css('background', '#' + color)
}

function snoutColor(code, id) {
    var color = colors[code]
    $('#snout' + id + ', #stomach' + id).css('background', '#' + color)
}

function eyeColor(code, id) {
    var color = colors[code]
    $('#irus' + id + ', #irus_R' + id).css('background', '#' + color)
}


//Individual colors
function snoutOnlyColor(code, id) {
    var color = colors[code]
    $('#snout' + id).css('background', '#' + color)
}

function stomachOnlyColor(code, id) {
    var color = colors[code]
    $('#stomach' + id).css('background', '#' + color)
}

function innerEarOnlyColor(code, id) {
    var color = colors[code]
    $('#inner_ear' + id + ', #inner_ear_R' + id).css('background', '#' + color)
}

function markingsOnlyColor(code, id) {
    var color = colors[code]
    $('#forehead_markings_middle' + id + ', #forehead_markings_left' + id + ', #forehead_markings_right' + id + ', #paw_stripe' + id + ', #bottom_stripe' + id + ', #tail_marking' + id).css('background', '#' + color)
}



// Variation functions for range-bars

//3 eye types
function eyeVariation(num, id) {

    switch (num) {
        case "1":
            normalEyes(id)
            $('#eyename' + id).html('None')
            break
        case "2":
            normalEyes(id)
            $('#eyename' + id).html('Day')
            return eyesType1(id)
            break
        case "3":
            normalEyes(id)
            $('#eyename' + id).html('Night')
            return eyesType2(id)
            break
    }
}


//3 decorations types
function decorationVariation(num, id) {
    
    switch (num) {
        case "1":
            $('#markingsName' + id).html('Tabby')
            normaldecoration(id)
            break
        case "2":
            $('#markingsName' + id).html('None')
            nodecoration(id)
            break
        case "3":
            $('#markingsName' + id).html('Tabby')
            normaldecoration(id)
            break
    }
}

//4 Snout types
function snoutVariation(num, id) {

    switch (num) {
        case "1":
            $('#snoutName' + id).html('Normal')
            normalSnout(id)
            break
        case "2":
            $('#snoutName' + id).html('Burmese')
            burmeseSnout(id)
            break
        case "3": 
            $('#snoutName' + id).html('Tuxedo')
            tuxedoSnout(id)
            break
        case "4": 
            $('#snoutName' + id).html('British Shorthair')
            unicolorSnout(id)
            break
    }
}

//4 Animations 
function animationVariation(num, id) {

    switch (num) {
        case "1":
            $('#animationName' + id).html('None')
            noAnimation(id)
            break
        case "2":
            $('#animationName' + id).html('Ear')
            earAnimation(id)
            break
        case "3":
            $('#animationName' + id).html('Whiskers')
            whiskersAnimation(id)
            break
        case "4":
            $('#animationName' + id).html('Tail')
            tailAnimation(id)
            break
    }
}

// **   Eyes **  //

function normalEyes(id) {
    $('#irus' + id).find('span').css('background', 'transparent')
    $('#irus_R' + id).find('span').css('background', 'transparent')
}

function eyesType1(id) {
    $('#irus' + id).find('span').css({'background': '#18331d', 'width': '7px', 'left': '13px'})
    $('#irus_R' + id).find('span').css({'background': '#18331d', 'width': '7px', 'left': '13px'})
}

function eyesType2(id) {
    $('#irus' + id).find('span').css({'background': '#18331d', 'width': '15px', 'left': '9px'})
    $('#irus_R' + id).find('span').css({'background': '#18331d', 'width': '15px', 'left': '9px'})
}


// **   Decoration **  //
function normaldecoration(id) {
    $('#forehead_markings_middle' + id).css('display', 'block')
    $('#forehead_markings_left' + id).css('display', 'block')
    $('#forehead_markings_right' + id).css('display', 'block')
    $('#paw_front_right' + id).find('span2').css('display', 'block')
    $('#paw_front_left' + id).find('span2').css('display', 'block')

}

function nodecoration(id) {
    $('#forehead_markings_middle' + id).css('display', 'none')
    $('#forehead_markings_left' + id).css('display', 'none')
    $('#forehead_markings_right' + id).css('display', 'none')
    $('#paw_front_right' + id).find('span2').css('display', 'none')
    $('#paw_front_left' + id).find('span2').css('display', 'none')
    $('#tail' + id).find('span').css('display', 'none')

}

//Snout Variations
function normalSnout(id) {
    $('#snout' + id).css({
        'background': '#fff3e0',
        'width': '132px', 
        'height': '64px', 
        'margin-top': '61px',
        'margin-left': '40px',
        'border-radius': '55% 55% 60% 60%',
    })
}

function unicolorSnout(id) {
    $('#snout' + id).css({
        'background': '#fff3e0',
        'width': '51px', 
        'height': '44px', 
        'margin-top': '63px',
        'margin-left': '81px',
        'border-radius': '55% 55% 60% 60%',
})
}

function burmeseSnout(id) {
    $('#snout' + id).css({'width': '171px', 'height': '132px', 'margin-top': '-9px','margin-left': '21px'})
}

function tuxedoSnout(id) {
    $('#tuxedo_snout_catalog' + id).css('display', 'block')
    $('#snout' + id).css('display', 'none')
    // $('#snout' + id).css({
    //     'background': 'transparent',
    //     'width': '0', 
    //     'height': '0', 
    //     'margin-top': '10px',
    //     'margin-left': '7px',
    //     'border-bottom': '120px solid #fff3e0', 
    //     'border-left': '100px solid transparent', 
    //     'border-right': '100px solid transparent',
    //     'border-radius': '50% 50% 50% 50%',
    // })
}
/** Animations **/

function resetAnimation(id) {
    $("#left_ear" + id).removeClass('movingEar_left')
    $("#tail" + id).removeClass('movingTail')
    $("#whisker_mid_left" + id).removeClass('movingWhiskers_mid_left')
    $("#whisker_top_left" + id).removeClass('movingWhiskers_top_left')
    $("#whisker_bottom_left" + id).removeClass('movingWhiskers_bottom_left')
    $("#whisker_mid_right" + id).removeClass('movingWhiskers_mid_right')
    $("#whisker_top_right" + id).removeClass('movingWhiskers_top_right')
    $("#whisker_bottom_right" + id).removeClass('movingWhiskers_bottom_right')
}

/*async function resetAnimation(id) {
    document.getElementById("head" + id).classList.remove("movingHead")
    document.getElementById("leftEar" + id).classList.remove("movingEarsLeft", "moving-Single-EarLeft", "attentionLeft")
    document.getElementById("rightEar" + id).classList.remove("movingEarsRight", "moving-Single-EarRight", "attentionRight")
    document.getElementById("tail" + id).classList.remove("movingTail")

}*/

function noAnimation(id) {    
    resetAnimation(id)
}

function earAnimation(id) {  
    $('#ear' + id).addClass('movingEar_left')

}

//moving both ears
function whiskersAnimation(id) { 
    $("#whisker_mid_left" + id).addClass('movingWhiskers_mid_left')
    $("#whisker_top_left" + id).addClass('movingWhiskers_top_left')
    $("#whisker_bottom_left" + id).addClass('movingWhiskers_bottom_left')
    $("#whisker_mid_right" + id).addClass('movingWhiskers_mid_right')
    $("#whisker_top_right" + id).addClass('movingWhiskers_top_right')
    $("#whisker_bottom_right" + id).addClass('movingWhiskers_bottom_right')

}

function tailAnimation(id) {
    $("#tail" + id).addClass("movingTail")
}


// Attentive Cat Ears animation

/*function attentiveCat(id) {    
    $('#leftEar' + id).addClass('attentionLeft')
    $('#rightEar' + id).addClass('attentionRight')

}*/


// Eyes of the car followign the cursor
/*const closer = 4;
const further = -4;

document.addEventListener('mousemove', (e) => {
    let positionX = e.pageX;
    let positionY = e.pageY;

    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let moveX = (positionX - width) / (width) * closer;
    let moveY = (positionY - height) / (height) * closer;

    $('.pupil-left').css('transform', 'translate(' + moveX + 'px,' + moveY + 'px)')
    $('.pupil-right').css('transform', 'translate(' + moveX + 'px,' + moveY + 'px)')

}, false);*/
