/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//if (!Array.prototype.indexOf)
//{
//  Array.prototype.indexOf = function(elt /*, from*/)
//  {
//    var len = this.length >>> 0;
//
//    var from = Number(arguments[1]) || 0;
//    from = (from < 0)
//         ? Math.ceil(from)
//         : Math.floor(from);
//    if (from < 0)
//      from += len;
//
//    for (; from < len; from++)
//    {
//      if (from in this &&
//          this[from] === elt)
//        return from;
//    }
//    return -1;
//  };
//}

steal('can/model')
.then(function(){
    

    can.Model("Camionescargados",{
        //findAll : 'GET /transaccions',
        findAll : 'GET /slim_php/backend_vitco/camionescargados'
        /*models  : function(data){
            return data.items;
        }*/
    }, {}),
    can.Model("Totales_cargados",{
        //findAll : 'GET /transaccions',
        getTotal: function() {
            return $.get('/slim_php/backend_vitco/camionescargados/volumen/total')
        }
        /*getTotal : function(params,success,error){
            return $.ajax({
                url: '/slim_php/backend_vitco/camionescargados/volumen/total'
            })
        }*/
       /* ,models: function(data) {
            return data[0]
        }*/
        /*models  : function(data){
            var count_c = new Array(), acum_g = new Array();
            $.each(data.items,function(i,it){
                if(count_c.indexOf(it.patente_camion) < 0){
                    count_c.push(it.patente_camion)
                }
                acum_g.push(it.vol_despachado)
            })
            //alert(count_c)
            return {count_camiones: count_c, count_gasoil: acum_g};
        }*/
    }   
    , {})
    
})