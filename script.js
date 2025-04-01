
let inputfield = document.getElementById('inputtext');

let amount = document.getElementById('amount')

let category = document.getElementById('category')

let display = document.getElementById('main2')

let displayagain = document.getElementById('main')

let show = document.getElementById('show')

let array = [];

function listOfDisplay() {
    show.innerHTML = '';

    array.forEach((items, index) => {
        const list = document.createElement('li')
        list.classList.add('listed')
        list.textContent = ` Item: ${items.task}
           `;
          const amount = document.createElement('p')
          amount.classList.add('lists')
          amount.textContent = `Amount: ${items.amount} `;
          const categoryList = document.createElement('span');
          categoryList.classList.add('category-list'); 
          categoryList.textContent = `Category: ${items.category} `;
      

    let dateInput = document.createElement('p');
    dateInput.classList.add('p-tag')
        dateInput.innerText
         = 'date: ' +  new Date()
        

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.classList.add('check')
        checkbox.addEventListener('click', function () {
            alert('task completed')
        })
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('deletebtn');
        deleteButton.classList.add('delete')
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            alert('still coming back to this place')
            array.splice(index, 1)
        })
        console.log(dateInput.innerText);

list.appendChild(categoryList)
list.appendChild(dateInput)
        list.appendChild(checkbox);
        list.appendChild(deleteButton);
        show.appendChild(list);
    })
}

function toAddToArray(task) {
    const newArray = { task }

    array.push(task)

    listOfDisplay()
}



function addTask() {
    let selectedCategory = category.value
    let double = (category.value === 'Food' || category.value === 'Entertainment' || category.value === 'Travel')
    console.log(double);



    if (inputfield.value !== '' && amount.value !== '' && double) {
        const perTask = inputfield.value.trim();
        let newAmount = parseFloat(amount.value);

       



        if (perTask && newAmount) {
            toAddToArray({ task: perTask, amount: newAmount, category: selectedCategory,  });
            inputfield.value = '';
            amount.value = '';
            category.selectedindex = 0
        } else {
            alert('pls input something jor')
        }
    } else {
        alert('dey play')
    }

}
function sortByDate() {
    array.sort((a, b) => new Date(a.date) - new Date(b.date));
}

function page1(){
display.style.display = 'none' 
displayagain.style.display = 'block' 
show.style.display = 'none'  
}

function page2(){
    display.style.display = 'block'
   displayagain.style.display = 'none' ;
    show.style.display = 'block'  
}