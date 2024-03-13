<?php  
    session_start();
    if(isset($_SESSION["logged"]) && $_SESSION["logged"] == "yes"){
?>

<!DOCTYPE html>
<html>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.php">
  </head>
    
  <body>
   
        
    <h5 class="mx-5 mt-5 text-center">Pick the appropriate image and description pair. <br> Click sumbit when you have a match. You have 3 tries.</h5>
       
    <div class="container d-flex justify-content-center">
      <div class="card my-5 mx-5 " style="width:500px">
        
          <div id="carousel-bars-imgs" class="carousel slide">
              <div class="carousel-indicators" id="carousel-indicators-imgs"></div>
              <div class="carousel-inner" id="carousel-items-imgs"></div>

              <button class="carousel-control-prev" type="button" data-bs-target="#carousel-bars-imgs" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel-bars-imgs" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
           </div>
           
           <div class="card-body my-3">
               
            <div class="carousel carousel-dark slide" id="carousel-bars-info">
              
              <div class="carousel-inner" id="carousel-items-info"></div>

              <button class="carousel-control-prev" type="button" data-bs-target="#carousel-bars-info" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel-bars-info" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
           </div>
               <div class="carousel-indicators" id="carousel-indicators-info"></div>
           </div>
        </div>  
    </div>
      <div class="container d-flex justify-content-center">
          <a href="#" class="btn btn-primary" style="height: 40px">Submit</a>
          <h4 class="mx-5 mb-5 text-center" id="tries"> Tries : 3 </h4>
      </div>
      
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script type="text/javascript" src="./script.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>

<?php
    }else{
        header("Location: main.php");
    }
?>