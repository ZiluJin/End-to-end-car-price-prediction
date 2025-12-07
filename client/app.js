function getDoorsValue() {
    var uiDoors = document.getElementsByName("uiDoors");
    for (var i = 0; i < uiDoors.length; i++) {
        if (uiDoors[i].checked) {
            return parseInt(uiDoors[i].value);  // ★ 用 value，而不是 i+1
        }
    }
    return null;
}

// Click function
function onClickedEstimatedPrice() {
    console.log("Estimate price button clicked");
    var manufactureName = document.getElementById("uiManufactureName");
    var productionYear = document.getElementById("uiProductionYear");
    var mileage = document.getElementById("uiMileage");
    var levy = document.getElementById("uiLevy");
    var doors = getDoorsValue();
    var estPrice = document.getElementById("uiEstimatedPrice");

    var url = "http://127.0.0.1:5000/predict_car_price";
    //var url = "api/predict_car_price"; // use this when i run ngnix

    $.post(url, {
        manufacture_name: manufactureName.value,
        prod_year: parseFloat(productionYear.value),
        Mileage: parseFloat(mileage.value),
        Levy: parseFloat(levy.value),
        Doors: doors
    }, function (data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " USD</h2>";
        console.log(status);
    });
}

// Load the manufacture name options on the page
function onPageLoad() {
    console.log("document loaded");
    var url = "http://127.0.0.1:5000/get_manufacture_names";
    //var url = "api/get_manufacture_names"; // use this when i run ngnix
    $.get(url, function (data, status) {
        console.log("got response for get_manufacture_names request");
        if(data) {
            var manufacture_names = data.manufacture_names;
            var uiManufactureName = document.getElementById("uiManufactureName")
            $('#uiManufactureName').empty();
            for(var i in manufacture_names) {
                var opt = new Option(manufacture_names[i]);
                $('#uiManufactureName').append(opt);
            }
        }
    });
}


window.onload = onPageLoad;