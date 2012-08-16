steal('can/model')
.then(function(){


    can.Model("CamionesenEspera",{
        //findAll : 'GET /transaccions',
        findAll : 'GET /slim_php/backend_vitco/camionesenespera'
        /*models  : function(data){
            return data.items;
        }*/
    }, {}),
    can.Model("Totales",{
        //findAll : 'GET /transaccions',
        getTotal: function() {
            return $.get('/slim_php/backend_vitco/camionesenespera/volumen/total')
        }
    }
    , {})

})