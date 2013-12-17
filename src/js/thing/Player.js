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
        this.currentAnimation = this.animationSet.walking;
    }

    Player.prototype.load = function () {

    };

    Player.prototype.save = function () {

    };

    Player.prototype.draw = function (context) {
        this.currentAnimation.draw(context, this.position.x, this.position.y);
    };

    Player.prototype.moveTo = function (point) {
        this.destination = point;
    };

    Player.prototype.update = function () {
        this.currentAnimation.update();
        if (this.position.x !== this.destination.x && this.position.y !== this.destination.y) {
            this.currentAnimation = this.animationSet.walking;
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
        } else {
            console.log('idle');
            this.currentAnimation = this.animationSet.idle;
        }
    };

    return Player;
});
