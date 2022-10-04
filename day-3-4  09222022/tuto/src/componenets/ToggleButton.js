import React from "react";

export default class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }




    render(){
        return(
            <div
            
            onClick={ ()=>{
                this.setState({ active: ! this.state.active })
            } }
            
            className= {   this.state.active === false ? 'toggle-button' : "toggle-button active"   } >
                <div></div>
            </div>
        );
    }
}
