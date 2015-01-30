/**
 * Created by Administrator on 2015/1/30.
 */
/**
 * Created by Administrator on 2015/1/30.
 */

window.onload = function () {

    var canvas = document.getElementById("cvs");
    var context = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 800;

    context.fillStyle = "red";
    context.strokeStyle = "#058";
    context.lineWidth = 5;

    /*
    * a c e
    * b d f
    * 0 0 1
    *
    * a,d 水平、垂直缩放
    * b,c 水平、垂直倾斜
    * e,f 水平、垂直位移
    * */

    context.save();

    context.transform(1.5, 0.3, 0.2, 1.2, 100, 50);



    context.fillRect(50, 50, 300, 300);
    context.strokeRect(50, 50, 300, 300);

    context.restore();

    context.fill();
    context.stroke();
};