({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
	'x-ua-compatible': 'IE=EmulateIE7, IE=edge',
    head: [
        { elem: 'css', url: '_rating.css', ie: false },
	    { elem: 'css', url: '_rating.ie.css', ie: 'lt IE 9' },
	    { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
	    {
		    block: 'line',
		    content: [
			    { block: 'rating', value: '45', mods: { theme: 'yandex-task'} },
			    {
				    block: 'rating',
				    mods: { theme: 'yandex-task', interactive: true }
			    },
			    {
				    block: 'rating',
				    mods: { theme: 'yandex-task', interactive: true , 'with-help': true },
				    text: 'Выберите оценку',
				    name: 'rating2',
				    options: [
					    { val: 1, text: 'vary bad'},
					    { val: 2, text: 'bad'},
					    { val: 3, text: 'so-so'},
					    { val: 4, text: 'good'},
					    { val: 5, text: 'grate'},
				    ]
			    }
	        ]
	    },

        { elem: 'js', url: '_rating.js' }
    ]
})
