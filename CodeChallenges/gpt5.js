// const flattenArray = arr => {
//     const flattenarr = [];

//     for(let i=0; i < arr.length; i++){
//         if(typeof arr[i] == "object"){
//             for(let j = 0; j < arr[i].length; j++){
//                 flattenarr.push(arr[i][j])
//             }
//         }else{
//             flattenarr.push(arr[i])
//         }
//     }

//     return flattenarr;
// };

const spreadArr = arr => {

}

const flattenArray = arr => {
    const flattenarr = [];

    for(let i=0; i < arr.length; i++){
        if(typeof arr[i] == "object"){
            //
        }else{
            flattenarr.push(arr[i]);
        }
    }

    return flattenarr;
};

console.log(flattenArray([1, 2, [3, 4, [5, 6]], 7]));


