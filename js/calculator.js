function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}

function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp)
    }
}

function clean(){
    document.form.textview.value = "";
}

function xclear(){
    document.getElementById('history').innerHTML = "";
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}

var array = [];

function pushData(){
    // get value from the textview
    var exp = document.form.textview.value;
    array.push(exp);

    document.getElementById('history').innerHTML = ""

    // display value on History book
    for(let i = 0; i < array.length; i++){
        document.getElementById('history').innerHTML += array[i] + "<br>"; 
    }
}