const myArray = [];

function addString(){
    let name = document.querySelector('.js-input-element').value;
    console.log(name);
    myArray.push(name);
    console.log(myArray);
    pushToPage();
    document.querySelector('.js-input-element').value = null;
}

function pushToPage(){
    let containerr = '';
    for(let i=0; i<myArray.length; i++){
      let listId = myArray[i];
      let html = `${listId} <br>`
      containerr = containerr + html;  
    }
    document.querySelector('.js-push-element').innerHTML = containerr;

}




function checkString(){

    let searchText = document.querySelector('.js-search-btn').value;
    console.log( searchText);
    for(let i=0; i<myArray.length; i++){
        if(myArray[i]==searchText){
            alert(`${searchText} is found at ${i} index`);
            console.log('herrrr');
            break;
        } else {
            return console.log('-1');
        }

        console.log('yyyyyyyyyy');

    }
    document.querySelector('.js-search-btn').value=null;
}