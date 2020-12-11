var flag = 0
let but1 = document.createElement('button')
but1.onclick = getSlackToken()
but1.id = 'testBut1'
let but2 = document.createElement('button')
but2.onclick = openSocket()
but2.id = 'testBut2'
let but3 = document.createElement('button')
but3.onclick = createSlackView()
but3.id = 'testBut3'

function getSlackToken() {
	document.getElementById('responseTextarea1').value = '{}'
	document.getElementById('responseTextarea2').value = 'https://app.slack.com/auth?app=client&return_to=%2Fclient%2FT03A3SUFB&teams=&iframe=1'

	document.getElementById('sendResponse').click()​
	function tokenToLocalStorage() {
		var result = document.getElementById('responseTextarea1').value
		localStorage.setItem('token', result.match(/"token":"(.*?)"/)[1])
		if(result == '{}')
			setTimeout(tokenToLocalStorage, 1000)
	}
	setTimeout(tokenToLocalStorage, 1000)
}

function openSocket() {
	document.getElementById('responseTextarea1').value = '{}'
	document.getElementById('responseTextarea2').value = 'https://slack.com/api/rtm.connect?token=' + localStorage.getItem('token')
	document.getElementById('sendResponse').click()
	function getUrlAndOpenSocket() {
		var esult = JSON.parse(document.getElementById('responseTextarea1').value)
		var url = result.url
		if(result == '{}')
			setTimeout(getUrl, 1000)
		else
			openSocket(url)
	}
	setTimeout(getUrl, 1000)
	
	function openSocket(url) {
		socket = new WebSocket(url)
		socket.onmessage = function(event) {
			message = event.data
			if(message.type == "view_opened" && message.app_id == 'AU3S9KSPL' && flag == 1) {
				message = JSON.parse(event.data)
				console.log(message)
				//fillForm(message.view)
				flag = 0
				return
			}
			if(message.type == "message" && message.channel == 'D01FYK6G25U') {
				message = JSON.parse(event.data)
				//message.text == 'Ваше обращение к QA опубликовано в <https://skyeng.slack.com/archives/C013Q9J3KH8/p1607658520040100|канале проекта>' 
				return
			}
		}
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
	document.getElementById('responseTextarea1').value = JSON.stringify(requestOptions)
	document.getElementById('responseTextarea2').value = 'https://skyeng.slack.com/api/apps.actions.v2.execute?slack_route=T03A3SUFB'
	flag = 1
	document.getElementById('sendResponse').click()
}

	view.blocks[0].answer = 'тестовое описание'
	view.blocks[1].answer = 'тестовый юрл'
	view.blocks[2].answer = 0
	view.blocks[3].answer = 3
	view.blocks[4].answer = 'тестовые шаги'
	view.blocks[5].answer = 'тестовый фр'
	view.blocks[6].answer = 'тестовый ор'
	view.blocks[7].answer = 'тестовая доп инфа'
	view.blocks[8].answer = 'список пользователей'
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
}
