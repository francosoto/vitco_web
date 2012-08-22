steal(
    'can/control/control.js',
    'can/view/ejs',
    //'vitco_web/fixtures/fixtures.js',
    'vitco_web/models/usuario.js',
    'vitco_web/usuarios/handler/usuarios.css',
    'vitco_web/config.js')
.then(
    function(){
        
        can.Control("AltaUsuario",{
            defaults: {
                user: undefined
            }
        },{
            'init': function( element , options ) {
                this.element.html(can.view(url+'usuarios/alta/alta.ejs'));
            }
        })
    }
);

