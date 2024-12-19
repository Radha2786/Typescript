// we can use abstract classes to define a blueprint for other classes, we can not create a instance/object of an abstract class
// abstract classes are mainly for inheritance where other classes may derive from them. They may contain abstract methods that must be implemented by the derived classes and if we want to implement a method with some feature(body) in the abstract class, we can do that as well. 
// abstract classes are used to provide a blueprint for other classes and can not be instantiated on their own.
// abstract methods are methods that are declared in an abstract class, but they don't have implementation. The implementation is done in the derived classes.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelTime = function () {
        // some complex logic/calculation could be here 
        return 9;
    };
    return TakePhoto;
}());
var instagram = /** @class */ (function (_super) {
    __extends(instagram, _super);
    function instagram(cameraMode, filter, userName) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.userName = userName;
        return _this;
    }
    instagram.prototype.takePicture = function () {
        console.log("Taking a photo in ".concat(this.cameraMode, " mode with ").concat(this.filter, " filter"));
    };
    return instagram;
}(TakePhoto));
var rs = new instagram("portrait", "black and white", "radha");
rs.takePicture();
// const rs = new TakePhoto("portrait", "black and white");
