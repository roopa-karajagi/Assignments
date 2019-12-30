let stringNorm = function(stringToChange)
{
    let replacedString;
    // replacedString= stringToChange.replace("-", "\");
    replacedString = stringToChange.replace(/-/g, "/");

    return replacedString;
}

console.log(stringNorm("Mid-Way-Happen"));