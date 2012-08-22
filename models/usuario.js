/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

steal('can/model')
.then(function(){
    

    can.Model("User",{
        findAll : 'GET /slim_php/backend_vitco/usuarios',
        findOne : 'GET /slim_php/backend_vitco/usuarios/{id}',
        //create  : 'POST /users',
        addUsuario  : function(params, success, error){
            return $.ajax({
                url: '/slim_php/backend_vitco/usuarios',
                type: 'POST',
                data: JSON.stringify(params)
            })
        },
        //update  : 'PUT /users/{id}',
        updateUsuario  : function(params, success, error){
            return $.ajax({
                url: '/slim_php/backend_vitco/usuarios/'+params.id,
                type: 'PUT',
                data: JSON.stringify(params)
            })
        },
        //destroy : 'DELETE /users/{id}',
        deleteUsuario  : function(params, success, error){
            return $.ajax({
                url: '/slim_php/backend_vitco/usuarios/'+params.id,
                type: 'DELETE',
                data: JSON.stringify(params)
            })
        },
        autenticar: function(params, success, error){
            return $.ajax({
                url: '/slim_php/backend_vitco/login',
                type: 'POST',
                data: JSON.stringify(params)
            })
        },
        getTabla: function(params, success, error){
            return $.ajax({
                url: '/slim_php/backend_vitco/usuarios/tabla',
                type: 'POST',
                data: JSON.stringify(params)
            })
        }
        /*,models  : function(data){
            console.log(data)
            return {
                items: data,
                count: data.length
            }
        }*/
    }, {})
    

})
