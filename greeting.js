const form = document.querySelector(".js-form");
const input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    event.preventDefault();
    const current = input.value;
    paintGreeting(current);
    saveName(current);//이름 보내기
}
//4 현재이름 없을때 이름 저장하는 곳으로 보내기
function askForName(){
    form.classList.add(SHOWING_CN)
    form.addEventListener("submit", handleSubmit)
}

//3 이름 있을 때 표시하자
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);//폼을 숨기고
    greeting.classList.add(SHOWING_CN);//있는 이름 보여준다
    greeting.innerText = `hello ${text}`
    
}
//2 현재 이름 있나 없나 검사한다
function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
        //she is not.
        askForName();
    }else{
        //she is
        paintGreeting(currentUser)
    }
}
//1
function init(){
    loadName();
}

init();