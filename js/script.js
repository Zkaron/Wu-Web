/*When user clicks on cursos, shows it's information and hide the other articles*/
function cursosSelected() {
    document.getElementById("inicioText").style.display = 'none';
    document.getElementById("cursosText").style.display = 'block';
    document.getElementById("ubicacionText").style.display = 'none';
    document.getElementById("acercaText").style.display = 'none';
    document.getElementById("contactoText").style.display = 'none';
}
/*When user clicks on ubicacion, shows it's information and hide the other articles*/
function ubicacionSelected() {
    document.getElementById("inicioText").style.display = 'none';
    document.getElementById("ubicacionText").style.display = 'block';
    document.getElementById("cursosText").style.display = 'none';
    document.getElementById("acercaText").style.display = 'none';
    document.getElementById("contactoText").style.display = 'none';
    initMap();
}
/*When user clicks on acerca de nosotros, shows it's information and hide the other articles*/
function acercaSelected() {
    document.getElementById("inicioText").style.display = 'none';
    document.getElementById("acercaText").style.display = 'block';
    document.getElementById("ubicacionText").style.display = 'none';
    document.getElementById("cursosText").style.display = 'none';
    document.getElementById("contactoText").style.display = 'none';
}

/*When user clicks on contacto, shows it's information and hide the other articles*/
function contactoSelected() {
    document.getElementById("inicioText").style.display = 'none';
    document.getElementById("cursosText").style.display = 'none';
    document.getElementById("ubicacionText").style.display = 'none';
    document.getElementById("acercaText").style.display = 'none';
    document.getElementById("contactoText").style.display = 'block';
}
/*if user doesn't have javascript enabled, don't hide any element nor
   clean URLS*/
function javascriptEnabled() {
    document.documentElement.className = "js";
    //hideArticles();
    hrefToUrl();
    //var id = setInterval(imageChangeInterval, 5000);
}
/*Sets the display value of the elements to none*/
function hideArticles() {
    var hide = document.querySelectorAll(".menuArticles");
    for (var i = 0; i < hide.length; i++) {
        hide[i].style.display = 'none';
    }
}
/*set the attributes of the elements to #url*/
function hrefToUrl() {
    var anchor = document.getElementsByClassName("infoLink");
    for (var i = 0; i < anchor.length; i++) {
        anchor[i].setAttribute('href', '#url');
    }
}
/*It's suposed to change the background image, but does not work*/
function imageChangeInterval() {
    var rand = (Math.random() * 4) + 1;
    var image = document.getElementById("background_image");
    switch (rand) {
        case 1:
            image.style.backgroundImage = "url(../images/333380_beekart_odd-campsite.jpg)";
            break;
        case 2:
            image.style.backgroundImage = "url(../images/419945_beekart_tree-village.jpg)";
            break;
        case 3:
            image.style.backgroundImage = "url(../images/colomos1.jpg)";
            break;
        case 4:
            image.style.backgroundImage = "url(../images/394553_beekart_the-market-place.jpg)";
            break;
        default:
            //should never get here!
            break;
    }
   
}
function initMap() {
      var myLatLng = { lat: 20.705551, lng: -103.391372 };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'TaiChi Colomos'
        });
}