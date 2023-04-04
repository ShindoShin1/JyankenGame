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

var player_status = character;
var enemy_status = character;

function create_player (characterCode) {
    player_status.name = 'player';
    player_status.type = 0;
    player_status.main_skill = 1;
    player_status.sub_skill = 1;
}


function create_enemy (characterCode) {
    player_status.name = 'computer';
    player_status.type = 0;
    player_status.main_skill = 1;
    player_status.sub_skill = 1;
}

function display_status() {
    document.getElementById("player_type").textContent =hands_sign[player_status.type];
    document.getElementById("player_skill1").textContent =main_skills[player_status.main_skill][0];
    document.getElementById("player_skill2").textContent =sub_skills[player_status.sub_skill][0];
    document.getElementById("enemy_type").textContent =hands_sign[enemy_status.type];
    document.getElementById("enemy_skill1").textContent =main_skills[enemy_status.main_skill][0];
    document.getElementById("enemy_skill2").textContent =sub_skills[enemy_status.sub_skill][0];
}