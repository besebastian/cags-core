define([
    'Point'
], function (
    Point
) {
    'use strict';

    function Creature(position, sprite) {
        this.position = position;
        this.sprite = sprite;
        this.tileWidth = null;
        this.tileHeight = null;
    }

    return Creature;
});
