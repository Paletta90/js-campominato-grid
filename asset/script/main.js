// Variabile per il button
let play = document.getElementById("play");
// Variabile per il select
let level = document.getElementById("level");

// Al click sul button play realizzo la griglia in base alla difficoltà scelta
play.addEventListener('click',

    function () {

        // Variabile contenitore della griglia
        let grid = document.getElementById("grid");

        // Variabile che definisce se il sistema a griglie è 10*10 o 9*9 o 7*7 
        let numCelle;
        // Variabile che definisce quale classe assegnare
        let width;

        // Controllo quale difficoltà è stata scelta e assegno il num di celle e le classi rispettive 
        if (parseInt(level.value) == 1) {

            numCelle = 100;
            width = "width-10";

        } else if (parseInt(level.value) == 2) {

            numCelle = 81;
            width = "width-9";

        } else {

            numCelle = 49;
            width = "width-7";

        }

        // Mando in stampa tutti i box al click
        for (let i = 1; i <= numCelle; i++) {

            // Creo elemento <div>
            let boxN = document.createElement("div");
            // Aggiungo classe "box"
            boxN.classList.add("box");
            // Aggiungo la classe width rispettiva
            boxN.classList.add(width);
            // Numero tutti i box
            boxN.innerText = `${i}`;
            // Appendo il nuovo box
            grid.appendChild(boxN);

            // Al click si colora di azzurro
            boxN.addEventListener('click',
                () =>  boxN.classList.add("click")
            );
        }

        
    }
)