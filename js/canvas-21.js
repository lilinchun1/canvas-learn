/**
 * Created by Administrator on 2015/2/3.
 */
var searchLight = {
    x:400,
    y:400,
    radius:150,
    vx:Math.random()*5 + 10,
    vy:Math.random()*5 + 10
};
window.onload = function () {

    var canvas = document.getElementById("cvs");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    setInterval(
        function () {
            draw(context);
            update(canvas.width, canvas.height);
        },
        40
    );

};

function draw(cxt) {

    var canvas = cxt.canvas;

    cxt.clearRect(0, 0, canvas.width, canvas.height);

    cxt.save();

    cxt.beginPath();
    cxt.fillStyle = "#000";
    cxt.fillRect(0, 0, canvas.width, canvas.height);

    cxt.beginPath();
    cxt.arc(searchLight.x, searchLight.y, searchLight.radius, 0, Math.PI*2);
    cxt.fillStyle = "#fff";
    cxt.fill();
    cxt.clip();

    cxt.font = "bold 150px Arial";
    cxt.textAlign = "center";
    cxt.textBaseline = "middle";
    cxt.fillStyle = "#058";
    cxt.fillText("CANVAS", canvas.width/2, canvas.height/4);
    cxt.fillText("CANVAS", canvas.width/2, canvas.height/2);
    cxt.fillText("CANVAS", canvas.width/2, canvas.height*3/4);

    cxt.restore();

}


function update(canvasWidth, canvasHeight) {

        searchLight.x += searchLight.vx;
        searchLight.y += searchLight.vy;

        if(searchLight.x - searchLight.radius <= 0){
            searchLight.vx = -searchLight.vx;
            searchLight.x = searchLight.radius;
        }

        if(searchLight.x + searchLight.radius >= canvasWidth){
            searchLight.vx = -searchLight.vx;
            searchLight.x = canvasWidth - searchLight.radius;
        }

        if(searchLight.y - searchLight.radius <= 0){
            searchLight.vy = -searchLight.vy;
            searchLight.y = searchLight.radius;
        }

        if(searchLight.y + searchLight.radius >= canvasHeight){
            searchLight.vy = -searchLight.vy;
            searchLight.y = canvasHeight - searchLight.radius;
        }


}