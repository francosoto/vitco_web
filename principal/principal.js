/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


steal(
    'can/control/control.js',
    'can/view/ejs',
    'vitco_web/topbar/topbar.js',
    'vitco_web/principal/principal.css',
    'vitco_web/home/home.js')
.then(
    function(){
        
        can.Control("PrincipalWeb",{
            defaults: {
                user: undefined
            }
        },{
            init: function( element , options ) {
                if(this.options.user != undefined)
                {
                    this.element.html(can.view(url+'principal/main.ejs'))
                    this.topbar = new TopBar("#header",{user: this.options.user});
                    this.home = new Home("#content")
                }
                else
                {
                    console.log("error")
                }
                
            },
            "a.salir click": function(){
                this.topbar.destroy();
                this.home.destroy();
                can.Control.prototype.destroy.call( this );
                new LoginWeb( '#mainPage', {} );
            }
        })
    }
);

