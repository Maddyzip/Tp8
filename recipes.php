<?
   
   /* recipe Loader for TP8 */
   
$name = $_GET["recipeName"];

$list = $_GET["recipeList"];
   

If ($name == "Good Old fashioned Pancakes") {
   
   If ($list == "ingredients") {
            Include "ingredients.hmtl";
              
   } Elseif ($list == "equipment"){
           Include "equipment.html";
        
  } Elseif ($list == "directions") {
           Include "directions.html";
     
  } Else {
              Echo "1";
              
            } 
  
}Elseif ($name == "Mushroom Salsa Chili") {
     
      If ($list == "ingredients"){
            Include "ingredients.hmtl";
              
   } Elseif ($list == "equipment"){
           Include "equipment.html";
        
  } Elseif ($list == "directions") {
           Include "directions.html";
      } 
  
   }Elseif ($name == "Hal's Wine mustard") {
        
     If ($list == "ingredients"){
            Include "ingredients.hmtl";
              
   } Elseif ($list == "equipment"){
           Include "equipment.html";
        
  } Elseif ($list == "directions") {
           Include "directions.html";
   }
  
  
  
            }  Else {
     
   Echo "0";
   
   }
  
   