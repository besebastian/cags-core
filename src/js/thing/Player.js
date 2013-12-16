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
        this.speed = 3;
        this.destination = this.position;
    }

    Player.prototype.load = function () {

    };

    Player.prototype.save = function () {

    };

    Player.prototype.drawWalking = function (context) {
        context.drawImage(this.sprite, this.currentFrame * this.tileWidth, 0, this.tileWidth, this.tileHeight, this.position.x - (this.tileWidth / 2), this.position.y - this.tileHeight, this.tileWidth, this.tileHeight);
        if (this.animationDelay === 5) {
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

    Player.prototype.moveTo = function (point) {
        this.destination = point;
    };

    Player.prototype.update = function () {
        if (this.position !== this.destination) {
            if (this.position.x > this.destination.x) {
                this.position.x -= this.speed;
            }
            if (this.position.y > this.destination.y) {
                this.position.y -= this.speed;
            }
            if (this.position.x < this.destination.x) {
                this.position.x += this.speed;
            }
            if (this.position.y < this.destination.y) {
                this.position.y += this.speed;
            }
        }
    };

    return Player;
});
