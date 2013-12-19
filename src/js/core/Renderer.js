define(function () {
    'use strict';

    function Renderer(width, height) {
        this.width = width;
        this.height = height;
        this.renderHotspots = false;
        this.screen = null;

        this.canvas = document.createElement('canvas');
        this.canvas.id = 'cags-viewport';
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
    }

    Renderer.prototype.clear = function () {
        return this;
    };

    Renderer.prototype.draw = function () {
        this.clear();
        if (this.screen === null) {
            throw new Error('No Screen exists to render.');
        }
        this.screen.draw(this.context);
    };

    Renderer.prototype.setScreen = function (screen) {
        this.screen = screen;
    };

    return Renderer;
});
