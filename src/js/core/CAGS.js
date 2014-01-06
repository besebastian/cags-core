define([
    'lodash',
    'AssetLoader',
    'Renderer',
    'Screen',
    'Point',
    'Player',
    'NPC',
    'Input',
    'AnimationSet'
], function (
    _,
    AssetLoader,
    Renderer,
    Screen,
    Point,
    Player,
    NPC,
    Input,
    AnimationSet
) {
    'use strict';

    function CAGS(opts) {
        this.options = _.extend({
            'width': 640,
            'height': 480,
            'title': 'Default CAGS Title'
        }, opts);

        this.renderer = new Renderer(this.options.width, this.options.height);
        this.polyfillAnimationFrame();
        this.eventListeners();
        document.title = this.options.title;

        this.debug = false;

        this.entities = [];

        this.assets = new AssetLoader();
        this.assets.add('image', 'test-background', 'assets/img/test-back.png');
        this.assets.add('image', 'test-spritesheet', 'assets/img/test-sprite.png');
        this.assets.add('image', 'test-cursors', 'assets/img/test-cursors.png');
        this.assets.load();
    }

    CAGS.prototype.afterLoad = function () {
        this.renderer.setScreen(new Screen(this.assets.get('test-background')));
        this.player = new Player(new Point(320, 400), new AnimationSet(this.assets.get('test-spritesheet'), 20, 32));
        this.input = new Input(this.assets.get('test-cursors'), this.renderer, this.player);

        // Purely a test NPC
        var npcTest = new NPC(new Point(100, 400), new AnimationSet(this.assets.get('test-spritesheet'), 20, 32));
        this.entities.push(npcTest);

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
        try {
            _.forEach(this.entities, function (entity) {
                entity.update();
            });
            this.player.update();
        } catch (e) {
            throw new Error(e);
        }
    };

    CAGS.prototype.draw = function () {
        var _this = this;
        try {
            this.renderer.draw();
            _.forEach(this.entities, function (entity) {
                entity.draw(_this.renderer.context);
            });
            this.player.draw(this.renderer.context);
            this.input.draw(this.renderer.context);
        } catch (e) {
            throw new Error(e);
        }
    };

    return CAGS;

});
