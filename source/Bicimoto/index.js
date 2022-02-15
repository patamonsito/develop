//Eliminar los agotados
var cantidad = $('body > div.container.pag-int.top-interior > div.row.productos.data-content-products > div').length + 1;

var indentificados = []

for(var i = 1; i < cantidad; i++){
var target = $('body > div.container.pag-int.top-interior > div.row.productos.data-content-products > div:nth-child(' + i + ') > div > div.producto-box-datos-boton > div:nth-child(2) > button[disabled="disabled"]').text()

if(target == ' Sin Stock'){
 indentificados.push(i)
}
}
indentificados.sort((a, b) => {return a - b}).reverse();

for(var i = 0; i < indentificados.length; i++){
$('body > div.container.pag-int.top-interior > div.row.productos.data-content-products > div:nth-child(' + indentificados[i] + ')').remove();
}


// extraer productos
$('strong').remove();
$('i').remove();

var cantidad = $('.data-content-products > div').length + 1;

var Productos = []

for(i = 1; i < cantidad; i++){
var Descripcion = $('.data-content-products > div:nth-child(' + i + ') > div > div.producto-box-pack > div.producto-box-datos > h2').text()
.replaceAll('MULT ', 'MULTIPLE ')
.replaceAll('ADM ', 'ADMISION ')
.replaceAll('ALTERN ', 'ALTERNADOR ')
.replaceAll('AMORT ', 'AMORTIGUADOR ')
.replaceAll('DEL ', 'DELANTERO ')
.replaceAll('RH ', 'DERECHO ')
.replaceAll('LH ', 'IZQUIERDO ')
.replaceAll('TRAS ', 'TRASERO ')
.replaceAll('R/L ', 'DERACHO / IZQUIERDO ')
.replaceAll('SUP ', 'SUPERIOR ')
.replaceAll('BAND ', 'BANDEJA ')
.replaceAll('CREM ', '')
.replaceAll('11/17', '')
.replaceAll('1.4', '')
.replaceAll('2011', '')
.replaceAll('INF ', 'INFERIOR ')
.replaceAll('AVEO/SAIL', '')
.replaceAll('CH ', '')
.replaceAll('BBA ', 'BOMBA ')
.replaceAll('BENC ', 'BENCINA ')
.replaceAll('C/DEP ', 'CON DEPOSITO ')
.replaceAll(' F14D', ' ')
.replaceAll('L/P ', '')
.replaceAll('DER ', 'DERECHO ')
.replaceAll('IZQ ', 'IZQUIERDO ')
.replaceAll('ESTAB ', 'ESTABILIZADORA ')
.replaceAll('FRE ', 'FRENO ')
.replaceAll('ALTERN ', 'ALTERNADOR ')
.replaceAll('TRA ', 'TRASERO ')
.replaceAll('DER/IZQ ', 'DERECHO IZQUIERDO ')
.replaceAll('A/C ', 'AIRE ACONDICIONADO ')
.replaceAll('DIR ', 'DIRECCION ')
.replaceAll('A/VIDRIO ', 'ALZA VIDRIO ')
.replaceAll('C/MOTOR ', 'CON MOTOR ')
.replaceAll('DEP ', 'DEPOSITO ')
.replaceAll('EMB ', 'EMBRAGUE ')
.replaceAll('ESC ', 'ESCAPE ')
.replaceAll('ELECT ', 'ELECTRO ')
.replaceAll('VENT ', 'VENTILADOR ')
.replaceAll('EMP ', 'EMPAQUETADURA ')
.replaceAll('MULT ', 'MULTIPLE ')
.replaceAll('VALV ', 'VALVULA ')
.replaceAll('ESP ', 'ESPEJO ')
.replaceAll('EXT ', 'EXTERIOR ')
.replaceAll('LHH ', 'IZQUIERDO ')
.replaceAll('ELECT ', 'ELECTRICO ')
.replaceAll('LAT ', 'LATERAL')
.replaceAll('LAT ', 'LATERAL ')
.replaceAll('TAPAB ', 'TAPABARRO ')
.replaceAll('BCO/AMAR ', 'BLANCO - AMARILLO ')
.replaceAll('GUARDAF ', 'GUARDAFANGO ')
.replaceAll('SOP ', 'SOPORTE ')
.replaceAll('PARACH ', 'PARACHOQUE ')
.replaceAll('HORQ ', 'HORQUILLA ')
.replaceAll('JTA ', 'JUNTA ')
.replaceAll('C/ABS ', 'CON ABS ')
.replaceAll('DISTRIB ', 'DISTRIBUCION ')
.replaceAll('PZAS ', 'PIEZAS ')
.replaceAll('DEP ', 'DEPOSITO ')
.replaceAll(' C/', ' CON')
.replaceAll('CALEF ', 'CALEFACCION ')
.replaceAll('SENS ', 'SENSOR ')
.replaceAll('BK ', 'NEGRA ')
.replaceAll('PART ', 'PARTIDA ')
.replaceAll('NEBL ', 'NEBLINEO ')
.replaceAll('LAT ', 'LATERAL ')
.replaceAll('PINOM ', 'PIÑON ')
.replaceAll('ESTAB ', 'ESTABILIZADORA ')
.replaceAll('FRE ', 'FRENO ')
.replaceAll('IZQ ', 'IZQUIERDO ')
.replaceAll('DER ', 'DERECHO ')
.replaceAll('SAIL ', '')
.replaceAll('SIMYI', '')
.replaceAll('PTA ', 'PUNTA ')
.replaceAll('RAD ', 'RADIADOR ')
.replaceAll('L/PARAB ', 'LIMPIA PARABRISAS ')
.replaceAll('DER/', 'DERECHO ')
.replaceAll('B/', 'BIELA ')
.replaceAll('/', ' ')
.replaceAll('11/15', '')
.replaceAll(' KM', ' KILOMETRO')
.replaceAll('TERMOST ', 'TERMOSTATO ')
.replaceAll('S/', 'SIN ')
.replaceAll('ROD ', 'RODAMIENTO ')
.replaceAll('11-15', '')
.replaceAll('11-17', '')
.replaceAll('PCS', 'PIEZAS')
.replaceAll('CIGÜEÑAL', 'CIGUEÑAL')
.replaceAll('11 15', '')
.replaceAll('AUX ', 'AUXILIAR ')
.replaceAll(' S ', ' SIN ')
.replaceAll('  ', ' ')
.replaceAll('  ', ' ')
.replaceAll('  ', ' ')
.replaceAll('  ', ' ')
.replaceAll('  ', ' ')
.trim();

var Importadora = 'Bicimoto';
var CodigoProducto = 'B-SAIL14-' + i;
var CodigoImportadora = $('.data-content-products > div:nth-child(' + i + ') > div > div.producto-box-pack > div.producto-box-datos > p:nth-child(2)').text().trim()
var Origen =  $('.data-content-products > div:nth-child(' + i + ') > div > div.producto-box-pack > div.producto-box-datos > p:nth-child(7)').text().replaceAll(' CHN', 'CHINA').replaceAll(' THA', 'THAIWAN').trim()
var PrecioImportadora = parseInt($('.data-content-products > div:nth-child(' + i + ') > div > div.producto-box-datos-boton > div.producto-box-boton.producto-box-prices > h3').text().replaceAll('$', '').replaceAll('.', ''))
var Modelo = 'SAIL 1.4';
var Img = 'https://www.bicimoto.cl/timthumb.php?src=upload/productsGalleries/img/' + CodigoImportadora + '.jpg';
var AñoI = 2011;
var AñoT = 2017;
var MarcaVehiculo = 'CHEVROLET';
var Stock = $('.data-content-products > div:nth-child(' + i + ') > div > div.producto-box-datos-boton > div:nth-child(2) > button').text().trim() == 'Comprar' ? 'Disponible' : '0'
var Fecha = {
    "$date": "2022-02-12T01:17:26.823Z"
}

var Json = {
    Importadora,
    CodigoImportadora,
    CodigoProducto,
    Descripcion,
    Origen,
    MarcaVehiculo,
    Modelo,
    AñoI,
    AñoT,
    PrecioImportadora,
    Stock,
    Fecha,
    Img
}

    Productos.push(Json)

}