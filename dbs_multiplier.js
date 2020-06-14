{
    const interestRateTable = [
        [0.05, 0.05, 0.05],
        [1.40, 1.80, 2.00],
        [1.60, 2.00, 2.20],
        [1.80, 2.20, 2.40],
        [1.90, 2.30, 2.50],
        [2.00, 3.50, 3.80],
    ];

    function ConvertToMonthlyInterest(annualInterest) {
        return Math.pow(1 + annualInterest / 100.0, 1.0 / 12) - 1;
    }

    function DBS_Multiplier(accountBalance, monthlySalary, creditCardSpending, checkInsurance, checkInvestment) {
        if (monthlySalary === 0) {
            return 0;
        }

        const totalEligibleTransaction = monthlySalary + creditCardSpending;

        let interestRates = [];
        if (totalEligibleTransaction < 2000) {
            interestRates = interestRateTable[0];
        } else if (totalEligibleTransaction < 2500) {
            interestRates = interestRateTable[1];
        } else if (totalEligibleTransaction < 5000) {
            interestRates = interestRateTable[2];
        } else if (totalEligibleTransaction < 15000) {
            interestRates = interestRateTable[3];
        } else if (totalEligibleTransaction < 30000) {
            interestRates = interestRateTable[4];
        } else {
            interestRates = interestRateTable[5];
        }

        let transactionCategories = 0;
        if (monthlySalary > 0) {
            transactionCategories++;
        }
        if (checkInsurance) {
            transactionCategories++;
        }
        if (checkInvestment) {
            transactionCategories++;
        }

        let interest = 0;
        switch (transactionCategories) {
            case 1:
                interest += Math.min(25000, accountBalance) * ConvertToMonthlyInterest(interestRates[0]);
                break;
            case 2:
                interest += Math.min(50000, accountBalance) * ConvertToMonthlyInterest(interestRates[1]);
            case 3:
                if (accountBalance > 50000) {
                    interest += Math.min(50000, accountBalance - 50000) * ConvertToMonthlyInterest(interestRates[2]);
                }
                break;
            default:
                console.log("DBS Multiplier: Too many categories!");
        }

        return interest;
    };
}