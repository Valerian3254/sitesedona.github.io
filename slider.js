var img_count = 5;     // ����� ��������
var time_show = 5000;  // ����� ������, ��.
var time_change = 20;  // �������� ����� ������ ��������� opacity, ��.
var i = 0;             // ���������� ��������
var timeout_id;        // ������������� ������� ��������� �������� opacity ()
var opacity_val = 100; // ����� ����� ��������� opacity
var start = 2;         // ���� ��������� ������� ����� ��������
var play_id;           // ������������� ������� ����� ��������
 
function ChangeImage()
{
  opacity_val--;
  var j = i + 1;
  var current_img = 'img_' + i;
  if (i == img_count) j = 1;
  var next_img = 'img_' + j;
  document.getElementById(current_img).style.opacity=opacity_val/100;
  document.getElementById(current_img).style.filter='alpha(opacity='+opacity_val+')';
  document.getElementById(next_img).style.opacity=(100-opacity_val)/100;
  document.getElementById(next_img).style.filter='alpha(opacity='+(100-opacity_val)+')';
  timeout_id = setTimeout("ChangeImage()", time_change);
     
  if (opacity_val==99)
  {
   document.getElementById(next_img).style.zIndex = 1000;
  }
      
  if (opacity_val==1)
  {
   opacity_val = 100;
   document.getElementById(current_img).style.zIndex = -1000;
   clearTimeout(timeout_id);
  }
}
 
window.onblur = function()
{
  clearInterval(play_id);
  start = 1;
}
 
window.onfocus = function()
{
  if (start==1)
  {
    play_id = setInterval (function() {i++; if (i>img_count) i=1; ChangeImage();}, time_show);
    start = 0;
  }
}
 
if (start==2)
{
  play_id = setInterval (function() {i++; if (i>img_count) i=1; ChangeImage();}, time_show);
  start = 0;
}