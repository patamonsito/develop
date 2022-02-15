-- Extraer datos
local list = getAddressList()
local numero = list.getMemoryRecordByDescription("numero").value
local Importadora = "Mannheim"
local CodigoImportadora = list.getMemoryRecordByDescription("CodigoImportadora").value
local OEM = list.getMemoryRecordByDescription("OEM").value
local Descripcion = list.getMemoryRecordByDescription("Descripcion").value
local Marca = list.getMemoryRecordByDescription("Marca").value
local Origen = list.getMemoryRecordByDescription("Origen").value
local Stock = list.getMemoryRecordByDescription("Stock").value
local PrecioImportadora = list.getMemoryRecordByDescription("PrecioImportadora").value
local Oferta = list.getMemoryRecordByDescription("Oferta").value
-- Variables a editar
local CodigoProducto = 'R-SAIL14-' .. numero;
local Modelo = 'SAIL 1.4';
local AnoI = 2011;
local AnoT = 2017;
local MarcaVehiculo = 'CHEVROLET';


writeToClipboard("<tr>" .. "<td>" .. Importadora .. "</td>" .. "<td>" .. CodigoImportadora .. "</td>" .. "<td>" .. CodigoProducto .. "</td>" .. "<td>" .. OEM .. "</td>" .. "<td>" .. Descripcion .. "</td>" .. "<td>" .. MarcaVehiculo .. "</td>" .. "<td>" .. Modelo .. "</td>" .. "<td>" .. AnoI .. "</td>" .. "<td>" .. AnoT .. "</td>" .. "<td>" .. Marca .. "</td>" .. "<td>" .. Origen .. "</td>" .. "<td>" .. Stock .. "</td>" .. "<td>" .. PrecioImportadora .. "</td>" .. "<td>" .. Oferta .. "</td>" .. "</tr>")


-- tabla base html
<table>
  <thead>
    <th>Importadora</th>
    <th>CodigoImportadora</th>
    <th>CodigoProducto</th>
    <th>OEM</th>
    <th>Descripcion</th>
    <th>MarcaVehiculo</th>
    <th>Modelo</th>
    <th>AñoI</th>
    <th>AñoT</th>
    <th>Marca</th>
    <th>Origen</th>
    <th>Stock</th>
    <th>PrecioImportadora</th>
    <th>Oferta</th>
  </thead>
  <tbody>
    
  </tbody>
</table>