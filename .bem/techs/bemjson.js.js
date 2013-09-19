var myPath = require('bem/lib/path'),
    Template = require('bem/lib/template');

exports.techModule = module;

exports.newFileContent = function (vars) {

    return Template.process([
        "({",
        "    block: 'page',",
        "    title: '{{bemBlockName}}',",
        "    'x-ua-compatible': 'IE=EmulateIE7, IE=edge',",
        "    head: [",
        "        { elem: 'css', url: '_{{bemBlockName}}.css', ie: false },",
		"        { elem: 'css', url: '_{{bemBlockName}}.ie.css', ie: 'lt IE 9' }",
        "    ],",
        "    content: [",
        "        'block content'",
        "        { elem: 'js', url:'_{{bemBlockName}}.js' },",
        "    ]",
        "})"], vars);
};
