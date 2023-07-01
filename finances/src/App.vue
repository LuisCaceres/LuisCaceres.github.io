<script setup lang="ts">
import { statements } from './components/Statements.vue'


class Maths {

  /**
   * 
   * @param values 
   */
  static addition(values) {
    return values.map(value => parseFloat(value)).reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
  }
}




const longTermSavings = [
  `16143.55 SAVINGS`,
  `192.7 SUPPORT FOR DAD AND MUM`,
];




// $30,000 LOAN
const costOfTransfer = 118;
const loanAmount = 30000 + costOfTransfer;

const payments = [
  7500,
  8134.16,
  2000,
  1000,
];

const amountOwed = loanAmount - Maths.addition(payments);



// const payments = [
//   `1000 [CRISTINA PAID]`,
//   `-700 [MUM WITHDREW]`,
//   `-1006.50`,
//   `-1181.41`,
// ];




/**
 * 
 * @param string 
 * @param transactions 
 */
function getValueOf(string, transactions) {
  const pattern = string.split(' ').join('\\s');

  // For example, it matches `23.99` in `23.99 FROM DANNY` and `0.19` IN `0.19 CARD FEE`.
  const regexp = new RegExp(`\\d+(\\.\\d+)?\\s(?=${pattern})`);
  const value = Maths.addition(transactions.map(transaction => transaction.match(regexp)?.[0] || 0));

  return +value.toFixed(2);
}


/**
 * 
 * @param transactions 
 */
function getValueOfExpenses(transactions: [string]) {
  const value1 = getValueOf('OTHERS PAID', transactions);
  const value2 = getValueOf('DANNY PAID', transactions);
  const value3 = Maths.addition(transactions.filter(transaction => {
    return !transaction.includes('CREDIT') && !transaction.includes('RENT');
  }));

  return value3 - value1 - value2;
}


/**
 * 
 * @param transactions 
 */
function getNumberOfEarnedPoints(transactions) {
  const numberOfPoints = Maths.addition(transactions.filter(transaction => {
    return !transaction.includes(`CREDIT`) && !transaction.includes(`PENDING`) && !transaction.includes(`UNSETTLED`);
  }));

  return numberOfPoints.toFixed(2);
}


const transactions = statements.flat();
// TO DO: REGULAR PAYMENTS LIKE TRIP TO MEXICO

const creditCardLimit = 15000;
const pendingBalance = Maths.addition(transactions).toFixed(2);
const settledTransactions = transactions.filter(transaction => !transaction.includes(`PENDING`));
const balance = Maths.addition(settledTransactions).toFixed(2);
const funds = (creditCardLimit - pendingBalance).toFixed(2);
const closingBalance = (Maths.addition(statements.slice(1).flat())).toFixed(2);
const creditCardFees = getValueOf('CARD FEE', transactions);
const numberOfPointsThisStatementPeriod = getNumberOfEarnedPoints(statements[0]);

// OWED BY DANNY
const owedByDanny = getValueOf('DANNY OWES', transactions) + getValueOf('OTHERS OWE', transactions);



// const savings = getValueOf('SAVINGS', longTermSavings);
const supportForDadAndMum = getValueOf('SUPPORT FOR DAD AND MUM', longTermSavings);



const payment = 5953.38;
const savings = 2100;
const rent = 1200;
const withdrawals = Maths.addition([100, 148.45]);
const debt = 1104.31;
const expenses = getValueOfExpenses(statements[0]);
debugger;
const availableFunds = (payment - savings - debt - rent - withdrawals - expenses).toFixed(2);

</script>

<template>
  <h2>Credit Card</h2>
  <p>Funds: <strong>${{ funds }}</strong></p>
  <p>Balance: <strong>${{ balance }}</strong></p>
  <p>Pending balance: <strong>${{ pendingBalance }}</strong></p>
  <p>Closing balance: <strong>${{ closingBalance }}</strong></p>
  <p>Card Fees: <strong>${{ creditCardFees }}</strong></p>
  <p>Points earned in current statement period: <strong>{{ numberOfPointsThisStatementPeriod }}</strong></p>
  <p>Owed: <strong>${{ owedByDanny }}</strong></p>


  <h2>Expenses</h2>
  <p>Available funds this cycle: <strong>${{ availableFunds }}</strong></p>


  <h2>Long Term Savings</h2>
  <p>Support for Dad and Mum: <strong>${{ supportForDadAndMum }}</strong></p>


  <h2>$30,000 Loan</h2>
  <p>Amount owed: <strong>${{ amountOwed }}</strong></p>
</template>

<style scoped></style>