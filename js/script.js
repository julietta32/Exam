$(document).ready(function(){
	
 function slider_1(){ 
       $(".slider_1").each(function () {
  var obj = $(this);
   $(obj).append("<div class='nav_1'></div>");
     $(obj).find("li").each(function () {
       $(obj).find(".nav_1").append("<span rel='"+$(this).index()+"'></span>"); 
        $(this).addClass("slider_1"+$(this).index());
    });
         $(obj).find("span").first().addClass("on"); 
    });
function sliderJS (obj, sl) { 
  var ul = $(sl).find(".ul_1"); 
    var bl = $(sl).find("li.slider_1"+obj); 
      var step = $(bl).width(); 
         $(ul).animate({marginLeft: "-"+step*obj}, 500); 
}
	   
$(document).on("click", ".slider_1 .nav_1 span", function() { 
  var sl = $(this).closest(".slider_1"); 
    $(sl).find("span").removeClass("on"); 
      $(this).addClass("on"); 
       var obj = $(this).attr("rel"); 
        sliderJS(obj, sl); 
           return false;})
   };
    
function slider_2() {
        $(".slider_2").each(function () { 
         var obj = $(this);
          $(obj).append("<div class='nav_2'></div>");
           $(obj).find("li").each(function () {
            $(obj).find(".nav_2").append("<span rel='"+$(this).index()+"'></span>"); 
             $(this).addClass("slider_2"+$(this).index());
  });
			
         $(obj).find("span").first().addClass("on"); 
 });
function sliderJS (obj, sl) { 
  var ul = $(sl).find(".ul_2"); 
    var bl = $(sl).find("li.slider_2"+obj); 
      var step = $(bl).width(); 
        $(ul).animate({marginLeft: "-"+step*obj}, 500); 
}
$(document).on("click", ".slider_2 .nav_2 span", function() { 
    var sl = $(this).closest(".slider_2"); 
       $(sl).find("span").removeClass("on"); 
         $(this).addClass("on"); 
            var obj = $(this).attr("rel"); 
              sliderJS(obj, sl); 
                return false;})
    };
    
	function slider_3() {
        $(".slider_3").each(function () { 
         var obj = $(this);
          $(obj).append("<div class='nav_3'></div>");
           $(obj).find("li").each(function () {
            $(obj).find(".nav_3").append("<span rel='"+$(this).index()+"'></span>"); 
              $(this).addClass("slider_3"+$(this).index());
         });
                $(obj).find("span").first().addClass("on"); 
    });
function sliderJS (obj, sl) { 
     var ul = $(sl).find(".ul_3"); 
       var bl = $(sl).find("li.slider_3"+obj); 
          var step = $(bl).width(); 
            $(ul).animate({marginLeft: "-"+step*obj}, 500); 
}

$(document).on("click", ".slider_3 .nav_3 span", function() { 
  var sl = $(this).closest(".slider_3"); 
    $(sl).find("span").removeClass("on"); 
     $(this).addClass("on"); 
      var obj = $(this).attr("rel"); 
       sliderJS(obj, sl); 
         return false;})
    };
    slider_1();
     slider_2();
       slider_3();
});




// запрос на сервер

	var API_KEY = '5295116-e2a1b3df0beeb9fc52fbbe5d2';
     $(document).ready ( function(){
	   var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('smile');	
	     $.getJSON(URL, function(data){
    	  if (parseInt(data.totalHits) > 0){
			$.each(data.hits, function(i, hit){
			  $("<img>").attr("src", hit.userImageURL).appendTo(".grid-item" + i);
				$(".stile" + i).text('travelling');
			})}}
)})


$(document).ready ( function(){
		$(":input").keyup(function() {
	      $('p').text($(":input").val());
		    }).keyup();});


$(document).ready ( function(){
	$(":button").click(function(){
		$(".grid-item1").empty();$(".grid-item2").empty();$(".grid-item3").empty();$(".grid-item4").empty();$(".grid-item5").empty();$(".grid-item6").empty();$(".grid-item7").empty();
			$(".grid-item1").append("<div class='stile1'>");$(".grid-item2").append("<div class='stile2'>");$(".grid- item3").append("<div class='stile3'>");$(".grid-item4").append("<div class='stile4'>");$(".grid-item5").append("<div class='stile5'>");$(".grid-item6").append("<div class='stile6'>");$(".grid-item7").append("<div class='stile7'>");
	
		
		var target= $("p").text();
		
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(target);
	console.log(target);
	   $.getJSON(URL, function(data){
    	if (parseInt(data.totalHits) > 0){
	{
			$.each(data.hits, function(i, hit){

			   $("<img>").attr("src", hit.userImageURL).appendTo(".grid-item" + i);
				 $(".stile" + i).text(target);
			})
		}
				   }
	
	console.log(totalHits);	

});});})




	
	



