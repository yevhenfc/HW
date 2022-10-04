let counter = 0;

const todoContainer = document.querySelector('todo_container');
const tasks         = document.getElementById('tasks');
const addBtn        = document.getElementById('addBtn');
const rmBtn         = document.getElementById('rmBtn');
const entryField    = document.getElementById('entryField');

addBtn.addEventListener('click', (e) => {
    if(entryField.value.length == 0) return;
    counter ++;
    const task = document.createElement('li');
    task.append(addDate());
    task.append(addText());
    task.append(addCheckbox());
    tasks.append(task);
    entryField.value = '';
    funEdit(task);
})

function addDate() {
    const addDate = document.createElement('span');
    addDate.classList.add('addDate');
    const date = new Date();
    addDate.innerText = `${date.getDate()}:${date.getMonth()+1}:${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`; 
    return addDate
}

function addText() {
    const addText = document.createElement('span');
    addText.classList.add('addText')
    addText.title = "Double click to edit";
    addText.innerText = entryField.value;
    return addText
}

function addCheckbox() {
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.classList.add('checkbox');
    return check
}

rmBtn.addEventListener('click', (e) => {
    const deleted = document.querySelectorAll(".checkbox[type='checkbox']:checked");
    deleted.forEach( el => console.log(el.parentNode.remove()));
});

function funEdit(el) {
    el.addEventListener('dblclick', function(){
        const content = el.querySelector('.addText');
        if (content.contentEditable != 'true') {content.contentEditable = 'true'} 
        else {content.contentEditable = 'false'}
    })
    
}
