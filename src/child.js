import React from "react";
class Child extends React.Component{
    state={
        child:55,
        parentFlag:this.props.parentFlagValue
    }
    sendToParent=()=>{
        this.props.valueFromChild(this.state.child)
    }
    render(){
        return(
            <>
            <div>its child</div>
            <div>Flag from parent is....{this.props.parentFlagValue}</div>
            </>
        )
    }
}
export default Child;