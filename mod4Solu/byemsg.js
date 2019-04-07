(function (window) {

var byeSpeaker = {};

byeSpeaker.speak = function byemsg (name) {
    console.log("GoodBye "+ name+"!");
};

window.byeSpeaker = byeSpeaker;

})(window);
