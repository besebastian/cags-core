requirejs.config({
    deps: ['main'],
    paths: {
        // Core
        'CAGS':             'core/CAGS',
        'Input':            'core/Input',
        'Renderer':         'core/Renderer',

        // Areas
        'Map':              'area/Map',
        'Screen':           'area/Screen',

        // Creatures
        'Creature':         'thing/Creature',
        'Player':           'thing/Player',

        // Items
        'Item':             'items/Item',

        // Utils
        'Action':           'utils/Action',
        'ActionFactory':    'utils/ActionFactory',
        'Point':            'utils/Point',
        'Hotspot':          'utils/Hotspot'
    }
});

