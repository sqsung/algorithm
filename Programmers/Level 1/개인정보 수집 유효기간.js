function solution(today, terms, privacies) {
    const $TERMS = terms.map((term) => {
        const [type, months] = term.split(" ");
        return { type: type, months: +months };
    });

    const $TODAY = new Date(today);

    const $PRIVACIES = privacies.map((privacy) => {
        const [registeredDate, type] = privacy.split(" ");
        return { type: type, registeredDate: new Date(registeredDate) };
    });

    const TO_DELETE = $PRIVACIES.map(($PRIVACY) => {
        const SINCE_REGISTRATION = ($TODAY - $PRIVACY.registeredDate) / 1000 / 60 / 60 / 24 / 28;
        const [TARGET] = $TERMS.filter(($TERM) => $TERM.type === $PRIVACY.type);

        console.log(SINCE_REGISTRATION);
        console.log(TARGET.months);

        return SINCE_REGISTRATION > TARGET.months ? $PRIVACIES.indexOf($PRIVACY) + 1 : "x";
    });

    return TO_DELETE.filter((index) => index !== "x");
}

console.log(
    solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])
);
