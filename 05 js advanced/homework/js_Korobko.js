var x = -40;
var y = -60; 
var xp = new Array(-73,-33,7,-33); // Массив X-координат полигона
var yp = new Array(-85,-126,-85,-45); // Массив Y-координат полигона
function inPoly(x,y){
  npol = xp.length;
  j = npol - 1;
  var c = 0;
  for (i = 0; i < npol;i++){
      if ((((yp[i]<=y) && (y<yp[j])) || ((yp[j]<=y) && (y<yp[i]))) &&
      (x > (xp[j] - xp[i]) * (y - yp[i]) / (yp[j] - yp[i]) + xp[i])) {
       c = !c
       }
       j = i;
  }
return c;
}
inPoly(x,y);