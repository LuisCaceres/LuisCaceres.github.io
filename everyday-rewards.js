// Monthly discount applied to the total cost shown on the receipt.
const discount = 0.10;

class Maths {
  static addition(...values) {
    return values.map(value => parseFloat(value)).reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
  }
}

const receipt = document.querySelector('.ereceipt-inner-modal-block');

// The total cost shown on the receipt. For example, '273.26'.
const total = +document.querySelector('.heading-main.font-34').innerText.trim().slice(1);

// Get a reference to each price shown on the receipt.
const items = [...receipt.querySelectorAll('.price')]
    .slice(1, -1)
    .filter(element => element.innerText !== '');

// Insert a checkbox to the right of each price on the receipt.
items.forEach(item => {
    const input = document.createElement('input');
    
    input.type = 'checkbox';
    input.style.all = 'revert';
    item.append(input);
});

// Insert a button that, when pressed, calculates how much someone owes 
// based on the number of the checkboxes checked on the receipt.
const button = document.createElement('button');

button.type = 'button';
button.innerText = 'Calculate';
button.classList.add('calculate');

receipt.append(button);

button.addEventListener('click', calculate);

// Calculate how much someone owes based on the number of the checkboxes checked on the receipt.
function calculate() {
    // Get the total cost of the items I purchased.
    const myItems = Maths.addition(...items.filter(item => item.matches(':has(:checked)')).map(item => item.innerText));

    // Apply discount.
    const myTotal = (myItems - (myItems * discount)).toFixed(2);

    // Find out how much the other person owes.
    const hisTotal = (total - myTotal).toFixed(2);

    if (+myTotal + +hisTotal !== total) {
      throw Error('my total and his total combined not equal to the total cost shown in the receipt.');
    }

    console.log(`My total before 10% is applied: ${myItems}`);
    console.log(`My total after 10% is applied: ${myTotal}`);
    console.log(`The other person pays: ${hisTotal}`);
}

const style = document.createElement('style');
style.innerText = `
    .calculate {
        margin-top: 2rem;
    }

    .price:has(:checked) {
        background-color: gold;
    }
`;

document.body.append(style);
