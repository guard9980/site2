const btn = document.getElementsByClassName('center')[0];
const bar = document.getElementsByClassName('menubar')[0];
const col = document.getElementsByClassName('coll')[0];
let toggled = false;
btn.onclick = function(evt){
    if(!toggled){
        toggled = true;
        bar.classList.remove('dis');
        col.classList.remove('col');
    }
    else{
        toggled = false;
        bar.classList.add('dis');
        col.classList.add('col');
    }
}