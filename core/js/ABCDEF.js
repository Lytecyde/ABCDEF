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
        fs.readdir("../../assets", (err, files) => {
            for(var assetIndex = 0;
                assetIndex < files.length;
                assetIndex++){
                    
                var assetJSON = fs.readFile(files[assetIndex]);    
            } 
        }); 
    };
 };

 var A = new ABCDEFgame();
 
 A.loadAssets();