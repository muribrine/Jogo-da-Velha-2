let current_player = "X";

let current_sector = [undefined, undefined];
let current_cell = [undefined, undefined];

let all_free_flag = true;
let won_flag = false;

function game_loop() {

    document.getElementById("player_indicator").innerText = `Jogador: ${current_player}`;
    if(won_flag) {
        document.getElementById("player_indicator").innerText = `Venceu!`;
    }


    check_for_capture();
    check_for_win();

    update_classes();

    requestAnimationFrame(game_loop);

}

function check_for_capture() {

    let sectors = Array.from(document.getElementsByClassName("Sector"));

    sectors.forEach(sector => {

        try {

            let cells = Array.from(sector.children[0].children);

            if // 0 == 1 == 2 != " "
            (
                cells[0].innerText ==
                cells[1].innerText &&
                cells[1].innerText ==
                cells[2].innerText &&
                cells[0].innerText != ""
            ) {
                sector.innerHTML = `<h3>${cells[0].innerText}</h3>`;
            } else if // 3 == 4 == 5 != " "
            (
                cells[3].innerText ==
                cells[4].innerText &&
                cells[4].innerText ==
                cells[5].innerText &&
                cells[3].innerText != ""
            ) {
                sector.innerHTML = `<h3>${cells[3].innerText}</h3>`;
            } else if // 6 == 7 == 8 != " "
            (
                cells[6].innerText ==
                cells[7].innerText &&
                cells[7].innerText ==
                cells[8].innerText &&
                cells[6].innerText != ""
            ) {
                sector.innerHTML = `<h3>${cells[6].innerText}</h3>`;
            } else if // 0 == 3 == 6 != " "
            (
                cells[0].innerText ==
                cells[3].innerText &&
                cells[3].innerText ==
                cells[6].innerText &&
                cells[0].innerText != ""
            ) {
                sector.innerHTML = `<h3>${cells[0].innerText}</h3>`;
            } else if // 1 == 4 == 7 != " "
            (
                cells[1].innerText ==
                cells[4].innerText &&
                cells[4].innerText ==
                cells[7].innerText &&
                cells[1].innerText != ""
            ) {
                sector.innerHTML = `<h3>${cells[1].innerText}</h3>`;
            } else if // 2 == 5 == 8 != " "
            (
                cells[2].innerText ==
                cells[5].innerText &&
                cells[5].innerText ==
                cells[8].innerText &&
                cells[2].innerText != ""
            ) {
                sector.innerHTML = `<h3>${cells[2].innerText}</h3>`;
            } else if // 0 == 4 == 8 != " "
            (
                cells[0].innerText ==
                cells[4].innerText &&
                cells[4].innerText ==
                cells[8].innerText &&
                cells[0].innerText != ""
            ) {
                sector.innerHTML = `<h3>${cells[0].innerText}</h3>`;
            } else if // 2 == 4 == 6 != " "
            (
                cells[2].innerText ==
                cells[4].innerText &&
                cells[4].innerText ==
                cells[6].innerText &&
                cells[2].innerText != ""
            ) {
                sector.innerHTML = `<h3>${cells[2].innerText}</h3>`;
            }

            if(
                cells[0].innerText != "" &&
                cells[1].innerText != "" &&
                cells[2].innerText != "" &&
                cells[3].innerText != "" &&
                cells[4].innerText != "" &&
                cells[5].innerText != "" &&
                cells[6].innerText != "" &&
                cells[7].innerText != "" &&
                cells[8].innerText != ""
            ) {
                sector.innerHTML = "<h3>?</h3>";
            }

        } catch (error) {};

    });

    if(current_sector[1]) {

        if(current_sector[1].children[0].attributes.length == 0) {
            current_sector = [undefined, undefined];
            current_cell = [undefined, undefined];
            all_free_flag = true;
        };
    }

};

function invert_player() {
    if (current_player == "X") {
        current_player = "O";
    } else {
        current_player = "X";
    };
};

function check_for_win() {

    let sectors = Array.from(document.getElementsByClassName("Sector"));

    if // 0 == 1 == 2 != " "
        (
        sectors[0].innerHTML ==
        sectors[1].innerHTML &&
        sectors[1].innerHTML ==
        sectors[2].innerHTML
    ) {
        invert_player();
        document.getElementById("Game_Board").classList.add("Won");
        won_flag = true;
        document.getElementById("Game_Board").innerHTML = `<h3>${current_player}</h3>`;
    } else if // 3 == 4 == 5 != " "
        (
        sectors[3].innerHTML ==
        sectors[4].innerHTML &&
        sectors[4].innerHTML ==
        sectors[5].innerHTML
    ) {
        invert_player();
        document.getElementById("Game_Board").classList.add("Won");
        won_flag = true;
        document.getElementById("Game_Board").innerHTML = `<h3>${current_player}</h3>`;
    } else if // 6 == 7 == 8 != " "
        (
        sectors[6].innerHTML ==
        sectors[7].innerHTML &&
        sectors[7].innerHTML ==
        sectors[8].innerHTML
    ) {
        invert_player();
        document.getElementById("Game_Board").classList.add("Won");
        won_flag = true;
        document.getElementById("Game_Board").innerHTML = `<h3>${current_player}</h3>`;
    } else if // 0 == 3 == 6 != " "
        (
        sectors[0].innerHTML ==
        sectors[3].innerHTML &&
        sectors[3].innerHTML ==
        sectors[6].innerHTML
    ) {
        invert_player();
        document.getElementById("Game_Board").classList.add("Won");
        won_flag = true;
        document.getElementById("Game_Board").innerHTML = `<h3>${current_player}</h3>`;
    } else if // 1 == 4 == 7 != " "
        (
        sectors[1].innerHTML ==
        sectors[4].innerHTML &&
        sectors[4].innerHTML ==
        sectors[7].innerHTML
    ) {
        invert_player();
        document.getElementById("Game_Board").classList.add("Won");
        won_flag = true;
        document.getElementById("Game_Board").innerHTML = `<h3>${current_player}</h3>`;
    } else if // 2 == 5 == 8 != " "
        (
        sectors[2].innerHTML ==
        sectors[5].innerHTML &&
        sectors[5].innerHTML ==
        sectors[8].innerHTML
    ) {
        invert_player();
        document.getElementById("Game_Board").classList.add("Won");
        won_flag = true;
        document.getElementById("Game_Board").innerHTML = `<h3>${current_player}</h3>`;
    } else if // 0 == 4 == 8 != " "
        (
        sectors[0].innerHTML ==
        sectors[4].innerHTML &&
        sectors[4].innerHTML ==
        sectors[8].innerHTML
    ) {
        invert_player();
        document.getElementById("Game_Board").classList.add("Won");
        won_flag = true;
        document.getElementById("Game_Board").innerHTML = `<h3>${current_player}</h3>`;
    } else if // 2 == 4 == 6 != " "
        (
        sectors[2].innerHTML ==
        sectors[4].innerHTML &&
        sectors[4].innerHTML ==
        sectors[6].innerHTML
    ) {
        invert_player();
        document.getElementById("Game_Board").classList.add("Won");
        won_flag = true;
        document.getElementById("Game_Board").innerHTML = `<h3>${current_player}</h3>`;
    }

    if (
        sectors[0].innerHTML != "" &&
        sectors[1].innerHTML != "" &&
        sectors[2].innerHTML != "" &&
        sectors[3].innerHTML != "" &&
        sectors[4].innerHTML != "" &&
        sectors[5].innerHTML != "" &&
        sectors[6].innerHTML != "" &&
        sectors[7].innerHTML != "" &&
        sectors[8].innerHTML != "" &&
        sectors[0].children[0].attributes.length == 0
    ) {
        invert_player();
        document.getElementById("Game_Board").classList.add("Won");
        won_flag = true;
        document.getElementById("Game_Board").innerHTML = `<h3>?</h3>`;
    }

};

function update_classes() {

    if(!all_free_flag) {

        let sectors = Array.from(document.getElementsByClassName("Sector"));

        sectors.forEach(sector => {

            try {
                let cells = Array.from(sector.children[0].children);
            
                cells.forEach(cell => {
                    cell.classList.add("Inactive");
                });
            } catch (error) {};

        });

        try {
            let active_cells = Array.from(current_sector[1].children[0].children);
            active_cells.forEach(cell => {
                cell.classList.remove("Inactive");
            });
        } catch (error) {};

    } else {

        let sectors = Array.from(document.getElementsByClassName("Sector"));

        sectors.forEach(sector => {

            try {
                let cells = Array.from(sector.children[0].children);
            
                cells.forEach(cell => {
                    cell.classList.remove("Inactive");
                });
            } catch (error) {};

        });
    }

}

document.addEventListener("click", e => {

    if(e.target.attributes[0].value == "Cell" && document.getElementById(e.target.id).innerText == "") {

        all_free_flag = false;

        current_cell = [e.target.id, document.getElementById(e.target.id)];
        current_sector = [`Sec_${e.target.id[4]}`, document.getElementById(`Sec_${e.target.id[4]}`)]

        current_cell[1].innerText = current_player;

        invert_player();

    };

});

game_loop();