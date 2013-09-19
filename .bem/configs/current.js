module.exports = {
    libraries : require('bem').util.extend(require('../repo.db'), {
        'bem-components': {
		    type     : 'git',
		    url      : 'git://github.com/bem/bem-components.git',
		    npmPackages: false
	    },
        'bem-core': {
		    type     : 'git',
		    url      : 'https://github.com/pavelsilinw/bem-core.git',
		    npmPackages: true
	    },
        'bem-common-lib': {
		    type     : 'git',
		    url      : 'https://github.com/pavelsilinw/bem-common-lib.git',
		    npmPackages: false
	    },
        'bem-interface-lib': {
		    type     : 'git',
		    url      : 'https://github.com/pavelsilinw/bem-interface-lib.git',
		    npmPackages: false
	    },
        'bem-landing-lib': {
		    type     : 'git',
		    url      : 'https://github.com/pavelsilinw/bem-landing-lib.git',
		    npmPackages: false
	    },
	    'bem-stylus-lib': {
		    type     : 'git',
		    url      : 'https://github.com/pavelsilinw/bem-stylus-lib.git',
		    npmPackages: false
	    },
	    'if-ie': {
		    type     : 'git',
		    url      : 'https://github.com/kizu/if-ie.styl.git',
		    npmPackages: false
	    }
    })
}