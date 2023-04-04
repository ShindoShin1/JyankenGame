const loglist = document.getElementById("battle_log");

function add_Log(sentence){
    
    const log = document.createElement("li");
    log.innerText = sentence;
    log.classList.add("log_item");
    loglist.appendChild(log);

}

function reset_Log(sentence){
    const log_len = loglist.children.length;   //ログのアイテム数の取得

    for (var i = 0; i < log_len; i++){
        loglist.removeChild(loglist.firstElementChild);
    }
    
}