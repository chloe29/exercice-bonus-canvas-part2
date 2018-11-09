var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
  // E grande barre
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.moveTo(130,70);
ctx.lineTo(130,220);
ctx.stroke();
  // E petites barres
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.moveTo(130,70);
ctx.lineTo(185,70);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.moveTo(130,145);
ctx.lineTo(185,145);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.moveTo(130,220);
ctx.lineTo(185,220);
ctx.stroke();
  // 2 courbe
ctx.beginPath();
ctx.strokeStyle="#EA4E1D";
ctx.lineWidth=9;
ctx.lineCap="butt";
ctx.moveTo(190,65);
ctx.bezierCurveTo(180,55,330,-20,300,53);
ctx.stroke();
  // 2 ligne du milieu
ctx.beginPath();
ctx.moveTo(300,52);
ctx.lineTo(180,250);
ctx.stroke();
  // 2 pieds
ctx.beginPath();
ctx.moveTo(180,250);
ctx.lineTo(265,235);
ctx.stroke();
  // N trait 1 montant
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.moveTo(296,70);
ctx.lineTo(296,220);
ctx.stroke();
  // N trait 2 descendant
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.moveTo(296,70);
ctx.lineTo(400,220);
ctx.stroke();
  // N trait 3 remontant
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.moveTo(400,70);
ctx.lineTo(400,220);
ctx.stroke();
  // Texte école du numérique
// indique la taille et la police du texte que l'on ajoute
ctx.font = "28px Times, Times New Roman, serif";
ctx.fillStyle="gray";
// permet d'ajouter un texte
ctx.fillText("École du Numérique", 290,255);
ctx.fillText("du Noyonnais", 285,280);
ctx.fill();
  // forme 1 gris presque transparant
ctx.beginPath();
ctx.fillStyle="Gainsboro";
ctx.moveTo(440,70);
ctx.lineTo(430,80);
ctx.lineTo(430,90);
ctx.lineTo(440,100);
ctx.lineTo(450,90);
ctx.lineTo(450,80);
ctx.lineTo(440,70);
ctx.fill();
  // forme 2 gris clair
ctx.beginPath();
ctx.fillStyle="silver";
ctx.moveTo(430,100);
ctx.lineTo(420,110);
ctx.lineTo(420,120);
ctx.lineTo(430,130);
ctx.lineTo(440,120);
ctx.lineTo(440,110);
ctx.lineTo(430,100);
ctx.fill();
  // forme 3 gris foncé
ctx.beginPath();
ctx.fillStyle="Menu";
ctx.moveTo(455,100);
ctx.lineTo(445,110);
ctx.lineTo(445,120);
ctx.lineTo(455,130);
ctx.lineTo(465,120);
ctx.lineTo(465,110);
ctx.lineTo(455,100);
ctx.fill();
  // forme 4 orange
ctx.beginPath();
ctx.fillStyle="#EA4E1D";
ctx.moveTo(442,130);
ctx.lineTo(432,140);
ctx.lineTo(432,150);
ctx.lineTo(442,160);
ctx.lineTo(452,150);
ctx.lineTo(452,140);
ctx.lineTo(442,130);
ctx.fill();
  // forme 5 gris argent
ctx.beginPath();
ctx.fillStyle="GrayText";
ctx.moveTo(430,160);
ctx.lineTo(420,170);
ctx.lineTo(420,180);
ctx.lineTo(430,190);
ctx.lineTo(440,180);
ctx.lineTo(440,170);
ctx.lineTo(430,160);
ctx.fill();
  // forme 6 gris presque transparant
ctx.beginPath();
ctx.fillStyle="Gainsboro";
ctx.moveTo(455,160);
ctx.lineTo(445,170);
ctx.lineTo(445,180);
ctx.lineTo(455,190);
ctx.lineTo(465,180);
ctx.lineTo(465,170);
ctx.lineTo(455,160);
ctx.fill();
  // petite forme 1 gris presque transparant
ctx.beginPath();
ctx.fillStyle="Gainsboro";
ctx.moveTo(473,113);
ctx.lineTo(469,116);
ctx.lineTo(469,119);
ctx.lineTo(473,122);
ctx.lineTo(477,119);
ctx.lineTo(477,116);
ctx.lineTo(473,113);
ctx.fill();
  // petite forme 2 gris argent
ctx.beginPath();
ctx.fillStyle="GrayText";
ctx.moveTo(480,123);
ctx.lineTo(476,126);
ctx.lineTo(476,129);
ctx.lineTo(480,132);
ctx.lineTo(484,129);
ctx.lineTo(484,126);
ctx.lineTo(480,123);
ctx.fill();
  // petite forme 3 orange
ctx.beginPath();
ctx.fillStyle="#EA4E1D";
ctx.moveTo(490,118);
ctx.lineTo(486,121);
ctx.lineTo(486,124);
ctx.lineTo(490,127);
ctx.lineTo(494,124);
ctx.lineTo(494,121);
ctx.lineTo(490,118);
ctx.fill();
