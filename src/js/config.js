requirejs.config({
    deps: ['main'],
    paths: {
        // Core
        'CAGS':             'core/CAGS',
        'Input':            'core/Input',
        'Renderer':         'core/Renderer',
        'AssetLoader':      'core/AssetLoader',
        'Screen':           'core/Screen',

        // Creatures
        'Creature':         'thing/Creature',
        'Player':           'thing/Player',

        // Items
        'Item':             'items/Item',

        // Utils
        'Action':           'utils/Action',
        'ActionFactory':    'utils/ActionFactory',
        'Animation':        'utils/Animation',
        'AnimationSet':     'utils/AnimationSet',
        'Point':            'utils/Point',
        'Hotspot':          'utils/Hotspot'
    }
});

