
var task_1_var = 0
var task_7_var = 0
var task_10_var = 0

function task_1(){
    task_1_var++;
    if(task_1_var > 4){
        task_1_var = 0;
    };
    let label = document.getElementById("task_1_text");
    let text = "";
    if(task_1_var==0){
        text = "Вот обычное предложение, содержащее текст.";
    }
    else{
        text = `Вот альтернативный текст номер ${task_1_var}!`;
    };
    label.textContent = text;
}

function task_2(){
    let div = document.getElementById("task_2_div");
    let div_class = div.getAttribute("class");
    let final_class = ""
    if(div_class=="task_2_class"){
        final_class = null;
    }
    else{
        final_class = "task_2_class";
    }
    div.setAttribute("class",final_class)
}

function task_3(){
    let label = document.getElementById("task_3_text");
    let color = document.getElementById("task_3_input").value;
    label.style.color = color;
}

function task_5(){
    let ul = document.getElementById("task_4_ul")
    let li = document.createElement("li");
    li.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
    ul.appendChild(li);
}

function task_5_clear(){
    document.getElementById("task_4_ul").innerHTML = ""
}

function task_6(){
    document.getElementById("task_6_div").remove()
}

function task_7(){
    task_7_var++;
    if(task_7_var > 3){
        task_7_var = 0;
    };
    let img = document.getElementById("task_7_img");
    let src = "";
    if(task_7_var==0){
        src = "https://name-style.ru/assets/cache_image/brands/models/mercedes-cls-klasse-cls-63-amg_1000x600_cf9.jpg";
    }
    else if(task_7_var==1){
        src = `https://avatars.mds.yandex.net/get-verba/1604130/2a0000017fad954b5e8471df4f2417bea9f3/cattouchretcr`;
    }
    else if(task_7_var==2){
        src = `https://avatars.mds.yandex.net/get-autoru-vos/2113493/6ee657c7ef01eaaab49f2453559ef60e/456x342`;
    }
    else if(task_7_var==3){
        src = `https://i.ytimg.com/vi/XuRXiFar1r0/sddefault.jpg`;
    };
    img.setAttribute("src",src)
}

function task_8(){
    let tbl = document.createElement('table');
    tbl.style.width = '400px'
    for(let x=0; x<4; x++){
        let row = tbl.insertRow();
        row.style.outline = '1px black solid'
        row.style.height = '30px'
        row.textContent = `Row ${x+1}`;
        for(let y=0; y<6; y++){
            let cell = row.insertCell();
            cell.style.width = '48px'
            cell.style.height = '60px'
            cell.style.outline = '1px black solid'
            cell.textContent = `Cell ${y+1}`;
        };
    };
    document.getElementById("task_8_div").appendChild(tbl);
}

function task_8_clear(){
    document.getElementById("task_8_div").innerHTML = ""
}

function task_10(){
    task_10_var++;
    if(task_10_var > 4){
        task_10_var = 0;
    };
    let label = document.getElementById("task_10_text");
    let text = "";
    if(task_10_var==0){
        text = "Вот обычное предложение, содержащее текст.";
    }
    else{
        text = `Вот альтернативный текст номер ${task_10_var}!`;
    };
    label.textContent = text;
}

function task_11() {
    let menu = document.getElementById('task_11_menu');
    let btn = document.getElementById('task_11_button');
    if(btn.textContent == "Скрыть меню") {
        btn.textContent = "Показать меню"
        menu.style.display = "none";
    }
    else {
        btn.textContent = "Скрыть меню"
        menu.style.display = "block";
    };
}

function task_12() {
    let menu = document.getElementById("task_12_menu");
    let input = document.getElementById("task_12_input").value;
    let p = document.createElement("p");
    p.textContent = input;
    menu.appendChild(p);
}

function task_12_clear(){
    document.getElementById("task_12_menu").innerHTML = "";
}

function task_13(){
    let text = document.getElementById("task_13_number");
    text.textContent = Number(text.textContent)+1;
}

function task_14(name){
    let doc = document.getElementById(`task_14_${name}`);
    for (const item of document.getElementById("task_14").children) {
        let visible = "none";
        if(item.id==doc.id){
            visible = "block";
        };
        item.style.display = visible;
    }
}