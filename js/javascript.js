var content= document.getElementById("contenedor");

$(document).ready(function(){ //----------------------


content.onscroll=function(){ };
$(document).scroll(function(){ });


//$('#contenedor').mousemove(mueveFondo);
$("#envio_submit").click(envioSubmit);
$(".fgal").click(cambioFondo);




});//----------------------

function mueveFondo(e){
    var mx=e.pageX;
    var my=e.pageY;
    var f1=mx/50;
    var f2=-my/80;

    $("#fondo").css({"left":f1,"top":f2});
    $("#galeria").css({"left":f1,"top":f2});
    $("#pag1 header").css({"left":f1,"top":f2});
    $("#sec1").css({"left":f1,"top":f2});
    $("#form1").css({"left":f1,"top":f2});
    $("footer").css({"left":f1,"top":f2-30});
    //console.log(mx,my);
 

}


function cambioFondo(){
	var cli=this.src;
	//console.log(cli);
	fondo = $('#fondo');
	fondo.fadeOut(1000,function(){ fondo.css('background-image','url("'+ cli +'")'); }).fadeIn(1000);;
}

function envioSubmit(){
        var nom =  $('input[name=nombre]').val(); 
        var email  =  $('input[name=email]').val();
        var mensaje  =  $('#texto').val(); 
        
        console.log(nom,email,mensaje);

var formData = {n:nom,e:email,m:mensaje};    

$.ajax({type:"POST",url:"send.php",data:formData,dataType:"html",
         beforeSend: function(){ },
         error: function(){ },            
         success: function(data){  
            $("#info_sub").append(data); 
         },complete:function(){
         	$('#borrar_form').trigger("click");
         	$("#info_sub").empty();
         	$("#info_sub").append("su mensaje ser$aacute; contestado a la brevedad!.");
         }
 });  


}

