document.write('<STYLE type="text/css">');
document.write('#menuspan40 { position:absolute; width:25px; }');
document.write('#menutable40 { border-width: 0; border-color: #F9F9F9; border-style:solid}');
document.write('td.menucell40 { padding:2; padding-left:4; padding-right:4; background:#F7F7F7; border:0 solid #000000; text-align:LEFT; }');
document.write('#submenutable40 { background: #EFEFEF; border-width: 0; border-color: #F9F9F9; border-style:solid}');
document.write('td.topcell40 {text-decoration:none; color:#261DE2; font-weight: 700; font-family: Verdana; font-size: 12px; font-style:normal; text-align:LEFT; }');
document.write('a.topitem40 {text-decoration:none; color:#261DE2; font-weight: 700; font-family: Verdana; font-size: 12px; font-style:normal; } ');
document.write('a.topitem40:hover {text-decoration:none; color:#FF3546; }');
document.write('a.subitem40 {text-decoration:none; color:#E22F18; font-weight: 700; font-family: Verdana; font-size: 11px; font-style:normal; } ');
document.write('a.subitem40:hover {text-decoration:none; color:#F73C36; }');
document.write('P.MN40 {color:#261DE2; font-weight: 700; font-family: Verdana; font-size:12px; font-style:normal;  }');
document.write('P.SMN40 {text-decoration:none; color:#E22F18; font-weight: 700; font-family: Verdana; font-size:11px; font-style:normal;  }');
document.write('#submenu40_0 { position:absolute; left:22px; top:0px; visibility:hidden; }');
document.write('#submenu40_1 { position:absolute; left:22px; top:20px; visibility:hidden; }');
document.write('</style>');
var thisbrowser40
var hidetimer40 = null;
if(document.layers){ thisbrowser40='NN4'; }
if(document.all){ thisbrowser40='IE'; }
if(!document.all && document.getElementById){ thisbrowser40='NN6'; }
function showmenu40(menuname)
{
if(thisbrowser40=='NN4') document.layers[menuname].visibility = 'visible';
if(thisbrowser40=='IE') document.all[menuname].style.visibility = 'visible';
if(thisbrowser40=='NN6') document.getElementById(menuname).style.visibility = 'visible';
if(hidetimer40) clearTimeout(hidetimer40);}
function timermenu40()
{
if(hidetimer40) clearTimeout(hidetimer40);hidetimer40 = setTimeout("hideall40();",1000);
}
function hidemenu40(menuname)
{
if(thisbrowser40=='NN4') document.layers[menuname].visibility = 'hidden';
if(thisbrowser40=='IE') document.all[menuname].style.visibility = 'hidden';
if(thisbrowser40=='NN6') document.getElementById(menuname).style.visibility = 'hidden';
}
function hilite40(menuitem) 
{
if(typeof(currentpage40)!='undefined' && menuitem==currentpage40) return;
if(thisbrowser40=='IE') document.all[menuitem].style.backgroundColor = '#F2F492';
if(thisbrowser40=='NN6') document.getElementById(menuitem).style.backgroundColor = '#F2F492';
if(hidetimer40) clearTimeout(hidetimer40);}
function unhilite40(menuitem) 
{
if(typeof(currentpage40)!='undefined' && menuitem==currentpage40) return;
if(thisbrowser40=='IE') document.all[menuitem].style.backgroundColor = '#F7F7F7';
if(thisbrowser40=='NN6') document.getElementById(menuitem).style. backgroundColor = '#F7F7F7';
if(hidetimer40) clearTimeout(hidetimer40);hidetimer40 = setTimeout("hideall40();",1000);
}
function hideall40()
{
hidemenu40('submenu40_0');
hidemenu40('submenu40_1');
}
function openmenu40(menuname)
{
showmenu40(menuname);
if(menuname!='submenu40_0') hidemenu40('submenu40_0');
if(menuname!='submenu40_1') hidemenu40('submenu40_1');
}
document.write('<table width=25 cellspacing=0 border=0 cellpadding=0>');
document.write('<tr><td align=left valign=top>');
document.write('<span id="menuspan40">');
document.write('<table width=25 id="menutable40" cellspacing=0 cellpadding=0 >');
document.write('<tr>');
document.write('<td class="topcell40" align=LEFT width=25 height=20 bgcolor=#F7F7F7>')
document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');
document.write('<a href="" target="_self" title="" class="topitem40" onMouseOver="openmenu40(\'submenu40_0\')" onMouseOut="timermenu40();">1</a>');
document.write('</td><td><p class="SMN40"><font face="webdings" color=#261DE2>4</font></p></td></tr></table>');
document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td class="topcell40" align=LEFT width=25 height=20 bgcolor=#F7F7F7>')
document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');
document.write('<a href="" target="_self" title="" class="topitem40" onMouseOver="openmenu40(\'submenu40_1\')" onMouseOut="timermenu40();">2</a>');
document.write('</td><td><p class="SMN40"><font face="webdings" color=#261DE2>4</font></p></td></tr></table>');
document.write('</td>');
document.write('</tr>');
document.write('</table><p>');
document.write('<div id="submenu40_0">');
document.write('<table id="submenutable40" width=50 cellspacing=1>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell40" height=20 id="s40_0_0" onMouseOver="hilite40(\'s40_0_0\')" onMouseOut="unhilite40(\'s40_0_0\')">');
document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');
document.write('<a href="" target="_self" title="" class="subitem40" >1.1</a>')
;document.write('</td><td><p class="SMN40">&nbsp;</p></td></tr></table>');
document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell40" height=20 id="s40_0_1" onMouseOver="hilite40(\'s40_0_1\')" onMouseOut="unhilite40(\'s40_0_1\')">');
document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');
document.write('<a href="" target="_self" title="" class="subitem40" >1.2</a>')
;document.write('</td><td><p class="SMN40">&nbsp;</p></td></tr></table>');
document.write('</td>');
document.write('</tr>');
document.write('</table></div>');
document.write('<div id="submenu40_1">');
document.write('<table id="submenutable40" width=50 cellspacing=1>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell40" height=20 id="s40_1_0" onMouseOver="hilite40(\'s40_1_0\')" onMouseOut="unhilite40(\'s40_1_0\')">');
document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');
document.write('<a href="" target="_self" title="" class="subitem40" >2.1 </a>')
;document.write('</td><td><p class="SMN40">&nbsp;</p></td></tr></table>');
document.write('</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td align=LEFT class="menucell40" height=20 id="s40_1_1" onMouseOver="hilite40(\'s40_1_1\')" onMouseOut="unhilite40(\'s40_1_1\')">');
document.write('<table cellspacing=0 cellpadding=0 border=0 width="100%"><tr><td width="90%" align=LEFT>');
document.write('<a href="" target="_self" title="" class="subitem40" >2.2</a>')
;document.write('</td><td><p class="SMN40">&nbsp;</p></td></tr></table>');
document.write('</td>');
document.write('</tr>');
document.write('</table></div>');
document.write('</span></td></tr></table>');
