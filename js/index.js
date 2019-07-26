$(document).ready(function()
    {
        /*adjust slider*/ 
        var win=$(window).height();
         var  upp=$(".upper-bar").innerHeight();
         var  nav=$(".navbar").innerHeight();
         $(".slider,.carousel-item").height(win-(upp+nav));
        // end adjust slider
        $(".work ul li").click(function()
        {
            $(this).addClass("active").siblings().removeClass("active");
       if($(this).text()==="all")
       {
        $(".work  img").fadeTo(500,.9);
       }
       else{
        $(".work  img").addClass("all");
           $("." + $(this).text()).fadeTo(100,.8).removeClass("all");
           $("." + $(this).text()).siblings(".all").fadeTo(100,.3,function()
           {
            $(".work  img").addClass("all");
           }); 
       }
        })
    }
);