const inputElement = document.querySelector('input')
const formElement = document.querySelector('form')
const listElement = document.querySelector('ul')
const totalTasksElement = document.querySelector('#total-tasks')
const buttonElement = document.getElementById(btn)

let taskList = [
  {
    description: 'Eating supper.',
    completed: false,
    index: 1,
  },
  {
    description: 'Going to the Gym.',
    completed: false,
    index: 3,
  },
  {
    description: 'Hunging with friends.',
    completed: false,
    index: 2,
  },
  {
    description: 'Attending music concert.',
    completed: false,
    index: 4,
  },
]

function populateList() {
  //taskList.forEach(function(item){
  for (let i = 0; i < taskList.length; i++) {
    let newItem = document.createElement('li')

    //Add checkbox
    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = 'checkbox'
    inputCheckbox.className = 'box'
    newItem.appendChild(inputCheckbox)
    inputCheckbox.style.marginRight = '10px'

    //Add new span for text
    let span = document.createElement('span')
    span.innerHTML = taskList[i].description
    newItem.appendChild(span)

    //Add edit button
    const editElement = document.createElement('button')
    editElement.innerHTML = '<i class="fas fa-edit"></i>'
    editElement.classList.add('edit')
    newItem.appendChild(editElement)
    editElement.style.float = 'center'
    editElement.style.color = 'blue'

    //Add delete button
    let anchorElement = document.createElement('a')
    anchorElement.classList.add('delete')
    anchorElement.innerHTML = '<i class="fas fa-trash-alt"></i>'
    anchorElement.style.float = 'right'
    anchorElement.style.paddingLeft = '150px'
    anchorElement.style.color = 'red'

    newItem.appendChild(anchorElement)

    //add Li to UL
    listElement.appendChild(newItem)

    totalTasksElement.innerHTML = taskList.length

    //buttonElement.addEventListener("click", function(){
  }
}

populateList()
