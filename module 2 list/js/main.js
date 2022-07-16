// mockup start
const list = [
    'Alex',
    'Oleg',
    'Olena'
];
// mockup end


const $ul = document.querySelector('ul#list');

const removeItem = ($element) => {
    $ul.removeChild($element);
};

const addItem = (item) => {
    const $li = document.createElement('li');
    $li.innerText = item;
    $li.addEventListener('click', (event) => {
        // console.log(
        //     event.target,
        //     $li,
        //     event.target === $li
        // );
        removeItem(event.target);
    });
    $ul.appendChild($li);
};

const updateItem = () => {};

list.forEach((el, index) => {
    addItem(el);
});


// FORM PATH
const $form = document.querySelector('form#user');
const $input = $form.querySelector('input[name="user_name"]');
const $submitButton = document.getElementById('submit');
const $errorMessage = document.getElementById('error');

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = $input.value;
    // check validation
    if (value.length >= 2 && list.length < 10) {
        addItem(value);
        list.push(value);
        
    } else if (list.length === 10) { 
        list.push(value);
    };
  
    if (list.length >= 11) {
        $submitButton.disable = true;
        $submitButton.classList.add('disable');
        $input.classList.add('error');
        $errorMessage.classList.remove('hide');
        $errorMessage.classList.add('show');
        return;
    } else {
        $input.classList.remove('error');
        $errorMessage.classList.remove('show');
        $errorMessage.classList.add('hide');
        $submitButton.disable = false;
        $submitButton.classList.remove('disable');
    }
    $input.value = '';
    $form.reset();
});












