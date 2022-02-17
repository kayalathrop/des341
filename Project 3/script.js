$(document).ready(function(){
    $('#button').click (function(){
        $("#boxone").toggle();
    })

    $('#p').click (function(){
    
        $("#boxtwo").show();   

    })
    $('#p2').click (function(){
    
        $("#boxthree").show();   

    })
    $('#p3').click (function(){
    
        $("#boxfour").show();   

    })
    $('#p4').click (function(){
    
        $("#boxfive").show();   

    })
    $('#p5').click (function(){
        $("#boxone").hide();   
        $("#boxtwo").hide();   
        $("#boxthree").hide();   
        $("#boxfour").hide();   
        $("#boxfive").hide();
       
           

    })

    
    $('#ps').click (function(){
    
        $("#boxone").hide();   

    })
    $('#ps2').click (function(){
    
        $("#boxone").show();
        $("#boxtwo").hide();
    })
    $('#ps3').click (function(){
    
        $("#boxtwo").show();
        $("#boxthree").hide();
    })
    $('#ps4').click (function(){
    
        $("#boxthree").show();
        $("#boxfour").hide();
    })
    $('#ps5').click (function(){
    
        $("#boxfour").show();
        $("#boxfive").hide();
    })


    $('#buttontwo').click (function(){
    
        $("#boxone").show();
        $("#thankyou").hide();
    })

    $('#bird').click (function(){

        $("#thankyou").toggle();
    })
    $('#bird').hover (function(){

        $("#bird2").show();
    })

    $('#x').click (function(){

        $("#boxone").hide();
    })
    $('#x2').click (function(){
        $("#boxone").hide();
        $("#boxtwo").hide();
    })
    $('#x3').click (function(){
        $("#boxone").hide();
        $("#boxtwo").hide();
        $("#boxthree").hide();
    })
    $('#x4').click (function(){
        $("#boxone").hide();
        $("#boxtwo").hide();
        $("#boxthree").hide();
        $("#boxfour").hide();
    })
  
    $('#x5').click (function(){
        $("#boxone").hide();
        $("#boxtwo").hide();
        $("#boxthree").hide();
        $("#boxfour").hide();
        $("#boxfive").hide();
    })
  
  

   




});