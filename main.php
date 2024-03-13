<?php   session_start(); ?>
<!DOCTYPE html>
<html>
  <head>
    <title>Contact Card Quiz</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.php">
  </head>
    
  <body>
      <div class="container d-flex justify-content-center">  
        <div class="text-center">
            <h1 class="strong my-5"> Contact Card Quiz </h1> 
            <div class="jumbotron my-5" style="width: 25rem;">
                <form method="post" action="login.php">
                    <p class="py-2">
                        Username: <input type="text" name="username" autocomplete="none" /> 
                    </p>
                    <p class="py-2">
                        Password:&nbsp; <input type="password" name="password" />
                    </p>
                    <div class="text-center">
                        <input class="btn btn-primary" type="submit" value="Login"/> 
                    </div>

                    <?php
                        if(isset($_SESSION["logged"]) && $_SESSION["logged"] == "no"){
                            echo <<<HEREDOC
                            <p class="pt-5 px-5 text-danger">Please enter a valid username and password</p>
                            HEREDOC;
                        }
                    ?>
                </form>
            </div>
        </div>
    </div>
      
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>
