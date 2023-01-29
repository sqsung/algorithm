const solution = (elements) => {
    const doubled = [...elements, ...elements];
    const sums = [];

    elements.map((_, idx) => {
        const toAdd = [...doubled.slice(idx, idx + elements.length - 1)];

        while (toAdd.length) {
            sums.push(toAdd.reduce((acc, cum) => acc + cum, 0));
            toAdd.pop();
        }
    });

    return new Set(sums).size + 1;
};
