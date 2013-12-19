define([
    'Point'
], function (
    Point
) {
    'use strict';

    function Screen(background) {
        this.background = background;
        this.floorVerts = [
            new Point(0, 480),
            new Point(100, 300),
            new Point(540, 300),
            new Point(640, 480)
        ];
        this.hotspots = [];
    }

    Screen.prototype.draw = function (context) {
        context.drawImage(this.background, 0, 0);
        if (this.floorVerts.length > 0) {
            context.fillStyle = 'red';
            context.beginPath();
            for (var i = 0; i < this.floorVerts.length; i++) {
                if (i === 0) {
                    context.moveTo(this.floorVerts[i].x, this.floorVerts[i].y);
                } else {
                    context.lineTo(this.floorVerts[i].x, this.floorVerts[i].y);
                }
            }
            context.closePath();
            context.fill();
        }
    };

    Screen.prototype.getBackground = function () {
        return this.background;
    };

    Screen.prototype.addHotspot = function (hotspot) {
        this.hotspots.push(hotspot);
        return this;
    };

    Screen.prototype.removeHotspot = function (hotspot) {
        this.hotspots.splice(hotspot, 1);
        return this;
    };

    return Screen;
});
