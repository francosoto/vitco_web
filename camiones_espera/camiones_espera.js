/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function aleatorio(inferior,superior){ 
	var numPosibilidades = superior - inferior;
	var aleat = Math.random() * numPosibilidades; 
	aleat = Math.round(aleat);
	return parseInt(inferior) + aleat; 
} 

steal(
    'can/control/control.js',
    'can/view/ejs',
    'vitco_web/config.js',
    //'vitco_web/fixtures/fixtures.js',
    'vitco_web/models/camionesenespera.js',
    'vitco_web/home/home.css')
.then(
    function(){
        
        can.Control("Camiones_espera",{
            'init': function( element , options ) {
                this.element.html(can.view(url+'camiones_espera/tabla_camionesenespera.ejs'))
		CamionesenEspera.findAll({},
                    function(resumen) {
                        $('table.transacciones tbody').html(can.view(url+'camiones_espera/camionesenespera.ejs',resumen))
                    }
                );
                /*Totales.findAll({},
                    function(resumen_cuenta) {
                        var c = 0;
                        for(x=0;resumen_cuenta.count_gasoil.length > x; x++){
                            c += resumen_cuenta.count_gasoil[x];
                        }
                        $('div#totales').html(can.view(url+'home/totales.ejs',{count_c: resumen_cuenta.count_camiones.length, vol_d: c}))
                    }
                )*/
                    
                   Totales_espera.getTotal({}).then(
                   
                    function(resumen_cuenta) {
                        //console.log(resumen_cuenta)
                        
                        /*window.console = {log:function(msg){
                            alert(msg)
                        }}*/
                        /*var c = 0;
                        for(x=0;resumen_cuenta.count_gasoil.length > x; x++){
                            c += resumen_cuenta.count_gasoil[x];
                        }*/
                        $('div#totales').html(can.view(url+'camiones_espera/totales.ejs',{count_c: resumen_cuenta[0].cantidad, vol_d: resumen_cuenta[0].volumen}))
                    }
                )


             }
        })
    }
);
