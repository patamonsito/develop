//Eliminar agotados
var cantidad = $('tr').length + 1;

var indentificados = []

for(var i = 1; i < cantidad; i++){
var target = $('tr:nth-child(' + i + ') > td:nth-child(11)').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll(' ', '').trim()

if(target == 'Agotado'){
 indentificados.push(i)
}
}
indentificados.sort((a, b) => {return a - b}).reverse();

for(var i = 0; i < indentificados.length; i++){
$('tr:nth-child(' + indentificados[i] + ')').remove();
}

//Extraer CodigoImportadora
var cantidad = $('tr').length + 1;

var CodigoImportadora = []

for(var i = 1; i < cantidad; i++){
var target = $('tr:nth-child(' + i + ') > td:nth-child(8) > a').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll(' ', '').trim()

CodigoImportadora.push(target)

}

//extraer datos:
var cantidad = $('tr').length + 1;

var Productos = []

for(var i = 1; i < cantidad; i++){
    var Importadora = 'Alsacia';
    var CodigoProducto = 'A-SAIL14-' + i;
    var CodigoImportadora = $('tr:nth-child(' + i + ') > td:nth-child(8) > a').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll(' ', '').trim();
    var Descripcion = $('tr:nth-child(' + i + ') > td:nth-child(3)').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll('.', '').trim() + ' ' + $('tr:nth-child(' + i + ') > td:nth-child(4)').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll('$', '').replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('.', '').trim().replaceAll('DEL', 'DELANTERO').replaceAll('INF', 'INFERIOR').replaceAll('IZQ', 'IZQUIERDO').replaceAll('DER', 'DERECHO').replaceAll('ESTRUCTURA', '').replaceAll('ESC', 'ESCAPE').replaceAll('ADM ', 'ADMISION').replaceAll('SUP', 'SUPERIOR').replaceAll('STD', 'ESTANDAR').replaceAll('EXT', 'EXTREMO').replaceAll('LARGO', '').replaceAll('TRAS', 'TRASERO').replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ');
    var Origen =  $('tr:nth-child(' + i + ') > td:nth-child(7)').text().replaceAll('\t', '').replaceAll('\n', '').trim()
    var Marca = $('tr:nth-child(' + i + ') > td:nth-child(6)').text().replaceAll('\t', '').replaceAll('\n', '').trim()
    var PrecioImportadora = parseInt($('tr:nth-child(' + i + ') > td:nth-child(9)').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll(' ', '').replaceAll('$', '').replaceAll('.', '').trim()) > 0 ? parseInt($('tr:nth-child(' + i + ') > td:nth-child(9)').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll(' ', '').replaceAll('$', '').replaceAll('.', '').trim()) : 0
    var Modelo = 'SAIL 1.4';
    var AñoI = 2011;
    var AñoT = 2017;
    var MarcaVehiculo = 'CHEVROLET';
    var Stock = $('tr:nth-child(' + i + ') > td:nth-child(10)').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll(' ', '').trim() == 'Disp.' || parseInt($('tr:nth-child(' + i + ') > td:nth-child(10)').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll(' ', '').trim()) > 0 ? 'Disponible' : 'Sin Stock';
    var Fecha = {
        "$date": "2022-02-12T01:17:26.823Z"
    }


    var Json = {
        Importadora,
        CodigoImportadora,
        CodigoProducto,
        Descripcion,
        Origen,
        Marca,
        PrecioImportadora,
        Modelo,
        AñoI,
        AñoT,
        MarcaVehiculo,
        Stock,
        Fecha
    }

Productos.push(Json)

}



