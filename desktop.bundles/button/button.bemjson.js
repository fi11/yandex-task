({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
	'x-ua-compatible': 'IE=EmulateIE7, IE=edge',
    head: [
        { elem: 'css', url: '_button.css', ie: false },
	    { elem: 'css', url: '_button.ie.css', ie: 'lt IE 9' },
	    { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
	    {
		    block: 'line',
		    content: [
			    'text',
			    { block: 'button', mods: { theme: 'yandex-task', sprite: true }, text: 'Кнопка' }
	        ]
	    },
        { elem: 'js', url: '_button.js' }
    ]
})
