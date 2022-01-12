import './style.css';

const items = [
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

const todos-list = document.getElementById(todos-list);

items.forEach((item) => {
  const list = document.createElement('div');
  const inputcheck= document.createElement('input');
  var paragraph = document.createElement('p');
  const Image = document.createElement('i');

  paragraph.innerHTML= task.description;


  list.appendChild(inputcheck);
  list.appendChild(paragraph);
  list.appendChild(Image);

  todos-list.appendChild(list);


});

