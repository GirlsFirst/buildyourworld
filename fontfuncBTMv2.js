function encode_url(url) 
			{
			    url = escape(url);
				url = url.replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F');
				return url;
			}
			
function rgb2hex(rgb) {
				 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
				 function hex(x) {
				  return ("0" + parseInt(x).toString(16)).slice(-2).toUpperCase();
				 } 
				 return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
			}
			
function recommends()

			{  var name = $("#recom").val();
				
                         $.ajax({                  
                        type:"POST",
                         url: "/fonts/recommends.php",
                         data: {"name":name},
		          success: function(data){ $("#relatedfonts").html(data);}
		          })
			
		         }

function recommendstyle()

			{  var name = $("#recom").val();
				
                         $.ajax({                  
                        type:"POST",
                         url: "/fonts/recommendstyle.php",
                         data: {"name":name},
		          success: function(data){ $("#relatedfonts").html(data);}
		          })
			
		         }

function recommendtema()

			{  var name = $("#recom").val();
				
                         $.ajax({                  
                        type:"POST",
                         url: "/fonts/recommendtema.php",
                         data: {"name":name},
		          success: function(data){ $("#relatedfonts").html(data);}
		          })
			
		         }
			

function update_image()

			{       var sstring = $('#polystring').val(); if( typeof sstring == 'undefined' ) { var sstring = 'GENERATE=LOADING';}
			
                                var stringArray = sstring.split("=");
                                
				var replace_l = '<button class="gradientgray2" onclick="reset()">' + stringArray[1] + '</button>';
				
				var replace_g = '<button class="gradientred" onclick="update_image()">' + stringArray[0] + '</button>';

				$("#updator").html(replace_l); 

                var text=$('#string').val(); if( text == '' ) { var text = 'Your Text Here';}
                                                              			
				var name=$('#font').val(); 
				
				var size=$("#size").val();

				var style_color='';
				
				var style_effect='';
				
				
					style_color = $("#jscolorr").val();
				
					//style_color=rgb2hex(style_color);
				
				    style_effect = $('#effect').val();
				    
				    ga('send', 'event', 'Effects', 'EffectsChange', style_effect);
					
				
                                  $.ajax({
                 
                 type:"POST",
                 url: "/loadme.php",
                 data: {"name":name, "text":text,"size":size, "style_color":style_color,"style_effect":style_effect},


				 success: function(data){$("#text_image").attr('src',data);},
					 
			     error: function() {$("#updator").html(replace_g);}

                        });
				               
                //setTimeout(function(){  }, 1500);
                $("#text_image").on('load', function(){ $("#updator").html(replace_g); });


				$("#misc_embed").hide();
				$("#misc_gifts").hide();
				
				$("#gifts_image").attr('src', 'https://fontmeme.com/loadingproduct.gif');

			}
			

function reset()
	
	        {    
	            var sstring = $('#polystring').val(); if( typeof sstring == 'undefined' ) { var sstring = 'GENERATE=LOADINGG';}
			
                var stringArray = sstring.split("=");
				
				var replace_g = '<button class="gradientred" onclick="update_image()">' + stringArray[0] + '</button>';
				
				setTimeout(function(){ $("#updator").html(replace_g); }, 1500);				

			}
			
			

function image_code()
				
			{
                
                var imgurl = $("#text_image").attr("src");

				var pageurl = $("link[rel='canonical']").attr("href")

                $.ajax({

                 type:"POST", 
                 url: "/updateurl.php",
			     dataType: 'json',
                 data: {"imgN":imgurl, "urlP":pageurl},

                 success: function(data){
					 
					 $("#embed_xhtml").val(data.d1);
					 $("#embed_xxhtml").val(data.d2);
					 $("#embed_xxxhtml").val(data.d3);
					 }
                        });

				
			         $("#misc_embed").toggle();
			         
				     $("#misc_gifts").hide();
				     
				     $("#gifts_image").attr('src', 'https://fontmeme.com/loadingproduct.gif');

			}
			
			
			
function make_gifts()

            {
                
                var text=$('#string').val(); if( text == '' ) { var text = 'Your Text Here';}
                                                              			
				var name=$('#font').val(); 
				
				var size=$("#size").val();

				var style_color= $("#jscolorr").val();
				
				var style_effect= $('#effect').val();
				
				var imgurl = $("#text_image").attr("src");
				
		
        $.ajax({
                 
                 type:"POST",
                 url: "/makegifts.php",
                 dataType: 'json',
                 data: {"name":name, "text":text,"size":size, "style_color":style_color,"style_effect":style_effect, "imgN":imgurl},


                 success: function(data){
                     
                     $("#gifts_link").attr('href', data.dd1);
                     
					 $("#gifts_image").attr('src', data.dd2);
                     
                 }

                        });   
                
                 
                 $("#misc_gifts").toggle();
                 
                 $("#misc_embed").hide();
                
            }


    // starting onloadfirst
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";  
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}


$(document).ready(function () {
   $( "#size" ).blur(function() {
   
      var max = parseInt($(this).attr('max'));
      var min = parseInt($(this).attr('min'));
      if ($(this).val()  > max)
      {
          $(this).val(max);
      }
      else if ($(this).val()  < min)
      {
          $(this).val(min);
      } 
      else if (isNaN($(this).val())) {$(this).val('70');} 
    }); 
});

$(document).ready(function(){
           
    $('#string').each(function(){
    var value = getCookie('txxt');

    if(value != null && value != "" ) {
        $(this).val(value);
    }
    else {$(this).val('');}
    
}).on('blur', function(){
    if($(this).val() != '' ) {
		setCookie("txxt",$(this).val());
    }
});



    $('#size').each(function(){
    var value = getCookie('szzs');

	if(value != null && value != "" ) {
        $(this).val(value);
    }
    else {$(this).val('65');}
    

}).on('blur', function(){
    if($(this).val() > 200 ) {
		setCookie("szzs",'200');
    }
	else {setCookie("szzs",parseInt($(this).val()));}
});



       $('#jscolorr').each(function(){
           
    
        
    var value = getCookie('clrr');
    
    if ( $("#firstcolor" ).length ) {value = $("#firstcolor").val(); setCookie("clrr", value); } //102017
    
	var hex = '#' + value;
	
	

    if (value !== null && value !== "") {
        
		$(this).val(value);
		
		$(this).css({"background-color":hex});
		
    }
    
    else {$(this).val('2A2A57');}

}).on('blur', function(){
    if($(this).val() !== '' ) {
		setCookie("clrr",$(this).val());
    }
});


    $('#effect').each(function(){
        
    var value = getCookie('ffct');
        
   if ( $("#firsteffect" ).length ) {value = $("#firsteffect").val(); setCookie("ffct", value); }
    
    
    if( value !== null && value !== "" ) {
        
        $(this).val(value);
    }
    else {$(this).val('None');}

}).on('blur', function(){
    if($(this).val() !== '' ) {
		setCookie("ffct",$(this).val());
    }
});

    });
    
    



    // starting onloadsecond

$(document).ready(function(){ if( $('#header-social').css('display')=='none') { $('#jscolorr').attr('readonly', 'true');}}); 

$(document).ready(function(){imagePreview();});

xOffset = 10;
yOffset = 30;

this.imagePreview = function(){	

	var sstring = $('#polystring2').val(); if( typeof sstring == 'undefined' ) { var sstring = 'Tip: Always use the "EMBED" button to get permanent image links, otherwise your image will be lost in a few hours.';}

	$(".gimg").hover(function(e){
		$("body").append("<p id='epreview'><img src='" + this.src +"'/></br><span class='embedtip' style='font-size:11px; padding:10px;'>" + sstring + "</span></p>");								 
		$("#epreview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");						
    },
	function(){	
		$("#epreview").remove();
    });	
	$(".gimg").mousemove(function(e){
		$("#epreview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};



$(document).ready(function(){ $("#close_misc_embed").bind('click',function(){$("#misc_embed").hide();}); });

$(document).ready(function(){ $("#close_misc_gifts").bind('click',function(){$("#misc_gifts").hide();}); });

$(document).ready(function(e) { try {
$("#font").msDropdown();
$("#effect").msDropdown();
} catch(e) {
//alert(e.message);
}
});