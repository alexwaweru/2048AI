var elements = document.getElementsByTagName('th');
function colorChange() {
    var i;
    for (i=0; i < elements.length; i++){
        if (elements[i].innerHTML == ' ') {
            elements[i].style.backgroundColor = 'grey';       
        } else if (elements[i].innerHTML == '2') {
            elements[i].style.backgroundColor = 'wheat';
        } else if (elements[i].innerHTML == '4') {
            elements[i].style.backgroundColor = 'goldenrod';
        } else if (elements[i].innerHTML == '8') {
            elements[i].style.backgroundColor = 'chocolate';
        } else if (elements[i].innerHTML == '16') {
            elements[i].style.backgroundColor = 'darkorange';
        } else if (elements[i].innerHTML == '32') {
            elements[i].style.backgroundColor = 'maroon';
        } else if (elements[i].innerHTML == '64') {
            elements[i].style.backgroundColor = 'red';
        } else if (elements[i].innerHTML == '128') {
            elements[i].style.backgroundColor = 'limegreen';
        } else if (elements[i].innerHTML == '256') {
            elements[i].style.backgroundColor = 'yellowgreen';
        } else if (elements[i].innerHTML == '512') {
            elements[i].style.backgroundColor = 'springgreen';
        } else if (elements[i].innerHTML == '1024') {
            elements[i].style.backgroundColor = 'olive';
        } else if (elements[i].innerHTML == '2048') {
            elements[i].style.backgroundColor = 'aquamarine';
        } else if (elements[i].innerHTML == '4096') {
            elements[i].style.backgroundColor = 'lightseagreen';
        } else if (elements[i].innerHTML == '8192') {
            elements[i].style.backgroundColor = 'cadetblue';
        } else if (elements[i].innerHTML == '16384') {
            elements[i].style.backgroundColor = 'teal';
        }
    } 
}


document.addEventListener('keydown', chooseFunction);

function chooseFunction(e){
    console.log(available_moves());
    if (e.code === "ArrowUp"){
        move_up();
    } else if (e.code == "ArrowDown"){
        move_down();
    } else if (e.code == "ArrowRight"){
        move_right();
    } else if (e.code == "ArrowLeft"){
        move_left();
    }
}

var score = 0;
function updateScore(){
    var scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = 'Score  ' + score;
}

function getgamestate(){
    var i;
    var val;
    var id;
    var gamestate = []
    for (i=1; i < 17; i++){
        id = "cell"+i;
        val = document.getElementById(id).innerHTML;
        gamestate.push(val)
    }
    return gamestate;
}


function continue_play(gamestate){
    var temp = Math.floor(Math.random() * 16);
    while (gamestate[temp] != " "){
        temp = Math.floor(Math.random() * 16);
    }

    gamestate[temp] = 2;
    return gamestate;    
}


function newgame(){
    score = 0;
    var gamestate = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ,' ', ' ', ' ', ' '];
    var four = Math.floor(Math.random() * 16);
    var two = Math.floor(Math.random() * 16);
    if (four == two ){
        two = Math.floor(Math.random() * 16);
    }
    gamestate[four] = 4;
    gamestate[two] = 2;
    
    var id;
    var i;
    for (i = 1; i < gamestate.length+1; i++){
        id = "cell"+i;
        document.getElementById(id).innerHTML = gamestate[i-1];
    }
    colorChange();
    updateScore();
}


function move_up(){
    var gamestate = getgamestate();

    var i;
    var j;
    for (i = 1; i <= 3; i++){
        for (j = 0; j < 4; j++){
            var index = 4*i + j;
            while (index > 0 && gamestate[index] != " " && gamestate[index-4] == " "){
                gamestate[index-4] = gamestate[index];
                gamestate[index] = ' ';
                index = index - 4;
            }
            if (gamestate[index] != " " && gamestate[index] == gamestate[index-4]){
                gamestate[index-4] = Number(gamestate[index]) * 2;
                score  = score + Number(gamestate[index])*2;
                updateScore();
                gamestate[index] = " ";
            }
        }
    }

    gamestate = continue_play(gamestate);

    var id;
    var k;
    for (l = 1; l < gamestate.length+1; l++){
        id = "cell"+l;
        document.getElementById(id).innerHTML = gamestate[l-1];
    }
    colorChange();
}


function move_down(){
    var gamestate = getgamestate();

    var i;
    var j;
    for (i = 2; i >= 0; i--){
        for (j = 0; j < 4; j++){
            var index = 4*i + j;
            while (index < 16 && gamestate[index] != " " && gamestate[index+4] == " "){
                gamestate[index+4] = gamestate[index];
                gamestate[index] = ' ';
                index = index + 4;
            } 
            if (gamestate[index] != " " && gamestate[index] == gamestate[index+4]){
                gamestate[index+4] = Number(gamestate[index]) * 2;
                score  = score + Number(gamestate[index])*2;
                updateScore();
                gamestate[index] = " ";
            }
        }
    }

    gamestate = continue_play(gamestate);

    var id;
    var k;
    for (l = 1; l < gamestate.length+1; l++){
        id = "cell"+l;
        document.getElementById(id).innerHTML = gamestate[l-1];
    }
    colorChange();
}


function move_left(){
    var gamestate = getgamestate();

    var i;
    var j;
    for (i = 0; i < 4; i++){
        for (j = 1; j <= 3; j++){
            var index = 4*i + j;
            while (index > 4*i && gamestate[index] != " " && gamestate[index-1] == " "){
                gamestate[index-1] = gamestate[index];
                gamestate[index] = ' ';
                index = index - 1;
            }
            if (gamestate[index] != " " && gamestate[index] == gamestate[index-1]){
                gamestate[index-1] = Number(gamestate[index]) * 2;
                score  = score + Number(gamestate[index])*2;
                updateScore();
                gamestate[index] = " ";
            }
        }
    }

    gamestate = continue_play(gamestate);

    var id;
    var k;
    for (l = 1; l < gamestate.length+1; l++){
        id = "cell"+l;
        document.getElementById(id).innerHTML = gamestate[l-1];
    }
    colorChange();
}


function move_right(){
    var gamestate = getgamestate();

    var i;
    var j;
    for (i = 0; i < 4; i++){
        for (j = 2; j >= 0; j--){
            var index = 4*i + j;
            while (index < 4*i+3 && gamestate[index] != " " && gamestate[index+1] == " "){
                gamestate[index+1] = gamestate[index];
                gamestate[index] = ' ';
                index = index + 1;
            }
            if (gamestate[index] != " " && gamestate[index] == gamestate[index+1]){
                gamestate[index+1] = Number(gamestate[index]) * 2;
                score  = score + Number(gamestate[index])*2;
                updateScore();
                gamestate[index] = " ";
            }
        }
    }

    gamestate = continue_play(gamestate);

    var id;
    var k;
    for (l = 1; l < gamestate.length+1; l++){
        id = "cell"+l;
        document.getElementById(id).innerHTML = gamestate[l-1];
    }
    colorChange();
}

function check_up(gamestate){
    var i;
    for (i=0; i<4; i++){
        var index = i;
        var j=0;
        while(j<3){
            if (gamestate[index]==" " && gamestate[index+4]!=" "){
                return 1;
            }
            if (gamestate[index]!=" " && gamestate[index] == gamestate[index+4]){
                return 1;
            }
            index = index + 4;
            j = j+1;
        }
    }
    return 0;
}

function check_down(gamestate){
    var i;
    for (i=12; i<16; i++){
        var index = i;
        var j = 0;
        while(j<3){
            if (gamestate[index]==" " && gamestate[index-4]!=" "){
                return 2;
            }
            if (gamestate[index]!=" " && gamestate[index] == gamestate[index-4]){
                return 2;
            }
            index = index - 4;
            j = j+1;
        }
    }
    return 0;
}

function check_left(gamestate){
    var i;
    for (i=0; i<13; i+4){
        var index = i;
        var j=0;
        while(j<3){
            console.log(j);
            if (gamestate[index]==" " && gamestate[index+1]!=" "){
                return 4;
            }
            if (gamestate[index]!=" " && gamestate[index] == gamestate[index+1]){
                return 4;
            }
            index = index + 1;
            j = j+1;
        }
    }
    return 0;
}

function check_right(gamestate){
    var i;
    for (i=3; i<16; i+4){
        var index = i;
        var j=0;
        while(j<3){
            if (gamestate[index]==" " && gamestate[index-1]!=" "){
                return 3;
            }
            if (gamestate[index]!=" " && gamestate[index] == gamestate[index-1]){
                return 3;
            }
            index = index - 1;
            j = j+1;
        }
    }
    return 0;
}

function available_moves(){
    var gamestate = getgamestate();
    var moves = [];
    //moves.push(check_up(gamestate));
    //moves.push(check_down(gamestate));
    //moves.push(check_left(gamestate));
    //moves.push(check_right(gamestate));
    return moves;
}