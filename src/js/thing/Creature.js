define([
    'Point'
], function (
    Point
) {
    'use strict';

    function Creature(position, animationSet) {
        this.position = position;
        this.animationSet = animationSet;
        this.tileWidth = null;
        this.tileHeight = null;
    }

    return Creature;
});
