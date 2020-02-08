/**
 * 
 */
var assets = [
        "civilizations", 
        "cities", 
        "advances", 
        "buildings", 
        "units", 
        "calamities", 
        "celebrations",
        "civics",
        "lands",
        "resources",
        "surprises"    
    ];
 class ABCDEFgame {
    
    loadAssets() {
        fetch("../assets/civilizations.json")
            .then(response => response.json())
            .then(json => console.log(json));
    };
 };

 var A = ABCDEFgame();
 
 A.loadAssets();