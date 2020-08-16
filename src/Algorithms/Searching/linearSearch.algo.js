function linearSearch(arr, ele){
    
    let ret = 0;

    for(let i = 0;i<arr.length;++i){
        ret++;
        if(arr[i] === ele){
            return [i,ret];
        }
    }
    return [-1,ret];
}

export default linearSearch;