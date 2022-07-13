function capitalizer(str) {

    str = str.toLowerCase().split(" ");
    let capitalized = "";

    for (let x = 0; x < str.length; x++) {
        capitalized += (str[x][0].toUpperCase() + 
        str[x].substring(1) + " ");
    }
    return capitalized.trimEnd();
}

console.log(capitalizer("tHiS iS a sTrIng!"));