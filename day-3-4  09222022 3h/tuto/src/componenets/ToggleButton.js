import React from "react";

export default class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: false,
            changeModeAction : props.changeModeAction
        }
    }
 

    changeMode(){
        this.setState({ active: ! this.state.active })
    }

    render(){
        return(
            <div
            
            onClick={ ()=>{
               
                this.changeMode();

                this.state.changeModeAction();
                
            } }
            
            className= {   this.state.active === false ? 'toggle-button' : "toggle-button active"   } >
                <div></div>
            </div>
        );
    }
}
