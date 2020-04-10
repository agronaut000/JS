function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
include("https://rawgit.com/agronaut000/JS/master/JS2.js");

var win_html3 = `<div style="display: flex;">
<span style="cursor: -webkit-grab;">
                <button id="testStudent" style="margin:5px">У</button>
                <button id="testTeacher" style="margin:0 5px 0 0">П</button>
        </span>
            </div>`;
			
if (localStorage.getItem('winTop3') == null) {
    localStorage.setItem('winTop3', '120');
    localStorage.setItem('winLeft3', '295');
}
let wint3 = document.createElement('div');
document.body.append(wint3);
wint3.style = 'min-height: 20px; max-height: 750px; min-width: 35px; max-width: 370px; background: wheat; top: ' + localStorage.getItem('winTop3') + 'px; left: ' + localStorage.getItem('winLeft3') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wint3.setAttribute('id', 'testUsers');
wint3.innerHTML = win_html3;    
function t() {
	let tid = localStorage.getItem('teachID');
	let sid = localStorage.getItem('studID');
	document.getElementById('testTeacher').onclick = function () {
		if(tid != null) {
			chrome.runtime.sendMessage({name: "ChM", question: 'get_login_link', id: tid}, function(response) {
				copyToClipboard(response.answer.data.link);
			});
		}
	}
	document.getElementById('testStudent').onclick = function () {
		if(sid != null) {
			chrome.runtime.sendMessage({name: "ChM", question: 'get_login_link', id: sid}, function(response) {
				copyToClipboard(response.answer.data.link);
			});
		}
	}

	wint3.onmouseup = function () {document.removeEventListener('mousemove', listener3);}
	var listener3 = function(e , a) {
		wint3.style.left = Number(e.clientX - myX3) + "px";
		wint3.style.top = Number(e.clientY - myY3) + "px";
		localStorage.setItem('winTop3', String(Number(e.clientY - myY3)));
		localStorage.setItem('winLeft3', String(Number(e.clientX - myX3)));
	};
	wint3.firstElementChild.firstElementChild.onmousedown = function (a) {
		window.myX3 = a.layerX; 
		window.myY3 = a.layerY; 
		document.addEventListener('mousemove', listener3);
	}
	wint3.onmouseup = function () {document.removeEventListener('mousemove', listener3);}
}
t();
const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
