var outfit1 = {
  bild:
    "https://www.childrensalonoutlet.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/m/a/mayoral-black-cotton-culottes-outfit-372364-a64ec2dc4b9162c41f57963a26b1c38df9dc5ed1.jpg",
  jahreszeit: "Frühling",
  material: "Baumwolle",
  aktivität: "Spazieren",
  farbe: ["Schwarz", "Weiß"]
};
var outfit2 = {
  bild:
    "https://litb-cgis.rightinthebox.com/images/640x853/202112/bps/product/inc/pygxra1640333740157.jpg?fmt=webp&v=1F",
  jahreszeit: "Frühling",
  material: "Baumwolle",
  aktivität: "Outdoor Sport",
  farbe: ["Weiß"]
};

var outfit3 = {
  bild: "https://m.media-amazon.com/images/I/51WANu-Uh6L._AC_UX679_.jpg",
  jahreszeit: "Herbst",
  material: "Polyester",
  aktivität: "Outdoor Sport",
  farbe: ["Schwarz", "Weiß"]
};

window.sucheErgebnisse = function () {
  var wertAusDemSuchFeld = document.querySelector(".suche").value;
  var wertAusDemJahreszeitenFeld = document.querySelector("select.Jahreszeiten")
    .value;
  var wertAusDemAktivitätenFeld = document.querySelector("select.Aktivität")
    .value;
  var wertAusDemMaterialFeld = document.querySelector("select.Material").value;

  console.log(wertAusDemJahreszeitenFeld);
  console.log(wertAusDemAktivitätenFeld);
  console.log(wertAusDemSuchFeld);
  console.log(wertAusDemMaterialFeld);
  var WerteAusDemFarbenFeld = document.querySelector(".Farbe").value;
  console.log(WerteAusDemFarbenFeld);

  var ergebnisse = document.querySelector("#ergebnisse");
  ergebnisse.innerHTML = `<img width="300px" src="${outfit1.bild}"></img>`;
};
