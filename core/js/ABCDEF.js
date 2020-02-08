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
        var dirname = "../../assets/";
        
        fs.readdir(dirname, function(err, filenames) {
            if (err) {
              throw err;
            }
            filenames.forEach(function(filename) {
                fs.readFile(dirname + filename, 'utf-8', function(err, content) {
                    if (err) {
                        throw err;
                    }
                    onFileContent(filename, content);
                });
            });
        });
    };
 };

var onFileContent = function (filename, content) {
    var data = {};
    data[filename] = content;
    console.log(content);
}

 var A = new ABCDEFgame();
 
 A.loadAssets();