var user = {}
var responses = []


function question1() {
  	var name = prompt('What is your name?')
  	name = name.charAt(0).toUpperCase() + name.substring(1);
  	user.name = name;
}

question1();



function question2() {

	var firstQuestion = prompt("Is Madrid the Spanish capital ? (Yes or No)")
	firstQuestion = firstQuestion.toLowerCase()

	if (firstQuestion === 'yes') {
		firstQuestion = true
	} 

	else if (firstQuestion === 'no') {
		firstQuestion = false
	} 

	else {
		alert("Please answer either Yes or No");
		return question2();
	}

	responses.push(firstQuestion);
}

question2();


function question3() {
	var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  	js = js.toLowerCase();
  	switch (js) {
  		case 'java':
  		case 'javalive':
  		case 'scriptyscript':
  			js = false
  		break;

  		case 'livescript':
  			js = true
  		break;

  		default:
  			alert("Please answer either Java, LiveScript, JavaLive, or ScriptyScript");
  			return question3();
  		break;
  	}

  	responses.push(js);
}

question3();



function question4() {

	var continent = prompt('Which continent is China located in? (only one answer)')
	continent = continent.toLowerCase();

	if (continent.toLowerCase() === 'asia') {
		continent = true
	} 

	else {
		continent = false
	} 

	responses.push(continent);
}

question4();



function question5() {
	var language = prompt('What language is it spoken in Uruguay: Spanish, English, Portuguese or French?');
  	language = language.toLowerCase();
  	switch (language) {
  		case 'english':
  		case 'portuguese':
  		case 'french':
  			language = false
  		break;

  		case 'spanish':
  			language = true
  		break;

  		default: 
  			alert("Please answer either Spanish, English, Portuguese or French");
  			return question5();
  		break;
  	}

  	responses.push(language);
}

question5();



function evaluate(responsesArray) {
	var totals = [];
	var right = 0;
	var wrong = 0;
	responsesArray = responses

	for (var i = 0; i < responses.length; i++) {
		if (responsesArray[i] === true) {
			right += 1;
		}

		else {
			wrong += 1;
		}
	}

	totals.push(right);
	totals.push(wrong);
	user['total'] = totals;

	return showResults(user); 
}

function showResults() {

	alert(user.name + ' has got ' + user.total[0] + ' right answer(s) and ' + user.total[1] + ' wrong answer(s).' )// display the user results
}


evaluate(responses);

