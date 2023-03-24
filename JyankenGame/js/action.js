var hnads_sign = ["グー","チョキ","パー"];

var player_hitpoint = 7;
var enemy_hitpoint = 7;
var state_conclusion = false;
var battle_result;

const reset_button = document.getElementById("reset");


// ハンドボタンを押したときの処理
function pon(player_hand) {
    if (!state_conclusion) {
        var enemy_hand; //相手の選択

        //ランダム攻撃
        enemy_hand = enemy_Random();

        document.getElementById("enemy_card").textContent = hnads_sign[enemy_hand];
        document.getElementById("player_card").textContent = hnads_sign[player_hand];

        //勝負結果計算
        damage(player_hand,enemy_hand);

        //決着判定
        conclusion();

        return hnads_sign[player_hand];
    } else {
        return null;
    }

}

function enemy_Random() {
    return Math.floor(Math.random() * 3);
}

function calc_Jyanken (player_hand,enemy_hand) {
    return (enemy_hand - player_hand + 3)%3;
}

function damage(player_hand,enemy_hand){
    if (calc_Jyanken(player_hand,enemy_hand) == 0) {    //あいこ
        player_hitpoint = player_hitpoint - 1;
        enemy_hitpoint = enemy_hitpoint - 1;
        battle_result = "あいこ";
    }else if (calc_Jyanken(player_hand,enemy_hand) == 1) {   //プレイヤーの勝ち 
        enemy_hitpoint = enemy_hitpoint - 2;
        battle_result = "勝ち";
    }else {                                          //エネミーの勝ち
        player_hitpoint = player_hitpoint - 2;
        battle_result = "負け";
    }

    if (player_hitpoint < 1) player_hitpoint = 0;
    if (enemy_hitpoint < 1) enemy_hitpoint = 0;

    document.getElementById("player_hitpoint").value = player_hitpoint;
    document.getElementById("enemy_hitpoint").value = enemy_hitpoint;

}

function conclusion (){
    if (player_hitpoint == 0){ //プレイヤーの負け
        battle_result = "プレイヤーの敗北";
        state_conclusion = true;
    } else if (enemy_hitpoint == 0) {
        battle_result = "プレイヤーの勝利";
        state_conclusion = true;
    }else{
        state_conclusion = false;
    }
    document.getElementById("select").textContent = battle_result;  //ターンの結果表示

    if (state_conclusion) {
        reset_button.className = "";
    } else {
        reset_button.className = "hidden";
    }
}

function reset() {
    player_hitpoint = 7;
    enemy_hitpoint = 7;   
    state_conclusion = false;
    battle_result = "";
    document.getElementById("enemy_card").textContent = "";
    document.getElementById("player_card").textContent = "";
    document.getElementById("select").textContent = battle_result;
    document.getElementById("player_hitpoint").value = player_hitpoint;
    document.getElementById("enemy_hitpoint").value = enemy_hitpoint;
    reset_button.className = "hidden";
}