export default function Contact( props ){

    console.log(props);
     
    return(
        <li>
          <h3>{props.title}</h3>
          <p>
            <small>{props.email}</small>
          </p> 

          
          
          {
            props.phone != null ? 
            
            <p>
                <small>{ props.phone }</small>
            </p> 
            :

            <p>
                <small> No phone </small>
            </p> 
            
          }
          
        </li>
    );
}