// file optimized by nmhillusion on Mon Nov 14 2016 10:58:11 GMT+0700 (SE Asia Standard Time) 
nmh=function(){nmh.alert("Welcome to NMH.illusion Blog")};nmh.mobile=!1;nmhd=function(){return document};nmhd.gid=function(b){return nmhd().getElementById(b)};nmhd.gcls=function(b){return nmhd().getElementsByClassName(b)};nmhd.gtag=function(b){return nmhd().getElementsByTagName(b)};function zoom(b,a,c,d){b=nmhd.gid(b);void 0===d&&(d=2);0===a?b.style.width=c+"px":1==a&&(b.style.width=c*d+"px")}
function zoomF(b){var a=nmhd.gid(b);a.onmouseover=function(){a.style.width="70%"};a.onmouseout=function(){a.style.width="50%"}}function Position(b,a){var c=nmhd.gid(b),d;1==a?d=c.style.left.toString():2==a?d=c.style.top.toString():3==a?d=c.style.width.toString():4==a&&(d=c.style.height.toString());return Number(d.slice(0,d.indexOf("px")))}
function animationRandom(b){var a=nmhd.gid("header"),c=nmhd.gid(b),d=95*Math.random(),a=null!==a?document.body.scrollTop+screen.availHeight*Math.random()-c.height-a.clientHeight:document.body.scrollTop+screen.availHeight*Math.random()-c.height;0>a&&(a=0);c.style.top=a+"px";c.style.left=d+"%";setTimeout(animationRandom,3E3,b)}var angle_gif=10,step_gif=1,times_gif;
function gif(b,a){void 0===a&&(a=1);0===a&&clearTimeout(times_gif);30<angle_gif?(step_gif=-step_gif,clearTimeout(times_gif)):5>angle_gif&&(step_gif=-step_gif);angle_gif+=step_gif;nmhd.gid(b).style.transform="rotate("+angle_gif+"deg)";times_gif=setTimeout(gif,200,b,a)}var state_changeTitle=0,oldTitle_changeTitle=document.title;
function changeTitle(b,a,c,d){var e=window.location.href,f=window.location.host;"blogspot"!=b||f+"/index.html"!=e.slice(e.indexOf("//")+2)&&-1==e.indexOf("updated-max")?"blogspot"==b&&f+"/p/index.html"==e.slice(e.indexOf("//")+2)?document.title="Welcome to NMH.illusion Blog":f+"/"==e.slice(e.indexOf("//")+2)?document.title="NMH.illusion Blog":(state_changeTitle++,1==state_changeTitle?document.title=oldTitle_changeTitle+a:2==state_changeTitle?document.title=oldTitle_changeTitle+c:3==state_changeTitle?
document.title=oldTitle_changeTitle+d:4==state_changeTitle&&(state_changeTitle=0)):document.title="Danh m\u1ee5c b\u00e0i \u0111\u0103ng | NMH.illusion";setTimeout(changeTitle,1E3,b,a,c,d)}var state_changeColor=0;function changeColor(b,a,c,d){var e=nmhd.gid(b);state_changeColor++;1==state_changeColor?e.style.color=a:2==state_changeColor?e.style.color=c:3==state_changeColor?e.style.color=d:4==state_changeColor&&(e.style.color="#000",state_changeColor=0);setTimeout(changeColor,1E3,b,a,c,d)}
function Copyright(){var b=document.getElementsByTagName("blockquote"),a=Array(b.length);$("body").prepend("<audio controls='no' id='soundCopy' style='display:none'></audio>");for(var c=0;c<b.length;++c)a[c]=Math.round(1E4*Math.random()),b[c].id="bq"+a[c];b=Array(a.length);for(c=0;c<a.length;++c)b[c]=nmhd.gid("bq"+a[c]),$("#bq"+a[c]).after('<div class="btnCopy" onclick="getCopy(&apos;'+encodeCopy(a[c],1)+"&apos;, "+c+')">Copy Code</div>');a=nmhd.gid("postbody");a.addEventListener("copy",function(){nmh.alert("<b>[nh\u1eafn g\u1eedi]</b><br/>C\u00e1c b\u00e0i vi\u1ebft tr\u00ean Blog \u0111\u01b0\u1ee3c m\u00ecnh d\u00e0nh kh\u00e1 nhi\u1ec1u th\u1eddi gian v\u00e0 c\u00f4ng s\u1ee9c \u0111\u1ec3 t\u00ecm hi\u1ec3u, suy ngh\u0129 c\u0169ng nh\u01b0 \u0111\u1ea7u t\u01b0 vi\u1ebft n\u00ean n\u00f3. Nh\u01b0ng c\u00f3 v\u00e0i trang \u0111\u0103ng l\u1ea1i b\u00e0i c\u1ee7a m\u00ecnh nh\u01b0ng kh\u00f4ng ghi ngu\u1ed3n l\u00e0 t\u1eeb <a href='//nmhillusion.blogspot.com' style='color:white;'>&quot;NMH.illusion Blog&quot;</a> n\u00e0y! Do \u0111\u00f3 \u0111\u1ec3 ph\u1ea7n n\u00e0o \u0111\u00f3 b\u1ea3o v\u1ec7 b\u00e0i \u0111\u0103ng c\u1ee7a m\u00ecnh n\u00ean m\u00ecnh \u0111\u00e3 <b style='color:#36f;background:#ffe'> t\u1eeb ch\u1ed1i copy n\u1ed9i dung c\u1ee7a b\u00e0i vi\u1ebft, tuy nhi\u00ean b\u1ea1n v\u1eabn c\u00f3 th\u1ec3  copy ph\u1ea7n m\u00e3 l\u1ec7nh v\u00e0 nh\u1eefng n\u1ed9i dung kh\u00e1c m\u00e0 m\u00ecnh \u0111\u1ec3 trong &quot;blockquote&quot;. </b><br/>C\u1ea3m \u01a1n b\u1ea1n \u0111\u00e3 gh\u00e9 th\u0103m blog!<br/><b>[/nh\u1eafn g\u1eedi]</b>",
"copyright");var a=nmhd.gid("soundCopy");a.src="https://dl.dropboxusercontent.com/s/elasviv0abxat48/accessDenied.MP3?dl=1";a.play()});a.oncopy=function(){return!1};nmhd.gid("comments").oncopy=function(){return!0}}
function getCopy(b,a){b=encodeCopy(b,2,a);if(null===b)return!1;var c=nmhd.gid(b);if(null===c)return nmh.alert("\u0110\u00e3 x\u1ea3y ra l\u1ed7i, b\u1ea1n vui l\u00f2ng b\u00e1o l\u1ed7i cho t\u00f4i qua ph\u1ea7n g\u00f3p \u00fd nh\u00e9!!!"),!1;var d=window.open("","","width= 600, height= 500, top= "+.1*screen.height+", left="+.1*screen.width+", resizable= yes, scrollbars= yes, toolbar= no"),e=nmhd.gid("soundCopy"),f=nmhd.gid("divCopy");d.document.write('<div style="position: fixed;right:0;bottom:0;opacity: .7;color:#ffe;background: #111; padding: 10px;margin:5px;border-radius: 25px;border: solid 2px black;font-weight: 600;font-family:courier new;">\u1ea4n Ctrl+C \u0111\u1ec3 copy</div><blockquote id="content" style="font-family: courier new; font-style: italic;background: #eee;color: darkgreen;">'+
c.innerHTML+'</blockquote><script>document.body.onmousedown=function(){return false};document.title="Sao ch\u00e9p n\u1ed9i dung";if (document.selection) {var range = document.body.createTextRange();range.moveToElementText(document.getElementById("content"));range.select();} else if (window.getSelection) {var range = document.createRange();range.selectNode(document.getElementById("content"));window.getSelection().addRange(range);}document.body.oncopy=function(){window.close();}; \x3c/script>');f.style.animationName=
"none";var g=0;d.document.body.addEventListener("copy",function(){g=1});var h=setInterval(function(){d.closed&&1==g?(e.src="https://dl.dropboxusercontent.com/s/1zskpigwqgikmp4/copySuccess.MP3?dl=1",e.play(),f.innerHTML="\u0110\u00e3 sao ch\u00e9p v\u00e0o b\u1ed9 nh\u1edb",f.style.animationName="nofiCopy",clearInterval(h)):d.closed&&clearInterval(h)},1E3)}
for(var randomEC=Array(10),temp,numEC=[],numBq=0,i=0;10>i;++i){var found=0;do{found=0;temp=Math.round(223*Math.random())+32;for(var j=0;j<i&&1!=found;++j)if(temp==randomEC[j].charCodeAt()||39==temp||34==temp)found=1}while(1==found);randomEC[i]=String.fromCharCode(temp)}
function encodeCopy(b,a,c){var d="";if(1==a){numBq++;numEC.push(Math.round(1E3*Math.random()));b=numEC[numBq-1]*Number(b);b=b.toString();a=b.length;for(var e=0;e<a;++e)d+=randomEC[Number(b[e])]}else{a=b.length;for(e=0;e<a;++e){for(var f=-1,g=0;10>g&&-1==f;++g)b[e]==randomEC[g]&&(f=g);if(-1==f)return nmh.alert("\u0110\u00e3 x\u1ea3y ra l\u1ed7i, b\u1ea1n vui l\u00f2ng b\u00e1o l\u1ed7i cho t\u00f4i qua ph\u1ea7n g\u00f3p \u00fd nh\u00e9!!!"),null;d+=f}d=Number(d)/numEC[c];d="bq"+d}return d}
var mouseX=0,mouseY=0,times_rM=1;function moveMouse(b,a,c,d){var e=nmhd.gid(b),f=Position(b,1),g=Position(b,2);1==times_rM&&(f=mouseX=c,g=mouseY=d);times_rM=0;e.style.position="absolute";document.body.onmousemove=function(b){mouseX=b.pageX+a;mouseY=b.pageY+a};f<mouseX?(f++,e.style.left=f+"px"):f>mouseX&&(f--,e.style.left=f+"px");g<mouseY?(g++,e.style.top=g+"px"):g>mouseY&&(g--,e.style.top=g+"px");setTimeout(moveMouse,40,b,a,c,d)}var state_12=0;
function changeIcon(b,a,c){var d=nmhd.gid(b);state_12++;1==state_12?d.href=c:2==state_12&&(d.href=a,state_12=0);setTimeout(changeIcon,3E3,b,a,c)}var i_13=0;
function changeSourceVideo(b,a,c,d,e,f){var g=nmhd.gid(a),h=document.getElementsByClassName("btnTrack");if(f>=h.length||a!=h[f].id.slice(0,a.length))return!1;0==i_13&&(h[0].style="color: #ffe;font-weight: 600;background-color: #359bed;margin: 5px;padding: 5px;border: solid 2px #111; border-radius: 5px; -webkit-box-shadow: 0 0 6px #111;box-shadow: 0 0 6px #111;cursor: not-allowed;");h[f].addEventListener("click",function(){var k=h[f].id.slice(a.length);this.style="color: #ffe;font-weight: 600;background-color: #359bed;margin: 5px;padding: 5px;border: solid 2px #111; border-radius: 5px; -webkit-box-shadow: 0 0 6px #111;box-shadow: 0 0 6px #111;cursor: not-allowed;";
for(var l=0;l<h.length;l++)l!=f&&(h[l].style=c);null!==nmhd.gid(e)&&(nmhd.gid(e).innerHTML=Number(k)+1);1==d?g.contentWindow.location.replace(b[k]):2==d?jwplayer(a).setup({file:b[k]}):nmh.alert("Kh\u00f4ng c\u00f3 ch\u1ebf \u0111\u1ed9 t\u1ea1o n\u00fat n\u00e0y!!!");return!1});i_13++;changeSourceVideo(b,a,c,d,e,f+1)}
function autoCreatButton(b,a,c,d,e,f){if(!document.getElementById(c+"0")){for(var g=0;g<b.length;g++){var h=document.createElement("button");h.innerHTML=d+" "+(g+1);h.style="color: black;font-weight: 600;background-color: transparent;margin: 5px;padding: 5px;border: solid 2px #111; border-radius: 5px; -webkit-box-shadow: 0 0 6px #111;box-shadow: 0 0 6px #111;cursor: pointer;";h.className+="btnTrack";h.title="Xem "+d+" "+(g+1);h.id=c+g;""===a?document.body.appendChild(h):nmhd.gid(a).appendChild(h)}changeSourceVideo(b,
c,"color: black;font-weight: 600;background-color: transparent;margin: 5px;padding: 5px;border: solid 2px #111; border-radius: 5px; -webkit-box-shadow: 0 0 6px #111;box-shadow: 0 0 6px #111;cursor: pointer;",f,e,i_13)}}var state_15=0;
function dateDisplay(b,a){var c=nmhd.gid(b),d=nmhd.gid(a),e=new Date,f=e.toTimeString(),g="Th\u1ee9 ",g=0===e.getDay()?"Ch\u1ee7 nh\u1eadt":g+(e.getDay()+1);0===state_15?(state_15=1,d.style.color="red"):(state_15=0,d.style.color="white");c.innerHTML="Th\u1eddi gian: "+g+", "+e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" | "+f.slice(0,f.indexOf("GMT"))+" (GMT+07:00)";setTimeout(dateDisplay,1E3,b,a)}
function changeFooterRight(b){var a=nmhd.gid(b);a.innerHTML="|| Trang blog c\u00e1 nh\u00e2n v\u1ec1 CNTT v\u00e0 \u0111\u1eddi s\u1ed1ng ||"!==a.innerHTML?"|| Trang blog c\u00e1 nh\u00e2n v\u1ec1 CNTT v\u00e0 \u0111\u1eddi s\u1ed1ng ||":"|| Blog ho\u1ea1t \u0111\u1ed9ng t\u1ed1t nh\u1ea5t tr\u00ean tr\u00ecnh duy\u1ec7t Chrome ||";setTimeout(changeFooterRight,5E3,b)}
function switchBarRight(b,a){var c=nmhd.gid(b),d=nmhd.gid(a);c.onclick=function(){"1"!==d.style.zIndex?(c.style="right: 13.8%; z-index: 1",d.style="left: 85%;z-index: 1",state=1):(c.style="right: -1.2%; z-index: 0;",d.style="right: 0%; z-index: 0;")}}
function sendGopY(b,a,c,d){a=nmhd.gid(a);var e=nmhd.gid(b);if(""==a.value)return nmh.alert(" [o] B\u1ea1n ph\u1ea3i nh\u1eadp g\u00ec \u0111\u00f3 v\u00e0o g\u00f3p \u00fd ch\u1ee9! [o]"),!1;if(3>a.value.length)return nmh.alert(" [o] G\u00f3p \u00fd ph\u1ea3i \u00edt nh\u1ea5t 3 k\u00fd t\u1ef1 b\u1ea1n nh\u00e9! [o]"),!1;""==e.value&&(e.value="Guest");b="https://docs.google.com/forms/d/1KEdYbrRxqhPsFBvh_K9vckJ2oUXXrQi59s3S5g6oohk/formResponse?entry.1662044333="+e.value+"&entry.1849813821="+a.value;
a.value="";e.value="";c=nmhd.gid(c);d=nmhd.gid(d);c.style.right="0%";c.value=" << G\u00f3p \u00fd";d.style="left: 100%;";c=document.createElement("iframe");c.style="width:1px; height: 1px;display: none";c.src=b;d.appendChild(c);window.open("","G\u1eedi th\u00e0nh c\u00f4ng","width= 500, height= 250, top= "+.3*screen.height+", left="+.3*screen.width+", resizable= yes, scrollbars= no, toolbar= no").document.write("<head><meta charset='utf-8' /></head><body style='background:#eee'><br /><br /><hr style='border: dotted' /><center><h1 style='font-family: courier new;font-size: 20px; color: #09f;'>M\u00ecnh \u0111\u00e3 nh\u1eadn \u0111\u01b0\u1ee3c g\u00f3p \u00fd c\u1ee7a b\u1ea1n.<br />C\u1ea3m \u01a1n b\u1ea1n!!!</h1><hr style='border: dotted' />C\u1eeda s\u1ed5 s\u1ebd t\u1ef1 \u0111\u00f3ng sau <b id='time'>6</b> gi\u00e2y...<br /><script>function closeWin(idTime, time){if (0===time) window.close();else{time--;nmhd.gid(idTime).innerHTML = time;}setTimeout(closeWin, 1000, idTime, time);}closeWin('time',6);document.title='G\u1eedi g\u00f3p \u00fd th\u00e0nh c\u00f4ng!';\x3c/script></body>");
d.removeChild(c)}function closeWin(b,a){0===a?window.close():(a--,nmhd.gid(b).innerHTML=a);setTimeout(closeWin,1E3,win,b,a)}function moveWhenScroll(b,a){var c=nmhd.gid(b);void 0!==a&&a||(a=225);window.onscroll=function(b){c.style.top=document.body.scrollTop+screen.availHeight-a+"px"}}
function personWalk(b){$.keyframe.define([{name:"changeBg","0%":{"background-color":"#111","background-position":"-20% "+(Math.round(100*Math.random())+1)+"%"},"50%":{"background-color":"#130606"},"100%":{"background-color":"#111112","background-position":"120% "+(Math.round(100*Math.random())+1)+"%"}}]);void 0===b&&(document.body.className="aniBody");setTimeout(personWalk,2E4,0)}function member(b,a){for(var c=0;c<a.length;++c)if(b==a[c])return!0;return!1}
function dateViet(b){for(var a=b,c="Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),d="hai ba t\u01b0 n\u0103m s\u00e1u b\u1ea3y".split(" "),e="January February March April May June July August September October November December".split(" "),f=0;f<c.length;++f)if(-1!=b.indexOf(c[f])){a=6==f?a.replace(c[f],"Ch\u1ee7 nh\u1eadt"):a.replace(c[f],"Th\u1ee9 "+d[f]);break}for(f=0;f<e.length;++f)if(-1!=b.indexOf(e[f])){c=b.lastIndexOf(",");d=b.indexOf(e[f]);b=b.slice(d+e[f].length+1,
c);a=a.replace(" "+b+", ","");a=a.replace(e[f],"ng\u00e0y "+b+"/"+(f+1)+"/");break}document.write(a)}function defineHeight(b,a,c){if(b=nmhd.gid(b))b.style.height=b.clientWidth*c/a+"px"}function randomColor(b){var a,c;do{a="";for(var d=0;6>d;++d)c=Math.round(15*Math.random()),a=10>c?a+c:a+String.fromCharCode(c-10+97)}while(a==b);return a}
function fillEmoticonFB(){function b(a,b){for(var c=a.length,d=0;d<c;++d){for(var g=a[d].outerHTML,h=resGoogleSheet.length,k=0;k<h;++k){var l=0,g=g.replace(new RegExp(resGoogleSheet[k][1]+"\\s|"+resGoogleSheet[k][1]+"<|"+resGoogleSheet[k][1]+"\\.|"+resGoogleSheet[k][1]+"\\?|"+resGoogleSheet[k][1]+"!|"+resGoogleSheet[k][1]+":|"+resGoogleSheet[k][1]+"\\)|"+resGoogleSheet[k][1]+"\\(|"+resGoogleSheet[k][1]+",|:"+resGoogleSheet[k][2]+":","g"),function(a){l=1;var c=0!==b?"emo: "+resGoogleSheet[k][2]:resGoogleSheet[k][3]+
" ho\u1eb7c :"+resGoogleSheet[k][2]+":",c='<emo style="position:relative;bottom:-4px;vertical-align:baseline;display:inline-block;display:-webkit-inline-box;background-repeat:repeat-y;background-image: url(&apos;https://i.imgur.com/A2S4R2g.png&apos;);background-position:0px '+17*(28-(resGoogleSheet[k][0]-1))+'px;background-size: initial;min-width:18px;height:17px;margin-left: 3px;margin-right:3px;" onclick="'+("nmh.alert(&quot;S\u1eed d\u1ee5ng k\u00fd t\u1ef1 => "+c+"&quot;)")+'" title="'+c+'" ></emo>';
" "===a[a.length-1]||":"===a[0]&&":"===a[a.length-1]||(c+=a[a.length-1]);return c});if(0!==l&&0===b)break}a[d].outerHTML=g}}var a=nmhd().createElement("script");a.id="dataEmoticon";a.src="https://spreadsheets.google.com/tq?tqx=responseHandler:getDataFromGoogleSheet&tq=select%20A%2C%20B%2C%20C%2C%20E&key=1pxzezazXYFB-G3qvuo9GEliShs5H7YoaO6C-8X3jx9k";a.type="text/javascript";nmhd.gtag("head")[0].appendChild(a);$("#dataEmoticon").load(function(){var a,d=[],e,f=["P","SPAN","B","I"];a=nmhd.gid("postbody").children;
e=a.length;for(var g=0;g<e;++g)member(a[g].tagName,f)&&d.push(a[g]);b(d);b(nmhd.gcls("comment-block"));nmh.mobile||(displayTooltipEmoticon($(".comment-form")),b($(".goiyEmoticon > span"),0))})}
function displayTooltipEmoticon(b){for(var a="",c=resGoogleSheet.length,d=0;d<c;++d)a+="<span>:"+resGoogleSheet[d][2]+":</span>";b.prepend("<div class='goiyEmoticon' style='position: absolute;bottom:6px;z-index:1;right:0px;background-color:rgba(1,1,1,.5);border-radius:5px;border:solid 1px #eff;box-shadow: 0 0 4px #222;'><bb style='display:block;text-shadow:-1px -1px 3px #36f;color: #eff;padding-left:10px;'>B\u1ea3ng k\u00fd t\u1ef1 \u0111\u1eb7c bi\u1ec7t trong b\u00ecnh lu\u1eadn (gi\u1ed1ng h\u1ec7t Facebook):</bb>"+a+
"</div>")}function openDemo(b){var a=window.open("","","width=800,height=500,location=no,fullscreen=yes,left="+(screen.width/2-400)+",top=100");-1!==b.toString().indexOf("n2jplayer")&&a.document.write("<script src='https://dl.dropboxusercontent.com/s/6jydfqewmwsrhoe/n2jplayer.min.js?dl=1' type='text/javascript'>\x3c/script>");a.document.write(b);a.document.title="Demo Result";a.document.onload=function(){a.document.body.style="background: #eee"}}
function demo(b,a){var c=nmhd.gid(b).innerHTML,d;void 0===demo.arr&&(demo.arr=[]);do d=Math.round(1E3*Math.random());while(member(d,demo.arr));demo.arr.push(d);nmhd.gid(b).parentNode.removeChild(nmhd.gid(b));nmhd().write("<blockquote style='text-align: center;'><textarea rows='"+a+"' style='padding: 15px;width: 95%;background:transparent;border:none' id='inputdemo"+d+"'>"+c+"</textarea></blockquote>");nmhd().write("<button class='btnCopy' style='position: absolute;left:15%;margin-top: -40px;height: 25px;width: 10%;color: crimson;font-weight: 600' onclick='openDemo(nmhd.gid(&apos;inputdemo"+
d+"&apos;).value);nmhd.gid(&apos;inputdemo"+d+"&apos;).innerHTML = nmhd.gid(&apos;inputdemo"+d+"&apos;).value;'>K\u1ebft qu\u1ea3</button><br/>")}var resGoogleSheet=[];function getDataFromGoogleSheet(b){if("ok"!==b.status)return null;var a=b.table.cols,c=a.length,d;b=b.table.rows;var e=b.length,f=Array(c);if(""==a[0].label){d=1;for(var g=0;g<c;++g)f[g]=b[0].c[g].v}else for(g=d=0;g<c;++g)f[g]=a[g].label;for(g=d;g<e;++g){a=Array(c);for(d=0;d<c;++d)a[d]=b[g].c[d].v;resGoogleSheet.push(a)}}
function autoCreateCategory(b){b=nmhd.gtag(b);var a=b.length;if(0!==a){$(".post-body").prepend('<span id="mucluc">M\u1ee5c L\u1ee5c: </span><center id="container-category" style="display: block;margin-bottom: 20px"><div id="category"></div></center>');for(var c="",d=0;d<a;++d){b[d].id="entry"+(d+1);var e=b[d].textContent;":"===e[e.length-1]&&(e=e.slice(0,e.length-1));c+='<div><a href="#entry'+(d+1)+'">'+e+"</a></div>"}var f=nmhd.gid("category");f.style="text-align: left;-webkit-transition: all .5s ease;transition: all .5s ease;border: dashed 3px #036;border-radius: 20px; border-top-left-radius: 0;-webkit-box-shadow: 0 0 5px #222;box-shadow: 0 0 5px #222;width: 85%;padding: 25px;padding-top:10px;padding-bottom:10px;font-size: 18px";
$("#category a").css({"font-size":"18px",color:"#222"});f.innerHTML=c;$("#container-category").height(f.clientHeight);$(window).scroll(function(){800<document.body.scrollTop||800<document.documentElement.scrollTop?(f.style="font-size:12px;text-align:left;z-index:1;-webkit-transition: all .5s ease;transition: all .5s ease;border: dashed 1px #eff;border-radius: 20px; border-top-left-radius: 0;border-bottom-left-radius: 0;-webkit-box-shadow: 0 0 5px #222;box-shadow: 0 0 5px #222;position:fixed;width:12%;left:0;top:10%;margin:0!important;padding:2px;opacity:.4;line-height:120%",
$("#mucluc").css("opacity","0"),$("#category div").css({"margin-top":"5px","margin-bottom":"5px"}),$("#category a").css({color:"#eff"}),$("#category").mouseover(function(){$(this).css("opacity","1")})):(f.style="text-align: left;-webkit-transition: all .5s ease;transition: all .5s ease;border: dashed 3px #036;border-radius: 20px; border-top-left-radius: 0;-webkit-box-shadow: 0 0 5px #222;box-shadow: 0 0 5px #222;width: 85%;padding: 25px;padding-top:10px;padding-bottom:10px;font-size: 18px",$("#category div").css({margin:"0"}),
$("#category a").css({color:"#222"}),$("#mucluc").css("opacity","1"))})}}function makeLink(){for(var b=$(".comment-block p"),a=b.length,c=0;c<a;++c){for(var d=b[c],e=d.innerHTML,f,g=e,h;-1!==g.search(/(http:\/\/|https:\/\/)/);)f=g.search(/(http:\/\/|https:\/\/)/),g=g.slice(f),f=g.search(/(\<br|\s|\,|\;)/),h=-1===f?g:g.slice(0,f),e=e.replace(h,'<a class="link-comment" href="'+h+'" target="_blank">'+h+"</a>"),g=g.slice(f);d.innerHTML=e}}
nmh.alert=function(b,a,c){function d(){(new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=")).play()}if(nmh.mobile)alert(b);
else{void 0===c&&(c="rgba(30,183,0,.9)");var e=document.createElement("div"),f=19;e.className="dialog";void 0!==a&&(e.id=a);e.innerHTML=b+'<i id="countdowntimedialog"></i><close onclick="this.parentNode.parentNode.removeChild(this.parentNode);">Close</close>';e.style="font-size: 17px;border: solid 2px #eff;box-shadow: 0 0 16px #222;position: fixed;top: 20%;left: 30%;width:40%;padding: 30px;background-color:"+c+";border-radius: 10px;color: #eff;";document.body.appendChild(e);d();var g=setInterval(function(){var a=
nmhd.gcls("dialog")[0];a?1>f?(a.parentNode.removeChild(a),clearInterval(g)):($("#countdowntimedialog").text("T\u1ef1 \u0111\u1ed9ng \u0111\u00f3ng th\u00f4ng b\u00e1o n\u00e0y sau "+f--+" gi\u00e2y..."),0===f&&d()):clearInterval(g)},1E3)}};
function loadLink(b,a){if(!nmh.mobile){var c=nmhd.gid("iframeLink");c&&c.parentNode.removeChild(c);if(void 0!==b){a||(a=event);var c=a.screenX<.7*screen.availWidth?a.screenX-20:a.screenX-.4*screen.availWidth,d=a.screenY<.6*screen.availHeight?a.screenY-40:a.screenY-430,e=nmhd().createElement("iframe"),f=b.toString(),g=f,h=nmhd().createElement("div"),k=-1!==b.toString().search(/\?/)?"&m=1":"?m=1",c=c+"px",d=d+"px";-1!==f.search(location.hostname)&&(g=f=f.replace(location.hostname,"nmhillusion.blogspot.com"));
-1!==f.search(/\/\/nmhillusion.blogspot.com/)&&(g=f+k);e.src=g;h.id="iframeLink";e.onerror=function(a){nmhd.gid("iframeLink").innerHTML="<b>! Kh\u00f4ng th\u1ec3 xem tr\u01b0\u1edbc link n\u00e0y !</b>"};h.innerHTML="<b>[Xem tr\u01b0\u1edbc li\u00ean k\u1ebft] | <a target='_blank' href='"+f+"'>[\u0110i \u0111\u1ebfn li\u00ean k\u1ebft n\u00e0y]</a></b><br/><div id='loadingLink'><div class='spinner'></div><br/>\u0110ang t\u1ea3i...</div>";h.style="position: fixed; top: "+d+";left:"+c+";";e.style="width:calc(100% - 22px);height:400px;position: absolute;bottom: 5px;";
h.appendChild(e);nmhd().body.appendChild(h);$("#iframeLink iframe").load(function(){nmhd.gid("loadingLink").parentNode.removeChild(nmhd.gid("loadingLink"))})}}};