window.sucheErgebnisse = function () {
  var wertAusDemSuchFeld = document.querySelector(".suche").value;

  var wertAusDemJahreszeitenFeld = document.querySelector("select.Jahreszeiten")
    .value;
  var wertAusDemAktivitätenFeld = document.querySelector("select.Aktivität")
    .value;
  console.log(wertAusDemJahreszeitenFeld);
  console.log(wertAusDemAktivitätenFeld);
};
