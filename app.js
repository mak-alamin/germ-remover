(function($){
    $(document).ready(function(){ 
        $("#bottle_2").on("click",function(){
          // console.log(this);
          $(this).animate({
            top:'-=250px',
            left: '-=65px',

          },1500, function(){
            $(this).addClass("spray");
          });

          setTimeout(function(){
            $("#bottle_2 img.spray").show();
          }, 2500);
          
          setTimeout(function(){
            $("#bottle_2 img.spray").hide('slow');

            $("#bottle_2").removeClass("spray");
            $("#bottle_2").animate({
              height: '+=0px',
              width: '130px',
              top:'-100px',
              left: '30px',
            }, 1500);
          }, 6000);

        });

    });
})(jQuery);