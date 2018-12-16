window.onload = function() {
    var recording = []; //record numbers and operator
    var btn_txt = document.getElementsByClassName("btn"); //get button item
    var txt = document.getElementsByClassName("txt")[0]; //get screen item
    var btn_fun = document.getElementsByClassName("btn_click"); //AC & DEL
    var end = 0;


    for (var i = 0; i < btn_fun.length; i++) { //judge this value is AC or DEL
        btn_fun[i].onclick = function() {
            if (this.value == "AC") { // AC
                recording = [];
                txt.value = "";
            } else { // DEL
                txt.value = txt.value.substr(0, txt.value.length - 1);
            }
        }
    }

    for (var i = 0; i < btn_txt.length; i++) {
        btn_txt[i].onclick = function() {
            if (end != 0) {
                txt.value = "";
                end = 0;
            }
            // judge this value is a number or not
            if (txt.value == "" && this.value == "-") { // negative numbers
                txt.value = "-";
            } else if (txt.value == "" && this.value == ".") { // decimal place
                txt.value = "0.";
            } else {
                if (!isNaN(this.value) || this.value == ".") { // number or not
                    if (txt.value.indexOf(".") != -1) {
                        if (this.value != ".") {
                            txt.value += this.value;
                        }
                    } else {
                        txt.value += this.value;
                    }

                } else {
                    if (this.value != "=") {
                        if (this.value != "+" && this.value != "-" && this.value != "*" && this.value != "/") {
                            if (this.id == "b1") { // square root
                                //console.log("I am in b1!!!!");
                                var tmp;
                                recording[recording.length] = txt.value;
                                tmp = eval(recording.join(""));
                                tmp = parseFloat(tmp).toFixed(8);
                                txt.value = Math.sqrt(tmp);
                                recording = [];
                                //end = 1;
                            } else if (this.id == "b2"){ // reciprocal
                                //console.log("I am in b2!!!!");
                                recording[recording.length] = txt.value;
                                var tmp = eval(recording.join(""));
                                tmp = parseFloat(tmp).toFixed(8);
                                if (tmp != 0) {
                                    txt.value = 1 / tmp;
                                    recording = [];
                                } else {
                                    txt.value = "ERROR";
                                    recording = [];
                                    end = 1;
                                }
                            } else if (this.id == "b3"){
                                var tmp;
                                recording[recording.length] = txt.value;
                                tmp = eval(recording.join(""));
                                tmp = parseFloat(tmp).toFixed(8);
                                txt.value = Math.sin(tmp);
                                recording = [];
                                //end = 1;
                            } else if (this.id == "b4"){
                                var tmp;
                                recording[recording.length] = txt.value;
                                tmp = eval(recording.join(""));
                                tmp = parseFloat(tmp).toFixed(8);
                                txt.value = Math.cos(tmp);
                                recording = [];
                                //end = 1;
                            } else if (this.id == "b5"){
                                var tmp;
                                recording[recording.length] = txt.value;
                                tmp = eval(recording.join(""));
                                tmp = parseFloat(tmp).toFixed(8);
                                txt.value = Math.tan(tmp);
                                recording = [];
                                //end = 1;
                            }
                        } else { // "+, _, *, /"
                            recording[recording.length] = txt.value;
                            recording[recording.length] = this.value;
                            txt.value = "";
                        }

                    } else { // "="
                        recording[recording.length] = txt.value;
                        for (var j = 0; j < recording.length; j++) { // divisor cannot be 0
                            console.log(recording[j]);
                            if (recording[j] == "0" && recording[j - 1] == "/") {
                                txt.value = "ERROR";
                                recording = [];
                                end = 1;
                                break;
                            }
                        }
                        if (end != 1) {
                            var tmp = eval(recording.join(""));
                            txt.value = parseFloat(tmp).toFixed(8);
                            recording = [];
                            end = 1;
                        }
                    }
                }
            }
        }
    }
}