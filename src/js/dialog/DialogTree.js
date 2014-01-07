define(function () {
    'use strict';

    function DialogTree() {
        this.lines = [];
    }

    DialogTree.prototype.addLine = function (line) {
        this.lines.push(line);
        return this;
    };

    return DialogTree;
});
