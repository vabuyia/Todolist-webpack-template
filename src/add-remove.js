import _ from 'lodash';
const parentNode = document.querySelector('.parent-node');

const itemsArr = [];

const tasksListShow = (itemsArr) => {
  parentNode.innerHTML = '';
  if (itemsAlenght > 0) {
    itemsArr.forEach((itme) => {
      parentNode.insertAdjacentHTML(
        'beforeend',
        `<li><input type="checkbox" class="box"><span> ${} </span> <input type="button" class="edit"><a href="" class="delete" > delete </a> </li?`
        );
        handleItem(item);
      
    });
  }
};

const getItems = () => {
  const storeItems = localStorage.getItem('itemArr');
  if (storeItems === 'undefined' || storeItems == null) {
    itemsArr = [];
  } else {
    itemsArr = JSON.parse(storeItems);
  }
  tasksListShow();
};

const saveLocalStorage = (itemsArr) => {
  localStorage.setItem('itemsArr', JSON.stringify(itemsArr));
};
