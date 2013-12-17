define(function () {
    'use strict';

    function Animation(spritesheet, row, frames, tileWidth, tileHeight) {
        this.spritesheet = spritesheet;
        this.row = row;
        this.frames = frames;
        this.currentFrame = 0;
        this.animationDelay = 0;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
    }

    Animation.prototype.update = function (context, x, y) {
        if (this.frames === 0) { return; }
        if (this.animationDelay === 5) {
            if (this.currentFrame < this.frames) {
                this.currentFrame++;
            } else {
                this.currentFrame = 0;
            }
            this.animationDelay = 0;
        } else {
            this.animationDelay++;
        }
    };

    Animation.prototype.draw = function (context, x, y) {
        context.drawImage(this.spritesheet, this.currentFrame * this.tileWidth, this.row, this.tileWidth, this.tileHeight, x - (this.tileWidth / 2), y - this.tileHeight, this.tileWidth, this.tileHeight);
    };

    return Animation;
});

