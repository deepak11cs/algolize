import React, {useState} from 'react';

import linearSearch from '../../../Algorithms/Searching/linearSearch.algo';

const LinearSearchInput = ()=>{

    const [arrayInput, updateArrayInput] = useState([]);
    const [arrayOutput, updateOutput] = useState([]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        let arr = event.target.inputArray.value;
        let queryElement = event.target.searchElement.value;
        queryElement = Number(queryElement.trim());
        arr = arr.split(' ').reduce((result,ele) => {
            if(ele){
                ele = Number(ele);
                if(!isNaN(ele))
                    result.push(Number(ele));

            }
            return result;
        },[]);
        updateArrayInput(arr);
        updateOutput(linearSearch(arr,queryElement));
        //console.log(arr,linearSearch(arr,queryElement));
    }

    return (

        <div class="input">
            <form onSubmit={handleSubmit}>
                <label for="inputArray">Input Array</label><br/>
                <input type="text" name="array" placeholder="Enter space separated elements" id="inputArray"/><br/>
                <label for="searchElement">Element to search</label><br/>
                <input type="text" name="search" placeholder="Enter the element to search" id="searchElement"/><br/>
                <button type="submit" name="Search">Search</button>
            </form>
            <br/><br/>
            {arrayInput.length > 0 && <>
            Output<br/>

            <div>
                {arrayOutput[0]!==-1 && "Element found at index: "+arrayOutput[0]}<br/>
                {arrayOutput[0]===-1 && "Element Not Found!!!"}
                {"Comparisions: "+arrayOutput[1] }</div></>}
        </div>
    )

}

export default LinearSearchInput;