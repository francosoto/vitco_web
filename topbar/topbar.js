/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


steal(
    'can/control/control.js',
    'can/view/ejs',
    'vitco_web/config.js',
    'vitco_web/models/menu.js',
    'bootstrap/js/bootstrap-dropdown.js',
    'vitco_web/camiones_cargados/camiones_cargados.js',
    'vitco_web/camiones_espera/camiones_espera.js')
.then(
    function(){
        
        can.Control("TopBar",{
            defaults: {
                user: undefined
            }
        },{
            'init': function( element , options ) {
                var self = this
                $.when(Menu.findAll({id: options.user.id_perfil})).then(
                    function(resumen) {
                        console.log(resumen)
                        self.element.html(can.view(url+'topbar/topbar.ejs', {base_url: url+'images/',username: self.options.user.usuario, data: resumen}))
                        $('.dropdown-toggle').dropdown()
                    }
                );/*.error(
                    function(error){
                        console.log(error)
                    })*/
            },
            'ul.nav li click': function(element, options){
                var click = element.find('a').attr('href');
                console.log(click)
                switch(click){
                    case '#menu-camionescargados': new Camiones_cargados("#content",{ user: this.options.user}); break;
                    case '#menu-camionesenespera': new Camiones_espera("#content",{ user: this.options.user}); break;
                    //case '#menu-recuperacion-clave': new RecuperacionClave("#content",{ user: this.options.user}); break;
                }
            },
            'a.brand click': function(element, options){
                    new Home("#content")
            }
        })
    }
);

