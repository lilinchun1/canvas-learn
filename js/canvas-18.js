/**
 * Created by Administrator on 2015/2/3.
 */
window.onload = function () {

    draw("source-over");

    var buttons = document.getElementById("buttons").getElementsByTagName("a");
    for(var i = 0; i < buttons.length; i++){

        buttons[i].onclick = function () {
            draw(this.text);
            return false;
        };
    }
};

function draw( compositeStyle) {

    var canvas = document.getElementById("cvs");
    canvas.width = 1200;
    canvas.height = 800;

    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = "bold 40px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#058";
    context.fillText("globalCompositeOperation = " + compositeStyle ,canvas.width / 2, 60);

    context.fillStyle = "blue";
    context.fillRect(300, 150, 500, 500);

    context.globalCompositeOperation = compositeStyle;
    context.fillStyle = "red";
    context.beginPath();
    context.moveTo(700, 250);
    context.lineTo(1000, 750);
    context.lineTo(400, 750);
    context.closePath();
    context.fill();
}