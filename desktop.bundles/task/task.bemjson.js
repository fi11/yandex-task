({
    block: 'page',
    title: 'Yandex Task Page',
    favicon: '/favicon.ico',
	'x-ua-compatible': 'IE=EmulateIE7, IE=edge',
	mods: { layout: '980', normalized: 'true', 'trailer': 5 },
    head: [
        { elem: 'css', url: '_task.css', ie: false },
	    { elem: 'css', url: '_task.ie.css', ie: 'lt IE 9' },
	    { elem: 'js', url: '//yandex.st/jquery/1.10.2/jquery.js'},
	    { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
	    {
		    block: 'inline-hero',
		    mods: { theme: 'yandex-task'},
		    mix: { block: 'background'},
	        title: 'Задание разработчика интерфейсов',
		    text: 'Меня зовут Павел. Я freelance веб-разработчик и очень хотел бы заниматься своим любимым делом в команде Яндекса'
	    },
	    {
		    block: 'arguments',
		    mods: { cols: 3 },
		    mix: { block: 'background', mods: { color: 'light-gray' } },
		    content: [
			    { elem: 'item', title: '2011 - начало', content: 'Разработка конструктора, для быстрого создания интернет магазинов для участников проекта Бизнес молодость. Дизайн и менеджмент разработки сайтов.'},
			    { elem: 'item',  title: '2012 - backend', content: 'Любовь с первого взгляда в Python\\Django. Полная разработка сайтов с нуля: дизайн, верстка, бекенд, размещение и администрирование в облаке AWS, отказ от photoshop'},
			    { elem: 'item',  title: '2013 - frontend', content: 'После долгих ухаживаний, BEM раскрылся и случилась вторая любовь, на этот раз к BEM и фронтенд разработке. Начало использования полного стэка BEM техналогий.'}
		    ]
	    },
	    {
		    block: 'inline-hero',
		    title: 'Блок rating',
		    text: 'Блок "rating" показывает текущий рейтинг, при модификаторе "interactive" позволяет выставить оценку от 1 до 5. При отключенном javascript деградирует до обычного radio.'
	    },
	    {
		    block: 'example',
		    content:
		        {
			        block: 'row',
			        mods: { cols: 3},
			        content:[
				        {
					        elem: 'item',
					        elemMods: { size: '1-3', theme: 'centred-island', color: '555' } ,
					        content: { block: 'rating', value: '35', mods: { theme: 'yandex-task'} }
				        },
				        {
					        elem: 'item',
					        elemMods: { size: '1-3', theme: 'centred-island' } ,
					        content: { block: 'rating', name: 'rating1',  mods: { interactive: true, theme: 'yandex-task'} }
				        },
				        {
					        elem: 'item',
					        elemMods: { size: '1-3', theme: 'centred-island' } ,
					        content:
					            {
						            block: 'rating',
						            name: 'rating2',
						            mods: { interactive: true, 'with-help': true, theme: 'yandex-task'},
						            text: 'Выберите оценку',
						            options: [
							            { val: 1, text: 'vary bad'},
							            { val: 2, text: 'bad'},
							            { val: 3, text: 'so-so'},
							            { val: 4, text: 'good'},
							            { val: 5, text: 'grate'},
						            ]
					            }
				        }
		            ]
		        }
	    },
	    {
		    block: 'inline-hero',
		    title: 'Блок progress',
		    text: 'Блок "progress" показывает процент завершенности, может быть любой длины и легко меняет скин. Желателен дизайн на чистом css, но также можно использовать спрайт.'
	    },
	    {
		    block: 'example',
		    content:
		        {
			        block: 'row',
			        mods: { cols: 3},
			        content:[
				        {
					        elem: 'item',
					        elemMods: { size: '2-3', theme: 'centred-island', color: '555' } ,
					        content: { block: 'progress', mods: { theme: 'yandex-task', size: 'full', 'with-text': true }, text: '', content: '0%' }
				        },
				        {
					        elem: 'item',
					        elemMods: { size: '1-3', theme: 'centred-island' } ,
					        content: { block: 'progress', mods: { theme: 'yandex-task', size: 'default', 'with-text': true }, width: '25%', content: '25%' }
				        }
		            ]
		        }
	    },
	    {
		    block: 'inline-hero',
		    title: 'Блок button',
		    text: 'Слегка расширенный блок button из библиотеки bem-components. При модификаторе sprite, дизайн легко меняется спрайтами.'
	    },
	    {
		    block: 'example',
		    content:
		    {
			    block: 'row',
			    mods: { cols: 3},
			    content:[
				    {
					    elem: 'item',
					    elemMods: { size: '1-3', theme: 'centred-island', color: '555' } ,
					    content: { block: 'button', mods: { theme: 'yandex-task', sprite: true }, text: 'Кнопка' }
				    },
				    {
					    elem: 'item',
					    elemMods: { size: '2-3', theme: 'centred-island' } ,
					    content: { block: 'button', mods: { theme: 'yandex-task', sprite: true, full: true  }, text: 'Кнопка во всю ширину' }
				    }
			    ]
		    }
	    },
        { elem: 'js', url: '_task.js' }
    ]
})
