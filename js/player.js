let character = {
    name : 'name',
    type : 0,
    main_skill : null,
    sub_skill : null
}

const main_skills = 
    [
        ["なし",0],
        ["大打撃",1],   //使用時、攻撃力2倍
        ["茨の鎧",0],   //装備:あいこのダメージ+1
        ["聖なる盾",1]  //使用時、受けるダメージを-2する。
    ];

const sub_skills = 
    [
        ["なし",0],
        ["回復薬",1],   //使用時、HP2回復
        ["煙幕",1],     //使用時、ダメージを受ける確率1/2
        ["勇気の光",1]  //使用時、相手に勝った時に与えるダメージ+2     
    ];

var player_status = {};
var enemy_status = {};

for (let key in character) {
    player_status[key] = character[key];
    enemy_status[key] = character[key];
}

function create_player (characterCode) {
    player_status.name = 'player';
    player_status.type = 0;
    player_status.main_skill = 1;
    player_status.sub_skill = 1;
}


function create_enemy (characterCode) {

    enemy_status.name = 'computer';
    enemy_status.type = enemy_Random();
    enemy_status.main_skill = 1;
    enemy_status.sub_skill = 1;
}

function display_status() {
    const player_type_area = document.getElementById("player_type");
    const player_skill1_area = document.getElementById("player_skill1");
    const player_skill2_area = document.getElementById("player_skill2");
    const enemy_type_area = document.getElementById("enemy_type");
    const enemy_skill1_area = document.getElementById("enemy_skill1");
    const enemy_skill2_area = document.getElementById("enemy_skill2");
    
    //アイコン表示用
    const player_hand_icon = document.createElement("i");
    const enemy_hand_icon = document.createElement("i");
    player_hand_icon.classList.add(hands_sign2[player_status.type][0]);
    player_hand_icon.classList.add(hands_sign2[player_status.type][1]);
    enemy_hand_icon.classList.add(hands_sign2[enemy_status.type][0]);
    enemy_hand_icon.classList.add(hands_sign2[enemy_status.type][1]);

    //document.getElementById("player_type").textContent =hands_sign[player_status.type];
    if (player_type_area.children.length != 0){
        player_type_area.removeChild(player_type_area.firstElementChild);
    }
    player_type_area.appendChild(player_hand_icon);
    player_skill1_area.textContent =main_skills[player_status.main_skill][0];
    player_skill2_area.textContent =sub_skills[player_status.sub_skill][0];
    //document.getElementById("enemy_type").textContent =hands_sign[enemy_status.type];
    if (enemy_type_area.children.length != 0){
        enemy_type_area.removeChild(enemy_type_area.firstElementChild);
    }
    enemy_type_area.appendChild(enemy_hand_icon);
    enemy_skill1_area.textContent =main_skills[enemy_status.main_skill][0];
    enemy_skill2_area.textContent =sub_skills[enemy_status.sub_skill][0];
}