import React from 'react';
import Panel from './components/Panel';
import Content from './components/Content';

import "./style/id-styles.css";

const Dashboard = ()=>{

    return (

        <div id="algoDashboard">
            <Panel/>
            <Content/>  
        </div>
        
    )

}

export default Dashboard;