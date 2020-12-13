// Файл JSAF4.js
var socketOpened = 0
var flagReadMessage = 0
function getSlackToken() {
	document.getElementById('responseTextarea1').value = '{}'
	document.getElementById('responseTextarea2').value = 'https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1'

	document.getElementById('sendResponse').click()
	function tokenToLocalStorage() {
		var result = document.getElementById('responseTextarea1').value
		if(result == '{}')
			setTimeout(tokenToLocalStorage, 1000)
		else {
			try {
				localStorage.setItem('token', result.match(/"token":"(.*?)"/)[1])
				console.log('Токен Slack получен и установлен')
			} catch (e) {
				console.log('Ошибка при получении токена: ' + e)
			}
		}
	}
	setTimeout(tokenToLocalStorage, 2000)
}

function openSlackSocket() {
	document.getElementById('responseTextarea1').value = '{}'
	document.getElementById('responseTextarea2').value = 'https://slack.com/api/rtm.connect?token=' + localStorage.getItem('token')
	document.getElementById('sendResponse').click()
	function getUrlAndOpenSocket() {
		var result = JSON.parse(document.getElementById('responseTextarea1').value)
		var url = result.url
		if(result == '{}')
			setTimeout(getUrlAndOpenSocket, 1000)
		else {
			openSocket(url)
			console.log('URL для связи с Slack получен')
		}
	}
	setTimeout(getUrlAndOpenSocket, 1000)
	
	function openSocket(url) {
		socketOpened = 1
		socket = new WebSocket(url)
		socket.onmessage = function(event) {
				message = JSON.parse(event.data)
			if(message.type == "view_opened" && message.app_id == 'AU3S9KSPL' && flagReadMessage == 1) {
				view = message.view
				console.log('Форма получена: ' + message.view)
				fillForm(JSON.stringify(message.view))
				flagReadMessage = 0
				return
			}
			if(message.type == "message" && message.channel == 'D01FYK6G25U') {
				console.log('Ссылка на тред: ' + message.text.split('<')[1].split('|')[0])
				sendComment('Ссылка на тред: ' + message.text.split('<')[1].split('|')[0])
				socket.close()
				socketOpened = 0
				console.log('Закрыли сокет')
				document.getElementById('buttonOpenForm').style.display = ''
				return
			}
		}
		console.log('socket подключен')
	}
}

function createSlackView() {
	let client_token = Number(new Date())
	requestOptions = {
	  "headers": {
		"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryocWaVl7biIt7qfdc",
	  },
	  "body": "------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"action_id\"\r\n\r\nAa0182QPV4E7\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"app_id\"\r\n\r\nAU3S9KSPL\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"client_token\"\r\n\r\nweb-" + client_token + "\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" + localStorage.getItem('token') + "\r\n------WebKitFormBoundaryocWaVl7biIt7qfdc\r\n",
	  "method": "POST",
	  "credentials": "include"
	}
	console.log('Запрашиваем создание формы')
	document.getElementById('responseTextarea1').value = JSON.stringify(requestOptions)
	document.getElementById('responseTextarea2').value = 'https://skyeng.slack.com/api/apps.actions.v2.execute?slack_route=T03A3SUFB'
	flagReadMessage = 1
	document.getElementById('sendResponse').click()
}

function fillForm(view) {
	view = JSON.parse(view)
	div = document.createElement('div')
	document.body.append(div)
	if (localStorage.getItem('viewToSlackFormAFTop') == null) {
		localStorage.setItem('viewToSlackFormAFTop', '120');
		localStorage.setItem('viewToSlackFormAFLeft', '295');
	}
	div.style = 'cursor: -webkit-grab;background: #464451; top: ' + localStorage.getItem('viewToSlackFormAFTop') + 'px; left: ' + localStorage.getItem('viewToSlackFormAFLeft') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black; width: 18%'
	div.id = 'formToSlack'
	
	let div2 = document.createElement('div')
	div2.style.textAlign = 'center'
	div2.style.color = 'white'
	div2.textContent = 'Форма'
	let blocks = view.blocks
	div.append(div2)
	var listener4 = function(e , a) {
        div.style.left = Number(e.clientX - myX4) + "px";
        div.style.top = Number(e.clientY - myY4) + "px";
        localStorage.setItem('viewToSlackFormAFTop', String(Number(e.clientY - myY4)));
        localStorage.setItem('viewToSlackFormAFLeft', String(Number(e.clientX - myX4)));
    };

    div.firstElementChild.onmousedown = function (a) {
        window.myX4 = a.layerX; 
        window.myY4 = a.layerY; 
        document.addEventListener('mousemove', listener4);
    }
    div.onmouseup = function () {document.removeEventListener('mousemove', listener4);}
	for(let i = 0; i < blocks.length; i++) {
		let newDiv = document.createElement('div')
		newDiv.style = 'margin:5px'
		if(blocks[i].element.options != undefined) {
			let select = document.createElement('select')
			select.style.width = '100%'
			select.placeholder = blocks[i].element.placeholder.text
			for(let j = 0; j < blocks[i].element.options.length; j++) {
				let option = document.createElement('option')
				option.textContent = blocks[i].element.options[j].text.text
				option.setAttribute('value', j)
				select.append(option)
			}
			newDiv.append(select)
		} else {
			if(blocks[i].label.text == 'URL')
				var input = document.createElement('input')
			else
				var input = document.createElement('textarea')
			input.style.width = '100%'
			input.placeholder = blocks[i].label.text
			newDiv.append(input)
		}
		div.append(newDiv)
	}
	let newDiv = document.createElement('div')
	newDiv.style = 'margin:5px'
	newDiv.style.textAlign = 'center'
	let button = document.createElement('button')
	button.textContent = "Отправить"
	let button2 = document.createElement('button')
	button2.textContent = "Скрыть"
	button2.style.marginLeft = '5px'
	button2.onclick = function() {
		this.parentElement.parentElement.style.display = 'none'
		document.getElementById('buttonOpenForm').style.display = ''
	}
	let button3 = document.createElement('button')
	button3.textContent = "Закрыть"
	button3.style.marginLeft = '5px'
	button3.onclick = function() {
		socket.close()
		socketOpened = 0
		console.log('Закрыли сокет')
		this.parentElement.parentElement.remove()
		document.getElementById('buttonOpenForm').style.display = ''
	}
	
	button.onclick = function() {
		this.setAttribute('disabled', 'disabled')
		view.blocks[0].answer = document.getElementById('formToSlack').children[1].children[0].value
		view.blocks[1].answer = document.getElementById('formToSlack').children[2].children[0].value
		view.blocks[2].answer = document.getElementById('formToSlack').children[3].children[0].value
		view.blocks[3].answer = document.getElementById('formToSlack').children[4].children[0].value
		view.blocks[4].answer = document.getElementById('formToSlack').children[5].children[0].value
		view.blocks[5].answer = document.getElementById('formToSlack').children[6].children[0].value
		view.blocks[6].answer = document.getElementById('formToSlack').children[7].children[0].value
		view.blocks[7].answer = document.getElementById('formToSlack').children[8].children[0].value
		view.blocks[8].answer = document.getElementById('formToSlack').children[9].children[0].value
		submitSlackView(view)
		document.getElementById('formToSlack').remove()
	}
	newDiv.append(button)
	newDiv.append(button2)
	newDiv.append(button3)
	div.append(newDiv)
	console.log("Форма получена и заплонена успешно")
}

let buttonOpenForm = document.createElement('div');
buttonOpenForm.id = 'buttonOpenForm';
buttonOpenForm.textContent = "Баг-репорт";
buttonOpenForm.style.marginRight = "15px";
buttonOpenForm.onclick = function() {
	if(socketOpened == 0) {
		if(localStorage.getItem('token') == undefined)
			getSlackToken()
		openSlackSocket()
	}
	if(document.getElementById('formToSlack') != undefined) 
		document.getElementById('formToSlack').style.display = ''
	else
		createSlackView()
	this.style.display = 'none'
}
var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
btnAdd.insertBefore(buttonOpenForm, btnAdd.children[0])
function submitSlackView(view) {
	let client_token = Number(new Date())
	let view_id = view.id
	let answer = 'Content-Disposition: form-data; name=\"state\"\r\n\r\n{\"values\":{'
	for(i = 0; i < view.blocks.length; i++) {
		if(i > 0)
			answer += ','
		answer += "\"" + view.blocks[i].block_id
		answer += "\":{\"" + view.blocks[i].element.action_id
		answer += "\":{\"type\":\"" + view.blocks[i].element.type 
		if(view.blocks[i].element.options != undefined)
			answer += "\",\"selected_option\":{\"text\":{\"type\":\"" + view.blocks[i].element.options[view.blocks[i].answer].text.type + "\",\"text\":\"" + view.blocks[i].element.options[view.blocks[i].answer].text.text + "\",\"emoji\":" + view.blocks[i].element.options[view.blocks[i].answer].text.emoji.toString() + "},\"value\":\"" + view.blocks[i].element.options[view.blocks[i].answer].value + "\"}}}"
		else
			answer += "\",\"value\":\"" + view.blocks[i].answer + "\"}}"
	}
	answer += "}}"
	requestOptions = {
	  "headers": {
		"content-type": "multipart/form-data; boundary=----WebKitFormBoundaryIqHa1NymiZdZybBQ",
	  },
	  "body": "------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\nContent-Disposition: form-data; name=\"client_token\"\r\n\r\nweb-" + client_token + "\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\nContent-Disposition: form-data; name=\"view_id\"\r\n\r\n" + view_id + "\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\n" + answer + "\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" + localStorage.getItem('token') + '\r\n------WebKitFormBoundaryIqHa1NymiZdZybBQ\r\n',
	  "method": "POST",
	  "credentials": "include"
	}
	document.getElementById('responseTextarea1').value = JSON.stringify(requestOptions)
	document.getElementById('responseTextarea2').value = 'https://skyeng.slack.com/api/views.submit?slack_route=T03A3SUFB&_x_version_ts=1607639215&_x_gantry=true'

	document.getElementById('sendResponse').click()
	console.log("Отправили форму")
}
