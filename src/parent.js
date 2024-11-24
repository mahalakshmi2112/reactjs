import React from 'react';
import Child from './child';
class Parent extends React.Component{
    state={
        flag:'true'
    }
    valueFromChild=(receivedValue)=>{
        console.log('---received----', receivedValue)
    }
    render(){
        return(
            <>
            <Child parentFlagvalue={this.state.flag} valueFromChild={this.valueFromChild}/> 
            </>
        )
    }
}
export default Parent;