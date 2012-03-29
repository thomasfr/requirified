(function () {

    var paths = {
        "Handlebars":"handlebars/1.0.0.beta.6/handlebars",
        "underscore":"underscorejs/1.3.1/underscore",
        "Backbone":"backbonejs/0.9.2/backbone",
        "Bootstrap":"bootstrap/2.0.2/bootstrap"
    };

    require.config({
        paths:paths
    });

    require(['$', 'Handlebars', 'underscore', 'Backbone', 'Bootstrap'], function ($, Handlebars, _, Backbone, Bootstrap) {
        console.log("jQuery", $);
        console.log('Handlebars', Handlebars);
        console.log('Underscore', _);
        console.log('Backbone', Backbone);
        console.log('Bootstrap', Bootstrap); // is actually jQuery
        console.log("Bootstrap === $", Bootstrap === $);
        console.log("window.$", window.$);

        var pathsArray = [];
        var pathString = '<div class="configured-paths"><h1>Added with jQuery</h1>';
        _.each(paths, function (path) {
            pathString += '<div>' + path + '</div>';
            pathsArray.push(path);
        });
        $('body').append(pathString + '</div>');

        var pathItemPartialSource = $('script[data-partial=path-item]').first().html();
        Handlebars.registerPartial('path-item', pathItemPartialSource);

        var pathListTemplateSource = $('script[data-template=path-list]').first().html();
        var pathListTemplate = Handlebars.compile(pathListTemplateSource);
        $('body').append(pathListTemplate({paths:pathsArray}));
    });

}());