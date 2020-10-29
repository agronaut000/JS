
let mstl = document.createElement('style');
document.body.append(mstl);
var style = `.win_btn {
    background-color: #768d87;
    border-radius: 10px;
    border: 1px solid #566963;
    color: #ffffff;
    font-size: 12px;
    padding: 3px 2px;
    margin: -2px 1px;
}
button {
    background-color:#768d87;
    border-radius:5px; 
    border:1px solid #566963; 
    color:#ffffff; 
    padding:2px 2px;
}

.switch-btn {
    display: inline-block;
    width: 62px; /* ширина переключателя */
    height: 24px; /* высота переключателя */
    border-radius: 12px; /* радиус скругления */
    background: #bfbfbf; /* цвет фона */
    z-index: 0;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    position: relative;
    transition-duration: 300ms; /* анимация */
}
.switch-btn::after {
    content: "";
    height: 36px; /* высота кнопки */
    width: 36px; /* ширина кнопки */
    border-radius: 18px; /* радиус кнопки */
    background: #fff; /* цвет кнопки */
    top: -6px; /* положение кнопки по вертикали относительно основы */
    left: -6px; /* положение кнопки по горизонтали относительно основы */
    transition-duration: 300ms; /* анимация */
    box-shadow: 0 0 10px 0 #999999; /* тень */
    position: absolute;
    z-index: 1;
}
.switch-on {
    background: #fff;
    box-shadow: inset 0 0 10px 0 #999999; /* тень */
}
.switch-on::after {
    left: 30px;
    background: #118c4e;
}`
mstl.innerHTML = style;

var win_AFhelper =  
    `<div style="display: flex; width: 301px;">
        <span style="width: 301px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px;" id="1str">
					<button id="languageAF" style="width:100px">Русский</button>
					<button id="hideMenu" style="margin-left: 50px">hide</button>
					<button id="setting" style="margin-left: 80px">S</button>
				</div>
				<div style="margin: 5px;" id="pages">
				</div>
			</span>
			<div style="margin: 5px;" id="6str">
				<button id="tmplt1_save">save</button>
				<button id="tmplt1_snd">send</button>
				
				<button id="tmplt2_save" style="margin-left: 25px">save</button>
				<button id="tmplt2_snd">send</button>
				
				<button id="tmplt3_save" style="margin-left: 25px">save</button>
				<button id="tmplt3_snd">send</button>
			</div>
			<div style="margin: 5px;" id="7str">
				<textarea style="width: 291px; height: 125px; resize: none" id="inp"></textarea>
				<button id="msg1" style="width:100px;">Отправить</button>
				<button id="snd" style="width:50px; margin-left:16px">send</button>
				<button id="msg" style="width:100px; margin-left:16px">Заметки</button>
			</div>
		<div style="border: 2px double black; display: none; background-color: #464451" id="addTmp">
			<div style="margin: 5px; width: 300px">
			</div>
		</div>
		<div style="border: 2px double black; display: none; background-color: #464451" id="set_bar">
			<div style="margin: 5px; width: 300px">
				<input id="sound_adr" placeholder="Адрес звука" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
				<button id="sound_save">save</button>
				<button id="switcher">ВКЛ</button>
			</div>
			<div style="margin: 5px; width: 300px">
				<p style="color:white; margin:0 0 5px 0;"> Отдел: 
				<button id="type_KC">КЦ</button>
				<button id="type_TP">ТП</button>
				<button id="type_TS">TS</button>
				</p>
			</div>
		</div>
	</span>
    </div>`;
	
let audio
if (localStorage.getItem('winTopAF') == null) {
    localStorage.setItem('winTopAF', '120');
    localStorage.setItem('winLeftAF', '295');
}

if (localStorage.getItem('winTopAF') == null) {
    localStorage.setItem('winTopAF', '120');
    localStorage.setItem('winLeftAF', '295');
}

if (localStorage.getItem('scriptAdr') == null) {
    localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbydMLmE-OOY2MMshHopMe0prA5lS0CkaR7-rQ4p/exec');
}

let button2 = document.createElement('div');
button2.id = 'userIdScript';
button2.innerHTML = "Info";

let button3 = document.createElement('div');
button3.id = 'nextStudentIdScript';
button3.innerHTML = "Info";

let button4 = document.createElement('div');
button4.id = 'nextTeacherIdScript';
button4.innerHTML = "Info";
template_flag = 0
template_flag2 = 0
word_text = ""
template_text = ""
flagggg = 0

button2.onclick = function() {
	if(document.getElementById('btn_hide').style.display != 'none')
		btn_hide.click()
	for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
			document.getElementById('id_type_for_chat').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
	}
	btn1_student.click()
}
button3.onclick = function() {
	if(document.getElementById('btn_hide').style.display != 'none')
		btn_hide.click()
	for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId")
			document.getElementById('id_type_for_chat').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
	}
	btn1_student.click()
}
button4.onclick = function() {
	if(document.getElementById('btn_hide').style.display != 'none')
		btn_hide.click()
	for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId")
			document.getElementById('id_type_for_chat').value = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
	}
	btn1_student.click()
}

let addInfoUser = document.createElement('div')

let hashBut = document.createElement('div')
hashBut.id = "hashBut"
hashBut.innerHTML = "Хэш"
hashBut.style.marginRight = "15px";
btnAdd1 = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]


let maskBack = document.createElement('div')
maskBack.id = "maskBack"
maskBack.innerHTML = "Вернуть"
maskBack.style.marginRight = "15px";
maskBack.style.display = "none";
setTimeout(function() {
btnAdd1.insertBefore(hashBut, btnAdd1.children[0])
btnAdd1.insertBefore(maskBack, btnAdd1.children[0])
}, 2000)

maskBack.onclick = function () {
	name = document.getElementById('maskBack').getAttribute('name')
	email = document.getElementById('maskBack').getAttribute('email')
	phone = document.getElementById('maskBack').getAttribute('phone')
	mask = document.getElementById('maskBack').getAttribute('mask')
	if(document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText == name &&
	document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText == email &&
	document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText == phone) {
		document.getElementsByClassName('ant-modal-wrap')[mask].style.display = ''
		document.getElementsByClassName('ant-modal-mask')[mask].style.display = ''
		document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = '' // кнопки сверху
		document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = '' // кнопка заметок
		document.getElementById('maskBack').style.display = 'none'
	} else {
		document.getElementById('maskBack').innerHTML = "Открыт неверный чат"
		setTimeout(function() {document.getElementById('maskBack').innerHTML = "Вернуть"}, 3000)
	}
}



let maskBackHide = document.createElement('div')
maskBackHide.id = "maskBackHide"
maskBackHide.innerHTML = "Скрыть"
maskBackHide.style.marginRight = "15px";
maskBackHide.style.display = "";

maskBackHide.onclick = function () {
	if(document.getElementsByClassName('ant-modal-content')[0].childNodes[1].firstChild.innerText == "Добавить комментарий к диалогу") {
			document.getElementsByClassName('ant-modal-wrap')[0].style.display = 'none'
			document.getElementsByClassName('ant-modal-mask')[0].style.display = 'none'
			document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = 'none' // кнопки сверху
			document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = 'none' // кнопка заметок
			document.getElementById('maskBack').style.display = ''
	
			document.getElementById('maskBack').setAttribute('name', document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText)
			document.getElementById('maskBack').setAttribute('email', document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText)
			document.getElementById('maskBack').setAttribute('phone', document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText)
			document.getElementById('maskBack').setAttribute('mask', 0)
	} else
		for(i = 0;; i++) {
			if(document.getElementsByClassName('ant-modal-wrap')[i] == undefined) {
				document.getElementsByClassName('ant-modal-wrap')[i - 1].style.display = 'none'
				document.getElementsByClassName('ant-modal-mask')[i - 1].style.display = 'none'
				document.getElementsByClassName('expert-chat-header-actions-inner')[0].style.display = 'none' // кнопки сверху
				document.getElementsByClassName('expert-chat-footer')[0].firstChild.firstChild.style.display = 'none' // кнопка заметок
				document.getElementById('maskBack').style.display = ''
				
		
				document.getElementById('maskBack').setAttribute('name', document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText)
				document.getElementById('maskBack').setAttribute('email', document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText)
				document.getElementById('maskBack').setAttribute('phone', document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText)
				document.getElementById('maskBack').setAttribute('mask', i - 1)
				break;
			}
		}
}


hashBut.onclick = function () {
	adr = document.location.href
	adr1 = document.location.pathname
	adr1 = adr1.split('/')
	adr1 = adr1[3]
	if((adr1 == undefined || adr1 == "") || window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') === -1) {
		if(window.location.href.indexOf('skyeng.autofaq.ai/logs') === -1) {
			document.getElementById('hashBut').innerHTML = "Ошибка"
			setTimeout(function() {document.getElementById('hashBut').innerHTML = "Хэш"}, 3000)
		} else {
			adr1 = document.getElementsByClassName('ant-spin-nested-loading')[1].firstChild.firstChild.firstChild.childNodes[1].textContent
			copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-11/'+adr1)
			document.getElementById('hashBut').innerHTML = "Скопировано"
			setTimeout(function() {document.getElementById('hashBut').innerHTML = "Хэш"}, 3000)
		}
	} else {
		copyToClipboard1('https://hdi.skyeng.ru/autofaq/conversation/-11/'+adr1)
		document.getElementById('hashBut').innerHTML = "Скопировано"
		setTimeout(function() {document.getElementById('hashBut').innerHTML = "Хэш"}, 3000)
	}
	
}

let wintAF = document.createElement('div');
document.body.append(wintAF);
wintAF.style = 'min-height: 25px; min-width: 65px; background: #464451; top: ' + localStorage.getItem('winTopAF') + 'px; left: ' + localStorage.getItem('winLeftAF') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wintAF.setAttribute('id' ,'AF_helper');
wintAF.innerHTML = win_AFhelper; 


	
function move_again_AF() {
    if(window.location.href.indexOf('autofaq') === -1) {
		document.getElementById('AF_helper').style.display = 'none';
	}
		
		
    var listener2 = function(e , a) {
        wintAF.style.left = Number(e.clientX - myX2) + "px";
        wintAF.style.top = Number(e.clientY - myY2) + "px";
        localStorage.setItem('winTopAF', String(Number(e.clientY - myY2)));
        localStorage.setItem('winLeftAF', String(Number(e.clientX - myX2)));
    };

    wintAF.firstElementChild.firstElementChild.firstElementChild.onmousedown = function (a) {
        window.myX2 = a.layerX; 
        window.myY2 = a.layerY; 
        document.addEventListener('mousemove', listener2);
    }
    wintAF.onmouseup = function () {document.removeEventListener('mousemove', listener2);}
	
	
    document.getElementById('msg').onclick = function () {
        if(this.innerHTML == "Чат") {
            this.innerHTML = "Заметки";
			localStorage.setItem('msg', 'Заметки')
        } else {
            this.innerHTML = "Чат";
			localStorage.setItem('msg', 'Чат')
        }
	}
    document.getElementById('type_KC').onclick = function () {
		localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbzNJgvbbgMIRzEuIMv2yR2VRE5lT7xrhouGVod0/exec')
		document.getElementById('msg1').style.display = 'none'
		document.getElementById('snd').style.marginLeft = '120px'
		document.getElementById('msg1').innerHTML = 'Доработать'
		document.getElementById('testUsers').style.display = 'none'
		getText()
	}
    document.getElementById('type_TP').onclick = function () {
		localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbydMLmE-OOY2MMshHopMe0prA5lS0CkaR7-rQ4p/exec')
		document.getElementById('msg1').style.display = ''
		document.getElementById('snd').style.marginLeft = '16px'
		document.getElementById('testUsers').style.display = ''
		getText()
	}
    document.getElementById('type_TS').onclick = function () {
		localStorage.setItem('scriptAdr', 'https://script.google.com/macros/s/AKfycbyuK-HoVzF2v66klEcqNyAKFFqtvVheEe4vLhRz/exec')
		document.getElementById('msg1').style.display = 'none'
		document.getElementById('snd').style.marginLeft = '120px'
		document.getElementById('msg1').innerHTML = 'Доработать'
		document.getElementById('testUsers').style.display = 'none'
		getText()
	}
	if(localStorage.getItem('scriptAdr') != 'https://script.google.com/macros/s/AKfycbydMLmE-OOY2MMshHopMe0prA5lS0CkaR7-rQ4p/exec') {
		document.getElementById('msg1').style.display = 'none'
		document.getElementById('snd').style.marginLeft = '120px'
		document.getElementById('msg1').innerHTML = 'Доработать'
		document.getElementById('testUsers').style.display = 'none'
	} else {
		document.getElementById('msg1').style.display = ''
		document.getElementById('snd').style.marginLeft = '16px'
		document.getElementById('testUsers').style.display = ''
	}
	
    document.getElementById('hideMenu').onclick = function () {
		document.getElementById('AF_helper').style.display = 'none'
		document.getElementById('scriptBut').style.display = ''
	}
	
    document.getElementById('setting').onclick = function () {
		if(document.getElementById('set_bar').style.display == '')
			document.getElementById('set_bar').style.display = 'none'
		else
			document.getElementById('set_bar').style.display = ''
	}
    document.getElementById('sound_save').onclick = function () {
		localStorage.setItem('sound_str', document.getElementById('sound_adr').value);
		if(document.getElementById('sound_adr').value == "") 
			audio = new Audio("https://drive.google.com/u/0/uc?id=1832JE2IuK7AnfgkljLYytEeFL99Mt2Gv&export=download");	
		else
			audio = new Audio(document.getElementById('sound_adr').value);
		document.getElementById('sound_adr').value = "";
	}
	
			
    document.getElementById('languageAF').onclick = function () {
        if(this.innerHTML == "Русский") {
            this.innerHTML = "Английский";
			document.getElementById('AF_helper').style.background = "#EBC7DF"
        } else {
            this.innerHTML = "Русский";
			document.getElementById('AF_helper').style.background = "#464451"
        }
	}
	
	
    document.getElementById('tmplt1_save').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			txt = document.getElementById('inp').value
			localStorage.setItem('tmplt1_ru', txt)
		} else {
			txt = document.getElementById('inp').value
			localStorage.setItem('tmplt1_en', txt)
		}
	}
    document.getElementById('tmplt2_save').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			txt = document.getElementById('inp').value
			localStorage.setItem('tmplt2_ru', txt)
		} else {
			txt = document.getElementById('inp').value
			localStorage.setItem('tmplt2_en', txt)
		}
	}
    document.getElementById('tmplt3_save').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			txt = document.getElementById('inp').value
			localStorage.setItem('tmplt3_ru', txt)
		} else {
			txt = document.getElementById('inp').value
			localStorage.setItem('tmplt3_en', txt)
		}
	}
	
    document.getElementById('tmplt1_snd').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			txt = localStorage.getItem('tmplt1_ru')
		} else {
			txt = localStorage.getItem('tmplt1_en')
		}
		if(txt == null || txt == "")
			document.getElementById('inp').value = "Не введен текст 1 шаблона"
		else 
			sendAnswer(txt)
	}
    document.getElementById('tmplt2_snd').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			txt = localStorage.getItem('tmplt2_ru')
		} else {
			txt = localStorage.getItem('tmplt2_en')
		}
		if(txt == null || txt == "")
			document.getElementById('inp').value = "Не введен текст 2 шаблона"
		else 
			sendAnswer(txt)
	}
    document.getElementById('tmplt3_snd').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			txt = localStorage.getItem('tmplt3_ru')
		} else {
			txt = localStorage.getItem('tmplt3_en')
		}
		if(txt == null || txt == "")
			document.getElementById('inp').value = "Не введен текст 3 шаблона"
		else 
			sendAnswer(txt)
	}
	
	
    document.getElementById('msg1').onclick = function () {
        if(this.innerHTML == "Отправить") {
            this.innerHTML = "Доработать";
			localStorage.setItem('msg1', 'Доработать')
        } else {
            this.innerHTML = "Отправить";
			localStorage.setItem('msg1', 'Отправить')
        }
	}
    document.getElementById('snd').onclick = function () {
		if(document.getElementById('msg').innerHTML == "Чат") {
			if(template_flag == 1) {
				if(template_flag2 == 1)
					sendAnswerTemplate2(document.getElementById('inp').value, 1)
				else
					sendAnswerTemplate("", "", 1, document.getElementById('inp').value, 1)
			} else {
				sendAnswer(document.getElementById('inp').value, 0)
			}
		}
		else 
			sendComment(document.getElementById('inp').value)
		document.getElementById('inp').value = ""
		
		if(document.getElementById('phone_tr') != undefined)
			document.getElementById('phone_tr').value = ""
		if(document.getElementById('email_tr') != undefined)
			document.getElementById('email_tr').value = ""
	}	

	window.onkeydown = function(e) {
			if(e.key == 'Control') {
					bool = 1;
			}
			if(e.key == 'Enter' && bool == 1) {
				refCurTimer('10:00')
			}
		}
	window.onkeyup = function(e) {
		if(e.key == 'Control') {
			bool = 0;
		}
	}
	
	let button1 = document.createElement('div');
	button1.id = 'scriptBut';
	button1.innerHTML = "Скрипт";
	button1.style.marginRight = "15px";
	button1.style.display = 'none'
	button1.onclick = function() {
		document.getElementById('AF_helper').style.display = 'flex'
		this.style.display = 'none'
	}
	btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
	btnAdd.insertBefore(button1, btnAdd.children[0])
	
    document.getElementById('switcher').onclick = function () {
        if(this.innerHTML == "ВКЛ") {
            this.innerHTML = "ВЫКЛ";
			localStorage.setItem('audio', '0');
        } else {
            this.innerHTML = "ВКЛ";
			localStorage.setItem('audio', '1');
        }
	}
	
	
	if (localStorage.getItem('audio') == 0) {
		document.getElementById('switcher').innerHTML = "ВЫКЛ"
	}
	if (localStorage.getItem('audio') == 1) {
		document.getElementById('switcher').innerHTML = "ВКЛ"
	}
	
	if(localStorage.getItem('audio') != null) {
		if(localStorage.getItem('audio') == '0')
			document.getElementById('switcher').innerHTML = 'ВЫКЛ';
		else
			document.getElementById('switcher').innerHTML = 'ВКЛ';
	}
	addInfoUser.style.textAlign = "center"
	addInfoUser.style.color = "white"
	addInfoUser.style = "color: white; text-align: center; cursor: -webkit-grab;"
	loginer = document.getElementById('testUsers')
	loginer.appendChild(addInfoUser)


	loginer.onmouseup = function () {document.removeEventListener('mousemove', listener3);}
	var listener3 = function(e , a) {
		loginer.style.left = Number(e.clientX - myX3) + "px";
		loginer.style.top = Number(e.clientY - myY3) + "px";
		localStorage.setItem('winTop3', String(Number(e.clientY - myY3)));
		localStorage.setItem('winLeft3', String(Number(e.clientX - myX3)));
	};
	loginer.childNodes[1].onmousedown = function (a) {
		window.myX3 = a.layerX; 
		window.myY3 = a.layerY; 
		document.addEventListener('mousemove', listener3);
	}
	loginer.onmouseup = function () {document.removeEventListener('mousemove', listener3);}
	
	user = "student"
	
	if(localStorage.getItem('msg') != null) {
		document.getElementById('msg').innerHTML = localStorage.getItem('msg') 
	}
	if(localStorage.getItem('msg1') != null) {
		document.getElementById('msg1').innerHTML = localStorage.getItem('msg1') 
	}
	
	getText()
}

setTimeout(move_again_AF(), 1000)
function pageClick(pageId) {
	b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
	for(i = 0; i < b.childElementCount; i++) {
		try {
			b.children[1].children[i].style.backgroundColor = '#768d87'
			document.getElementById(i + "page").style.display = 'none'
		} catch (e){}
	}
	document.getElementById(pageId).style.backgroundColor = 'green'
		document.getElementById(pageId[0] + "page").style.display = ''
}

function bagPageButtons(butId) {
	txt = document.getElementById(butId).parentElement.childNodes[0].textContent
	for(l = 0; l < table.length; l++)
		if(table[l][0] == txt) {
			resetFlags()
			document.getElementById('inp').value = table[l][Number(butId[4]) + 1]
			break
		}
}
function transfPageButtons(butName) {
	resetFlags()
	textFromTable = ""
	for(l = 0; l < table.length; l++)
		if(table[l][0] == butName) {
			if(table[l][1] == "Поле") {
				textFromTable = table[l][2]
			} else {
				msgFromTable(table[l][0])
			}
			break
		}
	if(textFromTable == "")
		return
	phone = ""
	textFromTable = textFromTable.split('(phone)')
	if(textFromTable.length > 1) {
		if(document.getElementById('phone_tr').value == "")
			phone = document.getElementById('phone_tr').placeholder
		else
			phone = document.getElementById('phone_tr').value
		if(phone == "Телефон") {
			document.getElementById('inp').value = "Введите номер телефона"
			return
		}
	}
	textFromTable = textFromTable.join(phone)
	
	email = ""
	textFromTable = textFromTable.split('(email)')
	if(textFromTable.length > 1) {
		if(document.getElementById('email_tr').value == "")
			email = document.getElementById('email_tr').placeholder
		else
			email = document.getElementById('email_tr').value
		if(email == "Почта") {
			document.getElementById('inp').value = "Введите почту"
			return
		}
	}
	textFromTable = textFromTable.join(email)
	
	document.getElementById('inp').value = textFromTable
}

async function buttonsFromDoc(butName) {
	if(butName == "ус+брауз")
		if(user == 'student')
			butName = "ус+брауз (У)"
		else
			butName = "ус+брауз (П)"
		
	if(butName == 'Привет') {
		try{
			adr = adr1 = uid = ""
			var values = await getInfo(0).then(values => {adr = values[0]; adr1 = values[1]; uid = values[2];});

			count = await checkHistory(uid.split(',')[0])
			if(count > 1 && flagggg == 0) {
				if(document.getElementById('languageAF').innerHTML == "Русский")
					txt = "Сейчас я вам помогу, подождите, пожалуйста."
				else
					txt = "I will help you now, please wait."
				flagggg = 1
			} else {
				flagggg = 0
				a = document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText
				a = a.split(' ')
				const cyrillicPattern = /^[\u0400-\u04FF]+$/;
				
				if(document.getElementById('languageAF').innerHTML == "Русский")
					if(cyrillicPattern.test(a[0]) && document.getElementById('msg1').innerHTML == "Доработать")
						txt = "Здравствуйте, " + a[0] + "!"
					else
						txt = "Здравствуйте!"
				else
					txt = "Hello!"
			}
		} catch(e) {
			if(document.getElementById('languageAF').innerHTML == "Русский")
				txt = "Здравствуйте!"
			else
				txt = "Hello!"
		}
		if(txt == "I will help you now, please wait.")
			sendAnswer(txt)
		else
			sendAnswerTemplate2(txt)
		return
	}		
	
	msgFromTable(butName)
	if(butName == "Серверные")
		if(document.getElementById('msg1').innerHTML != "Доработать")
			sendComment(document.getElementById('inp').value)
}

var bool = 0;	
var table
function getText() {
   var app = localStorage.getItem('scriptAdr'),
      xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
			   
			table = result;
			console.log('Обновили шаблоны')
			refreshTemplates()

        } catch(e) {console.log(e)}
     }
   

   }
   xhr.send()
   
}
function refreshTemplates() {
	while(document.getElementById('pages').children[0] != undefined)
		document.getElementById('pages').children[0].remove()
	for(i = 0; document.getElementById(i + 'page') != undefined; i++)
		document.getElementById(i + 'page').remove()
	while(document.getElementById('addTmp').children[0].children[0] != undefined)
		document.getElementById('addTmp').children[0].children[0].remove()
	countOfStr = 0
	countOfPages = 0
	pageName = ""
	addTmpFlag = 0
	b = document.getElementById('AF_helper').childNodes[0].childNodes[1].childNodes[1]
	console.log(table)
	for(i = 0; i < table.length; i++) {
		c = table[i]
		switch(c[0]) {
			case '': 
				addTmpFlag = 0
				countOfStr++
				var newStr = document.createElement('div')
				newStr.style.margin = "5px"
				newStr.id = countOfPages + "page_" + countOfStr + "str"
				b.lastElementChild.appendChild(newStr)
				break
			
			case 'Additional templates': 
				addTmpFlag = 1
				break
			case 'Страница':
				var newPageBut = document.createElement('button')
				newPageBut.innerText = c[1]
				pageType = c[2]
				newPageBut.style.marginRight = '4px'
				newPageBut.setAttribute('onclick', 'pageClick(this.id)')
				newPageBut.id = countOfPages + 'page_button'
				b.childNodes[3].appendChild(newPageBut)
				
				var newPage = document.createElement('div')
				newPage.id = countOfPages + 'page'
				b.appendChild(newPage)
				
				countOfPages++
				
				countOfStr = 1
				if(pageType == "Переводы") {
					var newDiv = document.createElement('div')
					newDiv.id = countOfPages + "page_" + countOfStr + "str"
					newDiv.style.margin = "5px"
					
					var newInputPhone = document.createElement('input')
					newInputPhone.id = 'phone_tr'
					newInputPhone.placeholder = 'Телефон'
					newInputPhone.autocomplete = 'off'
					newInputPhone.type = 'text'
					newInputPhone.style = 'text-align: center; width: 100px; color: black; margin-left: 10px'
					
					var newInputEmail = document.createElement('input')
					newInputEmail.id = 'email_tr'
					newInputEmail.placeholder = 'Почта'
					newInputEmail.autocomplete = 'off'
					newInputEmail.type = 'text'
					newInputEmail.style = 'text-align: center; width: 100px; color: black; margin-left: 10px'
					
					newDiv.appendChild(newInputPhone)
					newDiv.appendChild(newInputEmail)
					
					b.lastElementChild.appendChild(newDiv)
					countOfStr++
					
					setInterval(function() {
						if(document.getElementsByClassName('expert-user_details-list')[0] != undefined) {
							if(document.getElementById('phone_tr') != undefined) {
								phone = document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText
								if(phone == "-") {
									phone = ""
									document.getElementById('phone_tr').placeholder = "Телефон" 
								} else 
									document.getElementById('phone_tr').placeholder = phone
							}
							if(document.getElementById('email_tr') != undefined) {
								email = document.getElementsByClassName('expert-user_details-list')[0].childNodes[0].childNodes[1].innerText
								if(email == "-") {
									email = ""
									document.getElementById('email_tr').placeholder	= "Почта"
								}
								document.getElementById('email_tr').placeholder	= email
							}
						} else {
							if(document.getElementById('email_tr') != undefined) 
								document.getElementById('email_tr').placeholder	= "Почта"
							if(document.getElementById('phone_tr') != undefined)
								document.getElementById('phone_tr').placeholder = "Телефон" 
						}
					}, 1000)
				}
				var newStr = document.createElement('div')
				newStr.style.margin = "5px"
				newStr.id = countOfPages + "page_" + countOfStr + "str"
				b.lastElementChild.appendChild(newStr)
				break
			default:
				switch(pageType) {
					case 'Баги':
						var newString = document.createElement('p')
						newString.style.color = 'white'
						newString.style.margin = '0 0 5px 0'
						newString.innerText = c[0]
						for(j = 0; j < c[1]; j++) {
							var newBut = document.createElement('button')
							newBut.style.width = '20px'
							newBut.style.marginRight = '4px'
							newBut.id = countOfStr + 'str' + (j + 1) 
							newBut.innerText = (j + 1) 
							newBut.setAttribute('onclick', 'bagPageButtons(this.id)')
							newString.appendChild(newBut)
						}
						countOfStr++
						b.lastElementChild.lastElementChild.appendChild(newString)
						break
					case 'Шаблоны':
						var newBut = document.createElement('button')
						newBut.innerText = c[0]
						newBut.style.marginRight = '4px'
						newBut.setAttribute('onclick', 'buttonsFromDoc(this.innerText)')
						if(newBut.innerText == 'Урок NS')
							newBut.id = "NS"
						if(newBut.innerText == 'ус+брауз (У)')
							newBut.innerText = "ус+брауз"
						if(newBut.innerText == 'ус+брауз (П)')
							continue
						if(addTmpFlag == 0)
							b.lastElementChild.lastElementChild.appendChild(newBut)
						else {
							newBut.style.marginTop = '4px'
							document.getElementById('addTmp').children[0].appendChild(newBut)
						}
						break
					case 'Переводы':
						var newBut = document.createElement('button')
						newBut.innerText = c[0]
						newBut.style.marginRight = '4px'
						newBut.setAttribute('onclick', 'transfPageButtons(this.innerText)')
						b.lastElementChild.lastElementChild.appendChild(newBut)
						break
					default:
						break
				}
				break
		}
	}	
	document.getElementById('0page').ondblclick = function () {
	if(document.getElementById('addTmp').style.display == 'none')
		document.getElementById('addTmp').style.display = '';
	else
		document.getElementById('addTmp').style.display = 'none';
	}
	document.getElementById('0page_button').click()
}

function msgFromTable(btnName) {
	for(l = 0; l < table.length; l++) {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			if(btnName == table[l][0]) {
				if(table[l][1] == "Быстрый шаблон") {
					sendAnswerTemplate2(table[l][2])
				}
				if(table[l][1] == "Текст") {
					sendAnswer(table[l][2])
				}
				if(table[l][1] == "Шаблон") {
					sendAnswerTemplate(table[l][2], table[l][3])
				}
				break
			}
		} else {
			if(btnName == table[l][0]) {
				if(table[l][4] == "") {
					document.getElementById('inp').value = "Нет такого шаблона"
				} else {
					if(table[l][5] == "Быстрый шаблон") {
						sendAnswerTemplate2(table[l][6])
					}
					if(table[l][5] == "Текст") {
						sendAnswer(table[l][6])
					}
					if(table[l][5] == "Шаблон") {
						sendAnswerTemplate(table[l][6], table[l][7])
					}
					break
				}
			}
		}
	}
}

async function sendAnswerTemplate(template, word, flag = 0, newText = "", flag2 = 0) {
	//addTimer()
	time = "10:00"
	if(flag == 1) {
		template = template_text
		word = word_text
	}
	var values = await getInfo(0)
	adr = values[0]; adr1 = values[1]; uid = values[2]
	a = await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
  "headers": {
    "accept": "*/*", 
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": adr,
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "{\"query\":\"" + word + "\",\"answersLimit\":10,\"autoFaqServiceIds\":[119638,121385,121300,119843,118980,120969,121387,121348,121386,119636,119844,119649,121286,121381,119841,120181,119646,121303,121343,121388,121162,121158,121346,121151,121341,121152,121342,121156,121347,121079,121163,121155,121344,121157,121345,121304,121340, 121384]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
b = a.json()
serviceId = queryId = sessionId = tmpText = title = accuracy = ""
b.then(b => {b.forEach(b => {if (b.title == template) {documentId = b.documentId
serviceId = b.serviceId
queryId = b.queryId
AFsessionId = b.sessionId
tmpText = b.text
tmpText = tmpText.split("<br>↵").join('\n')
tmpText = tmpText.split("&nbsp;").join(' ')
tmpText = tmpText.split("<br />").join('\n')
tmpText = tmpText.split('<a').join('TMPaTMP').split('</a').join('TMPENDaTMEPEND')
tmpText = tmpText.replace(/<\/?[^>]+>/g,'')
tmpText = tmpText.split('TMPaTMP').join('<a').split('TMPENDaTMEPEND').join('</a')
title = b.title
title = title.split("\"").join("\\\"")
accuracy = b.accuracy
}});}).then(k => {
		if(document.getElementById('msg1').innerHTML == "Доработать" && flag2 == 0) {
			document.getElementById('inp').value = tmpText
			template_text = template
			word_text = word
			template_flag = 1
		}
		else if(tmpText == "")
				console.log('Шаблон не найден')
			else {
				if(flag == 1) {
					tmpText = newText
				}
				tmpText = tmpText.split("\"").join("\\\"")
				txt2 = tmpText.split('\n')
				txt3 = ""
				txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
				tmpText = txt3
				tmpText = tmpText.split('<p></p>').join("<p><br></p>")
				tmpText = tmpText.substr(0, tmpText.length - 2)
				
				resetFlags()
				refCurTimer(time)
				fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
					  "headers": {
						"accept": "*/*",
						"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
						"cache-control": "max-age=0",
						"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryZ3ivsA3aU80QEBST",
						"sec-fetch-dest": "empty",
						"sec-fetch-mode": "cors",
						"sec-fetch-site": "same-origin"
					  },
					  "referrer": adr,
					  "referrerPolicy": "no-referrer-when-downgrade",
					  "body": "------WebKitFormBoundaryZ3ivsA3aU80QEBST\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + tmpText + "\",\"ext\":null,\"files\":[],\"suggestedAnswerDocId\":" + documentId + ",\"autoFaqServiceId\":" + serviceId + ",\"autoFaqSessionId\":\"" + AFsessionId + "\",\"autoFaqQueryId\":\"" + queryId + "\",\"autoFaqTitle\":\"" + title + "\",\"autoFaqQuery\":\"" + word + "\",\"autoFaqAccuracy\":" + accuracy + "}\r\n------WebKitFormBoundaryZ3ivsA3aU80QEBST--\r\n",
					  "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
					});
			}
			});
}
async function sendAnswer(txt, flag = 1, time = "10:00") {
		//addTimer()
		var values = await getInfo(flag)
		adr = values[0]; adr1 = values[1]; uid = values[2]
		txt2 = txt.split('\n')
		txt3 = ""
		txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
		txt3 = txt3.split("\"").join("\\\"")
		txt3 = txt3.split('<p></p>').join("<p><br></p>")
		txt3 = txt3.substr(0, txt3.length - 2)
		
		if(document.getElementById('msg1').innerHTML == "Доработать" && flag) {
			resetFlags()
			document.getElementById('inp').value = txt
		}
		else {
				refCurTimer(time)
				fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
					  "headers": {
						"accept": "*/*",
						"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
						"cache-control": "max-age=0",
						"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryFeIiMdHaxAteNUHd",
						"sec-fetch-dest": "empty",
						"sec-fetch-mode": "cors",
						"sec-fetch-site": "same-origin"
					  },
					  "referrer": adr,
					  "referrerPolicy": "no-referrer-when-downgrade",
					  "body": "------WebKitFormBoundaryFeIiMdHaxAteNUHd\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt3 + "\"}\r\n------WebKitFormBoundaryFeIiMdHaxAteNUHd--\r\n",
					  "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
				});
				resetFlags()
			}
}
async function getInfo(flag1 = 1) {
		adr = document.location.href
		adr1 = document.location.pathname
		adr1 = adr1.split('/')
		adr1 = adr1[3]
		if(adr1 == undefined)
			adr1 = ""
		sessionId = ""
		if(document.getElementById('msg1').innerHTML != "Доработать" || flag1 == 0) {
			a = await fetch("https://skyeng.autofaq.ai/api/conversations/"+adr1, {
	  "headers": {
		"accept": "*/*",
		"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
		"cache-control": "max-age=0",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin"
	  },
	  "referrer": adr,
	  "referrerPolicy": "no-referrer-when-downgrade",
	  "body": null,
	  "method": "GET",
	  "mode": "cors",
	  "credentials": "include"
	}).then(a => b = a.json()).then(b => {sessionId = b.sessionId; localStorage.setItem('serviceIdGlob', b.serviceId)});
		}
		return [adr, adr1, sessionId]
}
async function sendComment(txt){ 
		var values = await getInfo(0)
		adr = values[0]; adr1 = values[1]; uid = values[2]
		txt2 = txt.split('\n').join('\\n')
		txt2 = txt2.split("\"").join("\\\"")
		resetFlags()
	fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
	  "headers": {
		"accept": "*/*",
		"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
		"cache-control": "max-age=0",
		"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryH2CK1t5M3Dc3ziNW",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin"
	  },
	  "referrer": adr,
	  "referrerPolicy": "no-referrer-when-downgrade",
	  "body": "------WebKitFormBoundaryH2CK1t5M3Dc3ziNW\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt2 + "\",\"isComment\":true}\r\n------WebKitFormBoundaryH2CK1t5M3Dc3ziNW--\r\n",
	  "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	});
}
idk = 0
var tmrs = []
function addTimer() {
	tm = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0]
	if(tm.childNodes[0].childNodes[2] === undefined) {
		let serv = document.createElement('div')
		let serv2 = document.createElement('div')
		tm.childNodes[0].appendChild(serv)
		tm.childNodes[1].appendChild(serv2)
		tm.childNodes[0].childNodes[2].innerHTML = "10:00"
		let d = new Date()
		tmrs[idk] = ["10:00", tm.childNodes[1].childNodes[0].innerText, 1, number(d), ""]
		idk++
	}
}

function addTimers() {
	k = 0
	btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
	let d = new Date()
	while (true) {
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
			break;
		btns.childNodes[k]
		nm = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
		flag = 0
		for(i = 0; i < idk; i++) {
			name = tmrs[i][1]
			if(nm == name) {
				flag = 1
				break
			}
		}
		if(flag == 0)
			tmrs[idk++] = ["10:00", nm, 1, Number(d), ""]

		k++
	}	
	
	k = 0
	btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
	while (true) {
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
			break;
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined) {
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].appendChild(document.createElement('div'))
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].appendChild(document.createElement('div'))
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.backgroundColor = 'red'
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.color = 'white'
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.textAlign = 'center'
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.fontWeight = 'bold'
		}
		k++
	}
}

function refreshTimer() {
	btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
	j = 0
	while(true) {
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j] === undefined)
			break
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].className === "ant-empty ant-empty-normal")
			break;
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined)
			addTimers()
		name = btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
		for (i = 0; i < idk; i++) {
			if(tmrs[i][1] == name) {
				btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerHTML = tmrs[i][0]
				if(tmrs[i][0] == "00:00")
					if(tmrs[i][2] == 1)
						btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#ECEBBD"
					else
						btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FBCEB1"
				else
					btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "white"
				btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[3].innerText = tmrs[i][4]
				var cT = new Date();
				var curT1 = tmrs[i][3]
				var curT2 = Number(cT);
				var curT3 = (13.5 * 60) - Math.floor((curT2 - curT1) / 1000);
				if(curT3 < 0)
					btns.childNodes[0].childNodes[0].childNodes[0].childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FF47CA"
			}
		}
		j++
	}
}

function refCurTimer(time) {
	btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

	name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
	for (i = 0; i < idk; i++) {
		if(tmrs[i][1] == name) {
			tmrs[i][0] = time
			if(time == "1:00")
				tmrs[i][2] = 0
			else 
				tmrs[i][2] = 1
			tmrs[i][3] = Number(new Date())
		}
	}
}
		
flag = 0
str = localStorage.getItem('sound_str');
if(str !== null && str !== "")
	audio = new Audio(str);	
else
	audio = new Audio("https://drive.google.com/u/0/uc?id=1832JE2IuK7AnfgkljLYytEeFL99Mt2Gv&export=download");	

var timeStart = new Date()
function startTimer() {
	var timeNow = new Date()
	if(timeNow - timeStart > 60 * 60 * 1000) {
		getText()
		timeStart = timeNow
	}
	for(i = 0; i < idk; i++) {
		var cT = new Date();
		var curTime1 = tmrs[i][3]
		var curTime2 = Number(cT);
		t = 0
		if(tmrs[i][2] == 0)
			t = 1
		else 
			t = 10
		var curTime3 = (t * 60) - Math.floor((curTime2 - curTime1) / 1000);
		if(curTime3 < 0)
			continue
		var m = Math.floor(curTime3 / 60);
		var s = Math.floor(curTime3 % 60);
		var curTime4 = "";    
		if(Number(m) < 10) {
			curTime4 = "0";
		}
		curTime4 = curTime4 + String(m) + ":";
		if(Number(s) < 10) {
			curTime4 = curTime4 + "0";
		}
		curTime4 = curTime4 + String(s);
		tmrs[i][0] = curTime4
	}
	if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && flag == 0) {
		requestsRed()
		flag = 1
	} 
	if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') === -1 && flag == 1)
		flag = 0
	
	if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
		if(document.getElementsByClassName('ant-btn ant-btn-primary')[0] !== undefined)
			document.getElementsByClassName('ant-btn ant-btn-primary')[0].onclick = function () {
				refCurTimer('10:00')
			}
		refreshTimer()
	if(document.getElementsByClassName('ant-btn ant-btn-icon-only')[3] !== undefined)
		document.getElementsByClassName('ant-btn ant-btn-icon-only')[3].style.display = 'none'

	}
	
	if(document.getElementById('switcher').innerHTML == "ВКЛ")
		if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1) {
			txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[0].childNodes[0].innerHTML
			if(txt != "Взять запрос (0)")
				audio.play()
		}
		
	if(window.location.href.indexOf('skyeng.autofaq.ai/tickets/assigned') !== -1 && document.getElementsByClassName('expert-user_details-list')[1] !== undefined) {
		vertical = user = ""
		for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "supportVertical" || document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "teacherVertical")
				vertical = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "userType")
				user = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
			
			btns = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0]

			name = btns.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-statusHTML")
				for (k = 0; k < idk; k++) {
					if(tmrs[k][1] == name) {
						if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText == "идет урок")
							tmrs[k][4] = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText
						else 
							tmrs[k][4] = ""
					}
				}
		}
		addInfoUser.innerHTML = vertical + " + " + user 
		if(document.getElementById('NS') != undefined) {
			if(vertical == "Math" || "math_flow") {
				//document.getElementById('math').style.backgroundColor = "green"
				document.getElementById('NS').style.backgroundColor = "#768d87"
			} else {
				document.getElementById('NS').style.backgroundColor = "green"
				//document.getElementById('math').style.backgroundColor = "#768d87"
			}
		}
		
		
		if(document.getElementById('NS') != undefined) {
			if(user == "student") {
				//document.getElementById('math').style.display = 
				document.getElementById('NS').style.display = "none"
			} else {
				//document.getElementById('math').style.display = 
				document.getElementById('NS').style.display = ""
			}
		}
		if(user == "teacher") {
			for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
				if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
					if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.indexOf("%") === -1) {
						id = Number.parseInt(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText)
						document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText += " % 11 = " + (id % 11)
					}
					break;
				}
			}
		}
		
		for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
				btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
				btn.appendChild(button2)
			}
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-studentId") {
				btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
				btn.appendChild(button3)
			}
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "nextClass-teacherId") {
				btn = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i]
				btn.appendChild(button4)
			}
		}
	}
	
	if(document.getElementsByClassName('ant-modal-content')[0] !== undefined) {
		document.getElementsByClassName('ant-modal-content')[0].childNodes[1].appendChild(maskBackHide)
	}

	
}
setInterval(startTimer, 1000)

function requestsRed () {
	document.getElementsByClassName('expert-sidebar-button')[0].childNodes[0].childNodes[0].addEventListener("DOMSubtreeModified", function() {
			txt = document.getElementsByClassName('expert-sidebar-button')[0].childNodes[0].childNodes[0].innerHTML
			if(txt != "Взять запрос (0)")
				document.getElementsByClassName('expert-sidebar-button')[0].childNodes[0].style.backgroundColor = "#F34723"
			else
				document.getElementsByClassName('expert-sidebar-button')[0].childNodes[0].style.backgroundColor = "white"
	});
}

setTimeout(function () {document.getElementById('testUsers').style.background = "#464451"}, 200)

const copyToClipboard1 = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

async function sendAnswerTemplate2(word, flag = 0) {
	txt = ""
	a = await fetch("https://skyeng.autofaq.ai/api/reason8/autofaq/top/batch", {
  "headers": {
    "accept": "*/*", 
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": adr,
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "{\"query\":\"" + word + "\",\"answersLimit\":25,\"autoFaqServiceIds\":[121388, 121384]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(a => b = a.json()).then(result => result.forEach(k => {
	if(k.title == word)
		txt = k.text
}))
	if(document.getElementById('msg1').innerHTML == "Доработать" && flag == 0) {
		document.getElementById('inp').value = txt
		template_flag = 1
		template_flag2 = 1
	} else {
		txt = txt.split("\"").join("\\\"")
		txt2 = txt.split('\n')
		txt3 = ""
		txt2.forEach(el => txt3 += "<p>" + el + "</p>\\n")
		txt = txt3
		txt = txt.split('<p></p>').join("<p><br></p>")
		txt = txt.substr(0, txt.length - 2)
		var values = await getInfo(0)
		refCurTimer("10:00")
		adr = values[0]; adr1 = values[1]; uid = values[2]
		fetch("https://skyeng.autofaq.ai/api/reason8/answers", {
			  "headers": {
				"accept": "*/*",
				"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
				"cache-control": "max-age=0",
				"content-type": "multipart/form-data; boundary=----WebKitFormBoundarymasjvc4O46a190zh",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin"
			  },
			  "referrer": adr,
			  "referrerPolicy": "no-referrer-when-downgrade",
			  "body": "------WebKitFormBoundarymasjvc4O46a190zh\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"" + txt + "\",\"suggestedAnswerDocId\":0}\r\n------WebKitFormBoundarymasjvc4O46a190zh--\r\n",
			  "method": "POST",
			  "mode": "cors",
			  "credentials": "include"
		});
		resetFlags()
		flagggg = 0
	}
}
function resetFlags() {
	template_flag = 0
	template_flag2 = 0
}
async function checkHistory(id) {
	var date = new Date()
	var date2 = new Date()
	date2.setTime(date - 8 * 60 * 60 * 1000)

	day = month = ""
	if(date.getMonth() < 9)
		month = "0" + (date.getMonth() + 1)
	else 
		month = (date.getMonth() + 1)
	if(date.getDate() < 10)
		day = "0" + date.getDate()
	else
		day = date.getDate()

	if(date.getHours() < 10)
		hours = '0' + date.getHours()
	else
		hours = date.getHours()
	if(date.getMinutes() < 10)
		minutes = '0' + date.getMinutes()
	else
		minutes = date.getMinutes()
	if(date.getSeconds() < 10)
		seconds = '0' + date.getSeconds()
	else
		seconds = date.getSeconds()

	secondDate = date.getFullYear() + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + ".000z"

	if(date2.getMonth() < 9)
		month2 = "0" + (date2.getMonth() + 1)
	else 
		month2 = (date2.getMonth() + 1)
	if(date2.getDate() < 10)
		day2 = "0" + date2.getDate()
	else
		day2 = date2.getDate()

	if(date2.getHours() < 10)
		hours2 = '0' + date2.getHours()
	else
		hours2 = date2.getHours()
	if(date2.getMinutes() < 10)
		minutes2 = '0' + date2.getMinutes()
	else
		minutes2 = date2.getMinutes()
	if(date2.getSeconds() < 10)
		seconds2 = '0' + date2.getSeconds()
	else
		seconds2 = date2.getSeconds()

	firstDate = date2.getFullYear() + "-" + month2 + "-" + day2 + "T" + hours2 + ":" + minutes2 + ":" + seconds2 + ".000z"
    count = -1
	serviceId = localStorage.getItem('serviceIdGlob')
	a = await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
	  "headers": {
		"accept": "*/*",
		"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
		"cache-control": "max-age=0",
		"content-type": "application/json",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin"
	  },
	  "referrer": "https://skyeng.autofaq.ai/logs",
	  "referrerPolicy": "strict-origin-when-cross-origin",
	  "body": "{\"serviceId\":\"" + serviceId + "\",\"mode\":\"Json\",\"channelUserIds\":[\"" + id + "\"],\"tsFrom\":\"" + firstDate + "\",\"tsTo\":\"" + secondDate + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
	  "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	}).then(a => b = a.json()).then(b => {count = b.items.length})
	return count
}
