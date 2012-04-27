(function () {

    var paths = {
        "Handlebars": "../handlebars/1.0.0.beta.6/handlebars",
        "underscore": "../underscorejs/1.3.3/underscore",
        "Backbone":   "../backbonejs/0.9.2/backbone",
        "Bootstrap":  "../bootstrap/2.0.2/bootstrap",
        "noty":       "../noty/1.1.1/jquery.noty",
        "jquery":     "../jquery/1.7.2/jquery"
    };

    require.config({
        paths: paths
    });

    require(['jquery', 'Handlebars', 'underscore', 'Backbone', 'Bootstrap', 'noty'], function ($, Handlebars, _, Backbone, Bootstrap, noty) {
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
            pathString += '<div class="path">' + path + '</div>';
            pathsArray.push(path);
        });
        $('#container').append(pathString + '</div>');

        var pathItemPartialSource = $('script[data-partial=path-item]').first().html();
        Handlebars.registerPartial('path-item', pathItemPartialSource);

        var pathListTemplateSource = $('script[data-template=path-list]').first().html();
        var pathListTemplate = Handlebars.compile(pathListTemplateSource);
        $('#container').append(pathListTemplate({paths: pathsArray}));

        $('.path').on('click', function () {
            noty({
                text:             'You clicked "' + $(this).html() + '"',
                theme:            'noty_theme_twitter',
                closable:         true,
                closeOnSelfClick: true,
                closeButton:      true,
                timeout:          2000,
                layout:           "topRight"
            });
        });
    });

}());