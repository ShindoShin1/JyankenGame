const loglist = document.getElementById("battle_log");

function add_Log(sentence,text_state){
    
    const log = document.createElement("li");
    log.innerText = sentence;
    log.classList.add("log_item");
    switch (text_state) {
        case 0:
            log.classList.add("good");
            break;
        case 1:
            log.classList.add("bad");
            break;
        case 2:    
            log.classList.add("alert");
            break;
        defalt:
            log.classList.add("defalt");

    }

    loglist.appendChild(log);

}

function reset_Log(sentence){
    const log_len = loglist.children.length;   //ログのアイテム数の取得

    for (var i = 0; i < log_len; i++){
        loglist.removeChild(loglist.firstElementChild);
    }
    
}