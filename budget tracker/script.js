let expenses = [];

document.getElementById("add-expense").addEventListener("click", function() {
    const expenseInput = document.getElementById("expense").value;
    const expenseAmount = parseFloat(expenseInput);

    if (isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter a valid expense amount in ₹.");
        return;
    }

    expenses.push(expenseAmount);
    document.getElementById("expense").value = "";  // Clear the input field

    // Update the expenses list
    const expenseList = document.getElementById("expense-list");
    const listItem = document.createElement("li");
    listItem.textContent = "₹" + expenseAmount.toFixed(2);
    expenseList.appendChild(listItem);

    updateTotal();
});

document.getElementById("calculate").addEventListener("click", function() {
    const incomeInput = document.getElementById("income").value;
    const income = parseFloat(incomeInput);

    if (isNaN(income) || income <= 0) {
        alert("Please enter a valid income in ₹.");
        return;
    }

    const totalExpenses = expenses.reduce((acc, exp) => acc + exp, 0);
    const remainingBalance = income - totalExpenses;

    document.getElementById("total-expenses").textContent = "Total Expenses: ₹" + totalExpenses.toFixed(2);
    document.getElementById("remaining-balance").textContent = "Remaining Balance: ₹" + remainingBalance.toFixed(2);
});

function updateTotal() {
    const totalExpenses = expenses.reduce((acc, exp) => acc + exp, 0);
    document.getElementById("total-expenses").textContent = "Total Expenses: ₹" + totalExpenses.toFixed(2);
}
