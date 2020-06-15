function UOB_One(accountBalance, monthlySalary, creditCardSpending, checkGiro) {
    function AnnumToMonth(annumRate) {
        return Math.pow((1 + annumRate / 100), 1 / 12) - 1;
    }
    
    const base_interest = 0.05;
    if (creditCardSpending < 500) {
        return accountBalance * AnnumToMonth(base_interest);
    }

    if (monthlySalary < 2000 && !checkGiro) {
        const interest_rate_a = 0.5;
        return Math.min(75000, accountBalance) * AnnumToMonth(interest_rate_a) + Math.max(0, accountBalance - 75000) * AnnumToMonth(base_interest);
    }

    let interest = 0;
    interest += Math.min(15000, accountBalance) * AnnumToMonth(1.25);
    if (accountBalance > 15000)
        interest += Math.min(15000, accountBalance - 15000) * AnnumToMonth(1.3);
    if (accountBalance > 30000)
        interest += Math.min(15000, accountBalance - 30000) * AnnumToMonth(1.35);
    if (accountBalance > 45000)
        interest += Math.min(15000, accountBalance - 45000) * AnnumToMonth(1.4);
    if (accountBalance > 60000)
        interest += Math.min(15000, accountBalance - 60000) * AnnumToMonth(3.68);
    if (accountBalance > 75000)
        interest += (accountBalance - 75000) * AnnumToMonth(0.05);

    return interest;
}
