define([
    'Animation'
], function (
    Animation
) {
    'use strict';

    function AnimationSet(spritesheet, tileWidth, tileHeight) {
        this.idle = {};
        this.idle.left = new Animation(spritesheet, 0, 0, tileWidth, tileHeight);
        this.idle.right = new Animation(spritesheet, 1, 0, tileWidth, tileHeight);
        this.walking = {};
        this.walking.right = new Animation(spritesheet, 2, 3, tileWidth, tileHeight);
        this.walking.left = new Animation(spritesheet, 3, 3, tileWidth, tileHeight);
    }

    return AnimationSet;
});
