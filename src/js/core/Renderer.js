define(function () {
    'use strict';

    function Renderer(width, height) {
        this.width = width;
        this.height = height;
        this.renderHotspots = false;

        this.canvas = document.createElement('canvas');
        this.canvas.id = 'cags-viewport';
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        document.body.appendChild(this.canvas);
    }

    Renderer.prototype.clear = function () {
    
    };

    Renderer.prototype.draw = function () {
    
    };

    return Renderer;
});
