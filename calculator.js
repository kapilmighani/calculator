function append(value) {
    if(document.getElementById('display').innerText == 'Error'){
        document.getElementById('display').innerText = value;
    }else{
        document.getElementById('display').innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').innerText);
        document.getElementById('display').innerText = result;
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
    }
}