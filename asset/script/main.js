// Variabile per il button
let play = document.getElementById("play");
// Variabile per il select
let level = document.getElementById("level");

// Al click sul button play realizzo la griglia in base alla difficoltà scelta
play.addEventListener('click',

    function () {

        // Variabile contenitore della griglia
        let grid = document.getElementById("grid");

        // Variabile dove creo i box
        let boxN = document.createElement("div");
        boxN.classList.add("box");

        // Variabile che definisce se il sistema a griglie è 10*10 o 9*9 o 7*7 
        let numCelle;

        // Controllo quale difficoltà è stata scelta 
        if (parseInt(level.value) == 1) {

            numCelle = 100;
            boxN.classList.add("width-10");

        } else if (parseInt(level.value) == 2) {

            numCelle = 81;
            boxN.classList.add("width-9");

        } else {

            numCelle = 49;
            boxN.classList.add("width-7");

        }

        // console.log(boxN);

        for(let i = 1; i <= numCelle; i++){
             grid.appendChild(boxN);
        }
    }
)