// JavaScript for TP8
//function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(recipeName, listName, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
  // define the fromFile variable with the passed recipe name and list
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;
  
  console.log("From URL: " + fromFile);

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}



// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL){
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL +")";
    
    loadFileInto(this.recipeName, "ingredients", "#ingredients ul");
    loadFileInto(this.recipeName, "equipment", "#equipment ul");
    loadFileInto(this.recipeName, "directions", "#directions ol");
    
  }
  
}
  
GoodOldfashionedPancakes = new Recipe(
  "Good Old fashioned Pancakes", "Maddy", "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "ingredients.html", 
	"equipment.html", 
	"directions.html");
  
  MushroomSalsaChili = new Recipe( 
    "Mushroom Salsa Chili", "sarah hoppe", "https://images.unsplash.com/photo-1608376630927-d064ac74866e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=558&q=80", 
    "mushroom-ingredients.html",
"mushroom-equipment.html","mushroom-directions.html");
  
WineMustard = new Recipe(
  "Hal's Wine mustard",
  "Ally Steigmann",
  "https://images.unsplash.com/photo-1532641140-28932037521b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "mustard-ingredients.html",
  "mustard-equipment.html",
  "mustard-directions.html", );
  
  
window.onload = function() {
	
	document.querySelector("#firstRecipe").onclick =function() {
		GoodOldfashionedPancakes.displayRecipe();
	}
  
  document.querySelector("#secondRecipe").onclick = function() {
		MushroomSalsaChili.displayRecipe();
	}
  
  document.querySelector("#thirdRecipe").onclick = function() {
		WineMustard.displayRecipe();
	}

  
}
	
	
