var win_html = `<div style="display: flex;">
    <span style="cursor: -webkit-grab;">
        <div id="chats">
            <div style="margin: 5px;">
                <button id="language" style="width:100px">Русский</button>
                <button id="settings" style="margin: 0 0 0 5px">s</button>
                <button id="clean" style="margin: 0 0 0 5px">Clean</button>
            </div>
            <div style="margin: 15px 5px 5px 5px;">
                <button id="Hello">Приветствие</button>    
                <button style="margin: 0 5px 0 5px;" id="la">long ans</button>
            </div>
            <div style="margin: 5px;">
                <button id="lesson_NS">Урок NS</button>
                <button style="margin: 0 5px 0 5px;" id="call-test">Тест связи</button>
            </div>
            <div style="margin: 5px;">
                <input id="ticket_number" placeholder="Тикет" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
                <button id="ticket_str">строка</button>
            </div>
            <div style="margin: 5px;">
                <button id="tc">tc + РГ</button>
                <button style="margin: 0 0 0 5px;"id="ph">Телефония</button>
            </div>
            <div style="margin: 5px;">
                <button id="duty_why" style="width:100px; text-align:center;">Телефония</button>
                <button id="tag_duty">зовём 2Л</button>
            </div>
        </div>
    </span>
	<span style="border: 2px double black; display: none" id="set">
        <div style="margin: 5px;">
            <input id="name1_in" placeholder="Имя" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
		</div>
        <div style="margin: 5px;">
            <input id="name2_in" placeholder="Name" autocomplete="off" type="text" style="text-align: center; width: 100px; color: black;">
		</div>
		<div style="margin: 5px;">
		    <center><button id="name_save">save</button></center>
		</div>
		<div>
			<center><p style="color: #f00; font-size: 110%; font-weight: bold; display:none" id="name_error">Введите имя!!</p></center>
		</div>
	</span>
</div>`;


var win_html2 =  
    `<div style="display: flex;">
        <span style="cursor: -webkit-grab;">
            <div id="timer" style="margin:5px;">
                <center><span id="my_timer" style="color: #f00; font-size: 150%; font-weight: bold;">00:00</span></center>
            </div> 
        </span>
    </div>`;
//Добавляем стили
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
}`
mstl.innerHTML = style;

//Сохранение позиции окна
if (localStorage.getItem('winTop1') == null) {
    localStorage.setItem('winTop1', '120');
    localStorage.setItem('winLeft1', '295');
}
if (localStorage.getItem('winTop2') == null) {
    localStorage.setItem('winTop2', '120');
    localStorage.setItem('winLeft2', '295');
}
if (localStorage.getItem('time') == null) {
    var curTime = new Date();
    localStorage.setItem('time', Number(curTime));
}

// Создаем само окно
let wint = document.createElement('div');
document.body.append(wint);
wint.style = 'min-height: 68px; max-height: 750px; min-width: 76px; max-width: 370px; background: wheat; top: ' + localStorage.getItem('winTop1') + 'px; left: ' + localStorage.getItem('winLeft1') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wint.setAttribute('id' ,'main_es_chat_win');
wint.innerHTML = win_html;

// Создаем 2 окно
let wint2 = document.createElement('div');
document.body.append(wint2);
wint2.style = 'min-height: 25px; max-height: 750px; min-width: 65px; max-width: 370px; background: wheat; top: ' + localStorage.getItem('winTop2') + 'px; left: ' + localStorage.getItem('winLeft2') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
wint2.setAttribute('id' ,'main_timer');
wint2.innerHTML = win_html2;    

function move_again() {
    
    let wint = document.getElementById('main_es_chat_win');

    //Перемещение окна
    var listener = function(e , a) {
        wint.style.left = Number(e.clientX - myX) + "px";
        wint.style.top = Number(e.clientY - myY) + "px";
        localStorage.setItem('winTop1', String(Number(e.clientY - myY)));
        localStorage.setItem('winLeft1', String(Number(e.clientX - myX)));
    };
    wint.firstElementChild.firstElementChild.onmousedown = function (a) {
        window.myX = a.layerX; 
        window.myY = a.layerY; 
        document.addEventListener('mousemove', listener);
    }
    wint.onmouseup = function () {document.removeEventListener('mousemove', listener);}
    
    
    var listener2 = function(e , a) {
        wint2.style.left = Number(e.clientX - myX2) + "px";
        wint2.style.top = Number(e.clientY - myY2) + "px";
        localStorage.setItem('winTop2', String(Number(e.clientY - myY2)));
        localStorage.setItem('winLeft2', String(Number(e.clientX - myX2)));
    };
    wint2.firstElementChild.firstElementChild.onmousedown = function (a) {
        window.myX2 = a.layerX; 
        window.myY2 = a.layerY; 
        document.addEventListener('mousemove', listener2);
    }
    wint2.onmouseup = function () {document.removeEventListener('mousemove', listener2);}
    
    
    document.getElementById('language').onclick = function () {
        if(this.innerHTML == "Русский") {
            this.innerHTML = "Английский";
        } else {
            this.innerHTML = "Русский";
        }
    };  
    document.getElementById('name_save').onclick = function () {
        let name1 = document.getElementById('name1_in').value;
        localStorage.setItem('name1', name1);
        let name2 = document.getElementById('name2_in').value;
        localStorage.setItem('name2', name2);
        document.getElementById('set').style.display = "none";
		document.getElementById('name_error').style.display = "none";
    }
    document.getElementById('settings').onclick = function () {
        if(document.getElementById('set').style.display == "none") {
            document.getElementById('set').style.display = "block";
        } else {
            document.getElementById('set').style.display = "none";
        }
    }
    document.getElementById('Hello').onclick = function () {
		if(localStorage.getItem('name1') == null || localStorage.getItem('name2') == null ||
		localStorage.getItem('name1') == "" || localStorage.getItem('name2') == "") {
            document.getElementById('set').style.display = "block";
			document.getElementById('name_error').style.display = "block";
			return;
		}
        if (document.getElementById('language').innerHTML == 'Русский') {
            copyToComment("Здравствуйте, " + localStorage.getItem('name1') + " на связи!");
        } else {
            copyToComment("Hello, " + localStorage.getItem('name2') + " in touch!");
        }
    };    
    document.getElementById('lesson_NS').onclick = function () {
        if (document.getElementById('language').innerHTML == 'Русский') {
            copyToComment("Воспользуйтесь данной инструкцией, а затем напишите, удалось ли вам наладить связь \n\
\n\
1. Завершаете урок через Finish\n\
2. Создаете урок через New Student - http://joxi.ru/v298jgeTzKyKYm  \n\
3. Копируете ссылку и отправляете в чат ученику, заранее предупредив его об этом, так как кнопка войти в класс уже не будет функционировать.\
");
        } else {
            copyToComment("Use this instruction, and then write if you managed to establish a connection \n \
\n \
1. End the lesson by clicking Finish \n \
2. Create a lesson through New Student - http://joxi.ru/v298jgeTzKyKYm \n \
3. Copy the link and send the student to the chat, warning him about this in advance, since the button to enter the class will no longer function.");
        }
    }; 
    document.getElementById('ticket_str').onclick = function () {
        let tckt = document.getElementById('ticket_number').value;
        while(tckt[0] < '0' || tckt[0] > '9')
            tckt = tckt.slice(1);
        var l = tckt.length - 1;
        while(tckt[l] < '0' || tckt[l] > '9') {
            tckt = tckt.slice(0, -1);
            l = l - 1;   
        }
        if (document.getElementById('language').innerHTML == 'Русский') {
            copyToComment('Работа будет проводится в обращении #' + tckt + ", информация о проделанной работе будет дублироваться вам на корпоративную почту.");
        } else {
            copyToComment('I am creating a ticket to resolve the issue. \nTicket number is ' + tckt + '. ' + "All information about the work done will be duplicated to you by mail.");
        }
    };
    document.getElementById('tc').onclick = function () {
        if (document.getElementById('language').innerHTML == 'Русский') {
            copyToComment("Обратитесь с этим вопросом в teachers care или к вашему руководителю.");
        } else {
            copyToComment("Contact teachers care or your group manager with this question.");
        }
    }; 
    document.getElementById('la').onclick = function () {
        if (document.getElementById('language').innerHTML == 'Русский') {
            copyToComment("Извините за долгий ответ.");
        } else {
            copyToComment("I apologize for not responding for a long time.");
        }
    }; 
    document.getElementById('call-test').onclick = function () {
        if (document.getElementById('language').innerHTML == 'Русский') {
            copyToComment("Перейдите, пожалуйста, сейчас в тест видеосвязи и скажите, слышите ли вы себя на этой вкладке: http://joxi.ru/LmGoXwQTJN08dm");
        } else {
            copyToComment("Please go to the video call test now and tell me if you hear yourself on this tab: http://joxi.ru/KAgLvw9TXGdZjr");
        }
    }; 
    document.getElementById('ph').onclick = function () {
        copyToComment("Воспользуйтесь этой инструкцией: http://bvl.usedocs.com/collection/1686");
    }; 
    document.getElementById('tag_duty').onclick = function () {
        let d = document.getElementById('duty_why').innerHTML;
        copyToClipboard("@2duty \n" + window.location.href + "\n" + d);
        copyToComment("Зову коллег");
		document.body.removeChild(d);
    };
    document.getElementById('duty_why').onclick = function () {
        if(this.innerHTML == "Телефония") {
            this.innerHTML = "БД";
        } else {
            this.innerHTML = "Телефония";
        }
    }
    document.getElementById('clean').onclick = function () {
        copyToComment("");
        document.getElementById('ticket_number').value = "";
    }; 
    if (window.location.href.indexOf('chat') === -1) {
        document.getElementById('main_es_chat_win').style.display='none';
    } else {
		create_high_btn()
        var buttons = document.getElementsByClassName("btn_add_reply");
		var bool = 0;
		window.onkeydown = function(e) {
				if(e.key == 'Control') {
						bool = 1;
				}
				if(e.key == 'Enter' && bool == 1 && buttons[0].classList.contains('active')) {
					var curTime = new Date();
					localStorage.setItem('time', Number(curTime));
					if(!document.getElementsByClassName('chat_msg_win_box_wrap')[0].classList.contains('bg-add-note')) {
						document.getElementById("ticket_number").value = "";
					}
				}
			}
		window.onkeyup = function(e) {
			if(e.key == 'Control') {
				bool = 0;
			}
		}
        buttons[0].onclick = function() {
            if(buttons[0].classList.contains('active')) {
                var curTime = new Date();
                localStorage.setItem('time', Number(curTime));
				if(!document.getElementsByClassName('chat_msg_win_box_wrap')[0].classList.contains('bg-add-note')) {
					document.getElementById("ticket_number").value = "";
				}
            }
        }
        var closebt = document.getElementById('chat_close').childNodes[0];
        closebt.onclick = function() {
            var curTime = new Date();
            localStorage.setItem('time', Number(curTime));
        }
    }
    if(window.location.href.indexOf('record') !== -1) {
        var chosen = document.getElementById('case_staff_id_chosen').childNodes[0].childNodes[0].textContent;
        var button_update = document.getElementsByClassName("alpha3_mod_wrap");
        button_update[0].onclick = function() {
            var curTime = new Date();
            localStorage.setItem('time', Number(curTime));
        }  		
        if(window.location.href.indexOf('parent') === -1) {
			button_update[1].onclick = function() {
				var curTime = new Date();
				localStorage.setItem('time', Number(curTime));
			}
			var note_save = document.getElementsByClassName("_save_note_button");
			note_save[0].onclick = function() {
				if(!note_save[0].classList.contains('disabled')) {
					var curTime = new Date();
					localStorage.setItem('time', Number(curTime));
				}
			}
		}
        var lbl_staff = document.getElementsByClassName("set_staff");
        lbl_staff[0].onclick = function() {
            var chosen2 = document.getElementById('case_staff_id_chosen').childNodes[0].childNodes[0].textContent;
            if(chosen != chosen2) {
                var curTime = new Date();
                localStorage.setItem('time', Number(curTime));
            }
        }
        
        var newbuttons = document.getElementsByClassName('fl-right req-status-action')[0];
		
		
        let tck_dbl = document.createElement('span');
        tck_dbl.innerHTML = "Дубль";
        tck_dbl.classList.add('inl');
        tck_dbl.style.marginRight = "15px";
        tck_dbl.onclick = function() {
			let text = "Дубль";
			localStorage.setItem('label', text);
			all_labels_list.forEach( function (a) {
				if (a.text == text) {AddLabels(a.id.slice(2))}
			})
            	document.getElementsByClassName('case_update_button')[0].removeAttribute('disabled');
			
           	document.getElementsByClassName("req-status-waiting")[0].className = "tab-title req-status-waiting inl";
            	document.getElementsByClassName("req-status-opened")[0].className = "tab-title req-status-opened inl";
            	document.getElementsByClassName("req-status-closed")[0].className = "tab-title req-status-closed inl active-item";
			if(update_form.field_2483.parentNode.className == "icheckbox_square-blue checked")
				return;
			else 
				update_form.field_2483.parentNode.click();
	    

		}
		
		
        let secLine = document.createElement('span');
        secLine.innerHTML = "На 2Л";
        secLine.classList.add('inl');
        secLine.style.marginRight = "15px";
        secLine.onclick = function() {
            document.getElementById('case_staff_id').value = '0';
            document.getElementById('case_group_id').value = '35949';
            document.getElementById('case_staff_id_chosen').childNodes[0].childNodes[0].textContent = "Не назначен";
            document.getElementById('case_group_id_chosen').childNodes[0].childNodes[0].textContent = "Техподдержка: 2-я линия";
            
            document.getElementsByClassName('case-staff-colorful')[0].setAttribute('data-current-staff', "0");
            document.getElementsByClassName("req-status-waiting")[0].className = "tab-title req-status-waiting inl active-item";
            document.getElementsByClassName("req-status-opened")[0].className = "tab-title req-status-opened inl";
            document.getElementsByClassName("req-status-closed")[0].className = "tab-title req-status-closed inl";
        
            document.getElementsByClassName('case_update_button')[0].removeAttribute('disabled');
        }        
        let inBox = document.createElement('span');
        inBox.innerHTML = "В бокс";
        inBox.classList.add('inl');
        inBox.style.marginRight = "15px";
        inBox.onclick = function() {
            document.getElementById('case_staff_id').value = '0';
            document.getElementById('case_group_id').value = '35950';
            document.getElementById('case_staff_id_chosen').childNodes[0].childNodes[0].textContent = "Не назначен";
            document.getElementById('case_group_id_chosen').childNodes[0].childNodes[0].textContent = "Техподдержка: 1-я линия";
            
            document.getElementsByClassName('case-staff-colorful')[0].setAttribute('data-current-staff', "0");
            document.getElementsByClassName("req-status-waiting")[0].className = "tab-title req-status-waiting inl";
            document.getElementsByClassName("req-status-opened")[0].className = "tab-title req-status-opened inl active-item";
            document.getElementsByClassName("req-status-closed")[0].className = "tab-title req-status-closed inl";
        
            document.getElementsByClassName('case_update_button')[0].removeAttribute('disabled');
        }
        newbuttons.insertBefore(inBox, newbuttons.children[0]);
        newbuttons.insertBefore(secLine, newbuttons.children[0]);
        newbuttons.insertBefore(tck_dbl, newbuttons.children[0]);
		
    }
}
move_again();
let audio = new Audio("https://ustyugov.net/tmp/msg.mp3");
  function startTimer() {
    var time = localStorage.getItem('time');
    var cT = new Date();
    var curTime1 = Number(time);
    var curTime2 = Number(cT);
    var curTime3 = (15 * 60) - Math.floor((curTime2 - curTime1) / 1000);
    if(curTime3 < 0) {
        setTimeout(startTimer, 1000);
        return;
    }
    if(curTime3 == 300) {
        audio.play()
    }
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
    document.getElementById("my_timer").innerHTML = curTime4;
    setTimeout(startTimer, 1000);
  }
startTimer();


function create_high_btn() {
    const menu = document.getElementsByClassName('footer-toolbar-inner')[0];
    const btn1 = document.createElement('span');
    menu.insertBefore(btn1, menu.children[2]);
    btn1.id = 'chat_edit';
    btn1.innerHTML = '<a style="float: left; margin-right: 15px; margin-top: 10px; color: DarkKhaki; cursor: pointer;">Высокий</a>';
    btn1.setAttribute('onClick', 'document.getElementById(\'priority-select\').value = 3; UpdateCaseParams();')
};

localStorage.getItem(['chat_high'], function(result) {
    if (result['chat_high'] === undefined) { localStorage.setItem({chat_high: true}, function() {}); }
    if (result['chat_high'] === true) {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = '(' + create_high_btn.toString() + ")();"
        document.getElementsByTagName("head")[0].appendChild(script);
    }
});

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

const copyToComment = str => {
    var buttons = document.getElementsByClassName("btn_add_reply");
    var tabttl = document.getElementsByClassName("tab-title req-status-waiting inl");

	document.getElementById('comment').value = str;
	document.getElementById('comment').focus();
	if(str == "") {
	    buttons[0].className = "btn_add_reply";
	} else {
	    buttons[0].className = "btn_add_reply active";
	}
};
