const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")
const b5 = document.getElementById("b5")
const b6 = document.getElementById("b6")
const b7 = document.getElementById("b7")
const b8 = document.getElementById("b8")
const b9 = document.getElementById("b9")
var body = document.getElementsByTagName('body')[0]

var player = true
var playerName = document.getElementById('who')
document.addEventListener("mousedown", (event) => {
    if(player == false){
        who.innerHTML = "Jogador 1 (X)"
        who.style.color = "#ff7171"
        body.style.background = "#271b1b"
    } else{
        who.innerHTML = "Jogador 2 (O)"
        who.style.color = "#718bff"
        body.style.background = "#1b1f27"
    }

    if (event.target === b1) {
        if(player == true){
            b1.innerHTML = "X"
            b1.style.textShadow = "0px 0px 20px red"
            player = !player
        } else{
            b1.innerHTML = "O"
            b1.style.textShadow = "0px 0px 20px blue"
            player = !player
        }
    } else if (event.target === b2) {
        if(player == true){
            b2.innerHTML = "X"
            b1.style.textShadow = "0px 0px 20px red"
            player = !player
        } else{
            b2.innerHTML = "O"
            b2.style.textShadow = "0px 0px 20px blue"
            player = !player
        }

    } else if (event.target === b3) {
        if(player == true){
            b3.innerHTML = "X"
            b3.style.textShadow = "0px 0px 20px red"
            player = !player
        } else{
            b3.innerHTML = "O"
            b3.style.textShadow = "0px 0px 20px blue"
            player = !player
        }

    } else if (event.target === b4) {
        if(player == true){
            b4.innerHTML = "X"
            b4.style.textShadow = "0px 0px 20px red"
            player = !player
        } else{
            b4.innerHTML = "O"
            b4.style.textShadow = "0px 0px 20px blue"
            player = !player
        }

    } else if (event.target === b5) {
        if(player == true){
            b5.innerHTML = "X"
            b5.style.textShadow = "0px 0px 20px red"
            player = !player
        } else{
            b5.innerHTML = "O"
            b5.style.textShadow = "0px 0px 20px blue"
            player = !player
        }

    } else if (event.target === b6) {
        if(player == true){
            b6.innerHTML = "X"
            b6.style.textShadow = "0px 0px 20px red"
            player = !player
        } else{
            b6.innerHTML = "O"
            b6.style.textShadow = "0px 0px 20px blue"
            player = !player
        }

    } else if (event.target === b7) {
        if(player == true){
            b7.innerHTML = "X"
            b7.style.textShadow = "0px 0px 20px red"
            player = !player
        } else{
            b7.innerHTML = "O"
            b7.style.textShadow = "0px 0px 20px blue"
            player = !player
        }

    } else if (event.target === b8) {
        if(player == true){
            b8.innerHTML = "X"
            b8.style.textShadow = "0px 0px 20px red"
            player = !player
        } else{
            b8.innerHTML = "O"
            b8.style.textShadow = "0px 0px 20px blue"
            player = !player
        }

    } else if (event.target === b9) {
        if(player == true){
            b9.innerHTML = "X"
            b9.style.textShadow = "0px 0px 20px red"
            player = !player
        } else{
            b9.innerHTML = "O"
            b9.style.textShadow = "0px 0px 20px blue"
            player = !player
        }

    }
});
    