define(function () {
    'use strict';

    function UILayer() {
        this.canvas = document.createElement('canvas');
        var view = document.getElementById('cags-viewport').getBoundingClientRect();
        this.canvas.id = 'cags-ui-layer';
        this.canvas.width = view.width;
        this.canvas.height = view.height;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = view.left + 'px';
        this.canvas.style.top = view.top + 'px';
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
    }

    return UILayer;
});
