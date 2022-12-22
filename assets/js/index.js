var Size = new Number(6);
var Moves = new Array();
function NewGame() {
  for (i=0;i<Size*Size; document.forms[0].elements[i++].value = 0);
  for (i=0;i<3+3*document.forms[0].Difficulty.selectedIndex; i++)
  NewValue(Math.floor(Math.random() * Size), Math.floor(Math.random() * Size), 1);
  Moves.length = document.forms[0].Score.value = 0;
}
function TakeBack(flag) {
  while (flag-- && (i = Moves.pop()))
  NewValue(parseInt(i.split("-")[0]), parseInt(i.split("-")[1]), 1);
  document.forms[0].Score.value = Moves.length;
}
function Clicked(x, y) {
  NewValue(x, y, 3);
  document.forms[0].Score.value = Moves.push(x + "-" + y);
  for (i = 0; i < Size * Size; i++)
    if (parseInt(document.forms[0].elements[i].value))
    return;
  alert((Moves.length <= 3 + 3 * document.forms[0].Difficulty.selectedIndex ? "Perfeito!\n" : "") + "Feito em " + Moves.length + " cliques");
  NewGame();
}
function NewValue(x, y, c) {
  ChangeValue(x, y, c);
  ChangeValue(x - 1, y, c);
  ChangeValue(x + 1, y, c);
  ChangeValue(x, y - 1, c);
  ChangeValue(x, y + 1, c);
}
function ChangeValue(x, y, c) {
  if (x >= 0 && x < Size && y >= 0 && y < Size)
  with (document.forms[0].elements[x + Size * y]) value = (parseInt(value) + c) & 3;
}