define([
    'AssetLoader',
    'Renderer'
], function (
    AssetLoader,
    Renderer
) {
    'use strict';

    function CAGS() {
        this.renderer = new Renderer(640, 480);
        this.polyfillAnimationFrame();
        this.eventListeners();

        this.assets = new AssetLoader();
        this.assets.add('image', 'test-background', '/assets/img/test-back.png');
        this.assets.load();
    }

    CAGS.prototype.eventListeners = function () {
        var _this = this;
        document.addEventListener('hasLoaded', function () {
            _this.loop();
        });
    };

    // RequestAnimationFrame polyfill by Paul Irish
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    CAGS.prototype.polyfillAnimationFrame = function () {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame =
              window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
    };

    CAGS.prototype.loop = function () {
        this.update();
        this.draw();
        requestAnimationFrame(this.loop.bind(this));
    };

    CAGS.prototype.update = function () {

    };

    CAGS.prototype.draw = function () {

    };

    return CAGS;

});
