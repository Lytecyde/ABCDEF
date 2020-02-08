describe ("The game is loaded", function () {
    var assetCount = 0;
    var countJSONFiles = 0;
    beforeAll ( function () {
        console.log("And count again:");
        var assets = require("./helpers/fileUse.js");
        assetCount = assets.countAssets();
        console.log(assetCount);
        countJSONFiles = assets.countJSON();
    });

    it ("should send a starting message", function() {
        console.log("start message seen");
    });

    it("should not be 0 asset files", function () {
        expect(assetCount).not.toEqual(0);
    })

    it("should have some json files", function() {
        expect(countJSONFiles).not.toEqual(0);
    })
});