Package.describe({
    name: 'agoraforum:core',
    version: '0.0.7',
    summary: 'Graph-based forum',
    git: 'https://github.com/Agora-Project/agora-meteor',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    both = ['client', 'server']

    api.versionsFrom('1.1.0.3');

    api.addFiles([
        'client/detailedView/detailedView.html',
        'client/detailedView/detailedView.js',
        'client/detailedView/detailedView.css'
      ], 'client');

    api.addFiles([
        'client/subscribe.js',
        'client/users.html',
        'client/users.js',
        'client/data.js',
        'client/templates.html',
        'client/graph.js',
        'client/navigation.js',
        'client/main.css'
      ], 'client');

    api.addAssets([
        'public/agoraforum.png'
    ], 'client');

    api.addFiles([
        'lib/schemas/post.js',
        'lib/schemas/link.js',
        'lib/schemas/vote.js',
        'routes.js'
    ], both);

    api.addFiles([
        'server/initial-data.js',
        'server/methods.js',
        'server/permits.js',
        'server/publish.js',
        'server/users.js'
    ], 'server');

    api.use([
        'session',
        'templating',
        'reactive-var',
        'ui',
        'd3js:d3@3.5.5',
        'zodiase:mdl@1.0.2'
    ], 'client');

    api.use([
        'ecmascript@0.6.0',
        'iron:router@1.0.0',
        'aldeed:collection2@2.3.3',
        'matb33:collection-hooks@0.7.13',
        'accounts-base',
        'alanning:roles@1.2.13'
    ], both);
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('agoraforum:core', ['client', 'server']);
});
