import React from "react";

export default class CreateUserForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fullname : '',
            fullnameTouched : false,
            
            pays : '',
            paysTouched : false,


            countries : [
                { id:'TN', label:'Tunisia' },
                { id:'FR', label:'France' },
                
            ]
            
        }
    }


    formSubmit(event){
        event.preventDefault();  

        console.log(this.state);
    }


    formValidation(){
 
        return  ( this.state.fullname !== '' )
    }
    
 
    render(){
        return(
            <div className="card card-body">
                <form   onSubmit={ (event)=>{ this.formSubmit(event) } }   >

                    <div className="form-group mb-3">
                        <label htmlFor="">Nom et prénom</label>
                        <input type="text" className={ ( this.state.fullname === '' && this.state.fullnameTouched === true) ? 'is-invalid form-control' :    (   ( this.state.fullname !== '' ? 'form-control  is-valid' : 'form-control')   )    } 
                        onFocus={ ()=>{ this.setState({ fullnameTouched : true }) } } 
                        onChange={ (event)=>{  this.setState({ fullname : event.target.value }) }}  value={ this.state.fullname } />
                    </div>


                    <div className="form-group mb-3">
                        <label htmlFor="">Pays</label>
                        <select className={ ( this.state.pays === '' && this.state.paysTouched === true) ? 'is-invalid form-control' : 'form-control'  } 
                        onFocus={ ()=>{ this.setState({ paysTouched : true }) } } 
                        onChange={ (event)=>{  this.setState({ pays : event.target.value }) }}  value={ this.state.pays } >
                            <option value="">please choose a value</option>

                            {
                                this.state.countries.map( (c)=>{
                                    return <option value={ c.id } key={ c.id } >{ c.label }</option>
                                } )
                            }

                        </select>
                    </div>






                    <div className="form-group">
                        <button type="submit" className="btn btn-success" disabled={ ! this.formValidation() } >Ajouter</button>
                    </div>


                </form>
            </div>
        );
    }
}