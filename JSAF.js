
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
					<button id="hideMenu" style="margin-left: 13px">hide</button>
					<button id="setting" style="margin-left: 13px">S</button>
					<button id="page1" style="margin-left: 15px; width: 40px; backgroundColor: green; ">temp</button>
					<button id="page2" style="margin-left: 5px; width: 40px;">tags</button>
				</div>
				<div style="margin: 5px;" id="2str">
					<button id="helloAF">Привет</button>
					<button id="min">Минуту</button>
					<button id="internet">Инет</button>
					<button id="math">мат. ур</button>
					<button id="secLine">2Л</button>
					<button id="twoMin">Помогу</button>
				</div>
				<div style="margin: 5px;" id="3str">
					<button id="utoch">Доп впр</button>
					<button id="bag">Подождите</button>
					<button id="idU">ID У</button>
					<button id="screen">скрин</button>
					<button id="cacheTmp">кэш</button>
				</div>
				<div style="margin: 5px;" id="4str">
					<button id="NS">урок NS</button>
					<button id="perevod">Др отд</button>
					<button id="managers_sc">SC</button>
					<button id="managers_tc">TC</button>
					<button id="hardReset">HRes</button>
					<button id="TW">TW</button>
					<button id="anydesk">AD</button>
				</div>
				<div style="margin: 5px;" id="5str">
					<button id="engConv">англ</button>
					<button id="browser">ус+брауз</button>
					<button id="bag1">баг</button>
					<button id="version">vers</button>
					<button id="mobile">в моб</button>
					<button id="thank">пока</button>
					<button id="thanks">Спс</button>
				</div>
				
				
				<div style="margin: 5px; width: 300px; display: none;" id="tag_div1">
					<input id="tag_id" placeholder="user ID" autocomplete="off" type="text" style="text-align: center; width: 125px; color: black; margin: 0px 0 5px 10px">
					<input id="tag_phone" placeholder="phone" autocomplete="off" type="text" style="text-align: center; width: 125px; color: black;margin: 0px 0 5px 10px">
					
					<button id="necelevoi" style="margin: 2px">#Нецелевой</button>
					<button id="next_chat" style="margin: 2px">#Продолжение_чата</button>
					</br>
					<button id="svyaz1" style="margin: 2px">#Отсутствует_связь</button>
					<button id="svyaz2" style="margin: 2px">#Отсутствует_связь_ИС</button>
					<button id="svyaz3" style="margin: 2px">#Отсутствует_связь_отказ</button>
					<button id="svyaz4" style="margin: 2px">#Отсутствует_связь_без_ответа</button>
				</div>
			</span>
			
			<div style="margin: 5px; width: 300px; display: none;" id="tag_div2">
				<textarea id="tag_inp" placeholder="Тэг" autocomplete="off" type="text" style="text-align: center; width: 291px; height = 50px; color: black;margin: 2px; resize: none"></textarea>
				<button id="tag_send" style="margin: 0 0 0 110px">Отправить</button>
			</div>
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
					<button id="cacheSafari" style="margin: 2px">Кэш Сафари</button>
					<button id="UnapisalSam" style="margin: 2px">П -> У написал сам</button>
					<button id="nedozvonU">недозвон У</button>
					<button id="macBag" style="margin: 2px">Макобаг</button>
					<button id="hiddenHW" style="margin: 2px">Скрытое ДЗ</button>
					<button id="revision" style="margin: 2px">Ревизия</button>
					<button id="serverAF" style="margin: 2px">Серверные</button>
					<button id="mobApp">Переуст прил</button>
					<button id="RK1" style="margin: 2px">Общ инф РК</button>
					<button id="RK2" style="margin: 2px">Вход РК</button>
					<button id="privateMode" style="margin: 2px">Инкогнито</button>
					<button id="browser_clear" style="margin: 2px">Проверка браузера</button>
					<button id="predlozh" style="margin: 2px">Предложение</button>
					<button id="calltest">vcall-test</button>
					<button id="vcall_2" style="margin: 2px">vcall-2</button>
					<button id="VPN">VPN</button>
					<button id="micro">микро</button>
					<button id="addMacAny">Mac+AnyDesk</button>
			</div>
		</div>
		<div style="border: 2px double black; display: ; background-color: #464451" id="tags">
		</div>
		<div style="border: 2px double black; display: none; background-color: #464451" id="set_bar">
			<div style="margin: 5px; width: 300px">
				<input id="sound_adr" placeholder="Адрес звука" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
				<button id="sound_save">save</button>
				<button id="switcher">ВКЛ</button>
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

let button2 = document.createElement('div');
button2.id = 'userIdScript';
button2.innerHTML = "Info";

let button3 = document.createElement('div');
button3.id = 'nextStudentIdScript';
button3.innerHTML = "Info";

let button4 = document.createElement('div');
button4.id = 'nextTeacherIdScript';
button4.innerHTML = "Info";
	
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
btnAdd1.insertBefore(hashBut, btnAdd1.children[0])


let maskBack = document.createElement('div')
maskBack.id = "maskBack"
maskBack.innerHTML = "Вернуть"
maskBack.style.marginRight = "15px";
maskBack.style.display = "none";
btnAdd1.insertBefore(maskBack, btnAdd1.children[0])


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
	document.getElementById('1str').ondblclick = document.getElementById('2str').ondblclick = document.getElementById('3str').ondblclick = 
	document.getElementById('4str').ondblclick = document.getElementById('5str').ondblclick = function () {
		if(document.getElementById('tags').style.backgroundColor != 'green')
			if(document.getElementById('addTmp').style.display == 'none')
				document.getElementById('addTmp').style.display = '';
			else
				document.getElementById('addTmp').style.display = 'none';
	}
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
		
    document.getElementById('managers_sc').onclick = function () {
			sendAnswer("Вы написали в техподдержку школы. Если вопрос связан с учениками, вам в чат личного кабинета \"Managers (Student Care)\".")
	}
    document.getElementById('anydesk').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Пожалуйста, установите и запустите программу \"AnyDesk\" — она поможет мне увидеть ваш экран и быстрее решить вопрос.\n\
Загрузить её можно по ссылке: <a href=\"https://download.anydesk.com/AnyDesk.exe\" target=\"_blank\" rel=\"noopener\">для Windows</a> и <a href=\"https://download.anydesk.com/anydesk.dmg\" target=\"_blank\" rel=\"noopener\">для MacOS</a> \n\
После загрузки запустите её и отправьте мне адрес рабочего места (<a href=\"http://joxi.ru/D2PZ0kvHJqZgYr\" target=\"_blank\" rel=\"noopener\">скрин</a>), который она покажет, обратным сообщением в чат.\n\
При подключении сотрудника, пожалуйста, нажмите \"Принять\" (<a href=\"http://joxi.ru/bmoMnPzs96X3kA\" target=\"_blank\" rel=\"noopener\">скрин</a>).")
        } else {
			sendAnswer("Please use this link to download AnyDesk; this program will allow me to see your screen and fix the issue more efficiently: <a href=\"https://download.anydesk.com/AnyDesk.exe\" target=\"_blank\" rel=\"noopener\">link</a>\n\
Once it's downloaded, please launch it and send me your desktop number. It will be shown in the top left corner (<a href=\"http://joxi.ru/D2PZ0kvHJqZgYr\" target=\"_blank\" rel=\"noopener\">screenshot</a>)\n\
When our employee connects, please click \"Accept\" (<a href=\"http://joxi.ru/Q2K8GKYHwzddkA\" target=\"_blank\" rel=\"noopener\">screenshot</a>)")
		}
	}
    document.getElementById('version').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Уточните, пожалуйста, операционную систему вашего смартфона (Android или iOS). Также уточните, пожалуйста, версию вашего приложения. Её можно посмотреть в профиле <a href=\"http://joxi.ru/YmEoRweTMZZQDA\" target=\"_blank\" rel=\"noopener\">вот так&nbsp;</a>\n\
Я передам обращение в отдел мобильной поддержки для решения неполадки. Эта информация поможет решить вопрос быстрее")
        } 
	}
    document.getElementById('math').onclick = function () {
			sendAnswer("Пересоздайте, пожалуйста, урок, для этого вам нужно войти в Мой класс - Выбрать ученика - нажать на \"Начать сейчас\", после этого из вашей адресной строки скопировать ссылку и отправить её ученику. Этот урок НЕ закрывайте в правом верхнем углу, а выйдите просто на главную страницу в личный кабинет и от туда перейдите в \"Мой класс\".")
	}
		
    document.getElementById('thanks').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Спасибо за ожидание")
        } else {
			sendAnswer("Thanks for waiting")
        }
	}
    document.getElementById('cacheTmp').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswerTemplate("Очистка кэша браузера(шаблон ТП)", "кэш")
        } else {
			sendAnswer("Please clear your browser cache using instructions: http://en_faq.usedocs.com/article/14753 \n\
And then reboot the device and check again, if nothing changes, please write to us.")
        }
	}
    document.getElementById('mobile').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Спасибо за ответ. Я всё передал коллегам из поддержки мобильных приложений. Пожалуйста, ожидайте их ответа в течение суток, он придет на вашу почту.")
        }
	}
    document.getElementById('managers_tc').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Я передал обращение в отдел заботы о преподавателях. С вами свяжется наш специалист по почте и поможет с решением этого вопроса. Пожалуйста, ожидайте")
        }
	}
    document.getElementById('addMacAny').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("1) Откройте Системные настройки в меню Apple.\n\
2) Зайдите в Защита и безопасность.\n\
3) Перейдите на вкладку Конфиденциальность.\n\
4) В колонке слева выберите \"Универсальный доступ\".\n\
5) Поставьте галочки рядом с программой Anydesk")
        }
	}
	
			
    document.getElementById('languageAF').onclick = function () {
        if(this.innerHTML == "Русский") {
            this.innerHTML = "Английский";
			document.getElementById('TW').style.display = 'none'
			document.getElementById('cacheSafari').style.display = 'none'
			document.getElementById('math').style.display = 'none'
			document.getElementById('managers_sc').style.display = 'none'
			document.getElementById('macBag').style.display = 'none'
			document.getElementById('hiddenHW').style.display = 'none'
			document.getElementById('revision').style.display = 'none'
			document.getElementById('mobApp').style.display = 'none'
			document.getElementById('RK1').style.display = 'none'
			document.getElementById('RK2').style.display = 'none'
			document.getElementById('predlozh').style.display = 'none'
			document.getElementById('vcall_2').style.display = 'none'
			document.getElementById('calltest').style.display = 'none'
			document.getElementById('internet').style.display = 'none'
			document.getElementById('mobile').style.display = 'none'
			document.getElementById('version').style.display = 'none'
			document.getElementById('hardReset').style.display = 'none'
			document.getElementById('managers_tc').style.display = 'none'
			document.getElementById('addMacAny').style.display = 'none'
			document.getElementById('AF_helper').style.background = "#EBC7DF"
        } else {
            this.innerHTML = "Русский";
			document.getElementById('TW').style.display = ''
			document.getElementById('managers_sc').style.display = ''
			document.getElementById('cacheSafari').style.display = ''
			document.getElementById('math').style.display = ''
			document.getElementById('macBag').style.display = ''
			document.getElementById('hiddenHW').style.display = ''
			document.getElementById('revision').style.display = ''
			document.getElementById('mobApp').style.display = ''
			document.getElementById('RK1').style.display = ''
			document.getElementById('RK2').style.display = ''
			document.getElementById('predlozh').style.display = ''
			document.getElementById('vcall_2').style.display = ''
			document.getElementById('calltest').style.display = ''
			document.getElementById('internet').style.display = ''
			document.getElementById('mobile').style.display = ''
			document.getElementById('version').style.display = ''
			document.getElementById('managers_tc').style.display = ''
			document.getElementById('hardReset').style.display = ''
			document.getElementById('addMacAny').style.display = ''
			document.getElementById('AF_helper').style.background = "#464451"
        }
	}
    document.getElementById('twoMin').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Сейчас я вам помогу, подождите, пожалуйста.")
        else
			sendAnswer("I will help you now, please wait.")
	}
	
    document.getElementById('cacheSafari').onclick = function () {
		sendAnswer("Давайте попробуем очистить кэш Safari:\n\
1. Зайдите в Настройки->Safari.\n\
2. Найдите пункт \"Очистить историю и данные сайтов\". Жмите по этой кнопке.\n\
3. В новом окне прочитайте сообщение и нажмите \"Очистить\"")
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
	
    document.getElementById('VPN').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Пожалуйста, установите VPN-расширение для браузера <a href=\"https://skyeng.ru/go/brvpn\" target=\"_blank\" rel=\"noopener\">по инструкции</a>\n\
Затем запустите его и обновите страницу.")
		} else {
			sendAnswer("Please install browser VPN extension using <a href=\"http://en_faq.usedocs.com/article/14752\" target=\"_blank\" rel=\"noopener\">this instruction</a>\n\
Then run it and refresh the page.")
		}
	}
	
	
    document.getElementById('hardReset').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Пожалуйста, выполните жесткую перезагрузку и очистку кеша страницы в браузере. Для этого:\n\
1. Нажмите правой кнопкой мыши на странице и выберите в списке \"Просмотреть код\" (<a href=\"http://joxi.ru/n2YoKw7Tej3kBr\" target=\"_blank\" rel=\"noopener\">скриншот</a>)\n\
2. Нажмите правой кнопкой мыши на значок обновления страницы (<a href=\"http://joxi.ru/Vm61qNeTvxG3Nr\" target=\"_blank\" rel=\"noopener\">скриншот</a>)\n\
3. Выберите пункт \"Очистка кэша и жесткая перезагрузка\", как показано <a href=\"http://joxi.ru/eAOMNpaTk4LoJm\" target=\"_blank\" rel=\"noopener\">на скриншоте</a>\n\
Напишите, удастся ли этим способом решить неполадку.")
		}
	}
	
	
	
    document.getElementById('thank').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Благодарю вас за обращение. Всего доброго!")
		} else {
			sendAnswer("Thank you for contacting us. All the best!")
		}
	}
    document.getElementById('micro').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Проверьте, пожалуйста, настройки микрофона следуя <a href=\"http://faq.usedocs.com/article/7648\" target=\"_blank\" rel=\"noopener\">этой инструкции</a> \n\
Затем, пожалуйста, напишите нам о результате")
		} else {
			sendAnswer("Please check your microphone settings using <a href=\"http://en_faq.usedocs.com/article/14747\" target=\"_blank\" rel=\"noopener\">this instruction</a> \n\
Then please write to us about the result.")
		}
	}
    document.getElementById('RK1').onclick = function () {
		sendAnswerTemplate("Информация о разговорных клубов", "РК")
	}
    document.getElementById('RK2').onclick = function () {
		sendAnswerTemplate("Как войти в РК (шаблон)", "РК")
	}
	
    document.getElementById('vcall_2').onclick = function () {
		sendAnswer("Также на этой странице есть кнопка \"Проверить динамики\", нажав на которую вы должны услышать звук")
	}
    document.getElementById('browser_clear').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Попробуйте, пожалуйста, воспользоваться следующими инструкциями, а затем проверить ещё раз\n\
1. <a href=\"http://faq.usedocs.com/article/7652\" target=\"_blank\" rel=\"noopener\">проверить обновления браузера&nbsp;</a> \n\
2. <a href=\"http://faq.usedocs.com/article/7656\" target=\"_blank\" rel=\"noopener\">удалить Cookies сайта Skyeng&nbsp;</a> \n\
3. <a href=\"http://faq.usedocs.com/article/7654\" target=\"_blank\" rel=\"noopener\">очистить кэш&nbsp;</a> \n\
4. <a href=\"http://faq.usedocs.com/article/7655\" target=\"_blank\" rel=\"noopener\">очистить браузер от лишних расширений&nbsp;</a>")
		else 
			sendAnswer("Please use instructions and then check again \n\
1. <a href=\"http://en_faq.usedocs.com/article/14744\" target=\"_blank\" rel=\"noopener\">check browser for updates&nbsp;</a> \n\
2. <a href=\"http://en_faq.usedocs.com/article/14751\" target=\"_blank\" rel=\"noopener\">delete Skyeng cookies&nbsp;</a> \n\
3. <a href=\"http://en_faq.usedocs.com/article/14753\" target=\"_blank\" rel=\"noopener\">clean browser's cache&nbsp;</a> \n\
4. <a href=\"http://en_faq.usedocs.com/article/14749\" target=\"_blank\" rel=\"noopener\">clean browser from addons&nbsp;</a>")
	
	}
    document.getElementById('privateMode').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") 
			sendAnswer("Пожалуйста, откройте новую вкладку в режиме инкогнито сочетанием клавиш Ctrl + Shift + N. Либо через специальное меню как <a href=\"https://skyeng.ru/go/screen6\" target=\"_blank\" rel=\"noopener\">на скриншоте&nbsp;</a> \n\
Для Макбука: Нажмите ⌘ + Shift + N. \n\
И проверьте как работает платформа в нем.\n\
Затем, пожалуйста, напишите нам о результате")
		else 
			sendAnswer('Please open a new tab in incognito mode by pressing Ctrl + Shift + N. \n\
For MacBook: Press ⌘ + Shift + N. \n\
And check how the platform works in it. \n\
Then please write to us about the result.')
	}
    document.getElementById('predlozh').onclick = function () {
		sendAnswerTemplate("Платформа: Пожелания/Отзыв по платформе и личному кабинету", "предложение")
	}


	
	
    document.getElementById('UnapisalSam').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Пожалуйста, попросите ученика самостоятельно написать нам в чат, чтобы мы получили информацию о нем и его системе. Это поможет нам оперативно связаться с учеником и получить необходимую информацию. Спасибо за понимание!")
		} else {
			sendAnswer("Please ask the student to write us a chat on their own so that we receive information about him and his system. This will help us quickly contact the student and get the necessary information. Thank you for understanding!")
		}
	}
    document.getElementById('nedozvonU').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский") {
			sendAnswer("Напишите, пожалуйста, повторно в этот чат позже или попросите ученика написать в чат Support самостоятельно в удобное для него время и мы свяжемся с ним")
		} else {
			sendAnswer("Please write again to this chat later or ask a student to write Support chat on their own at a convenient time for him and we will contact him")
		}
	}
	
	
    document.getElementById('hiddenHW').onclick = function () {
		sendAnswer("Ваш преподаватель забыл открыть для вас скрытый раздел, выполнение которого влияет на подсчет балла и завершение домашнего задания.\n\
Мы открыли его для вас, теперь после выполнения вы сможете завершить это домашнее задание.")
	}
	
	
    document.getElementById('serverAF').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswerTemplate("Серверные проблемы (шаблон ТП)" , "Серверные")
		else
			sendAnswer("Please forgive me for technical problems. Our developers are already in the know and are working on a solution. Everything will work as usual soon.")
		sendComment(document.getElementById('inp').value)
	}
    document.getElementById('macBag').onclick = function () {
		sendAnswerTemplate("Макобаг (ТП)", "мак")
	}
    document.getElementById('revision').onclick = function () {
		sendAnswerTemplate("Старая ревизия (шаблон ТП)", "ревизия")
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
		if(document.getElementById('msg').innerHTML == "Чат")
			sendAnswer(document.getElementById('inp').value, 0)
		else 
			sendComment(document.getElementById('inp').value)
		document.getElementById('inp').value = ""
	}
	
	
    document.getElementById('helloAF').onclick = async function () {
		var values = await getInfo()
		adr = values[0]; adr1 = values[1]; uid = values[2]
		a = document.getElementsByClassName('expert-user_info_panel')[0].firstChild.firstChild.innerText
		a = a.split(' ')
		const cyrillicPattern = /^[\u0400-\u04FF]+$/;
		
		if(document.getElementById('languageAF').innerHTML == "Русский")
			if(cyrillicPattern.test(a[0]))
				txt = "Здравствуйте, " + a[0] + "!"
			else
				txt = "Здравствуйте!"
		else
			txt = "Hello!"
		
		if(document.getElementById('msg1').innerHTML == "Доработать")
			document.getElementById('inp').value = txt
		else 
			if(values[3])
		if(document.getElementById('languageAF').innerHTML == "Русский") {
				refCurTimer('10:00')
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
					  "body": "------WebKitFormBoundarymasjvc4O46a190zh\r\nContent-Disposition: form-data; name=\"payload\"\r\n\r\n{\"sessionId\":\"" + uid + "\",\"conversationId\":\"" + adr1 + "\",\"text\":\"Здравствуйте!\",\"suggestedAnswerDocId\":0}\r\n------WebKitFormBoundarymasjvc4O46a190zh--\r\n",
					  "method": "POST",
					  "mode": "cors",
					  "credentials": "include"
				});
		} else 
			sendAnswer('Hello!')
	}
    document.getElementById('utoch').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Уточните, пожалуйста, у вас остались дополнительные вопросы?")
		else
			sendAnswer("Do you have any additional questions?")
	}
    document.getElementById('calltest').onclick = function () {
		sendAnswerTemplate("Тест видеосвязи (ТП)", "тест видеосвязи")
	}
    document.getElementById('perevod').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Соединяю со специалистом, который вам поможет. Дождитесь, пожалуйста.")
		else
			sendAnswer('I am connecting you with a specialist who will help you. Wait please')
	}
    document.getElementById('browser').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Уточните, пожалуйста, какое устройство и какой браузер используете")
		else 
			sendAnswer("Please specify which device and browser you are using.")
	}
    document.getElementById('bag').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Подождите, пожалуйста, сейчас я проверю и отвечу вам")
		else 
			sendAnswer("Wait please. Now I will check and answer you.")
	}
	
    document.getElementById('bag1').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Спасибо за ожидание. Я всё проверил, есть неполадка на нашей стороне. Передал подробности в отдел разработки для дальнейшего решения вопроса")
		else 
			sendAnswer("Thanks for waiting. I've checked the issue and found out that it is caused by the platform malfunction. All the details have been forwarded to our development team for further solution.")
	}
    document.getElementById('secLine').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Передал обращение старшему специалисту, пожалуйста, ожидайте")
		else 
			sendAnswer("Reffered the appeal to a senior specialist, please wait")
	}
    document.getElementById('idU').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswerTemplate("Уточнение ID ученика (шаблон ТП)", "id")
		else 
			sendAnswer("Please specify student ID")
	}
    document.getElementById('TW').onclick = function () {
		sendAnswer("Пожалуйста, установите и запустите программу <a href=\"https://www.898.tv/skysupp\" target=\"_blank\" rel=\"noopener\">TeamViewer</a>\n\
Отправьте в этот чат ID и пароль, которые она покажет &mdash; это поможет мне увидеть ваш экран и разобраться с проблемой.")
	}
    document.getElementById('internet').onclick = function () {
		sendAnswer("Проверьте, пожалуйста, скорость вашего интернета по этой <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSegaAfaOTa1BepjseqAdHIINrRH5GQVVEn-LOtXhPVOjRpOQw/viewform\" target=\"_blank\" rel=\"noopener\">инструкции</a>. После отправьте сюда ссылку с результатами тестирования скорости интернета, это поможет нам в решении.")
	}
    document.getElementById('engConv').onclick = function () {
		sendAnswerTemplate("Общение на англ (шаблон)", "общение на англ")
	}
    document.getElementById('min').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Пару минут, пожалуйста")
		else 
			sendAnswer("A few minutes please")
	}
	
    document.getElementById('screen').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Отправьте, пожалуйста, ссылку на скриншот вашей неполадки и мы поможем вам. Для быстрого создания скриншота вы можете воспользоваться <a href=\"http://skyeng.ru/go/prnt\" target=\"_blank\" rel=\"noopener\">этим сервисом</a>&nbsp;")
		else 
			sendAnswer("Please send a link to a screenshot of your problem and we will help you. To quickly create a screenshot, you can use <a href=\"http://skyeng.ru/go/prnt\" target=\"_blank\" rel=\"noopener\">this service</a>&nbsp")
		
	}
	
    document.getElementById('mobApp').onclick = function () {
		sendAnswer("Чтобы исправить неполадку, пожалуйста, воспользуйтесь следующей инструкцией:\n\
1.Закрыть все приложения на устройстве.\n\
2.Удалить приложение Skyeng.\n\
3.Установить приложение Skyeng.\n\
4.Не открывать приложение.\n\
5.Перезапустить устройство(выключение/включение).\n\
После этого, пожалуйста, проверьте приложение ещё раз")
	}
    document.getElementById('NS').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
		txt = "Пожалуйста, воспользуйтесь инструкцией, а затем напишите, удалось ли вам наладить связь\n\
1. Завершаете урок через Finish\n\
2. Создаете урок через New Student <a href=\"http://joxi.ru/v298jgeTzKyKYm\" target=\"_blank\" rel=\"noopener\">вот так&nbsp;</a> \n\
3. Копируете ссылку и отправляете в чат ученику, заранее предупредив его об этом, так как кнопка войти в класс уже не будет функционировать."
		else 
			txt = "Use this instruction, and then write if you managed to establish a connection \n\
1. End the lesson by clicking Finish \n\
2. Create a lesson through New Student <a href=\"http://joxi.ru/v298jgeTzKyKYm\" target=\"_blank\" rel=\"noopener\">like this&nbsp;</a> \n\
3. Copy the link and send the student to the chat, warning him about this in advance, since the button to enter the class will no longer function."
		sendAnswer(txt)
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
	
	document.getElementById('page1').style.backgroundColor = 'green'
}

move_again_AF();

function taggg() {
    document.getElementById('necelevoi').onclick = function () {
		taggg1("#Нецелевой")
	}
    document.getElementById('next_chat').onclick = function () {
		taggg1("#Продолжение_чата")
	}
    document.getElementById('svyaz1').onclick = function () {
		taggg1("#Отсутствует_связь")
	}
    document.getElementById('svyaz2').onclick = function () {
		taggg1("#Отсутствует_связь_ИС", 1)
	}
    document.getElementById('svyaz3').onclick = function () {
		taggg1("#Отсутствует_связь_отказ", 1)
	}
    document.getElementById('svyaz4').onclick = function () {
		taggg1("#Отсутствует_связь_без_ответа", 1)
	}
	
    document.getElementById('tag_send').onclick = function () {
		sendComment(document.getElementById('tag_inp').value)
		document.getElementById('tag_inp').value = ""
		document.getElementById('tag_id').value = ""
		document.getElementById('tag_phone').value = ""
	}
	
    document.getElementById('page1').onclick = function () {
		document.getElementById('page1').style.backgroundColor = "green"
		document.getElementById('page2').style.backgroundColor = "#768d87"
		
		document.getElementById('tag_div1').style.display = 'none'
		document.getElementById('tag_div2').style.display = 'none'
		
		document.getElementById('2str').style.display = ''
		document.getElementById('3str').style.display = ''
		document.getElementById('4str').style.display = ''
		document.getElementById('5str').style.display = ''
		document.getElementById('6str').style.display = ''
		document.getElementById('7str').style.display = ''
	}
    document.getElementById('page2').onclick = function () {
		document.getElementById('page1').style.backgroundColor = "#768d87"
		document.getElementById('page2').style.backgroundColor = "green"
		
		document.getElementById('tag_div1').style.display = ''
		document.getElementById('tag_div2').style.display = ''
		
		document.getElementById('2str').style.display = 'none'
		document.getElementById('3str').style.display = 'none'
		document.getElementById('4str').style.display = 'none'
		document.getElementById('5str').style.display = 'none'
		document.getElementById('6str').style.display = 'none'
		document.getElementById('7str').style.display = 'none'
	}
	
	
	if (localStorage.getItem('msg') != null) {
		document.getElementById('msg').innerHTML = localStorage.getItem('msg')
	}
	if (localStorage.getItem('msg1') != null) {
		document.getElementById('msg1').innerHTML = localStorage.getItem('msg1')
	}
}
taggg();

function taggg1(txt, phone = "0") {
	if(phone == 1)
		if(document.getElementById('tag_phone').value == "")
			phone = document.getElementById('tag_phone').placeholder
		else
			phone = document.getElementById('tag_phone').value
	else
		phone = ""
	
	if(document.getElementById('tag_id').value == "")
		id = document.getElementById('tag_id').placeholder
	else
		id = document.getElementById('tag_id').value
		
	txt = txt + " " + id + " " + phone
	
	document.getElementById('tag_inp').value = txt
}

var bool = 0;	

async function sendAnswerTemplate(template, word, time = "10:00") {
	//addTimer()
	var values = await getInfo()
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
  "body": "{\"query\":\"" + word + "\",\"answersLimit\":10,\"autoFaqServiceIds\":[119636,119638,119646,119649,118980,119841,119843,119844,120181,120969,121286,121299,121300,121305]}",
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
tmpText = tmpText.split("\"").join("\\\"")
tmpText = tmpText.split("\n").join("\\n")
title = b.title
title = title.split("\"").join("\\\"")
accuracy = b.accuracy
}});}).then(k => {
		if(document.getElementById('msg1').innerHTML == "Доработать")
			document.getElementById('inp').value = tmpText
		else 
			if(!values[3])
				console.log('Не знаю id У')
			else if(tmpText == "")
				console.log('Шаблон не найден')
			else {
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
		
		if(document.getElementById('msg1').innerHTML == "Доработать" && flag)
			document.getElementById('inp').value = txt
		else 
			if(!values[3])
				console.log('Не знаю id У')
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
			}
}
async function getInfo(flag1 = 1) {
		adr = document.location.href
		adr1 = document.location.pathname
		adr1 = adr1.split('/')
		adr1 = adr1[3]
		sessionId = ""
		flag = false
		if(document.getElementById('msg1').innerHTML != "Доработать" || flag1 == 0) {
			flag = true
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
	}).then(a => b = a.json()).then(b => sessionId = b.sessionId).then(b => {if(sessionId == "")
		flag = false});
		}
		return [adr, adr1, sessionId, flag]
}

async function sendComment(txt){ 
		var values = await getInfo(0)
		adr = values[0]; adr1 = values[1]; uid = values[2]
		txt2 = txt.split('\n').join('\\n')
		txt2 = txt2.split("\"").join("\\\"")
		
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
		tm.childNodes[0].appendChild(serv)
		tm.childNodes[0].childNodes[2].innerHTML = "10:00"
		let d = new Date()
		tmrs[idk] = ["10:00", tm.childNodes[1].childNodes[0].innerText, 1, number(d)]
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
			tmrs[idk++] = ["10:00", nm, 1, Number(d)]

		k++
	}	
	
	k = 0
	btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0]
	while (true) {
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k] == undefined)
			break;
		if(btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].childNodes[2] == undefined)
			btns.childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[0].childNodes[0].childNodes[0].appendChild(document.createElement('div'))
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


function startTimer() {
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
		}
		addInfoUser.innerHTML = vertical + " + " + user 
		if(vertical == "Math") {
			document.getElementById('math').style.backgroundColor = "green"
			document.getElementById('NS').style.backgroundColor = "#768d87"
		} else {
			document.getElementById('NS').style.backgroundColor = "green"
			document.getElementById('math').style.backgroundColor = "#768d87"
		}
		
		
		if(user == "student") {
			document.getElementById('math').style.display = document.getElementById('NS').style.display = "none"
		} else {
			document.getElementById('math').style.display = document.getElementById('NS').style.display = ""
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
	
	if(document.getElementsByClassName('expert-user_details-list')[1] != undefined)
		for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
			if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id")
				document.getElementById('tag_id').placeholder = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].childNodes[1].innerText.split(' ')[0]
		}
	
	if(document.getElementsByClassName('expert-user_details-list')[0] != undefined)
		document.getElementById('tag_phone').placeholder = document.getElementsByClassName('expert-user_details-list')[0].childNodes[1].childNodes[1].innerText
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
