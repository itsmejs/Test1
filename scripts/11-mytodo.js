const myTodoArray = [];

function pushElement(){
    let pushHTML =''

    for(let i=0; i<myTodoArray.length; i++){
        let todo = myTodoArray[i];
        let html =`<p>${todo}</p>`;
        pushHTML=pushHTML+html;


        document.querySelector('.js-push-todo').innerHTML = pushHTML;
    }

    

}

function addTodo() {
    const todoElemnt = document.querySelector('.js-input-todo').value;
    console.log(todoElemnt);

    myTodoArray.push(todoElemnt);
    pushElement();
    console.log(myTodoArray);
    document.querySelector('.js-input-todo').value = null;
}