function ocbc360(account_balance, monthly_salary, target_monthly_savings, insurance, investment) {

    ocbc360_base = 0.05
    ocbc360_salary = 0.6;
    ocbc360_salary_threshold = 1800;
    ocbc360_save = 0.2;
    ocbc360_save_threshold = 500;
    ocbc360_wealth = 0.6;
    ocbc360_grow = 0.8;
    ocbc360_grow_threshold = 200000;

    interest_rate_annum = ocbc360_base;
    if (monthly_salary >= ocbc360_salary_threshold) {
        interest_rate_annum += ocbc360_salary;
    }
    if (target_monthly_savings >= ocbc360_save_threshold) {
        interest_rate_annum += ocbc360_save;
    }
    if (insurance || investment) {
        interest_rate_annum += ocbc360_wealth;
    }

    extra_interest_rate_annum = 0;
    if (account_balance >= ocbc360_grow_threshold) {
        extra_interest_rate_annum += ocbc360_grow;
    }

    first_balance = Math.min(account_balance, 35000)
    second_balance = Math.max(Math.min(account_balance, 70000) - 35000, 0)

    interest_amount = first_balance * annumToMonth(interest_rate_annum/100 + extra_interest_rate_annum/100)
    interest_amount += second_balance * annumToMonth(interest_rate_annum/100*2 + extra_interest_rate_annum/100)

    return interest_amount;

}

function annumToMonth(rate_annum) {
    return Math.pow((1 + rate_annum), 1/12) - 1;
}
