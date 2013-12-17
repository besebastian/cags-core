define([
    'Animation'
], function (
    Animation
) {
    'use strict';

    function AnimationSet(spritesheet, tileWidth, tileHeight) {
        this.walking = new Animation(spritesheet, 0, 3, tileWidth, tileHeight);
        this.idle = new Animation(spritesheet, 0, 0, tileWidth, tileHeight);
    }

    return AnimationSet;
});
