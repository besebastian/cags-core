define([
    'Point'
], function (
    Point
) {
    'use strict';

    function Input(canvas, player) {
        this.canvas = canvas;
        this.player = player;
        this.eventHandlers();
    }

    Input.prototype.eventHandlers = function () {
        this.canvas.addEventListener('mousedown', this.mouseDown.bind(this), false);
        this.canvas.addEventListener('mouseup', this.mouseUp.bind(this), false);
    };

    Input.prototype.mouseDown = function () {
        console.log('mousedown');
    };

    Input.prototype.mouseUp = function (event) {
        this.player.moveTo(new Point(event.offsetX, event.offsetY));
    };

    return Input;
});
