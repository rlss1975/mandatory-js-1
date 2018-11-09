'use strict';
//-----------------------------------------------------------
//-----------------problem 1 och 8---------------------------
//-----------------------------------------------------------
document.title = 'Fruits &amp; Vegetables Corp';
let vH1 = document.querySelector('h1');
vH1.textContent = document.title;
//-----------------------------------------------------------
//-----------------problem 2---------------------------------
//-----------------------------------------------------------
let vLink = document.querySelector('header ul>:nth-child(3) a');
vLink.textContent = 'Vegetables';
vLink.setAttribute('href', '#Vegetables')
//-----------------------------------------------------------
//-----------------problem 3---------------------------------
//-----------------------------------------------------------
let vParentMain = document.querySelector('#main');
let vContact = document.querySelector('#contact');
let vAbout = document.querySelector('#about');
vParentMain.insertBefore(vAbout, vContact);
//-----------------------------------------------------------
//-----------------problem 4---------------------------------
//-----------------------------------------------------------
let vH2about = document.createElement('h2');
vH2about.textContent = 'About';
vAbout.textContent = "";
vAbout.appendChild(vH2about);
//-----------------------------------------------------------
//-----------------problem 5---------------------------------
//-----------------------------------------------------------
let vPABout = document.createElement('p');
vPABout.textContent = "We're the best in fruits &amp; vegetables";
vAbout.appendChild(vPABout);
//-----------------------------------------------------------
//-----------------problem 6---------------------------------
//-----------------------------------------------------------
//remove delen
let vTheadTr = document.querySelector('table thead tr');
let vTdName = document.querySelector('table tr>:nth-child(1)');
let vTdEmail = document.querySelector('table tr>:nth-child(2)');
vTheadTr.removeChild(vTdName);
vTheadTr.removeChild(vTdEmail);
//ny taggar delen
let vThName = document.createElement('th');
vThName.textContent = 'Name';
vTheadTr.appendChild(vThName);
//
let vThEmail = document.createElement('th');
vThEmail.textContent = 'Email';
vTheadTr.appendChild(vThEmail);
//-----------------------------------------------------------
//-----------------problem 7---------------------------------
//-----------------------------------------------------------
let vLinkCss = document.createElement('link');
let vHead = document.querySelector('head');
vHead.appendChild(vLinkCss);
vLinkCss.setAttribute('rel', 'stylesheet');
vLinkCss.setAttribute('type', 'text/css');
vLinkCss.setAttribute('href', 'main.css');
//-----------------------------------------------------------
//-----------------	OPTIONAL STYLING-------------------------
//-----------------------------------------------------------
let vBody = document.body;
vBody.style.display =  'flex';
vBody.style.flexDirection = 'column';
vBody.style.justifyContent = 'flex-start';
vBody.style.alignItems = 'center';
vBody.style.flexWrap = 'nowrap';
//
let vHeader = document.querySelector('header');
vHeader.style.display = 'flex';
vHeader.style.flexDirection = 'column';
vHeader.style.justifyContent = 'flex-start';
vHeader.style.alignItems = 'center';
vHeader.style.flexWrap = 'nowrap';
//
vParentMain.style.display = 'flex';
vParentMain.style.flexDirection = 'column';
vParentMain.style.justifyContent = 'flex-start';
vParentMain.style.alignItems = 'flex-start';
vParentMain.style.flexWrap = 'nowrap';
//
vBody.style.background = '#bdb9b1';
vBody.style.fontFamily = 'Verdana';
vBody.style.fontSize = '25px';
vH1.style.textShadow ='5px 5px 5px green';
let vList = document.querySelector('ul');
vList.style.listStyleType = 'upper-roman';
let vListLi = document.querySelectorAll('li');
for (let x of vListLi) {
	x.style.background = 'pink';
	x.style.borderRadius = '10px';
	x.style.margin = '5px';
	x.style.padding = '10px';
	x.style.textAlign = 'center';
	x.style.textDecorationLine = 'none';
}
//-----------------------------------------------------------


