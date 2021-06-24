var canvas=new fabric.Canvas("myCanvas");
blockwidtch=30;
blockheight=30;
playrX=10;
playrY=10;
var playrObject="";
var blockObject="";
function playrUpdate()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        playrObject=Img;
        playrObject.scaleToWidth(150);
        playrObject.scaleToHeight(140);
        playrObject.set({
            top:playrY,
            left:playrX;
        });
canvas.add(playrObject);
    });
}
function newimage(getimage)
{
    fabric.Image.fromURL(getimage,function(Img)
    {
        blockObject=Img;
        blockObject.scaleToWidth(blockwidtch);
        blockObject.scaleToHeight(blockheight);
        blockObject.set({
            top:playrY,
            left:playrX;
        });
canvas.add(blockObject);
    });
}