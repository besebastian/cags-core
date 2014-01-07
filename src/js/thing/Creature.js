define([
    'Point'
], function (
    Point
) {
    'use strict';

    function Creature(position, animationSet) {
        this.position = position;
        this.animationSet = animationSet;
        this.tileWidth = null;
        this.tileHeight = null;
        this.currentAnimation = null;
        this.dialog = null;
        this.dialogPosition = null;
    }

    Creature.prototype.update = function () {
        this.currentAnimation.update();
    };

    Creature.prototype.draw = function (context) {
        this.currentAnimation.draw(context, this.position.x, this.position.y);
    };

    Creature.prototype.addDialog = function (dialog) {
        this.dialog = dialog;
        this.dialogPosition = dialog;
    };

    Creature.prototype.speak = function (str) {
        alert(str);
    };

    Creature.prototype.listDialogOptions = function () {
        this.speak(_.keys(this.dialogPosition));
    };

    Creature.prototype.chooseDialogOption = function (key) {
        var line = this.dialogPosition[key];
        if (_.isString(line)) {
            this.speak(line);
            this.listDialogOptions();
        } else if (_.isObject(line)) {
            this.dialogPosition = line;
            this.listDialogOptions();
        } else {
            throw new Error('Invalid dialog option chosen.');
        }
    };

    Creature.prototype.leaveDialog = function () {
        this.dialogPosition = this.dialog;
    };

    return Creature;
});
