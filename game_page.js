player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").inner;HTML = player1_name + " : "; 
document.getElementById("player2_name").inner;HTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player1_score").innerHTML = player1_score ;

document.getElementById("player_questions").innerHTML = "Questions Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lenght_divied_2 = Math.floor(word.lenght/2);
    charAt2 = word.charAt(lenght_divied_2);
    console.log(charAt2)

    lenght_minus_1 = Math.floor(word.lenght/2);
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3) 

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_")
    remove_charAt3 = remove_charAt1.replace(charAt3, "_")
    console.log(remove_charAt3);

    qeustion_word = "<h4 id='word_display'> Q."+remonve_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = qeustion_word + input_box + check_button ;
    document.getElementById("word").value = "";

}

