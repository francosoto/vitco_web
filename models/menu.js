/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

steal('can/model')
.then(function(){


    can.Model("Menu",{
        
        findAll : 'GET /slim_php/backend_vitco/menu/{id}'

    }, {})


})
