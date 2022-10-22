const solution = (n,k) => {
    let yes = n.toString().split('').indexOf(k.toString());
    return yes === -1 ? -1 : ++yes;
}