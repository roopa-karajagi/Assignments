let midRange = function(givenArray)
{
    let len = givenArray.length;
    let givenArraySort=givenArray.sort(function(a,b){return b-a});
    console.log(givenArraySort)
        let mean = (givenArraySort[0]+givenArraySort[len-1])/2;
        return mean;

    //     let add=0;
    //     for(i=0;i<len;i++)
    //     {
    //         add+=givenArray[i];
    //     }
        
    //    let  Mean=(add/len);
    //     return Mean;
}

var midArray=[6, 11, 7];

console.log(midRange(midArray));