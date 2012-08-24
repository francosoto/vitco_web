steal(
    'can/control/control.js',
    'can/view/ejs',
    'vitco_web/usuarios/handler/usuarios.css',
    'vitco_web/config.js',
    'sigma/tabla',
    //'vitco_web/fixtures/fixtures.js',
    'vitco_web/usuarios/alta/alta.js',
    'vitco_web/models/usuario.js')
.then(
    function(){
        
        can.Control("UsuariosWeb",{
            defaults: {
                user: undefined
            }
        },{
            'init': function( element , options ) {
                this.element.html(can.view(url+'usuarios/handler/main.ejs'));
                this.tabla = new Tabla("#tabla_usuarios",{
                    head: url + 'usuarios/tabla/head.ejs',
                    model: User,
                    row: url + 'usuarios/tabla/tabla.ejs',
                    tableStyle: 'simple striped bordered',
                    paginate: {
                        perPage: 5,
                        maxIndex: 5
                    }
                });
                this.alta = new AltaUsuario('#alta_usuarios')
            },
            "ul.nav li click": function(el) {
                if (!el.hasClass('active')) {
                    var toTab = this.element.find('div.tabbable ul.nav li.active').find('a').attr('href')
                    var toUntab = el.find('a').attr('href')
                    this.applyTab(toTab,toUntab)
                }
            },
            'applyTab': function(toTab,toUntab) {
                this.element.find('div.tabbable ul.nav li.active').removeClass('active');
                this.element.find('div.tab-content div.active').removeClass('active');
                this.element.find('div.tab-content div#'+toUntab).addClass('active');
                this.element.find('div.tabbable ul.nav li a[href='+toUntab+']').parent('li').addClass('active');
            }
        })
    }
);

