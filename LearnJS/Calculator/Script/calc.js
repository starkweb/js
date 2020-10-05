'use Strict'
let numval = (e) => { return e.value }
var _this = '';
let result = (num) => {
    document.getElementById("txt").value = num;
}

function clear1(e) {
    document.getElementById("txt").value = "";
    _this = '';
}

function keypress(e) {
    _this = _this.toString();

    if (e.className == "eq") {
        _this = eval(_this);
        result(_this);
    } else if (e.className == "op") {

        let ls = _this.substr(_this.length - 1);
        if (ls === e.value)
            event.preventDefault()
        else
            _this += e.value;
        result(_this);
        //}
    } else {
        _this = _this + e.value;
        result(_this);
    }

}
const isnumkey = (event) => {
    let ekey = window.event.which ? window.event.which : window.event.keyCode;
    let res = ((ekey > 48 && ekey < 57) || ekey == 190) ? true : false;
    if (res) {
        document.getElementById('calcmsg').style.display = "None";
        return true;
    } else {
        document.getElementById('calcmsg').style.display = 'block';
        document.getElementById('calcmsg').innerHTML = 'Please Enter Numeric Values';
        return false;
    }
}