let motionModule = (function () {
    return {
        glideMixin: function(obj) {
            obj.glide = function(){
                console.log("Gliding to the water");
            };
        },
        flyMixin: function(obj) {
            obj.fly = function(){
                console.log("Flying, wooosh!");
            };
        }
    }
})();

let WaterBirds = function (){};
motionModule.glideMixin(WaterBirds);
motionModule.flyMixin(WaterBirds);

WaterBirds.fly();
WaterBirds.glide();
