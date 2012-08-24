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
    'sigma/filtro',
    'jquery-ui/themes/base/jquery.ui.core.css',
    'jquery-ui/themes/base/jquery.ui.theme.css',
    'jquery-ui/themes/base/jquery.ui.datepicker.css',
    'jquery-ui/jquery-1.8.0.js',
    'vitco_web/models/camionescargados.js',
    'vitco_web/home/home.css')
    .then(
    'jquery-ui/ui/jquery.ui.core.js',
    'jquery-ui/ui/jquery.ui.widget.js',
    'jquery-ui/ui/jquery.ui.datepicker.js')
.then('jquery-ui/ui/jquery.ui.datepicker-es.js',
    function(){
        
        can.Control("Camiones_cargados",{
            'init': function( element , options ) {
                this.element.html(can.view(url+'camiones_cargados/tabla_camiones_cargados.ejs'))

                new Filtro('div#filtro div#mifiltro',{
                    filterType: 'inline',
                    filterData: [
                        {
                            label: 'Fecha',
                            value: 'fecha',
                            type: 'input'
                        },
                        {
                            label: 'Remito',
                            value: 'remito',
                            type: 'input'
                            //,selectOptions: [{value: 1, text: 'Ingles'},{value: 2, text: 'Frances'}]
                        },
                        {
                            label: 'Número Tránsito',
                            value: 'nro_transito',
                            type: 'input'
                        },
                        {
                            label: 'Cliente',
                            value: 'cliente',
                            type: 'input'
                        },                        
                        {
                            label: 'Volumen despachado',
                            value: 'vol_despachado',
                            type: 'input'
                        },
                        {
                            label: 'Chofer',
                            value: 'chofer',
                            type: 'input'
                        },
                        {
                            label: 'Patente Camión',
                            value: 'patente_camion',
                            type: 'input'
                        },
                        {
                            label: 'Patente acoplado',
                            value: 'patente_acoplado',
                            type: 'input'
                        },
                        {
                            label: 'Transportista',
                            value: 'transportista',
                            type: 'input'
                        },
                        {
                            label: 'Domicilio Entrega',
                            value: 'dom_entrega',
                            type: 'input'
                        },  
                    ],
                    filterFunction: function(path) {
                        console.log(path)
                        Camionescargados.findCamionesFiltrados(path).then(function(result){
                            console.log(result)
                            $('table.transacciones tbody').html(can.view(url+'camiones_cargados/camionescargados.ejs',result))
                        })
                    }

                })


                $('input[filter-field="fecha"]').datepicker($.datepicker.regional['es']);

		Camionescargados.findAll({},
                    function(resumen) {
                        //console.log(resumen)
                        $('table.transacciones tbody').html(can.view(url+'camiones_cargados/camionescargados.ejs',resumen))
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
                    
                Totales_cargados.getTotal({}).then(
                   
                    function(resumen_cuenta) {
                        //console.log(resumen_cuenta)
                        
                        /*window.console = {log:function(msg){
                            alert(msg)
                        }}*/
                        /*var c = 0;
                        for(x=0;resumen_cuenta.count_gasoil.length > x; x++){
                            c += resumen_cuenta.count_gasoil[x];
                        }*/
                        $('div#totales').html(can.view(url+'camiones_cargados/totales.ejs',{count_c: resumen_cuenta[0].cantidad, vol_d: resumen_cuenta[0].volumen}))
                    }
                )


             }
        })
    }
);

