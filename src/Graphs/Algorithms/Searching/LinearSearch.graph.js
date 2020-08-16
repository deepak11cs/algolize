import React from 'react';
import Plot from 'react-plotly.js';

const LinearSearchGraph = ({width, height})=>{

    let x = [];
    for(let i = 10;i<=100;i+=5){
        x.push(i);
    }

    let yworst = [];
    let ybest = [];
    let yaverage = [];
    for(let i in x){
        ybest.push(1);
        yaverage.push(x[i]/2);
        yworst.push(x[i]);
    }


    

    return (

        <div class="graph">

            <Plot data={[{
                    x: x,
                    y: ybest,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'green'},
                    name: "Best"
                },{
                    x: x,
                    y: yaverage,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'orange'},
                    name: "Average"
                },{
                    x: x,
                    y: yworst,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                    name: "Worst"
                }
            ]} layout={{width: width-10,height: height-10, title: "Comparisions vs Input-Size", legend:{0: 0}}}/>

        </div>

    )

}

export default LinearSearchGraph;