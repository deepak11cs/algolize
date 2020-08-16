import React from 'react';

import LinearSearchInput from '../Inputs/Algorithms/Searching/LinearSearch.input';
import LinearSearchGraph from '../Graphs/Algorithms/Searching/LinearSearch.graph';
import code from '../Algorithms/Searching/linearSearch.sourceCode';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

const Content = ()=>{

    const data = [10, 40, 30, 20, 50, 10];

    return (

        
        <div id="content">

            <h1>Linear Search</h1>
            <div class="cardsContainer">
                <LinearSearchGraph width={450} height={300} data={data}/>
                <LinearSearchInput/>
                <div class="sourceCode">
                    <center><b>Source Code</b></center>
                            <div class="code">
                            <SyntaxHighlighter language="javascript" >
                            {code}
                            </SyntaxHighlighter>
                            </div>
                      
                </div>
            </div>
            

        </div>
    )

}

export default Content;