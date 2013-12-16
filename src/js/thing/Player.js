define([
    'Creature'
], function (
    Creature
) {
    'use strict';

    Player.prototype = new Creature();
    Player.prototype.constructor = Player;

    function Player(position, sprite) {
        Creature.call(this, position, sprite);
        this.inventory = [];
        this.tileWidth = 20;
        this.tileHeight = 30;
        this.currentFrame = 0;
        this.maxFrames = 3;
        this.animationDelay = 0;
    }

    Player.prototype.load = function () {

    };

    Player.prototype.save = function () {

    };

    Player.prototype.drawWalking = function (context) {
        context.drawImage(this.sprite, this.currentFrame * this.tileWidth, 0, this.tileWidth, this.tileHeight, 0, 0, this.tileWidth, this.tileHeight);
        if (this.animationDelay === 10) {
            if (this.currentFrame < this.maxFrames) {
                this.currentFrame++;
            } else {
                this.currentFrame = 0;
            }
            this.animationDelay = 0;
        } else {
            this.animationDelay++;
        }
    };

    return Player;
});
