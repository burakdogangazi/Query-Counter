let counthtml = document.getElementById("count");

let savehtml = document.getElementById("saveString");

document.addEventListener('keypress',clearSection);

let count = 0;


function increment(){
    count = count+1;
    SetCounterAndStorage(count);
}

function reset(){
    count = 0;
    SetCounterAndStorage(count);
}

function SetCounterAndStorage(count){
    counthtml.textContent = count;
    localStorage.setItem("CountNumber",count);
    console.log(count);
}

function save(){

    let entryString = count + "-"

    savehtml.textContent += entryString;

}

function clearSection(d){
    savehtml.textContent = "Previous Entries :";
}






