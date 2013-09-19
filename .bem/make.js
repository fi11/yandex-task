/* jshint node:true */
/* global MAKE */

require('bem-environ/lib/nodes');

//process.env.YENV = 'production';
//process.env.XJST_ASYNCIFY = 'yes';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/,

    libraries: [
        'bem-core @ 0e63a7b888c60805e244dfc1746c1919f208b702',
        'bem-components @ 231b03867325a51a33ae6bdd300b12946944a4de',
        'bem-stylus-lib',
        'bem-common-lib',
        'bem-interface-lib',
        'bem-landing-lib',
	    'if-ie'
    ]

});


MAKE.decl('BundleNode', {

    getTechs: function() {


        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'browser.js+bemhtml',
            'css',
            'ie.css',
            'html'

        ];

    },
    'create-css-optimizer-node': function(tech, sourceNode, bundleNode) {
        return this.createBorschikOptimizerNode('styl', sourceNode, bundleNode);
    },

    'create-ie.css-optimizer-node': function(tech, sourceNode, bundleNode) {

        return this.createBorschikOptimizerNode('ie.styl', sourceNode, bundleNode);
    },

    'create-browser.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);
    }

});

MAKE.decl('BundlesLevelNode', {
    
    buildMergedBundle: function() {
        return false;
    },

    mergedBundleName: function() {
        return 'common';
    }

});