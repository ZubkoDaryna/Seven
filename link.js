// onload: виконується після завантаження сторінки
window.onload = function() {
    alert("Вітаю. Сторінка повністю завантажена!");
};

window.onresize = function() {
    alert("Розмір вікна браузера змінився.");
};

function imageDoubleClick(element) {
    alert("Ви подвійно клацнули на зображенні!");
 }
 function mouseOut(element) {
    alert("Миша вийшла з області зображення");
 }

 function mouseUp(event) {
    alert("Кнопка миші відпущена. Координати: X=" + event.clientX + ", Y=" + event.clientY);
 }

 

 function imageClick(imageName) {
    alert('Clicked on ' + imageName);
}

document.getElementById('Image2').onmouseover = function() {
    alert('Mouse over Image 2');
};

// Обробник для відведення миші
document.getElementById('Image5').onmouseout = function() {
    alert('Mouse out of Image 5');
};

function runTask() {

    var links = ["Link 1", "Link 2", "Link 3"];

    var outputTextarea = document.getElementById('outputTextarea');
    outputTextarea.value = links.join('\n');
}


function searchInfo() {
    const inputText = document.getElementById('inputText').value;
    const regex = /\d/g; // Регулярний вираз для пошуку цифр

    const matches = inputText.match(regex);
    const count = matches ? matches.length : 0;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Кількість цифр у тексті: ${count}`;
}

