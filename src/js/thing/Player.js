define([
    'Creature'
], function (
    Creature
) {
    'use strict';

    Player.prototype = new Creature();
    Player.prototype.constructor = Player;

    function Player(position, animationSet) {
        Creature.call(this, position, animationSet);
        this.inventory = [];
        this.speed = 3;
        this.destination = this.position;
        this.currentAnimation = this.animationSet.idle;
    }

    Player.prototype.load = function () {

    };

    Player.prototype.save = function () {

    };

    Player.prototype.draw = function (context) {
        this.currentAnimation.draw(context, this.position.x, this.position.y);
    };

    Player.prototype.update = function () {
        this.currentAnimation.update();
        this.handleMovement();
    };

    Player.prototype.moveTo = function (point) {
        this.destination = point;
    };

    Player.prototype.handleMovement = function () {
        if (this.position.x !== this.destination.x || this.position.y !== this.destination.y) {
            if (this.position.x > this.destination.x) {
                this.currentAnimation = this.animationSet.walking.left;
            } else {
                this.currentAnimation = this.animationSet.walking.right;
            }
            if (this.position.x > this.destination.x) {
                if (this.position.x - this.destination.x > this.speed) {
                    this.position.x -= this.speed;
                } else {
                    this.position.x = this.destination.x;
                }
            }
            if (this.position.y > this.destination.y) {
                if (this.position.y - this.destination.y > this.speed) {
                    this.position.y -= this.speed;
                } else {
                    this.position.y = this.destination.y;
                }
            }
            if (this.position.x < this.destination.x) {
                if (this.destination.x - this.position.x > this.speed) {
                    this.position.x += this.speed;
                } else {
                    this.position.x = this.destination.x;
                }
            }
            if (this.position.y < this.destination.y) {
                if (this.destination.y - this.position.y > this.speed) {
                    this.position.y += this.speed;
                } else {
                    this.position.y = this.destination.y;
                }
            }
        } else {
            this.currentAnimation = this.animationSet.idle;
        }
    };

    return Player;
});
