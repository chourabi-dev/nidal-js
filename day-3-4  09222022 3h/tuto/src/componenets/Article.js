import React from "react";
import { ButtonLike } from "./ButtonLike";

export default class ArticleBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            update:false
        }
    }



    render(){
        return(
            <div className="card mb-3">
                <div className="card-body">
                    <h3>{ this.state.data.title }</h3>
                    

                    {
                        this.state.update === false ?

                        <p  onDoubleClick={ ()=>{ this.setState({ update: true })  } } className="text-muted">{ this.state.data.content }</p>
                        :
                        <textarea className="form-control">{ this.state.data.content }</textarea>
                    }
                    
                    
                   


                    

                    <ButtonLike nbrLikes={ this.state.data.nbrLikes } like={ this.state.data.like } />

                </div>
            </div>
        );
    }
}