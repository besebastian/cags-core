define(function () {
    'use strict';

    function Screen(background) {
        this.background = background;
        this.hotspots = [];
    }

    Screen.prototype.addHotspot = function (hotspot) {
        this.hotspots.push(hotspot);
        return this;
    };

    Screen.prototype.removeHotspot = function (hotspot) {
        this.hotspots.splice(hotspot, 1);
        return this;
    };

    return Room;
});
