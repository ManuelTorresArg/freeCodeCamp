
function steamrollAway(arr, resultArray = []){

    for(let i=0 ; i < arr.length ; i++) {
        if(typeof arr[i]=='number' || typeof arr[i]=='string') resultArray.push(arr[i])
        else resultArray.push(steamrollAway(arr[i], resultArray));
    }
    return resultArray.filter((item) => (typeof item=='number' || typeof item=='string'));
};

//console.log(steamrollAway([[["a"]], [["b"]]]) );//should return ["a", "b"].

//console.log(steamrollAway([1, [2], [3, [[4]]]])); //should return [1, 2, 3, 4].

//console.log(steamrollAway([1, [], [3, [[4]]]]));//should return [1, 3, 4].

console.log(steamrollAway([1, {}, [3, [[4]]]]));//should return [1, {}, 3, 4].