define(function () {
    'use strict';

    function AssetLoader() {
        this.images = [];
        this.queue = {
            'images': []
        };
    }

    AssetLoader.prototype.add = function (type, key, path) {
        var item = {
            'key':  key,
            'path': path
        };
        if (type === 'image') {
            this.queue.images.push(item);
        }
    };

    AssetLoader.prototype.load = function () {
        try {
            if (this.queue.images.length === 0 && this.queue.sounds.length === 0) {
                throw new Error('No assets found to load');
            }
            for (var i = 0; i < this.queue.images.length; i++) {
                var image = new Image();
                image.src = this.queue.images[i].path;
                this.images[this.queue.images[i].key] = image;
            }
        } catch (e) {
            console.error(e.message);
        } finally {
            this.queue.images = [];
        }
        document.dispatchEvent(new Event('hasLoaded'));
        return this;
    };

    return AssetLoader;
});
