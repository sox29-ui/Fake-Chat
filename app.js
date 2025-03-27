var g = true;
let coldown = 0;
let auth = 0;
let last_msg = "";
let user = "";
let us = ""
let user2 = "";
let us2 = ""
let avtlink = "./img/avt.png";
let avtlink2 = "./img/avt.png";
var m = document.getElementsByClassName('txt');
setInterval(()=>{
    let container = document.querySelector("messages");
    let data = localStorage.getItem("messages-discord");
    if (container.innerHTML !== ""){
        document.body.style.opacity = "1"
        localStorage.setItem("messages-discord",container.innerHTML)
    }
    container = document.querySelector("messages");
    data = localStorage.getItem("messages-discord");
    if (data && container.innerHTML !== data){
        container.innerHTML = data;
    }
    if (!data){
        document.body.style.opacity = "1"
    }
    m = document.getElementsByClassName('txt');
},0)

function info(){
    let el1 = document.getElementById("link1").value;
    let el2 = document.getElementById("link2").value;
    if (el1 == ""){
        el1 = "./img/avt.png";
    }
    if (el2 == ""){
        el2 = "./img/avt.png";
    }
    document.getElementById("user").innerText = user2;
    document.getElementById("user2").innerText = user2;
    document.getElementById("us").innerText = us2;
    document.getElementById("avt1").src = avtlink2;
    document.getElementById("avt2").src = avtlink2;
    document.getElementById("typer").placeholder = `Message @${user2}`
    document.getElementById("rt1").src = el1;
    document.getElementById("rt2").src = el2;
    document.getElementById("gh").innerText = user2;
}

info()
setInterval(()=>{
    const a = document.getElementById("typer").value
    if (a !== ""){
        document.getElementById("btn").onclick = send;
        document.getElementById("s/s").style.transition = "0.3s"
        document.getElementById("s/s").src = "img/send.png"
        document.getElementById("s/s").style.transform = "scale(1.7)"
    } else {
        document.getElementById("btn").onclick = swap
        document.getElementById("s/s").style.transition = "0.1s"
        document.getElementById("s/s").src = "img/swap.png"
        document.getElementById("s/s").style.transform = "scale(1.0)"
    }
})
document.getElementById("typer").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && document.getElementById("typer").value !== "") {
        send();
    }
});
function send(){
    const id = Math.floor(Math.random() * 1000000000);
    const a = document.getElementById("typer").value
    let container = document.querySelector("messages");
    if (coldown == 0){
        coldown += 30
        container.innerHTML += `
        <div class="msg" id="${id}_msg">
            <img class="avt" src="${avtlink}" alt="avt ${user}">
            <div class="inside">
                <div class="info">
                    <span class="user">${user}</span>
                    <span class="time">${new Date().toLocaleString()}</span>
                </div>
                <div class="message" id="${id}_txt">
                    <p class="txt">${a}</p>
                </div>
            </div>
        </div>`;
        last_msg = id;
    } else {
        let container = document.getElementById(`${last_msg}_txt`);
        container.innerHTML += `<p class="txt">${a}</p>`;
    }
    localStorage.setItem("messages-discord",container.innerHTML)
    let messagesContainer = document.getElementById(`block`);
    messagesContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    document.getElementById("typer").value = "";
}
//displayD1
//usernameD1
//link1
function save_menu(){
    const edu1 = document.getElementById("displayD1").value;
    const edu2 = document.getElementById("displayD2").value;
    const eu1 = document.getElementById("usernameD1").value;
    const eu2 = document.getElementById("usernameD2").value;
    const el1 = document.getElementById("link1").value;
    const el2 = document.getElementById("link2").value;
    if (auth == 0){
        if (eu2 == ""){
            us2 = "Null"
            info();
        } else {
            us2 = eu2
            info();
        }
        if (edu2 == ""){
            user2 = "Null"
            info();
        } else {
            user2 = edu2
            info();
        }
        if (el2 == ""){
            avtlink2 = "./img/avt.png";
            info();
        } else {
            avtlink2 = el2;
            info();
        }
        if (el1 == ""){
            avtlink = "./img/avt.png";
        } else {
            avtlink = el1;
        }
        if (edu1 == ""){
            user = "Null";
        } else {
            user = edu1;
        }
        if (eu1 == ""){
            us = "Null"
        } else {
            us = eu2
        }
    } else {
        if (eu1 == ""){
            us2 = "Null"
            info();
        } else {
            us2 = eu1
            info();
        }
        if (edu1 == ""){
            user2 = "Null"
            info();
        } else {
            user2 = edu1
            info();
        }
        if (el1 == ""){
            avtlink2 = "./img/avt.png";
            info();
        } else {
            avtlink2 = el1;
            info();
        }
        if (el2 == ""){
            avtlink = "./img/avt.png";
        } else {
            avtlink = el2;
        }
        if (edu2 == ""){
            user = "Null";
        } else {
            user = edu2;
        }
        if (eu2 == ""){
            us = "Null"
        } else {
            us = eu2
        }
    }
}
function swap(){
    coldown = 0;
    if (auth == 0){
        auth = 1;
    } else {
        auth = 0;
    }
    save_menu()
}
function clearr(){
    localStorage.clear()
    let container = document.querySelector("messages");
    container.innerHTML = "";
}
save_menu();
setInterval(()=>{
    if (coldown !== 0){
        coldown -= 1;
    }
},1000)
setInterval(()=>{
    if (auth == 0){
        document.getElementById(`ur2`).style.transform = "translateY(20px)";
        document.getElementById(`ur1`).style.transform = "translateY(0px)";
    } else {
        document.getElementById(`ur1`).style.transform = "translateY(20px)";
        document.getElementById(`ur2`).style.transform = "translateY(0px)";
    }
})
setTimeout(()=>{
    Array.from(m).forEach((mh) => {
        mh.addEventListener('dblclick', function() {
            let edit = 0;
            let existingEditTag = mh.querySelector("span");
            if (existingEditTag) {
                existingEditTag.remove();
                edit = 1;
            }
            let mg = mh.textContent;
            let input = document.createElement("input");
            let p = document.createElement("span");
            input.value = mg;
            input.style.borderRadius = "5px"
            input.style.transform = "scale(1.1)"
            input.addEventListener("blur", function() {
                input.replaceWith(mh);
                if (edit == 1){
                    mh.prepend(p);
                }
            });
            input.addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    mh.textContent = input.value;
                    input.replaceWith(mh);
                    mh.prepend(p);
                }
            });

            input.focus();
            mh.replaceWith(input);
            p.innerHTML = " (edited)  "
            p.style.fontSize = "10px"
            p.style.opacity = 0.7;
            p.style.marginRight = "5px"
            
        });
    });
},1000)

function menu(){
    document.getElementById("blur").style.display = "block";
    setTimeout(()=>{
        document.getElementById("menu").style.transform = "translateX(-30px)";
    },100)
}
var foc = true;
function click_menu(){
    foc = false;
}
function out(){
    if (foc == false){
        foc = true;
        return
    } else {
        document.getElementById("menu").style.transform = "translateX(-110%)";
        setTimeout(()=>{
            document.getElementById("blur").style.display = "none";
        },300)
    }
}
function back(){
    window.location.href = "../"
}
function get(){
    document.getElementById("code").value = document.body.innerHTML;
}
function download(){
    const edu1 = document.getElementById("displayD1").value;
    const edu2 = document.getElementById("displayD2").value;
    const eu1 = document.getElementById("usernameD1").value;
    const eu2 = document.getElementById("usernameD2").value;
    const el1 = document.getElementById("link1").value;
    const el2 = document.getElementById("link2").value;
    document.body.innerHTML = document.getElementById("code").value;
    document.getElementById("displayD1").value = edu1;
    document.getElementById("displayD2").value = edu2;
    document.getElementById("usernameD1").value = eu1;
    document.getElementById("usernameD2").value = eu2;
    document.getElementById("link1").value = el1;
    document.getElementById("link2").value = el2;
    info()
}
