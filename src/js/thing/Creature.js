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
        this.currentAnimation = null;
    }

    Creature.prototype.update = function () {
        this.currentAnimation.update();
    };

    Creature.prototype.draw = function (context) {
        this.currentAnimation.draw(context, this.position.x, this.position.y);
    };


    return Creature;
});
