requirejs.config({
    deps: ['main'],
    paths: {
        // Core
        'CAGS':             'core/CAGS',
        'Input':            'core/Input',

        // Creatures
        'Creature':         'thing/Creature',
        'Player':           'thing/Player',

        // Utils
        'Action':           'utils/Action',
        'ActionFactory':    'utils/ActionFactory',
        'Point':            'utils/Point',
        'Hotspot':          'utils/Hotspot'
    }
});

