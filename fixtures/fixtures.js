steal('can/util/fixture')
.then(function(){
    
 var transaccion = [[1,'0001-00056078',null,null,'53128','2012-01-01','C.A.M.E.S.A.','GASOIL','T20','2345DF',32567,'German Cabral','km 75 campana interseccion autopista 9','GYF 993','EYY 885','Bragagnini Miguel Angel'],
 [2,'0001-00056079',null,null,'53364','2012-01-01','C.A.M.E.S.A.','GASOIL','T20','2345DF',34277,'Neila Jorge Alberto','Yacuiba - Bolivia','GFD 624','GAF 147','Bragagnini Miguel Angel'],
 [3,'0001-00056080',null,null,'53365','2012-01-01','C.A.M.E.S.A.','GASOIL','T20','2345DF',34944,'Ortega Acuña Sergio Ruben','Ruta 9  Camino a Capilla del Señor, Km 2,6 - Campana - Buenos Aires - Argentina','DSE 457','PAO 417','Gemaco SA'],
 [4,'0001-00056081',null,null,'53236','2012-01-01','C.A.M.E.S.A.','GASOIL','T20','2345DF',33548,'Diaz Lemos Rafael Francisco','CT MENDOZA - Parque industrial provincial S/N. Luján de Cuyo - Mendoza','HHA 914','BAV 598','PEREZ CURBELO LOGISTICA S.R.L.'],
 [5,'0001-00056082',null,null,'53237','2012-01-01','C.A.M.E.S.A.','GASOIL','T20','2345DF',32467,'Stachowski Diego Eduardo','Ruta 13 Km. 4,5 Pilar. Proxima a la interseccion de la Autopista Rosario - Cordoba','BHS 120','KAJ 465','PEREZ CURBELO LOGISTICA S.R.L.'],
 [6,'0001-00056083',null,'TR06: 618-R','53238','2012-01-02','Y.P.F.B.','GASOIL','T20','2345DF',35684,'Ortega Cristian Ramon','Central Termoelectrica Modesto Maranzana - Ruta Nacional Nº 8 Km 607 - Rio Cuarto - Córdoba - Argentina','HAG 478','CHA 324','Logistica Masa S.R.L.'],
 [7,'0001-00056140',null,null,'52239','2012-01-02','C.A.M.E.S.A.','GASOIL','T20','2345DF',36781,'Medina Mariano Joaquin','Central Termoelectrica Modesto Maranzana - Ruta Nacional Nº 8 Km 607 - Rio Cuarto - Córdoba - Argentina','ABC 674','NER 412','Logistica Masa S.R.L.'],
 [8,'0001-00056083',null,null,'53240','2012-01-02','C.A.M.E.S.A.','GASOIL','T20','2345DF',32542,'Paladini Carlos Marcelo','Ruta 13 Km. 4,5 Pilar. Proxima a la interseccion de la Autopista Rosario - Cordoba','GAY 478','LAM 913','Logistica Masa S.R.L.'],
 [9,'0001-00056083',null,'TR06: 618-R','53241','2012-01-02','Y.P.F.B.','GASOIL','T20','2345DF',34102,'Mamani Perez Zemion','CT MENDOZA - Parque industrial provincial S/N. Luján de Cuyo - Mendoza','PUT 879','TRA 627','Gemaco SA'],
 [10,'0001-00056083',null,null,'53242','2012-01-03','C.A.M.E.S.A.','GASOIL','T20','2345DF',30214,'Cabral Luis Alberto','Ruta 9  Camino a Capilla del Señor, Km 2,6 - Campana - Buenos Aires - Argentina','KLA 478','QAS 172','Logistica Masa S.R.L.'],
 [11,'0001-00056083',null,null,'53243','2012-01-03','C.A.M.E.S.A.','GASOIL','T20','2345DF',33214,'Stachowski Diego Eduardo','Ruta 9  Camino a Capilla del Señor, Km 2,6 - Campana - Buenos Aires - Argentina','BHS 120','KAJ 465','PEREZ CURBELO LOGISTICA S.R.L.']]
    
    var control = new Array()
    
    for (i=0; i < transaccion.length; i++) {
        control.push({
            id: i+1,
            remito: transaccion[i][1], 
            remesa: transaccion[i][2], //no
            nro_transito: transaccion[i][3], //no
            nominacion: transaccion[i][4],
            fecha: transaccion[i][5],
            cliente: transaccion[i][6], 
            producto: transaccion[i][7],
            tk: transaccion[i][8],
            isla_carga: transaccion[i][9],
            vol_despachado: transaccion[i][10],
            chofer: transaccion[i][11],
            dom_entrega: transaccion[i][12],
            patente_camion: transaccion[i][13],
            patente_acoplado: transaccion[i][14],
            transportista: transaccion[i][15]
        })
    }
    
    can.fixture('GET /transaccions', 
        function() {
            return {items: control}
        }
    )
        
    var users_sql =[[1, 'user_vitco', 'password']]
        
        var users = new Array()
        
        for (var i=0; i < users_sql.length; i++) {
            users.push({
                id : users_sql[i][0],
                username: users_sql[i][1],
                password: users_sql[i][2]
            })
        }
        
        can.fixture('GET /users',
            function(params) {
                var bool = false
                if (params.data) {
                    return { items: $.grep(users,function(elem,index) {
                            for (var attr in params.data) {
                                if (elem[attr] == params.data[attr])
                                    bool = true
                                else {
                                    bool = false
                                    break
                                }
                            }
                            return bool
                    })}
                } else 
                    return {items: users}
            }
	);
    
})