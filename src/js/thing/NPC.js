define([
    'Creature'
], function (
    Creature
) {
    'use strict';

    NPC.prototype = new Creature();
    NPC.prototype.constructor = NPC;

    function NPC(position, animationSet) {
        Creature.call(this, position, animationSet);
        this.currentAnimation = this.animationSet.idle.right;
    }

    return NPC;
});
