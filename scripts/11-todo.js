const todoArray = [];

function pushList(){
let pushTodoHtml = '';

for(let i=0; i<todoArray.length;i++){

    const todo = todoArray[i];
    const html = `<p>${todo}</p>`;
   // console.log(html);
    pushTodoHtml=pushTodoHtml+html;

    document.querySelector('.js-todo-push').innerHTML = pushTodoHtml;

}
}







function getTodo(){
    const inputElement = document.querySelector('.js-input').value;
   // console.log(inputElement);
    todoArray.push(inputElement);


    pushList();
    //console.log(todoArray);
    document.querySelector('.js-input').value=null;
}