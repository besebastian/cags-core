define([
    'AssetLoader',
    'Renderer',
    'Screen',
    'Point',
    'Player',
    'Input',
    'AnimationSet'
], function (
    AssetLoader,
    Renderer,
    Screen,
    Point,
    Player,
    Input,
    AnimationSet
) {
    'use strict';

    function CAGS() {
        this.renderer = new Renderer(640, 480);
        this.polyfillAnimationFrame();
        this.eventListeners();

        this.assets = new AssetLoader();
        this.assets.add('image', 'test-background', '/assets/img/test-back.png');
        this.assets.add('image', 'test-spritesheet', '/assets/img/test-sprite.png');
        this.assets.load();
    }

    CAGS.prototype.afterLoad = function () {
        this.renderer.setScreen(new Screen(this.assets.get('test-background')));
        this.player = new Player(new Point(320, 400), new AnimationSet(this.assets.get('test-spritesheet'), 20, 32));
        this.input = new Input(this.renderer, this.player);
        this.loop();
    };

    CAGS.prototype.eventListeners = function () {
        var _this = this;
        document.addEventListener('hasLoaded', function () {
            _this.afterLoad();
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
        try {
            this.update();
            this.draw();
            requestAnimationFrame(this.loop.bind(this));
        } catch (e) {
            console.error(e.message);
        }
    };

    CAGS.prototype.update = function () {
        this.player.update();
    };

    CAGS.prototype.draw = function () {
        try {
            this.renderer.draw();
            this.player.draw(this.renderer.context);
        } catch (e) {
            throw new Error(e);
        }
    };

    return CAGS;

});
