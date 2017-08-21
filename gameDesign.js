function calcDistance(x2,y2,x1,y1)
{
	var x=x2-x1;
	x=Math.pow(x,2);
	var y=y2-y1;
	y=Math.pow(y,2);
	var distance=Math.pow(x+y,0.5);
	return distance;
}
function toRadians(degree)
{
	var converter=Math.PI/180;
	var rad=degree*converter;
	return rad;
}
function buttonEnter(x)
{
	x.style.backgroundImage="url(img/button-hover.jpg)";
	x.style.color="black";
}
function buttonLeave(x)
{
	x.style.backgroundImage="url(img/button.jpg)";
	x.style.color="white";
}
function drawHome(x)
{
	//Browser dimensions
	var windowWidth=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
	//Canvas parameters
	var canvasHeight= windowHeight;
	var canvasWidth= windowWidth;//if 100, there is a scroll bar
	var c=document.getElementById("myCanvas");
	var home=document.getElementById("home");
	var ctx=c.getContext("2d");
	var buttons=document.getElementsByTagName('button');
	var distance=0;
	var radius=0;
	var counter=0;
	var incrementor=140;
	var w;
	var h;
	var timer;
	var angle1=0;
	var angleIncrementor=toRadians(30);
	var angle2=toRadians(30);
	var resize=x;
	var point=[];
	//var point2;
	var pathIncrementor=[];
	var phases=1;





	//Set canvas parameters
	if (canvasWidth<950)
	{
		canvasWidth=950;
	}
	if (canvasHeight<=700)
	{
		canvasHeight=700;
	}
	c.setAttribute("width",canvasWidth);
	c.setAttribute("height",canvasHeight);
	home.style.width=canvasWidth +"px";
	home.style.height=canvasHeight +"px";
	c.style.display = "block";//Originally set to none so the size can change
	home.style.display="block";
	w=canvasWidth;
	h=canvasHeight;


	//button positions
	buttons[0].style.left=w*0.2+"px";
	buttons[0].style.top=h*0.5+"px";
	//buttons[0].style.display="block";
	for (counter=1;counter<buttons.length;counter++)
	{
		buttons[counter].style.left=w*0.2+incrementor+"px";
		buttons[counter].style.top=h*0.5+"px";
		//buttons[counter].style.display="block";

		incrementor+=140;
	}

	//-------Draw loading background------//




	//Top gray area
	ctx.strokeStyle="white";
	ctx.lineWidth=5;
	ctx.beginPath();
	ctx.moveTo(-5,h*0.2);
	ctx.lineTo(w*0.1,h*0.2);
	ctx.lineTo(w*0.2,h*0.05);
	ctx.lineTo(w*0.8,h*0.05);
	ctx.lineTo(w*0.9,h*0.2);
	ctx.lineTo(w+5,h*0.2);
	ctx.lineTo(w+5,0);
	ctx.lineTo(-5,-1);
	ctx.lineTo(-5,h*0.2);
	ctx.fillStyle="#404040";
	ctx.fill();	
	ctx.stroke();
	ctx.closePath();


	//Top left white border outline
	ctx.strokeStyle="white";
	ctx.lineWidth=5;
	ctx.beginPath();
	ctx.moveTo(w*0.11,h*0.2);
	ctx.lineTo(w*0.2+5,h*0.05+10);
	ctx.lineTo(w*0.3,h*0.05+10);
	ctx.lineTo(w*0.29,h*0.08);
	ctx.lineTo(w*0.21,h*0.08);
	ctx.lineTo(w*0.18,h*0.12);
	ctx.lineTo(w*0.177,h*0.12);
	ctx.lineTo(w*0.12,h*0.2);
	ctx.lineTo(w*0.11,h*0.2);
	ctx.stroke();
	ctx.fillStyle="white";
	ctx.fill();
	ctx.closePath();

	//Top right white border outline
	ctx.beginPath();
	ctx.moveTo(w*0.89,h*0.2);
	ctx.lineTo(w*0.8-5,h*0.05+10);
	ctx.lineTo(w*0.6,h*0.05+10);
	ctx.lineTo(w*0.62,h*0.09);
	ctx.lineTo(w*0.79,h*0.09);
	ctx.lineTo(w*0.85,h*0.18);
	ctx.lineTo(w*0.89,h*0.2);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();



	//Bottom gray area
	ctx.fillStyle="#404040";
	ctx.beginPath();
	ctx.moveTo(-5,h*0.8);
	ctx.lineTo(w*0.1,h*0.8);
	ctx.lineTo(w*0.2,h*0.93);
	ctx.lineTo(w*0.8,h*0.93);
	ctx.lineTo(w*0.9,h*0.8);
	ctx.lineTo(w,h*0.8);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	//Lines bottom right
	ctx.beginPath();
	ctx.moveTo(-5,h*0.8-10);
	ctx.lineTo(w*0.1,h*0.8-10);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(w*0.9,h*0.8-10);
	ctx.lineTo(w+5,h*0.8-10);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(w*0.92,h*0.8-20);
	ctx.lineTo(w+5,h*0.8-20);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(w*0.94,h*0.8-30);
	ctx.lineTo(w+5,h*0.8-30);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(w*0.96,h*0.8-40);
	ctx.lineTo(w+5,h*0.8-40);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(w*0.98,h*0.8-50);
	ctx.lineTo(w+5,h*0.8-50);
	ctx.stroke();
	ctx.closePath();




	//Line under gray area
	ctx.beginPath();
	ctx.lineWidth=15;
	ctx.moveTo(w*0.2,h*0.945);
	ctx.lineTo(w*0.8,h*0.945);
	ctx.stroke();
	ctx.closePath();

	//------The Major circles-----//
	ctx.beginPath();
	ctx.lineWidth=0.5;
	distance=canvasWidth*0.09;
	ctx.arc(w*0.7,h*0.3,distance*0.92,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth=30;
	ctx.arc(w*0.7,h*0.3,distance,Math.PI*1.4,0.2*Math.PI,true);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.arc(w*0.7,h*0.3,distance*0.8,Math.PI*0.2,1.6*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.arc(w*0.7,h*0.3,distance*0.72,Math.PI*1.4,Math.PI*0.6);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.arc(w*0.7,h*0.3,distance*0.6,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth=10;
	ctx.arc(w*0.7,h*0.3,distance*0.45,Math.PI*0.6,1.2*Math.PI,true);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.arc(w*0.7,h*0.3,distance*0.35,Math.PI*0.2,1.7*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.arc(w*0.7,h*0.3,distance*0.3,Math.PI*1.2,0.8*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.arc(w*0.7,h*0.3,distance*0.1,0,2*Math.PI);
	ctx.fillStyle="white";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();


	//White blocks sticking out of major circle
	ctx.globalCompositeOperation = 'destination-over';
	ctx.beginPath();
	ctx.moveTo((w*0.7)-distance*0.92,h*0.32);
	ctx.lineTo(w*0.50,h*0.32);
	ctx.lineTo(w*0.47,h*0.3);
	ctx.lineTo((w*0.7)-distance*0.92,h*0.3);
	ctx.fillStyle="white";
	ctx.strokeStyle="gray";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo((w*0.7)-distance*0.92,h*0.30);
	ctx.lineTo(w*0.4,h*0.30);
	ctx.lineTo(w*0.37,h*0.28);
	ctx.lineTo((w*0.7)-distance*0.92,h*0.28);
	ctx.fillStyle="white";
	ctx.strokeStyle="gray";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo((w*0.7)-distance*0.92,h*0.28);
	ctx.lineTo(w*0.2,h*0.28);
	ctx.lineTo(w*0.17,h*0.26);
	ctx.lineTo((w*0.7)-distance*0.92,h*0.26);
	ctx.fillStyle="white";
	ctx.strokeStyle="gray";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	//Logo positioning relative to longest white block
	logo.style.top=h*0.28-90+"px";
	logo.style.left=w*0.28+"px";


	//Left circle with inner pieces of a circle and a small filled circle
	ctx.strokeStyle="white";
	ctx.beginPath();
	ctx.arc(w*0.1,h*0.5,50,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(w*0.1,h*0.5,10,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(w*0.1,h*0.5,40,0,1);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(w*0.1,h*0.5,40,1.5,2.5);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(w*0.1,h*0.5,40,3,4);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(w*0.1,h*0.5,40,4.5,5.5);
	ctx.stroke();
	ctx.closePath();


	//Path connecting to previous circle
	/*
	ctx.beginPath();
	ctx.moveTo(w*0.1+50*Math.cos(toRadians(45)),h*0.5+50*Math.sin(toRadians(45)));
	ctx.lineTo(w*0.2,h*0.7);
	ctx.lineTo(w*0.8,h*0.7);
	ctx.lineTo(w*0.85,h*0.65);
	ctx.stroke();
	ctx.closePath();
	*/


	point=[w*0.1+50*Math.cos(toRadians(45)),h*0.5+50*Math.sin(toRadians(45))];
	pathIncrementor=[(w*0.2-point[0])/10,(h*0.7-point[1])/10];
	if (!resize)
	{	
	
		timer=setInterval(animate,20);
		function animate()
		{
			if(phases==1)	//Circle beside logo
			{
				ctx.beginPath();
				ctx.lineWidth=2;
				ctx.arc(w*0.26,h*0.23,h*0.02,angle1,angle2);
				angle1+=angleIncrementor;
				angle2+=angleIncrementor;
				ctx.stroke();
				ctx.closePath();
				if (angle2>=toRadians(390))
				{
					$(document).ready(function()
					{
						$("#logo").show(400);
					});
					phases++;
				}
			}
			else if (phases==2)	//Path under the buttons
			{
			
				ctx.beginPath();
				ctx.moveTo(point[0],point[1]);
				if (point[0]<w*0.2 && point[1]<h*0.7)
				{

					point[0]+=pathIncrementor[0];
					point[0]=Math.ceil(point[0]);
					point[1]+=pathIncrementor[1];
				}
				else if(point[0]>=w*0.2 && point[0]<w*0.8)
				{
					point[1]=h*0.7;
					pathIncrementor[0]=(w*0.8-w*0.2)/10;
					point[0]+=pathIncrementor[0];

				}
				else
				{
					pathIncrementor[0]=(w*0.85-w*0.8)/10;
					pathIncrementor[1]=(h*0.65-h*0.7)/10;
					point[0]+=pathIncrementor[0];
					point[1]+=pathIncrementor[1];
				}
				ctx.lineTo(point[0],point[1]);
				ctx.stroke();
				if(point[0]>=w*0.85)
				{
					ctx.closePath();
					$(document).ready(function()
					{
						$("#about-me-button").fadeIn(400);
						$("#contact-info-button").fadeIn(600);
						$("#work-experience-button").fadeIn(800);
						$("#offer-button").fadeIn(1000);
					});
					phases++;

					clearInterval(timer);
				}
			}
		}
	}
	else
	{
		//Circle beside logo
		ctx.strokeStyle="white";
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.arc(w*0.26,h*0.23,h*0.02,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		//Path connecting from left circle
		ctx.beginPath();
		ctx.moveTo(w*0.1+50*Math.cos(toRadians(45)),h*0.5+50*Math.sin(toRadians(45)));
		ctx.lineTo(w*0.2,h*0.7);
		ctx.lineTo(w*0.8,h*0.7);
		ctx.lineTo(w*0.85,h*0.65);
		ctx.stroke();
		ctx.closePath();

		$(document).ready(function()
		{
			$(".button-home").show(400);
		});
	}
}