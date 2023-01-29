const solution = (wants, quantities, allDiscounts) => {
    let validDaysForRegister = 0;
    const wantsByQty = {};
    wants.forEach((want, idx) => (wantsByQty[want] = quantities[idx]));

    let start = 0;
    while (allDiscounts.slice(start, start + 10).length === 10) {
        const discounts = allDiscounts.slice(start, start + 10);
        const discountsByQty = {};
        discounts.forEach((discount) =>
            discountsByQty[discount] ? discountsByQty[discount]++ : (discountsByQty[discount] = 1)
        );

        let matched = [];
        for (const key of Object.keys(discountsByQty)) {
            if (wantsByQty[key] === discountsByQty[key]) matched.push(key);
        }

        matched.length === wants.length ? validDaysForRegister++ : validDaysForRegister;
        matched = [];
        start++;
    }
    return validDaysForRegister > 0 ? validDaysForRegister : 0;
};
