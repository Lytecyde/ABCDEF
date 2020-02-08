var http = require('http');
var fs = require('fs-extra');

describe ("The game is loaded", function () {
    var assetCount = 0;
    var countJSON = 0;
    beforeAll ( function () {
        fs.readdir( "./assets", (error, files) => { 
            assetCount = files.length; 
        });

        fs.readdir("./assets", (err, files) => {
            files.forEach(file => {
                if(file.endsWith(".json")){
                    countJSON++;
                }
            }); 
        });
    });

    it ("should send a starting message", function() {
        console.log("start message seen");
    });

    it("should not be 0 asset files", function () {
        expect(assetCount).not.toEqual(0);
    })

    it("should have some json files", function() {
        expect(countJSON).not.toEqual(0);
    })

    
});