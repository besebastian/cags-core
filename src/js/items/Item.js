define(function () {
    'use strict';

    function Item(name, image, inventoryImage) {
        this.name = name;
        this.image = image;
        this.inventoryImage = inventoryImage;
    }

    return Item;
});
