/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


steal(
    'can/control/control.js',
    'can/view/ejs',
    'vitco_web/config.js',
    'bootstrap/js/bootstrap-dropdown.js')
.then(
    function(){
        
        can.Control("TopBar",{
            defaults: {
                user: undefined
            }
        },{
            'init': function( element , options ) {
                var self = this
                self.element.html(can.view(url+'topbar/topbar.ejs', {base_url: url+'images/',username: self.options.user.username}))
                $('.dropdown-toggle').dropdown()
            },
            'a.brand click': function(element, options){
                    new Home("#content")
            }
        })
    }
);

