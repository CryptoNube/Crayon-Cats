
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
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b> 0</h4></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b> `+ dna +`</h4></span>
    
    
    `)
}

//Apply cat CSS Styles from buidCat.js

function renderCat(dna, id) {
    //Colors
    headColor(dna.headcolor, id)
    pawColor(dna.pawcolor, id)
    markingColor(dna.markingcolor, id)
    snoutColor(dna.snoutcolor, id)
    eyeColor(dna.eyecolor, id)

    //Cattributes
    eyeVariation(dna.eyesShape, id)
    decorationVariation(dna.decorationOnOff, id)
    snoutVariation(dna.snoutStyle, id)
    animationVariation(dna.animation, id)

    //indiviudal Colors
    snoutOnlyColor(dna.snoutOnlycolor, id)
    innerEarOnlyColor(dna.innerEarOnlycolor, id)
    markingsOnlyColor(dna.markingsOnlycolor, id)
    stomachOnlyColor(dna.stomachOnlycolor, id)


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
        "eyesShape": dnaStr.substring(10, 11),
        "decorationOnOff": dnaStr.substring(11, 12),
        "snoutStyle": dnaStr.substring(12, 13),
        "animation": dnaStr.substring(13, 14),

        //Individual Colors
        "snoutOnlyColor": dnaStr.substring(14, 16),
        "stomachOnlyColor": dnaStr.substring(16, 18),
        "innerEarOnlyColor": dnaStr.substring(18, 20),
        "markingsOnlyColor": dnaStr.substring(20, 22),


        //"lastNum": dnaStr.substring(22, 23)
    }

    return dna
}

//Cat HTML Div

function catBox(id) {

    var catDiv = `<div class="col-lg-4 pointer fit-content">
                    <div class="featureBox catDiv">
                            <div class="cat">
                            <div class="ears">
                                <div id="ear`+ id + `" class="ear left_ear">
                                    <div id="inner_ear` + id +`" class="inner_ear left_inner_ear"></div>
                                </div>
                                <div id="ear`+ id + `" class="ear right_ear">
                                    <div id="inner_ear`+ id +`" class="inner_ear right_inner_ear"></div>
                                </div>
                            </div>
                                <div id="head`+ id +`" class="head">
                                    <div class="eyes">
                                        <div class="eye left_eye">
                                            <div id="irus`+ id+`" class="irus">
                                                <span id="pupils" class="pupils"></span>
                                            </div>
                                        
                                            <div class="reflection_1"></div>
                                            <div class="reflection_2"></div>
                                        </div>
                                        <div class="eye right_eye">
                                        <div id="irus_R`+ id+`" class="irus">
                                                <span id="pupils" class="pupils"></span>
                                            </div>
                                
                                            <div class="reflection_1"></div>
                                            <div class="reflection_2"></div>
                                        </div>
                                    </div>
        
                                    <div id="snout`+ id +`" class="snout"></div>

                                    <div class="nose"></div>
                                    <div class="mouth-left"></div>
                                    <div class="mouth-right"></div>
                                    
                                    <div id="forehead_markings_middle` + id + `" class="forehead_markings_middle"></div>
                                    <div id="forehead_markings_left` + id + `" class="forehead_markings_left"></div>
                                    <div id="forehead_markings_right` + id + `" class="forehead_markings_right"></div>

                                    <div id="whisker_mid_left`+ id +`" class="whisker whisker_mid_left"></div>
                                    <div id="whisker_top_left`+ id +`" class="whisker whisker_top_left"></div>
                                    <div id="whisker_bottom_left`+ id +`" class="whisker whisker_bottom_left"></div>
                                    <div id="whisker_mid_right`+ id +`" class="whisker whisker_mid_right"></div>                       
                                    <div id="whisker_top_right`+ id +`" class="whisker whisker_top_right"></div>
                                    <div id="whisker_bottom_right`+ id +`" class="whisker whisker_bottom_right"></div> 
                                </div>
                                <div class="torso">
                                    <div id="chest`+ id +`" class="chest"></div>
                                    <div id="stomach`+ id +`" class="stomach"></div>
                                    <div id="paw_front_left`+ id +`" class="paw_front_left">
                                        <span2 id="paw_stripe`+ id +`" class="paw_stripe"></span2>
                                        <span2 id="bottom_stripe`+ id +`" class="paw_stripe bottom_stripe"></span2>
                                    </div>
                                    <div id="paw_front_right`+ id +`" class="paw_front_right">
                                        <span2 id="paw_stripe`+ id +`" class="paw_stripe"></span2>
                                        <span2 id="bottom_stripe`+ id +`" class="paw_stripe bottom_stripe"></span2>
                                    </div>
                                    <div id="paw_back_right`+ id +`" class="paw_back_right"></div>
                                    <div id="paw_back_left`+ id +`" class="paw_back_left"></div>
                                    <div id="tail`+ id +`" class="tail">
                                        <span id="tail_marking`+ id +`" class="tail_marking"></span>
                                        <span id="tail_marking`+ id +`" class="tail_marking bottom_marking"></span>
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