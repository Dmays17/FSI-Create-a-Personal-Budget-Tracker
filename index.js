let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for(let i=0 ;i < weeklyExpenseQuestions.length; i ++){
    let weeklyAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + weeklyAnswer    
}

for(let i=0;i < monthlyExpenseQuestions.length; i++){
    let monthlyAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + monthlyAnswer
}

for(let i=0;i < annualExpenseQuestions.length; i++){
    let annualAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + annualAnswer
}
