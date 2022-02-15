// Eliminar no disponibles

var cantidad = $('#modeloa > table > tbody > tr').length + 1
for(a = 0; a < 10; a++){
for(var i = 1; i < cantidad; i++ ){
var target = $('#modeloa > table > tbody > tr:nth-child(' +  i + ') > td:nth-child(9) > span').text();
    if(target == '0'){
    $('#modeloa > table > tbody > tr:nth-child(' +  i + ')').remove()
    }
}
}

//extraer codigos importadora
var cantidad = $('#modeloa > table > tbody > tr').length + 1
var CodigoImportadora = []

for(var i = 1; i < cantidad; i++ ){
var target = $('#modeloa > table > tbody > tr:nth-child(' +  i + ') > td:nth-child(7) > a').text();
    CodigoImportadora.push(target)
}

var tbody = $('tbody').html()

var $temp = $('<input>')
$('body').append($temp)
$temp.val(CodigoImportadora).select()
document.execCommand('copy')
$temp.remove()



// Extraer productos disponibles

var cantidad = $('#modeloa > table > tbody > tr').length + 1
var Productos = []

for(var i = 1; i < cantidad; i++ ){
    var Importadora = 'Refax';
    var CodigoProducto = 'R-SAIL14-' + i;
    var CodigoImportadora = $('#modeloa > table > tbody > tr:nth-child(' +  i + ') > td:nth-child(7) > a').text();
    var Descripcion = $('#modeloa > table > tbody > tr:nth-child(' +  i + ') > td:nth-child(3)').text().trim() + ' ' + $('#modeloa > table > tbody > tr:nth-child(' +  i + ') > td:nth-child(4)').text().trim().replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('DEL', 'DELANTERO').replaceAll('USA', '').replaceAll('INF', 'INFERIOR').replaceAll('IZQ', 'IZQUIERDO').replaceAll('DER', 'DERECHO').replaceAll('ESTRUCTURA', '').replaceAll('ESC', 'ESCAPE').replaceAll('ADM', 'ADMISION').replaceAll('SUP', 'SUPERIOR').replaceAll('STD', 'ESTANDAR').replaceAll('EXT', 'EXTREMO').replaceAll('LARGO', '').replaceAll('TRAS', 'TRASERO');
    var Origen =  $('#modeloa > table > tbody > tr:nth-child(' +  i + ') > td:nth-child(5)').text().trim()
    var Marca = $('#modeloa > table > tbody > tr:nth-child(' +  i + ') > td:nth-child(6)').text().trim()
    var PrecioImportadora = parseInt($('#modeloa > table > tbody > tr:nth-child(1) > td:nth-child(8)').text().trim().replaceAll('.', ''))
    var Modelo = 'SAIL 1.4';
    var AñoI = 2011;
    var AñoT = 2017;
    var MarcaVehiculo = 'CHEVROLET';
    var Stock = $('#modeloa > table > tbody > tr:nth-child(' +  i + ') > td:nth-child(9)').text().trim();
    var Fecha = {
        "$date": "2022-02-07T01:17:26.823Z"
    }

    Productos.push({
        Importadora,
        CodigoProducto,
        CodigoImportadora,
        Descripcion,
        Origen,
        Marca,
        MarcaVehiculo,
        Modelo,
        AñoI,
        AñoT,
        PrecioImportadora,
        Stock,
        Fecha
    })
}

var tbody = $('tbody').html()

var $temp = $('<input>')
$('body').append($temp)
$temp.val(JSON.stringify(Productos)).select()
document.execCommand('copy')
$temp.remove()
