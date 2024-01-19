const myArray = [];

function getElement(){
    let todoElement = document.querySelector('.js-input-Elemnt').value;

    if(todoElement ==="" ){
        alert("Please enter Todo");
        return;
    } 

    let dateElement = document.querySelector('.js-input-date').value;
        todoElement = todoElement.toUpperCase();

    myArray.push({
        name : todoElement,
        dueDate : dateElement

    });

    addElement();
    document.querySelector('.js-input-Elemnt').value = null;
}
 

function addElement(){
    let pushElement='';
    
    for(let i=0; i<myArray.length;i++){
        const {name,dueDate} = myArray[i];
        let html = `
            
           <div class = "todo-pushed"> ${name} </div>
            <div class = "todo-pushed">${dueDate} </div>
           <button onclick = "
                myArray.splice(${i},1);
                addElement();
            " class = "todo-list">Delete</button> 
         
        `;
        pushElement = pushElement + html;
        console.log(pushElement);
    }
    document.querySelector(".js-push-todo-element").innerHTML = pushElement;
    
}