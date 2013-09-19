var PATH = require('path'),
    BEM = require('bem'),
    environ = require('bem-environ');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
                'bem-core/common.blocks',
                'bem-core/desktop.blocks',
                'bem-components/common.blocks',
                'bem-components/desktop.blocks',
                'bem-common-lib/common.blocks',
                'bem-common-lib/desktop.blocks',
                'bem-interface-lib/common.blocks',
                'bem-interface-lib/desktop.blocks',
                'bem-landing-lib/common.blocks',
                'bem-landing-lib/desktop.blocks',
            ]
            .map(function(path) { return PATH.resolve(environ.LIB_ROOT, path); })
            .concat([
                'common.blocks',
                'desktop.blocks'
            ]
            .map(function(path) { return PATH.resolve(environ.PRJ_ROOT, path); })))
    });

};
