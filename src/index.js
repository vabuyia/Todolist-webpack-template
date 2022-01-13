/* eslint-disable no-plusplus */
/* eslint-disable-next-line no-plusplus */

const listElement = document.querySelector('ul');

const taskList = [
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
];

function populateList() {
  for (let i = 0; i < taskList.length; i++) {
    const newItem = document.createElement('li');

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.className = 'box';
    newItem.appendChild(inputCheckbox);
    inputCheckbox.style.marginRight = '10px';

    const spanElement = document.createElement('span');
    spanElement.innerHTML = taskList[i].description;
    newItem.appendChild(spanElement);

    const anchorElement = document.createElement('a');
    anchorElement.classList.add('delete');
    anchorElement.innerHTML = '<i class="fas fa-trash-alt"></i>';
    anchorElement.style.float = 'right';
    anchorElement.style.paddingLeft = '150px';

    newItem.appendChild(anchorElement);

    listElement.appendChild(newItem);
  }
}

populateList();
