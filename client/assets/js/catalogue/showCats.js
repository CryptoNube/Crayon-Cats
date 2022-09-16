
// File for fetching all the cats from smart contrat 
// into the catalogue

// when page load create the catalog
$(document).ready(function () {
    setTimeout(() => {
        getKitties()
    }, 1000)
});
console.log(getKitties())

//Append each Cat card as a catalog

function appendCat(dna, id) {
    //1 return DNA cat into readable string 
    var KittyDna = catDna(dna)
    //2 build the catBox into HTML
    catBox(id)
    //3 Render the cats CSS style depending on DNA string
    renderCat(KittyDna, id)
    $('#catDNA' + id).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>0</h4></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>`+ dna +`</h4></span>
    
    
    `)
}

//Apply cat CSS Styles from buidCat.js

function renderCat(dna, id) {
    //Colors
    headColor(dna.headcolor, id)
    snoutColor(dna.snoutcolor, id)
    eyeColor(dna.eyecolor, id)
    pawColor(dna.pawcolor, id)
    markingColor(dna.markingcolor, id)
    //Cattributes
    eyeVariation(dna.eyesShape, id)
    decorationVariation(dna.decorationOnOff, id)
    snoutVariation(dna.snoutStyle, id)
    animationVariation(dna.animation, id)
    //indiviudal Colors
    snoutOnlyColor(dna.snoutOnlyColor, id)
    innerEarOnlyColor(dna.innerEarOnlyColor, id)
    markingsOnlyColor(dna.marlingsOnlyColor, id)
    stomachOnlyColor(dna.stomachOnlyColor, id)

}

//Splitting the cat DNA to use it in render

function catDna(dnaStr) {


    var dna = {
        //Colors
        "headcolor": dnaStr.substring(0, 2),
        "pawcolor": dnaStr.substring(2, 4),
        "markingcolor": dnaStr.substring(4, 6),
        "snoutcolor": dnaStr.substring(6, 8),
        "eyecolor": dnaStr.substring(8, 10),

        //Cattributes
        "eyesShape": dnaStr.substring(10, 12),
        "decorationOnOff": dnaStr.substring(12, 14),
        "snoutStyle": dnaStr.substring(14, 16),

        //Individual Colors
        "snoutOnlyColor": dnaStr.substring(16, 18),
        "stomachOnlyColor": dnaStr.substring(18, 20),
        "innerEarOnlyColor": dnaStr.substring(20, 22 ),
        "markingsOnlyColor": dnaStr.substring(22, 24),

        "animation": dnaStr.substring(24, 26),
        "lastNum": dnaStr.substring(26, 28)
    }

    return dna
}

//Cat HTML Div

function catBox(id) {

    var catDiv = `<div class="col-lg-4 pointer fit-content">
                    <div class="featureBox catDiv">
                            <div class="cat">
                            <div class="ears">
                                <div id="left_ear`+ id + `" class="ear left_ear">
                                    <div class="inner_ear left_inner_ear"></div>
                                </div>
                                <div id="right_ear`+ id + `" class="ear right_ear">
                                    <div class="inner_ear right_inner_ear"></div>
                                </div>
                            </div>
                                <div id="head`+ id + `" class="head">
                                    <div class="eyes">
                                        <div class="eye left_eye">
                                            <div id="irus` + id + `" class="irus">
                                                <span class="pupils"></span>
                                            </div>
                                        
                                            <div class="reflection_1"></div>
                                            <div class="reflection_2"></div>
                                        </div>
                                        <div class="eye right_eye">
                                            <div id="irus` + id + `" class="irus">
                                                <span class="pupils"></span>
                                            </div>
                                
                                            <div class="reflection_1"></div>
                                            <div class="reflection_2"></div>
                                        </div>
                                    </div>

                                    <span3 id="snout` + id + `" class="snout"></span3>

                                    <div class="nose"></div>
                                    <div class="mouth-left"></div>
                                    <div class="mouth-right"></div>

                                    <span2 id="forehead_markings_middle` + id + `" class="forehead_markings_middle"></span2>
                                    <span2 id="forehead_markings_left` + id + `" class="forehead_markings_left"></span2>
                                    <span2 id="forehead_markings_right` + id + `" class="forehead_markings_right"></span2>

                                    <div class="cat__whiskers-left"></div>
                                    <div class="cat__whiskers-right"></div>

                                    <div id="whisker_mid_left` + id +`" class="whisker whisker_mid_left"></div>
                                    <div id="whisker_top_left` + id +`" class="whisker whisker_top_left"></div>
                                    <div id="whisker_bottom_left` + id +`" class="whisker whisker_bottom_left"></div>
                                    <div id="whisker_mid_right` + id +`" class="whisker whisker_mid_right"></div>                       
                                    <div id="whisker_top_right` + id +`" class="whisker whisker_top_right"></div>
                                    <div id="whisker_bottom_right` + id +`" class="whisker whisker_bottom_right"></div> 
                                </div>
                                <div class="torso">
                                    <div id="chest` + id +`" class="chest"></div>
                                    <div id="stomach` + id +`" class="stomach"></div>
                                    <div id="paw_front_left` + id +`" class="paw_front_left">
                                        <span2 id="paw_stripe` + id +`" class="paw_stripe"></span2>
                                        <span2 id="paw_stripe bottom_stripe` + id +`" class="paw_stripe bottom_stripe"></span2>
                                    </div>
                                    <div id="paw_front_right` + id +`" class="paw_front_right">
                                        <span2 id="paw_stripe` + id +`" class="paw_stripe"></span2>
                                        <span2 id="paw_stripe bottom_stripe` + id +`" class="paw_stripe bottom_stripe"></span2>
                                    </div>
                                    <div id="paw_back_right` + id +`" class="paw_back_right"></div>
                                    <div id="paw_back_left` + id +`" class="paw_back_left"></div>
                                    <div id="tail` + id +`" class="tail">
                                        <span2 id="tail_marking` + id +`" class="tail_marking"></span2>
                                        <span2 id="tail_marking bottom_marking` + id +`" class="tail_marking bottom_marking"></span2>
                                    </div> 
                                </div>

                            </div>
                                </div>
                                <div class="dnaDiv" id="catDNA`+ id + `"></div>
                                <ul class="ml-5 cattributes">
                                <li><span id="eyename`+id+`"></span> eyes</li>
                                <li><span id="markingsName`+id+`"></span> decoration</li>
                                <li><span id="animationName`+id+`"></span></li>
                                </ul>
                            </div>`

    $('#catsDiv').append(catDiv)

}