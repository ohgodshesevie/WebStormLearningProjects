now = new Date();
localtime = now.toString();
utctime = now.toGMTString();
document.write("<b>Local time: </b>" + localtime + "<br/>");
document.write("<b>UTC time: </b>" + utctime);
// 用钟表形式展示时间
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
document.write("<h1>" + hours + ":" + mins + ":" + secs + "</h1>");