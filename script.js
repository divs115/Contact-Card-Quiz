let img_links = {
    "elephant" : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/elephant.png",
    "willow" : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/willow-sm.jpg",
    "axelotl" : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/axelotl.png",
    "cheetah" : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/cheetah.png",
    "giraffe" : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/giraffe.png",
    "cow" : "https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/cow.png"
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
            $("#carousel-indicators-imgs").append(
            `
                <button type="button" data-bs-target="#carousel-bars-imgs" data-bs-slide-to="`+i+`" aria-label="Slide `+(i+1)+`" class="active" aria-current="true"></button>
            `);
        }else{
            $("#carousel-indicators-imgs").append(
            `
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
            $("#carousel-items-imgs").append(
            `
                <div class="carousel-item active" >
                  <img src="`+img_links[key]+`" style="width:500px; height:500px" alt="`+key+`">
                </div>
            `);
        }else{
            $("#carousel-items-imgs").append(
            `
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
            $("#carousel-indicators-info").append(
            `
                <button type="button" data-bs-target="#carousel-bars-info" data-bs-slide-to="`+i+`" aria-label="Slide `+(i+1)+`" class="active" aria-current="true"></button>
            `);
        }else{
            $("#carousel-indicators-info").append(
            `
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


/*
<div class="card my-5 mx-5" style="width:500px">
        <div>
          <div id="carouselBars" class="carousel slide">
              <div class="carousel-indicators" id="carousel-indicators">
                <button type="button" data-bs-target="#carouselBars" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselBars" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselBars" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselBars" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselBars" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselBars" data-bs-slide-to="5" aria-label="Slide 6"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/elephant.png" style="width:500px; height:500px" alt="elephant">
                </div>
                <div class="carousel-item active">
                  <img src="" style="width:500px; height:500px" alt="willow">
                </div>
                  <div class="carousel-item active">
                  <img src="https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/axelotl.png" style="width:500px; height:500px" alt="axelotl">
                </div>
                <div class="carousel-item active">
                  <img src="" style="width:500px; height:500px" alt="cheetah">
                </div>
                  <div class="carousel-item active">
                  <img src="https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/giraffe.png" style="width:500px; height:500px" alt="giraffe">
                </div>
                  <div class="carousel-item active">
                  <img src="https://raw.githubusercontent.com/divs115/Contact-Card-Quiz/master/assets/cow.png" style="width:500px; height:500px" alt="cow">
                </div>
              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#carouselBars" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselBars" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    
    */