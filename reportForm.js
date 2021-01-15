let buttonOpenReport = document.createElement('div');
buttonOpenReport.id = 'buttonSendReport';
buttonOpenReport.textContent = "Жалоба";
buttonOpenReport.style.marginRight = "15px";
buttonOpenReport.onclick = function() {
    createReportForm()
	this.style.display = 'none'
}
var btnAdd = document.getElementsByClassName('app-body-content-user_menu')[0].childNodes[0]
btnAdd.insertBefore(buttonOpenReport, btnAdd.children[0])

if (localStorage.getItem('reportAF') == null) {
    localStorage.setItem('reportAFTop', '120');
    localStorage.setItem('reportAFLeft', '295');
}

async function createReportForm() {
	let div = document.createElement('div')
	div.style = 'cursor: -webkit-grab;background: #464451; top: ' + localStorage.getItem('reportAFTop') + 'px; left: ' + localStorage.getItem('reportAFLeft') + 'px; font-size: 14px; z-index: 20; position: fixed; border: 1px solid rgb(56, 56, 56); color: black;'
	div.style.width = '310px'
	div.id = 'reportAF'
    var listener = function(e , a) {
        div.style.left = Number(e.clientX - myX) + "px";
        div.style.top = Number(e.clientY - myY) + "px";
        localStorage.setItem('reportAFTop', String(Number(e.clientY - myY)));
        localStorage.setItem('reportAFLeft', String(Number(e.clientX - myX)));
    };

    div.onmousedown = function (a) {
        window.myX = a.layerX; 
        window.myY = a.layerY; 
        document.addEventListener('mousemove', listener);
    }
    div.onmouseup = function () {document.removeEventListener('mousemove', listener);}

	let newDiv = document.createElement('div')
	newDiv.style = 'margin: 5px'

	let input = document.createElement('input')
	input.id = 'reportInput1'
	input.style.width = '300px'
	input.style.borderRadius = '3px'
	let Data = new Date()
	input.placeholder = Data.getDate() + '.' + (Data.getMonth() + 1) + '.' + Data.getFullYear() + ' ' + Data.getHours() + ':' + Data.getMinutes() + ':' + Data.getSeconds()


	let input2 = document.createElement('input')
	input2.id = 'reportInput2'
	input2.style.width = '300px'
	input2.style.marginTop = '5px'
	input2.style.borderRadius = '3px'


	for(i = 0; document.getElementsByClassName('expert-user_details-list')[1].childNodes[i] != undefined; i++) {
		if(document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].firstChild.innerText == "id") {
			input2.placeholder = document.getElementsByClassName('expert-user_details-list')[1].childNodes[i].children[1].textContent
		}
	}

	var adr1 = document.location.pathname
	adr1 = adr1.split('/')
	adr1 = adr1[3]
	await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
	  "headers": {
		"content-type": "application/json",
	  },
	  "body": "{\"serviceId\":\"" + localStorage.getItem('serviceIdGlob') + "\",\"mode\":\"Json\",\"conversationId\":\"" + adr1 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
	  "method": "POST",
	  "credentials": "include"
	})
	.then(response => response.json())
	.then(result => console.log(result.items[0].stats.participatingOperators));

	let ids = []
	var adr1 = document.location.pathname
	adr1 = adr1.split('/')
	adr1 = adr1[3]
	await fetch("https://skyeng.autofaq.ai/api/conversations/history", {
	  "headers": {
		"content-type": "application/json",
	  },
	  "body": "{\"serviceId\":\"" + localStorage.getItem('serviceIdGlob') + "\",\"mode\":\"Json\",\"conversationId\":\"" + adr1 + "\",\"orderBy\":\"ts\",\"orderDirection\":\"Asc\",\"page\":1,\"limit\":10}",
	  "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	})
			.then(response => response.json())
			.then(result => ids = result.items[0].stats.participatingOperators);
	let setOperators = []
	res = ''
	await fetch("https://skyeng.autofaq.ai/api/operators/statistic/currentState")
	.then(response => response.json())
	.then(result => {
		console.log(result)
	res = result
		for(let i = 0; i < ids.length; i++) {
			for(let j = 0; j < result.rows.length; j++) {
				if(ids[i] == result.rows[j].operator.id)
					setOperators.push(result.rows[j].operator.fullName)
			}
		}
	});

	let select = document.createElement('select')
	select.id = 'reportSelect'
	select.style.width = '300px'
	select.style.marginTop = '5px'
	select.style.borderRadius = '3px'
	select.placeholder = 'Выберите оператора'
	let option = document.createElement('option')
	option.textContent = 'Кто перевел'
	select.append(option)
	for(let j = 0; j < setOperators.length; j++) {
		let option = document.createElement('option')
		option.textContent = setOperators[j]
		option.setAttribute('value', setOperators[j])
		select.append(option)
	}
	let select2 = document.createElement('select')
	select2.id = 'reportSelect2'
	select2.placeholder = 'Выберите оператора'
	select2.style.marginTop = '5px'
	select2.style.width = '300px'
	select2.style.borderRadius = '3px'
	let option2 = document.createElement('option')
	option2.textContent = 'Кому перевел'
	select2.append(option2)
	for(let j = 0; j < setOperators.length; j++) {
		let option = document.createElement('option')
		option.textContent = setOperators[j]
		option.setAttribute('value', setOperators[j])
		select2.append(option)
	}

	let input3 = document.createElement('textarea')
	input3.id = 'reportInput3'
	input3.placeholder = 'https://hdi.skyeng.ru/autofaq/conversation/-11/'+adr1
	input3.style.width = '300px'
	input3.style.marginTop = '5px'
	input3.style.borderRadius = '3px'

	let input4 = document.createElement('textarea')
	input4.id = 'reportInput4'
	input4.placeholder = 'Комментарий'
	input4.style.width = '300px'
	input4.style.marginTop = '5px'
	input4.style.borderRadius = '3px'

	let newDiv2 = document.createElement('div')
	newDiv2.style.textAlign = 'center'
	let but = document.createElement('button')
	but.textContent = 'Отправить'
	but.onclick = function() {
		let date = document.getElementById('reportInput1').value == "" ? document.getElementById('reportInput1').placeholder : document.getElementById('reportInput1').value
		let client = document.getElementById('reportInput2').value == "" ? document.getElementById('reportInput2').placeholder.split(' ') : document.getElementById('reportInput2').value
		if(!validate())
			return
			
		function validate() {
			let flag = 0
			if(document.getElementById('reportSelect').value == "Кто перевел") {
				document.getElementById('reportSelect').style.border = '1px solid red';
				flag = 1
			} else
				document.getElementById('reportSelect').style.border = '0px solid red';
			
			if(document.getElementById('reportSelect2').value == "Кому перевел") {
				document.getElementById('reportSelect2').style.border = '1px solid red';
				flag = 1
			} else
				document.getElementById('reportSelect2').style.border = '0px solid red';
				
			if(document.getElementById('reportInput4').value == "") {
				document.getElementById('reportInput4').style.border = '1px solid red';
				flag = 1
			} else
				document.getElementById('reportInput4').style.border = '0px solid red';
			
			return flag == 1 ? false : true
		}
		let kto = textToUTF8String(document.getElementById('reportSelect').value)
		let komu = textToUTF8String(document.getElementById('reportSelect2').value)
		let link = document.getElementById('reportInput3').value == "" ? document.getElementById('reportInput3').placeholder : document.getElementById('reportInput3').value
		
		let comment = textToUTF8String(document.getElementById('reportInput4').value)
		
		var body = 'entry.2042676744=' + date + '&entry.1008946388=' + client + '&entry.743061035=' + kto + '&entry.285857150=' + komu + '&entry.1292433844=' + link + '&entry.1679550503=' + comment
		let options = {
			  "headers": {
				"content-type": "application/x-www-form-urlencoded",
			  },
			  "body": body,
			  "method": "POST",
			}
			
		document.getElementById('responseTextarea1').value = JSON.stringify(options)
		document.getElementById('responseTextarea2').value = 'https://docs.google.com/forms/d/e/1FAIpQLSecIM_o5yLkleW330KKEn-0pXN0Hcg6iXWXd85ZBKf4wgbqPA/formResponse'
		if(document.getElementById('responseTextarea3') != null)
			document.getElementById('responseTextarea3').value = ''
		document.getElementById('sendResponse').click()
		document.getElementById('reportAF').remove()
		document.getElementById('buttonSendReport').style.display = ''
	}
	
	let but2 = document.createElement('button')
	but2.textContent = 'Закрыть'
	but2.style.marginLeft = '5px'
	but2.onclick = function() {
		document.getElementById('reportAF').remove()
		document.getElementById('buttonSendReport').style.display = ''
	}
	newDiv2.append(but)
	newDiv2.append(but2)


	document.body.append(div)
	div.append(newDiv)
	newDiv.append(input)
	newDiv.append(input2)
	newDiv.append(select)
	newDiv.append(select2)
	newDiv.append(input3)
	newDiv.append(input4)
	newDiv.append(newDiv2)
}
function toUTF8Array(str) {
	var utf8 = [];
	for (var i=0; i < str.length; i++) {
		var charcode = str.charCodeAt(i);
		if (charcode < 0x80) utf8.push(charcode);
		else if (charcode < 0x800) {
			utf8.push(0xc0 | (charcode >> 6), 
					  0x80 | (charcode & 0x3f));
		}
		else if (charcode < 0xd800 || charcode >= 0xe000) {
			utf8.push(0xe0 | (charcode >> 12), 
					  0x80 | ((charcode>>6) & 0x3f), 
					  0x80 | (charcode & 0x3f));
		}
		// surrogate pair
		else {
			i++;
			// UTF-16 encodes 0x10000-0x10FFFF by
			// subtracting 0x10000 and splitting the
			// 20 bits of 0x0-0xFFFFF into two halves
			charcode = 0x10000 + (((charcode & 0x3ff)<<10)
					  | (str.charCodeAt(i) & 0x3ff))
			utf8.push(0xf0 | (charcode >>18), 
					  0x80 | ((charcode>>12) & 0x3f), 
					  0x80 | ((charcode>>6) & 0x3f), 
					  0x80 | (charcode & 0x3f));
		}
	}
	return utf8;
}

function decToHex(dec)
{
	var hexStr = '0123456789ABCDEF';
	var low = dec % 16;
	var high = (dec - low)/16;
	hex = '' + hexStr.charAt(high) + hexStr.charAt(low);
	return hex;
}

function textToUTF8String(string) {
	string = toUTF8Array(string)
	let string2 = ""
	for(i = 0; i < string.length; i++) {
		string2 += "%" + decToHex(string[i])
	}
	return string2
}
