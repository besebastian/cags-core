require([
    'CAGS'
], function (
    CAGS
) {
    'use strict';

    (function () {
        var params = {
            'title': 'Test CAGS Game'
        };
        window.cags = new CAGS(params);
    })();
});

