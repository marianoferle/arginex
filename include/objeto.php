<?php

class objeto1{
	

    function inicio(){
       $imagenes=glob("img/fotos/{*.jpg,*.jpeg,*.gif,*.png}",GLOB_BRACE);
	   foreach($imagenes as $imagen)
    	 echo "<img class='fgal' src='$imagen'/>";
    }


    

}
//--------------------------






?>