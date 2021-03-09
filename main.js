function answer(num) {
    var myAnswer = document.form.textView.value;
    var lastChar = myAnswer[myAnswer.length - 1];
    if(myAnswer.length < 18) {
        if(!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
            document.form.textView.value = myAnswer + num ;
        }else if(num != lastChar){
            document.form.textView.value = myAnswer.replace(lastChar, num);
        }
    }
}
function equal() {
    var sum = document.form.textView.value;
    if(sum) {
        document.form.textView.value = eval(sum);
    }
}
function clearOutPut() {
    document.form.textView.value = "";
}
function goBack() {
    var del =document.form.textView.value;
    document.form.textView.value = del.substring(0, del.length - 1);
}