/**
 * 
 */

var fs = require('fs-extra');

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
        fs.readdir("./assets", (err, files) => {
            files.forEach(file => {
                if(file.endsWith(".json")){
                    console.log(file);
                }
            }); 
        }); 
    };
 };

 var A = new ABCDEFgame();
 
 A.loadAssets();