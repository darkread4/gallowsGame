var words = ["салфетка", "переводчик", "английский", "интернет", "тренинг", "корпоратив", 
"вебинар", "дизайнер", "отчётность", "интеграция", "сникерс", "активность", "консультант"];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for(var i = 0; i < word.length; i++){
	answerArray[i] = " _ ";
}

var remainingLetters = word.length;
var guesses = 20;

while(remainingLetters > 0 && guesses > 0){
	alert(answerArray.join(" "));
	
	var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры");
	if(guess === null){
		break;
	}	else if(guess.length !== 1){
		alert("Пожалуйста, введите только букву.");
	}	else {
		guesses--;
		guess = guess.toLowerCase();
		for(var j = 0; j < word.length; j++){
			if(word[j] === guess && answerArray[j] === " _ ") {
				answerArray[j] = guess;
				remainingLetters--;
			}
		}
	}
}

alert(answerArray.join(" "));
if (guesses > 0){
	alert("Отлично! Было загадано слово " + word);
} else {
	alert("Ты проиграл :( Было загадано слово " + word);
}