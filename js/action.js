const hitpoint = 14;
var hands_sign = ["グー","チョキ","パー"];
var hands_sign2 = [ 
                    ["fa-solid", "fa-hand-fist"],
                    ["fa-solid", "fa-wand-sparkles"],
                    ["fa-solid", "fa-shield-halved"]
                ]; //アイコン表示用

var player_hitpoint = hitpoint;
var enemy_hitpoint = hitpoint;
var state_conclusion = false;
var battle_result;

const reset_button = document.getElementById("reset");



// ハンドボタンを押したときの処理
function pon(player_hand) {
    if (!state_conclusion) {
        var enemy_hand; //相手の選択

        const player_hand_area = document.getElementById("player_card");
        const enemy_hand_area = document.getElementById("enemy_card");

        //アイコン表示用
        const player_hand_icon = document.createElement("i");
        const enemy_hand_icon = document.createElement("i");

        //ランダム攻撃
        enemy_hand = enemy_Random();

        if (player_hand_area.children.length != 0) {
            player_hand_area.removeChild(player_hand_area.firstElementChild);
            enemy_hand_area.removeChild(enemy_hand_area.firstElementChild);
        }
        player_hand_icon.classList.add(hands_sign2[player_hand][0]);
        player_hand_icon.classList.add(hands_sign2[player_hand][1]);
        player_hand_icon.classList.add("fa-10x");
        enemy_hand_icon.classList.add(hands_sign2[enemy_hand][0]);
        enemy_hand_icon.classList.add(hands_sign2[enemy_hand][1]);
        enemy_hand_icon.classList.add("fa-10x");
        //document.getElementById("enemy_card").textContent = hands_sign[enemy_hand];
        //document.getElementById("player_card").textContent = hands_sign[player_hand];
        
        player_hand_area.appendChild(player_hand_icon);
        enemy_hand_area.appendChild(enemy_hand_icon);

        //勝負結果計算
        damage(player_hand,enemy_hand);

        //決着判定
        conclusion();

        return hands_sign[player_hand];
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
        //battle_result = "あいこ";
        add_Log("あいこ:お互いに1ダメージ",2);
    }else if (calc_Jyanken(player_hand,enemy_hand) == 1) {   //プレイヤーの勝ち 
        if (player_hand == player_status.type) {
            enemy_hitpoint = enemy_hitpoint - 3;     //得意攻撃
            add_Log("プレイヤーの強攻撃!:相手に3ダメージ!",0);
        }else{
            enemy_hitpoint = enemy_hitpoint - 2;     //通常攻撃  
            add_Log("プレイヤーの攻撃:相手に2ダメージ",0);
        }
        //battle_result = "勝ち";
    }else {                                          //エネミーの勝ち
        if (enemy_hand == enemy_status.type) {
            player_hitpoint = player_hitpoint - 3;
            add_Log("相手の強攻撃!:プレイヤーに3ダメージ!",1);
        }else{
            player_hitpoint = player_hitpoint - 2; 
            add_Log("相手の攻撃:プレイヤーに2ダメージ",1);           
        }
        //battle_result = "負け";
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
    player_hitpoint = hitpoint;
    enemy_hitpoint = hitpoint;   
    state_conclusion = false;
    battle_result = "";
    document.getElementById("enemy_card").textContent = "";
    document.getElementById("player_card").textContent = "";
    document.getElementById("select").textContent = battle_result;
    document.getElementById("player_hitpoint").value = player_hitpoint;
    document.getElementById("enemy_hitpoint").value = enemy_hitpoint;
    reset_button.className = "hidden";

    //キャラクター情報
    create_player(0);
    create_enemy(0);
    display_status();

    reset_Log();
}

