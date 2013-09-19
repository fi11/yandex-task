modules.define('i-bem__dom', ['jquery', 'dom'], function(provide, $, dom, BEMDOM) {


	BEMDOM.decl('bug', {

		onSetMod : {

			'js' : {
				'inited' : function() {

					console.log('block bug init');
				}
			}
		}
	});

	provide(BEMDOM);

});