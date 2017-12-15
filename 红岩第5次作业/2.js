var a=document.createElement('DIV')
a.setAttribute("class","fk");
//a.setAttribute("id","ll");
a.style.backgroundColor = 'red';
a.style.width=100+'px';
a.style.height=100+'px';
a.style.fontSize = '2'
document.body.appendChild(a);
var b=document.querySelector('.fk');
var c=500;
var i=0;
var d=function(){
var yanse=["red","blue","yellow","green","black"]
var a=Math.floor(Math.random()*5);
var s=yanse[a];
	if (i==0) {
	b.style.marginLeft = 500+'px';
	b.style.backgroundColor = s;
	i++;
}
else if(i==1)
{
	b.style.marginLeft = 0+'px';
	b.style.backgroundColor = s;
	i--;
}
}
b.addEventListener('click',d,false)

var xhr= new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4&&xhr.status===200){
		var t,x,y;

t=JSON.parse(this.responseText);


//for(y in t)
//{
	
document.getElementById('z').innerHTML="天气"+":"+t['明天']['天气']
document.getElementById('zz').innerHTML="最低温"+":"+t['明天']['最低温']
document.getElementById('zzz').innerHTML="最高温"+":"+t['明天']['最高温']
document.getElementById('zzzz').innerHTML="风速"+":"+t['明天']['风速']
document.getElementById('zzzzz').innerHTML="空气质量"+":"+t['明天']['空气质量']
	
	
//}
//for(t=71;t<=129;t++)
//document.getElementById('ll').innerHTML+=x[t]
}
		}
			

		
		
	
	xhr.open("GET", "http://123.207.89.151/jrtt/forecast",true);
	xhr.send();