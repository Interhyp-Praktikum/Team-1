window.holeDenWert = function () {
  // hier kannst du den Namen aus dem Eingabefeld holen und in das Element mit der id "name" schreiben
  // Tipp: auf ein Element kann man mit document.querySelector('tagname') zugriefen
  // Tipp 2: den Wert eines Felds erhält man, indem man hinter so einem Element .value schreibt
  // Tipp 3: den Text eines Elements ändert man mit der Funktion .innerText = textDenManSetzenWill
  var name = document.querySelector("input").value;
  var platzhalter = document.querySelector("#name");
  var error = document.querySelector("#error");
  if (name) {
    platzhalter.innerText = name;
    error.innerText = "";
  } else {
    error.innerText = "Bitte Namen eintragen";
  }
};
