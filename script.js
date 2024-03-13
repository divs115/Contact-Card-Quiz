let img_links = {
    "elephant": "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/elephant.png",
    "willow"  : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/willow-sm.jpg",
    "axelotl" : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/axelotl.png",
    "cheetah" : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/cheetah.png",
    "giraffe" : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/giraffe.png",
    "cow"     : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/cow.png"
};
    

let img_info = {
    "willow" : {name: "Willow", "desc": "The cutest dog in the world"},
    "elephant" : {"name" : "Ellie", "desc" : "Her age is irrelephant"},
    "cheetah" : {name: "Chester", "desc": "Who are you callin' a cheetah?"},
    "cow" : {name: "Bess", "desc": "A very a-moo-sing creature"},
    "giraffe" : {name: "Dottie", "desc": "Sticks her neck out for everyone"},
    "axelotl" : {name: "Axel", "desc": "A whole lotl fun!"}
};

$( document ).ready(function() {
    /******************* carousel images ********************/
    //add carousel indicators (bars on the bottom of the image)
    for(let i = 0; i < 7; i++){
        if(i == 0){
            $("#carousel-indicators-imgs").append(`
                <button type="button" data-bs-target="#carousel-bars-imgs" data-bs-slide-to="`+i+`" aria-label="Slide `+(i+1)+`" class="active" aria-current="true"></button>
            `);
        }else{
            $("#carousel-indicators-imgs").append(`
                <button type="button" data-bs-target="#carousel-bars-imgs" data-bs-slide-to="`+i+`" aria-label="Slide `+(i+1)+`"></button>
            `);
        }
    }
    
    //add carousel items (images)
    let keys = Object.keys(img_links);
    let tmp = 0;
    for(let key of keys){
        if(tmp == 0){
            tmp++;
            $("#carousel-items-imgs").append(`
                <div class="carousel-item active" >
                  <img src="`+img_links[key]+`" style="width:500px; height:500px" alt="`+key+`">
                </div>
            `);
        }else{
            $("#carousel-items-imgs").append(`
                <div class="carousel-item" >
                  <img src="`+img_links[key]+`" style="width:500px; height:500px" alt="`+key+`">
                </div>
            `);
        }
    }
    
    /******************* carousel descriptions ********************/
    //add carousel indicators 
    for(let i = 0; i < 7; i++){
        if(i == 0){
            $("#carousel-indicators-info").append(`
                <button type="button" data-bs-target="#carousel-bars-info" data-bs-slide-to="`+i+`" aria-label="Slide `+(i+1)+`" class="active" aria-current="true"></button>
            `);
        }else{
            $("#carousel-indicators-info").append(`
                <button type="button" data-bs-target="#carousel-bars-info" data-bs-slide-to="`+i+`" aria-label="Slide `+(i+1)+`"></button>
            `);
        }
    }
    
    //add carousel items 
    keys = Object.keys(img_info);
    tmp = 0;
    for(let key of keys){
        if(tmp == 0){
            tmp++;
            $("#carousel-items-info").append(
            `
                <div class="carousel-item active" >
                  <p class="mx-5" style="padding-left: 30px">
                    Name: `+img_info[key].name+`<br>
                    Description: `+img_info[key].desc+`
                  </p>
                </div>            
            `);
        }else{
            $("#carousel-items-info").append(
            `
                <div class="carousel-item" >
                  <p class="mx-5" style="padding-left: 30px">
                    Name: `+img_info[key].name+`<br>
                    Description: `+img_info[key].desc+`
                  </p>
                </div>
            `);
        }
    }
});

