
const cargador = [1, 2, 3, 4, 5, 6, 7];

function chauchat(cargador) {
  for (i = 0; i <= cargador.length; i++) {
    if (i % 4 === 0) {
      console.log("");
    } else {
      if (Math.random() < 0.2) {
        console.log("Illo, me he quedao pillá!");
             
        break;
      } else {
        console.log("Pium");
      }
    }
  }
}

chauchat(cargador);
