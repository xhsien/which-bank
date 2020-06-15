function BOC_SmartSaver(accountBalance, monthlySalary, creditCardSpending, checkGiro) {
    function AnnumToMonth(annumRate) {
        return Math.pow((1 + annumRate / 100), 1 / 12) - 1;
    }

    let baseInterest = 0;
    if (accountBalance < 5000) {
    	baseInterest = 0.25;
    } else if (accountBalance < 20000) {
    	baseInterest = 0.275;
    } else if (accountBalance < 50000) {
    	baseInterest = 0.35;
    } else if (accountBalance < 100000) {
    	baseInterest = 0.4;
    } else {
    	baseInterest = 0.475;
    }
    
    let interestRate = 0;
    if (creditCardSpending >= 1500) {
    	interestRate += 1.6;
    } else if (creditCardSpending >= 500) {
    	interestRate += 0.8;
    }

    if (monthlySalary >= 6000) {
    	interestRate += 1.2;
    } else if (monthlySalary >= 2000) {
    	interestRate += 0.8;
    }

    if (checkGiro) {
    	interestRate += 0.35;
    }

    const extraBonusInterest = (interestRate > 0 ? 0.6 : 0);

    const interest = accountBalance * AnnumToMonth(baseInterest) + Math.min(60000, accountBalance) * AnnumToMonth(interestRate) + Math.min(100000, accountBalance) * AnnumToMonth(extraBonusInterest);

    return interest;
}