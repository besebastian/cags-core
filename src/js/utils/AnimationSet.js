define([
    'Animation'
], function (
    Animation
) {
    'use strict';

    function AnimationSet(spritesheet, tileWidth, tileHeight) {
        this.idle = new Animation(spritesheet, 0, 0, tileWidth, tileHeight);
        this.walking = {};
        this.walking.right = new Animation(spritesheet, 1, 3, tileWidth, tileHeight);
        this.walking.left = new Animation(spritesheet, 2, 3, tileWidth, tileHeight);
    }

    return AnimationSet;
});
