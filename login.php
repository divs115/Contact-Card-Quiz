<?php
    session_start();
    //Do better authentication than this
    if( isset($_POST["username"]) && $_POST["username"] == "admin" &&
        isset($_POST["password"]) && $_POST["password"] == "password"){
        $_SESSION["logged"] = "yes";
        header("Location: card.php");
    }else{
        $_SESSION["logged"] = "no";
        header("Location: main.php");
    }
?>
