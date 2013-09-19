var INHERIT = require('inherit'),
    css = require('./css'),
    U = require('../util'),
    environ = require('bem-environ'),
    PATH = require('path'),
    STYLUS = require('stylus'),
    IFIE = environ.getLibPath('if-ie'),
    MIXINS = environ.getLibPath('bem-stylus-lib');


exports.Tech = INHERIT(css.Tech, {

    process: function(path, out) {
        // NOTE: Passing path of source file into process(). This could lead to
        // incorrect paths in the resulting file if it will be stored in another
        // directory then source file.
        var res = this.createFile(path, 'include').process(path);
        res = compileStyl(res);
        return U.writeFile(out, this.opts.minimize? this.minimize(res) : res);
     },

    File: exports.File = INHERIT(css.File, {  
        processInclude: function(path, content) {
            var parsed = content || this.content;

            for(var i = 0; i < parsed.length; i++) {
                var item = parsed[i];

                if (typeof item === 'string') continue;

                if (item.type === 'include') {

                    var comments = this.tech.opts.comments;
                    parsed[i] = (comments ? '/* ' + item.url + ' begin */\n' : '') +
                        ( PATH.extname(item.url)==='.css'? 
                            '@css{'+this.child("include", item.url).process(path)+'}': 
                            this.child('include', item.url).process(path) ) +
                        (comments ? '\n/* ' + item.url + ' end */\n' : '');
                    continue;
                }

                parsed[i] = this.child(item.type, item.url).process(path);
            }

            return parsed.join('')
        }
    })


});


function compileStyl(res) {

        var compiledCss = res;
        STYLUS(res)
            .include(require('nib').path)
            .include(IFIE)
            .include(MIXINS)
            .import('nib')
            .import('if-ie')
            .import('vars')
            .import('utils')
            .define('ie', true)
            .render(function(err, css) {

            if (err) {

                console.log(res);
                console.log('-----Error-----');
                console.log(err);

            }

            compiledCss = css;
        });
        return compiledCss;
};