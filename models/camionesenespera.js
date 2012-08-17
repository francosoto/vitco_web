steal('can/model')
.then(function(){


    can.Model("Camionesenespera",{
        //findAll : 'GET /transaccions',
        findAll : 'GET /slim_php/backend_vitco/camionesenespera'
        /*models  : function(data){
            return data.items;
        }*/
    }, {}),
    can.Model("Totales_espera",{
        //findAll : 'GET /transaccions',
        getTotal: function() {
            return $.get('/slim_php/backend_vitco/camionesenespera/volumen/total')
        }
    }
    , {})

})