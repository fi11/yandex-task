'use strict';

var FS = require('fs'),
    Q = require('q'),
    PATH = require('bem/lib/path');

exports.API_VER = 2;

exports.techMixin = {

	getBuildSuffixesMap: function() {

        return {css: ['css', 'styl']}
    },
	
	getBuildResultChunk: function(relPath, path, suffix) {
				
        return '@import url("' + relPath + '");\n';
    }
	 
};