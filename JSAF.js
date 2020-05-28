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

var win_AFhelper =  
    `<div style="display: flex; width: 301px;">
        <span style="width: 301px">
			<span style="cursor: -webkit-grab;">
				<div style="margin: 5px;">
					<button id="languageAF">Русский</button>
					<button id="rfrTmr" style="margin-left: 172px">T10</button>
					<button id="rfrTmr1" style="margin-left: 5px">T1</button>
				</div>
				<div style="margin: 5px;">
					<button id="helloAF">Приветствие</button>
					<button id="min">Минуту</button>
					<button id="internet">Интернет</button>
					<button id="TW">TW</button>
					<button id="secLine">2Л</button>
				</div>
				<div style="margin: 5px;">
					<button id="utoch">Доп впр</button>
					<button id="bag">Подождите</button>
					<button id="idU">ID У</button>
					<button id="screen">скрин</button>
					<button id="bag1">баг</button>
				</div>
				<div style="margin: 5px;">
					<button id="longans">Нет ответа</button>
					<button id="NS">урок NS</button>
					<button id="perevod">Др отд</button>
					<button id="tc_sc">tc+sc</button>
				</div>
				<div style="margin: 5px;">
					<button id="engConv">общ на англ</button>
					<button id="browser">ус+брауз</button>
					<button id="calltest">vcall-test</button>
					<button id="vcall_2" style="margin: 2px">vcall-2</button>
				</div>
			</span>
			<div style="margin: 5px;">
				<textarea style="width: 291px; height: 125px; resize: none" id="inp"></textarea>
				<button id="msg1" style="width:100px;">Отправить</button>
				<button id="snd" style="width:50px; margin-left:16px">send</button>
				<button id="msg" style="width:100px; margin-left:16px">Заметки</button>
			</div>
		</span>
	<span style="border: 2px double black; display: none; background-color: #CCCCFF" id="addTmp">
        <div style="margin: 5px; width: 300px">
				<button id="cacheSafari" style="margin: 2px">Кэш Сафари</button>
				<button id="UnapisalSam" style="margin: 2px">П -> У написал сам</button>
				<button id="macBag" style="margin: 2px">Макобаг</button>
				<button id="grammar" style="margin: 2px">Грамматика</button>
				<button id="hiddenHW" style="margin: 2px">Скрытое ДЗ</button>
				<button id="revision" style="margin: 2px">Ревизия</button>
				<button id="mat" style="margin: 2px">Материалы приложение</button>
				<button id="serverAF" style="margin: 2px">Серверные</button>
				<button id="bil_qa" style="margin: 2px">Баланс (таска)</button>
				<button id="longAnsOld" style="margin: 2px">Нет ответа(old)</button>
				<button id="mobApp">Переуст прил</button>
				<button id="RK1" style="margin: 2px">Общ инф РК</button>
				<button id="RK2" style="margin: 2px">Вход РК</button>
				<button id="privateMode" style="margin: 2px">Инкогнито</button>
				<button id="browser_clear" style="margin: 2px">Проверка браузера</button>
				<button id="predlozh" style="margin: 2px">Предложение</button>
		</div>
	</span>
    </div>`;
	
if (localStorage.getItem('winTopAF') == null) {
    localStorage.setItem('winTopAF', '120');
    localStorage.setItem('winLeftAF', '295');
}


let wintAF = document.createElement('div');
document.body.append(wintAF);
wintAF.style = 'min-height: 25px; min-width: 65px; background: wheat; top: ' + localStorage.getItem('winTopAF') + 'px; left: ' + localStorage.getItem('winLeftAF') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;';
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
    wintAF.firstElementChild.firstElementChild.firstElementChild.ondblclick = function () {
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
        } else {
            this.innerHTML = "Чат";
        }
	}
    document.getElementById('languageAF').onclick = function () {
        if(this.innerHTML == "Русский") {
            this.innerHTML = "Английский";
			document.getElementById('calltest').style.display = 'none'
			document.getElementById('TW').style.display = 'none'
			document.getElementById('internet').style.display = 'none'
			document.getElementById('engConv').style.display = 'none'
			document.getElementById('vcall_2').style.display = 'none'
        } else {
            this.innerHTML = "Русский";
			document.getElementById('calltest').style.display = ''
			document.getElementById('TW').style.display = ''
			document.getElementById('internet').style.display = ''
			document.getElementById('engConv').style.display = ''
			document.getElementById('vcall_2').style.display = ''
        }
	}
	
    document.getElementById('rfrTmr').onclick = function () {
		addTimer()
		refCurTimer("10:00")
	}
    document.getElementById('rfrTmr1').onclick = function () {
		addTimer()
		refCurTimer("1:00")
	}
    document.getElementById('cacheSafari').onclick = function () {
		sendAnswer("Давайте попробуем очистить кэш Safari:\n\
1. Зайдите в Настройки->Safari.\n\
2. Найдите пункт \"Очистить историю и данные сайтов\". Жмите по этой кнопке.\n\
3. В новом окне прочитайте сообщение и нажмите \"Очистить\"")
	}
    document.getElementById('bil_qa').onclick = function () {
		sendAnswer("Сейчас наблюдаются неполадки с некорректным списанием уроков с баланса. Передал в ответственный отдел, чтобы баланс исправили.\n\
Есть возможность это исправить сразу, чтобы в дальнейшем баланс списывался корректно, но это приведёт к потере прогресса в личном кабинете. Сейчас разработчики занимаются устранением этой неполадки и рекомендуют пока ничего не исправлять.")
		sendComment("https://skyeng.slack.com/archives/CJQRWT346/p1590040959451600?thread_ts=1590007548.447300&cid=CJQRWT346")
	}
	
    document.getElementById('longAnsOld').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Мы не получили от вас ответа, чат будет закрыт.\n\
Если у вас будут вопросы, пожалуйста, задавайте и мы вам поможем.", 1, "1:00")
		else 
			sendAnswer("We did not received a response from you. Chat will be closed.\n\
If you need help, please write and we will help you.", 1, "1:00")
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
		sendAnswer("Попробуйте, пожалуйста, воспользоваться следующими инструкциями, а затем проверить ещё раз\n\
http://faq.usedocs.com/article/7652 - проверить обновление браузера\n\
http://faq.usedocs.com/article/7656 - удалить Cookies сайта Skyeng\n\
http://faq.usedocs.com/article/7654 - очистка кэша\n\
http://faq.usedocs.com/article/7655 - очистить браузер от расширений")
	}
    document.getElementById('privateMode').onclick = function () {
		sendAnswerTemplate("Инкогнито/приватное окно (шаблон ТП)", "инкогнито")
	}
    document.getElementById('predlozh').onclick = function () {
		sendAnswerTemplate("Платформа: Пожелания/Отзыв по платформе и личному кабинету", "предложение")
	}


	
	
    document.getElementById('UnapisalSam').onclick = function () {
		sendAnswer("Попросите ученика самостоятельно написать нам в чат, чтобы мы получили информацию о нем и его системе. Это поможет нам оперативно связаться с учеником и настроить его устройство. Спасибо за понимание!")
	}
	
    document.getElementById('grammar').onclick = function () {
		sendAnswer("Раздел \"Грамматика\" находится в разработке, поэтому кнопка перехода в раздел грамматики отображается не всегда. \n\
Перейти в раздел грамматики вы можете по ссылке: https://vimbox.skyeng.ru/grammar-trainer")
	}
	
    document.getElementById('hiddenHW').onclick = function () {
		sendAnswer("Ваш преподаватель забыл открыть для вас скрытый раздел, выполнение которого влияет на подсчет балла и завершение домашнего задания.\n\
Мы открыли его для вас, теперь после выполнения вы сможете завершить это домашнее задание.")
	}
    document.getElementById('mat').onclick = function () {
		sendAnswer("Приложение сейчас в режиме доработки и исправления контента.\
По этому из него временно убраны видео и статьи в ежедневных заданиях.")
	}
	
	
    document.getElementById('serverAF').onclick = function () {
		sendAnswer("Извините, пожалуйста, за технические неисправности.\n\
Наши разработчики уже знают об этом и решают вопрос. \n\
Если остались вопросы, пожалуйста, напишите.")
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
        } else {
            this.innerHTML = "Отправить";
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
		if(document.getElementById('languageAF').innerHTML == "Русский")
			txt = "Здравствуйте!"
		else
			txt = "Hello!"
		
		if(document.getElementById('msg1').innerHTML == "Доработать")
			document.getElementById('inp').value = txt
		else 
			if(values[3])
		if(document.getElementById('languageAF').innerHTML == "Русский") {
				addTimer()
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
		sendAnswerTemplate("Тест видеосвязи (ТП)", "видеосвязи")
	}
    document.getElementById('perevod').onclick = function () {
		sendAnswerTemplate("Перевод на другой отдел (шаблон)", "перевод на другой отдел")
	}
    document.getElementById('browser').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Уточните, пожалуйста, какое устройство и какой браузер используете")
		else 
			sendAnswer("Please specify which device and browser you are using.")
	}
    document.getElementById('tc_sc').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswerTemplate("Перевод чата от П на @studentscare и чат \"Teachers Care\" (шаблон)", "teachers")
		else 
			sendAnswerTemplate("Перевод чата от П на @studentscare и чат \"Teachers Care\" (шаблон ТП ENG)", "teachers")
	}
    document.getElementById('bag').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswerTemplate("Подождите пожалуйста (шаблон ТП)", "баг")
		else 
			sendAnswer("Wait please. Now I will check and answer you.")
	}
    document.getElementById('bag1').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswerTemplate("ТП уже в разработке (есть тикет jira) (шаблон ТП)", "jira")
		else 
			sendAnswer("Sorry for the issue, our developers are already solving it. As soon as they find a way to fix this defect, they will do everything as quickly as possible.")
	}
    document.getElementById('secLine').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswerTemplate("Перевод на ТП 2Л. (шаблон ТП)", "2Л")
		else 
			sendAnswer("Please wait, a senior employee will contact you for a more detailed troubleshooting.")
	}
    document.getElementById('idU').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswerTemplate("Уточнение ID ученика (шаблон ТП)", "id")
		else 
			sendAnswer("Please specify student ID")
	}
    document.getElementById('TW').onclick = function () {
		sendAnswerTemplate("Программа TeamViewer (шаблон ТП)", "jira")
	}
    document.getElementById('internet').onclick = function () {
		sendAnswerTemplate("Проблема с Интернетом (ТП)", "интернет")
	}
    document.getElementById('engConv').onclick = function () {
		sendAnswerTemplate("Общение на англ (шаблон)", "общение на англ")
	}
    document.getElementById('min').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswer("Одну минуту")
		else 
			sendAnswer("Wait a minute please")
	}
	
    document.getElementById('screen').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswerTemplate("Скрин проблемы (шаблон)", "скрин")
		else 
			sendAnswer("Please send a link to a screenshot of your problem and we will help you. To quickly create a screenshot, you can use this service: https://prnt.sc/")
		
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
2. Создаете урок через New Student - http://joxi.ru/v298jgeTzKyKYm \n\
3. Копируете ссылку и отправляете в чат ученику, заранее предупредив его об этом, так как кнопка войти в класс уже не будет функционировать."
		else 
			txt = "Use this instruction, and then write if you managed to establish a connection \n\
 1. End the lesson by clicking Finish \n\
 2. Create a lesson through New Student - http://joxi.ru/v298jgeTzKyKYm \n\
 3. Copy the link and send the student to the chat, warning him about this in advance, since the button to enter the class will no longer function."
		sendAnswer(txt)
	}
    document.getElementById('longans').onclick = function () {
		if(document.getElementById('languageAF').innerHTML == "Русский")
			sendAnswerTemplate("Нет долго от У ответа (шаблон)", "долго ответ", "1:00")
		else 
			sendAnswer("I am closing this chat. If you have questions, please write.", 1, "1:00")
	}
	
}
move_again_AF();


async function sendAnswerTemplate(template, word, time = "10:00") {
	addTimer()
	refCurTimer(time)
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
  "referrer": "https://skyeng.autofaq.ai/tickets/assigned/6067d8ca-8fa0-47ea-9e3d-c449b3783465",
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
tmpText = tmpText.split("\n").join("\\\n")
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
			else 
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
			});
}
async function sendAnswer(txt, flag = 1, time = "10:00") {
		addTimer()
		refCurTimer(time)
		var values = await getInfo()
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
			else 
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
async function getInfo() {
		adr = document.location.href
		adr1 = document.location.pathname
		adr1 = adr1.split('/')
		adr1 = adr1[3]
		sessionId = ""
		flag = true
		a = await fetch("https://skyeng.autofaq.ai/api/reason8/reports/conversations/"+adr1, {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://skyeng.autofaq.ai/tickets/archive",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then(a => b = a.json()).then(b => sessionId = b.sessionId).then(b => {if(sessionId == "")
	flag = false});
		return [adr, adr1, sessionId, flag]
}

async function sendComment(txt){ 
		var values = await getInfo()
		adr = values[0]; adr1 = values[1]; uid = values[2]
		txt2 = txt.split('\n').join('\\n')
		
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
		serv.style.backgroundColor = ""
		tm.childNodes[0].appendChild(serv)
		tm.childNodes[0].childNodes[2].innerHTML = "10:00"
		tmrs[idk] = ["10:00", tm.childNodes[1].childNodes[0].innerText, 1]
		idk++
	}
}
function refreshTimer() {
	btns = document.getElementsByClassName('ant-list expert-sidebar-list ant-list-split')[0].childNodes[0].childNodes[0].childNodes[0]
	j = 0
	while(true) {
		if(btns.childNodes[j] === undefined)
			break
		if(btns.childNodes[j].className === "ant-empty ant-empty-normal")
			break;
		name = btns.childNodes[j].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerText
		for (i = 0; i < idk; i++) {
			if(tmrs[i][1] == name) {
				btns.childNodes[j].childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerHTML = tmrs[i][0]
				if(tmrs[i][0] == "00:00")
					if(tmrs[i][2] == 1)
						btns.childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#ECEBBD"
					else
						btns.childNodes[j].childNodes[0].childNodes[0].style.backgroundColor = "#FBCEB1"
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
		}
	}
}
/*
document.getElementsByClassName('ant-btn ant-btn-primary')[0].onclick = function () {
	addTimer()
	name = document.getElementsByClassName('ant-btn expert-item-block expert-item-block-selected ant-btn-block')[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML
	for (i = 0; i < idk; i++) {
		if(tmrs[i][1] == name) {
			tmrs[i][0] = "10:00"
		}
	}
}*/
					
function startTimer() {
	for(i = 0; i < idk; i++) {
		a = tmrs[i][0].split(':')
		if(a[0] == 0 && a[1] == 0) {
			continue
		}
		
		a[1] = a[1] - 1;
		if (a[1] < 0 && a[0] > 0) {
			a[0] = a[0] - 1;
			a[1] = 59;
		}
		var tim = ''
		if(Number(a[0]) < 10)
			tim = '0'
		tim = tim + Number(a[0]) + ':'
		if(a[1] < 10)
			tim = tim + '0'
		tim = tim + Number(a[1])
		
		tmrs[i][0] = tim
	}
	setTimeout(startTimer, 1000);
	refreshTimer()
}
startTimer();
