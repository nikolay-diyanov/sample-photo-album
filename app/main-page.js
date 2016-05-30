var cameraModule = require("camera");
var imageModule = require("ui/image");
var view = require("ui/core/view");
 
var imageContainer;
 
function onPageLoaded(args) {
   var page = args.object;
   imageContainer = view.getViewById(page, "img");
}
 
function tapAction() {
    cameraModule.takePicture({width: 300, height: 300, keepAspectRatio: true}).then(function(picture) {
        imageContainer.imageSource = picture;
    });
}
 
exports.onPageLoaded = onPageLoaded;
exports.tapAction = tapAction;