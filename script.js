const Head1 = document.querySelector("h1");
Head1.innerText = "Новый заголовок";

const elements = document.querySelectorAll("li");
for (let i = 0; i < elements.length; i++) {
    elements[i].innerText = elements[i].innerText + (i + 1);
}

const image = document.querySelector("img");
image.setAttribute("src", "https://vetgroom.com.ua/wp-content/uploads/2021/01/pomeranskij-shpic.jpg");

const href2 = document.querySelector("a");
href2.setAttribute("href", "https://vetgroom.com.ua/wp-content/uploads/2021/01/pomeranskij-shpic.jpg");
href2.innerHTML = "<a>Новая ссылка</a>";

const buttonApp = document.querySelector("ul");
const buttonApp1 = document.getElementById("add-item");
buttonApp1.addEventListener("click", myFunc)
function myFunc() {
    const button1 = document.createElement('li');
    button1.textContent = 'новый элемент';
    buttonApp.appendChild(button1);

}

const buttonApp2 = document.getElementById("remove-item");
buttonApp2.addEventListener("click", myFunc2)
function myFunc2() {
    const buttonApp3 = document.querySelectorAll("li");
    const lastelement = buttonApp3[buttonApp3.length - 1];
    const button2 = buttonApp.removeChild(lastelement);
}

const paragraph = document.getElementById("text1");
paragraph.style.color = 'blue';

const buttonApp4 = document.getElementById("change-color");
buttonApp4.addEventListener("click", myFunc3)
function myFunc3() {
    const paragraph1 = document.getElementById("text1");
    paragraph1.style.color = 'red';
}

const buttonApp5 = document.getElementById("toggle-paragraph");
buttonApp5.addEventListener("click", myFunc4)
function myFunc4() {
    const paragraph2 = document.querySelector("p");
    if (paragraph2.style.display == "none") {
        paragraph2.style.display = "block";
    }else
    paragraph2.style.display = "none";
}

const image2 = document.querySelector("img");
var rect = image2.getBoundingClientRect();
console.log(rect);

const buttonApp6 = document.getElementById("widthAndHeight");
buttonApp6.addEventListener("click", myFunc5)
function myFunc5() {
    const image3 = document.querySelector("img");
    const widthandh1 = document.querySelector("div");
    const width1 = image3.getBoundingClientRect().width;
    const height1 = image3.getBoundingClientRect().height;
    widthandh1.innerText = `Ширина:${width1}, высота: ${height1}`;
}


const sending1 = document.getElementById("sending");
sending1.addEventListener("click", myFunc6)
function myFunc6() {
    const name2 = document.getElementById("name1");
    const email2 = document.getElementById("email1");
    if ((name2.value) === "",(email2.value) === "") {
        alert ("Внесите данные");
    }else
    console.log("записаны");
    
}
