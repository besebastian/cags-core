define([
    'Action',
    'Point'
], function (
    Action,
    Point
) {
    'use strict';

    function Hotspot(topLeft, bottomRight, clickable) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
        this.clickable = false;
        this.actions = [];
    }

    Hotspot.prototype.addAction = function (action) {
        this.actions.push(action);
        return this;
    };

    Hotspot.prototype.removeAction = function (action) {
        this.actions.splice(action, 1);
        return this;
    };

    return Hotspot;
});
