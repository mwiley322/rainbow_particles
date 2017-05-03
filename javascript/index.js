window.onload = function() {

  var c = document.getElementById("myGradientCanvas");
  var ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  var grd=ctx.createLinearGradient(0,0,c.width,500);
  grd.addColorStop(0,"#e1f5fe");
  grd.addColorStop(1,"#aa00ff");
  ctx.fillStyle=grd;
  ctx.fillRect(0,0,c.width,500);

};
