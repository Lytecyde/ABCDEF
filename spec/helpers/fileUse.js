var fs = require('fs-extra');
module.exports = {

    countJSON : function () {
        var countJ = 0;
        fs.readdir("./assets", (err, files) => {
            if (err) throw err;  
            files.forEach(file => {
                if(file.endsWith(".json")){
                    countJ++;
                }
            }); 
            return countJ;    
        });
        
    },
    countAssets: function () {
        var count = 0;
        var assetCount = 0;
        fs.readdir("./assets", (err, files) => {
            if (err) throw err;  
            assetCount = files.length;
            return assetCount;
        });
        
    }
}