require.config({
    urlArgs: "v=" + requirejs.s.contexts._.config.config.site.version,
    packages: [{
            name: 'moment',
            location: '/zuihou-center/static/libs/moment',
            main: 'moment'
        }],
    //在打包压缩时将会把include中的模块合并到主文件中
    include: ['css', 'layer', 'toastr', 'fast', 'backend', 'table', 'form', 'dragsort', 'drag', 'drop', 'addtabs', 'selectpage'],
    paths: {
        'lang': "empty:",
        'form': 'require-form',
        'table': 'require-table',
        'upload': 'require-upload',
        'validator': 'require-validator',
        'drag': 'jquery.drag.min',
        'drop': 'jquery.drop.min',
        'echarts': 'echarts.min',
        'echarts-theme': 'echarts-theme',
        'adminlte': 'adminlte',
        'bootstrap-table-commonsearch': 'bootstrap-table-commonsearch',
        'bootstrap-table-template': 'bootstrap-table-template',
        //
        // 以下的包从bower的libs目录加载
        'jquery': '/zuihou-center/static/libs/jquery/dist/jquery.min',
        'bootstrap': '/zuihou-center/static/libs/bootstrap/dist/js/bootstrap.min',
        'bootstrap-datetimepicker': '/zuihou-center/static/libs/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min',
        'bootstrap-select': '/zuihou-center/static/libs/bootstrap-select/dist/js/bootstrap-select.min',
        'bootstrap-select-lang': '/zuihou-center/static/libs/bootstrap-select/dist/js/i18n/defaults-zh_CN',
        'bootstrap-table': '/zuihou-center/static/libs/bootstrap-table/dist/bootstrap-table.min',
        'bootstrap-table-export': '/zuihou-center/static/libs/bootstrap-table/dist/extensions/export/bootstrap-table-export.min',
        'bootstrap-table-mobile': '/zuihou-center/static/libs/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile',
        'bootstrap-table-lang': '/zuihou-center/static/libs/bootstrap-table/dist/locale/bootstrap-table-zh-CN',
        'tableexport': '/zuihou-center/static/libs/tableExport.jquery.plugin/tableExport.min',
        'dragsort': '/zuihou-center/static/libs/dragsort/jquery.dragsort',
        'qrcode': '/zuihou-center/static/libs/jquery-qrcode/jquery.qrcode.min',
        'sortable': '/zuihou-center/static/libs/Sortable/Sortable.min',
        'addtabs': '/zuihou-center/static/libs/jquery-addtabs/jquery.addtabs',
        'slimscroll': '/zuihou-center/static/libs/jquery-slimscroll/jquery.slimscroll',
        'summernote': '/zuihou-center/static/libs/summernote/dist/lang/summernote-zh-CN.min',
        'validator-core': '/zuihou-center/static/libs/nice-validator/dist/jquery.validator',
        'validator-lang': '/zuihou-center/static/libs/nice-validator/dist/local/zh-CN',
        'plupload': '/zuihou-center/static/libs/plupload/js/plupload.min',
        'toastr': '/zuihou-center/static/libs/toastr/toastr',
        'jstree': '/zuihou-center/static/libs/jstree/dist/jstree.min',
        'layer': '/zuihou-center/static/libs/layer/src/layer',
        'cookie': '/zuihou-center/static/libs/jquery.cookie/jquery.cookie',
        'cxselect': '/zuihou-center/static/libs/jquery-cxselect/js/jquery.cxselect',
        'template': '/zuihou-center/static/libs/art-template/dist/template-native',
        'selectpage': '/zuihou-center/static/libs/selectpage/selectpage',
    },
    // shim依赖配置
    shim: {
        'bootstrap': ['jquery'],
        'bootstrap-table': {
            deps: [
                'bootstrap',
//                'css!/zuihou-center/static/libs/bootstrap-table/dist/bootstrap-table.min.css'
            ],
            exports: '$.fn.bootstrapTable'
        },
        'bootstrap-table-lang': {
            deps: ['bootstrap-table'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'bootstrap-table-export': {
            deps: ['bootstrap-table', 'tableexport'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'bootstrap-table-mobile': {
            deps: ['bootstrap-table'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'bootstrap-table-advancedsearch': {
            deps: ['bootstrap-table'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'bootstrap-table-commonsearch': {
            deps: ['bootstrap-table'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'bootstrap-table-template': {
            deps: ['bootstrap-table', 'template'],
            exports: '$.fn.bootstrapTable.defaults'
        },
        'tableexport': {
            deps: ['jquery'],
            exports: '$.fn.extend'
        },
        'slimscroll': {
            deps: ['jquery'],
            exports: '$.fn.extend'
        },
        'adminlte': {
            deps: ['bootstrap', 'slimscroll'],
            exports: '$.AdminLTE'
        },
        'bootstrap-datetimepicker': [
            'moment/locale/zh-cn',
//            'css!/zuihou-center/static/libs/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
        ],
        'bootstrap-select': ['css!/zuihou-center/static/libs/bootstrap-select/dist/css/bootstrap-select.min.css', ],
        'bootstrap-select-lang': ['bootstrap-select'],
        'summernote': ['/zuihou-center/static/libs/summernote/dist/summernote.min', 'css!/zuihou-center/static/libs/summernote/dist/summernote.css'],
//        'toastr': ['css!/zuihou-center/static/libs/toastr/toastr.min.css'],
        'jstree': ['css!/zuihou-center/static/libs/jstree/dist/themes/default/style.css', ],
        'plupload': {
            deps: ['/zuihou-center/static/libs/plupload/js/moxie.min.js'],
            exports: "plupload"
        },
//        'layer': ['css!/zuihou-center/static/libs/layer/build/skin/default/layer.css'],
//        'validator-core': ['css!/zuihou-center/static/libs/nice-validator/dist/jquery.validator.css'],
        'validator-lang': ['validator-core'],
//        'selectpage': ['css!/zuihou-center/static/libs/selectpage/selectpage.css'],
    },
    baseUrl: requirejs.s.contexts._.config.config.site.cdnurl + 'static/js/', //资源基础路径
    map: {
        '*': {
            'css': '/zuihou-center/static/libs/require-css/css.min'
        }
    },
    waitSeconds: 30,
    charset: 'utf-8' // 文件编码
});

require(['jquery', 'bootstrap'], function ($, undefined) {
    //初始配置
    var Config = requirejs.s.contexts._.config.config;
    //将Config渲染到全局
    window.Config = Config;
    // 配置语言包的路径
    var paths = {};
    paths['lang'] = 'lang';
    //如果语言包想要动态加载，则使用下面一行
    //paths['lang'] = Config.moduleurl + 'lang?callback=define&controllername=' + Config.controllername;
    // 避免目录冲突
    paths['backend/'] = 'backend/';
    require.config({paths: paths});

    // 初始化
    $(function () {
        require(['fast'], function (Fast) {
            require(['backend'], function (Backend) {
                //加载相应模块
                if (Config.jsname) {
                    require([Config.jsname], function (Controller) {
                        Controller[Config.actionname] != undefined && Controller[Config.actionname]();
                    }, function (e) {
                        console.error(e);
                        // 这里可捕获模块加载的错误
                    });
                }
            });
        });
    });
});
