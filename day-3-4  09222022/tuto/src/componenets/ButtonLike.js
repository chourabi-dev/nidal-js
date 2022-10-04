import React from "react";

export class ButtonLike  extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            nbrLikes : props.nbrLikes, 
            like: props.like
        }
    }


    render(){
        // ...

        return(
             <button className="btn btn-outline-primary"
                
                onClick={()=>{
                    
                    //  XXXXXXXXX NEVER DO THIS !!!!! this.state.nbrLikes = 21

                    // STATE AND PROPS ARE READ ONLY !!!!!!!!!!!!!!


                    this.setState(
                        {  
                            
                            nbrLikes :   this.state.like === false ? ( this.state.nbrLikes + 1 ) : ( this.state.nbrLikes - 1 )   , 
                            
                            like: ! this.state.like
                        
                        }
                    );


                }}
                
                > { this.state.nbrLikes } { this.state.like=== false ? 'Like' : 'Dislike' } </button>
            
        );
    }
}