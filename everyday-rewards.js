// Discount applied to the total cost shown on the receipt.
const discount = parseFloat(prompt('Discount that applies to this receipt:')) / 100;

class Maths {
  static addition(values) {
    return values.map(value => parseFloat(value)).reduce((accumulator, value) => {
        return accumulator + value;
    });
  }
}

const receipt = document.querySelector('.ereceipt-inner-modal-block');

// Format receipt because items that span two lines vertically aren't grouped in the DOM.
// Before:
// <div class="items">Betroort Loose</div>
// <div class="items">1.482 kg NET @ $6.50/kg</div>
// After:
// <div class="items">
//  Betroort Loose
//  1.482 kg NET @ $6.50/kg
// </div>
receipt.querySelectorAll('p:has(+ span:empty)').forEach(element => {
  const parent = element.closest('.items');
  const sibling = parent.nextElementSibling;
  sibling.prepend(element);
  element.style.display = 'block';
  parent.remove();
});

const html = `
    <div class="luis-container">
       <input type="checkbox">
    
      <fieldset>
        <legend>Choose a buyer:</legend>
        <label>
          <input type="radio" name="buyer">
          Luis
        </label>
        <label>
          <input type="radio" name="buyer">
          Danny
        </label>
        <label>
          <input type="radio" name="buyer">
          Both
        </label>
      </fieldset>
  
      <p>
        <!-- This a button that, when pressed, calculates how much someone owes based on the number of the checkboxes checked on the receipt. -->
        <button type="button" class="calculate">Calculate</button>
      </p>
  
      <p>
        Applied discount is ${discount * 100}%
      </p>
  </div>
`;

const container = (new DOMParser).parseFromString(html, 'text/html').querySelector('.luis-container');

// This is the total amount shown on the receipt. For example, '273.26'.
const total = +document.querySelector('.heading-main.font-34').innerText.trim().slice(1);

// Get a reference to each price shown on the receipt.
const items = [...receipt.querySelectorAll('.price:not(:empty)')]
    .slice(1, -1);

// Insert a checkbox to the right of each price on the receipt.
items.forEach(item => {
    const input = container.querySelector('input').cloneNode();
    item.append(input);
});

container.querySelector('button').addEventListener('click', calculate);
receipt.append(container);

// Calculate how much someone owes based on the number of the checkboxes checked on the receipt.
function calculate() {
    // Get the total cost of the items I purchased.
    const myItems = Maths.addition(items.filter(item => item.matches(':has(:checked)')).map(item => item.innerText));

    // Apply discount.
    const myTotal = +(myItems - (myItems * discount)).toFixed(2)

    // Find out how much the other person owes.
    const hisTotal = +(total - myTotal).toFixed(2);

    if (+(myTotal + hisTotal).toFixed(2) !== total) {
      throw Error('my total and his total combined not equal to the total cost shown in the receipt.');
    }

    console.log(`My total before ${discount * 100}% is applied: ${myItems}`);
    console.log(`My total after ${discount * 100}% is applied: ${myTotal}`);
    console.log(`The other person pays: ${hisTotal}`);
}

const style = document.createElement('style');
style.innerText = `
    .luis-container *,
    input[type=checkbox] {
      all: revert !important;
      white-space: normal !important;
    }
    
    .price:has(:checked) {
        background-color: gold;
    }

    .items {
      border-top: solid;
    }
`;

document.body.append(style);
