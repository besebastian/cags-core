require([
    'CAGS'
], function (
    CAGS
) {
    'use strict';

    (function () {
        var params = {
            'width': 640,
            'height': 480,
            'title': 'Test CAGS Game'
        };
        window.cags = new CAGS(params);
    })();
});

