/**
 * Created by Administrator on 2015/1/27.
 */
var w_width = 1024;
var w_height = 768;
var w_radius = 3;
var mg_top = 60;
var mg_left = 30;

var endTime = new Date(2015,1,18,0,0,0);
var curSeconds = 0;

window.onload = function () {
    var canvas = document.getElementById("cvs");
    var context = canvas.getContext("2d");

    canvas.width = w_width;
    canvas.height = w_height;

    curSeconds = getcurSeconds();
    //render(context);
    setInterval(
        function () {
            render(context);
            update();
        },
        50
    );
};

function getcurSeconds() {
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret/1000);

    return ret >= 0? ret : 0;
}

function update() {

    var nextShowTime = getcurSeconds();

    var next_Day =  parseInt(nextShowTime / (3600 * 24));
    var next_Lv1 = nextShowTime % (24 * 3600);
    var next_Hours = parseInt(next_Lv1 / 3600);
    var next_Lv2 = next_Lv1 % 3600;
    var next_Minutes = parseInt(next_Lv2 / 60);
    var next_Lv3 = next_Lv2 % 60;
    var next_Seconds =  parseInt(next_Lv3);

    var cur_Day =  parseInt(curSeconds / (3600 * 24));
    var cur_Lv1 = curSeconds % (24 * 3600);
    var cur_Hours = parseInt(cur_Lv1 / 3600);
    var cur_Lv2 = cur_Lv1 % 3600;
    var cur_Minutes = parseInt(cur_Lv2 / 60);
    var cur_Lv3 = cur_Lv2 % 60;
    var cur_Seconds =  parseInt(cur_Lv3);

    if(next_Seconds != cur_Seconds){

        curSeconds = nextShowTime;
    }
}

function render(cxt) {

    cxt.clearRect(0,0,w_width,w_height);

    var day =  parseInt(curSeconds / (3600 * 24));
    var lv1 = curSeconds % (24 * 3600);
    var hours = parseInt(lv1 / 3600);
    var lv2 = lv1 % 3600;
    var minutes = parseInt(lv2 / 60);
    var lv3 = lv2 % 60;
    var seconds =  parseInt(lv3);

    renderDigit( mg_left, mg_top, parseInt(day/10), cxt);
    renderDigit( mg_left + 15*(w_radius + 1), mg_top, parseInt(day%10), cxt);
    renderDigit( mg_left + 30*(w_radius + 1), mg_top, 10, cxt);
    renderDigit( mg_left + 45*(w_radius + 1), mg_top, parseInt(hours/10), cxt);
    renderDigit( mg_left + 60*(w_radius + 1), mg_top, parseInt(hours%10), cxt);
    renderDigit( mg_left + 75*(w_radius + 1), mg_top, 10, cxt);
    renderDigit( mg_left + 90*(w_radius + 1), mg_top, parseInt(minutes/10), cxt);
    renderDigit( mg_left + 105*(w_radius + 1), mg_top, parseInt(minutes%10), cxt);
    renderDigit( mg_left + 120*(w_radius + 1), mg_top, 10, cxt);
    renderDigit( mg_left + 135*(w_radius + 1), mg_top, parseInt(seconds/10), cxt);
    renderDigit( mg_left + 150*(w_radius + 1), mg_top, parseInt(seconds%10), cxt);
}

function renderDigit(x, y, num, cxt) {
    cxt.fillStyle = "rgb(0,102,153)";
    for(var i = 0; i < digit[num].length; i++){
        for(var j = 0; j < digit[num][i].length; j++){
            if(digit[num][i][j] === 1){
                cxt.beginPath();
                cxt.arc(x + j * 2 * (w_radius + 1) + (w_radius + 1), y + i *2 * (w_radius + 1) + (w_radius + 1), w_radius, 0 , 2 * Math.PI);
                cxt.closePath();

                cxt.fill();
            }
        }
    }
}
