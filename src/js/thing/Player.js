define([
    'Creature'
], function (
    Creature
) {
    'use strict';

    Player.prototype = new Creature();
    Player.prototype.constructor = Player;

    function Player(position) {
        Creature.call(this, position);
        this.inventory = [];
    }

    Player.prototype.load = function () {

    };

    Player.prototype.save = function () {

    };

    return Player;
});
