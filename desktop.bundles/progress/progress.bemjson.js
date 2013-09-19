({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
	'x-ua-compatible': 'IE=EmulateIE7, IE=edge',
    head: [
        { elem: 'css', url: '_progress.css', ie: false },
	    { elem: 'css', url: '_progress.ie.css', ie: 'lt IE 9' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
	    {
		    block: 'line',
		    content: [
			    { block: 'progress', mods: { theme: 'yandex-task', size: 'default'}, text: '' },
			    { block: 'progress', mods: { theme: 'yandex-task', size: 'default', 'with-text': true }, width: '25%', content: '25%' },
	        ]
	    },

        { elem: 'js', url: '_progress.js' }
    ]
})
