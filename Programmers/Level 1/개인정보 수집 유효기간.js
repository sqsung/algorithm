function solution(today, terms, privacies) {
    const $TODAY = today.split(".").map((dateComponent) => +dateComponent);

    const $TERMS = terms.map((term) => {
        const [type, months] = term.split(" ");
        return { type: type, deleteAfter: +months };
    });

    const $PRIVACIES = privacies.map((privacy) => {
        const [registeredDate, type] = privacy.split(" ");
        return {
            type: type,
            registered: registeredDate
                .slice(0, 10)
                .split(".")
                .map((num) => +num),
        };
    });

    const TO_DELETE = $PRIVACIES.map(($PRIVACY, idx) => {
        const [TARGET] = $TERMS.filter(($TERM) => $TERM.type === $PRIVACY.type);

        const Y = ($TODAY[0] - $PRIVACY.registered[0]) * 12;
        const M = $TODAY[1] - $PRIVACY.registered[1];
        const D = $TODAY[2] - $PRIVACY.registered[2];
        return Y + M > TARGET.deleteAfter ? idx + 1 : Y + M === TARGET.deleteAfter && D >= 0 ? idx + 1 : "X";
    });

    return TO_DELETE.filter((deletables) => deletables !== "X");
}

// console.log(
//     solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])
// );

// console.log(
//     solution(
//         "2020.01.01",
//         ["Z 3", "D 5"],
//         ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
//     )
// );
