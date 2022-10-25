// SINCE REACT 16.8 => REACT HOOKS !!!
// FUNCTION COMP VS CLASS COMP
// BYE BYE CLASS COMP 
// state context class ???
// => function hooks

import { useState } from "react";




export default function Demo(){

    const [ count , setCount ] = useState(5)
    const [ users , setUsers ] = useState([])
    

    return(
        <div>
            <button   onClick={()=>{
                setCount(   (count+1)  ) 
            }}  >{ count } clicks</button>


            <button   onClick={()=>{
                let usersTMP = users;

                usersTMP.push({ id:(users.length +1 ),  name:"fake name" , email:'fake@gmail.com' })

                setUsers(usersTMP)

            }}  >Add fake user</button>



            <ul>
                {
                    users.map((u)=>{
                        return(
                            <li key={ u.id }>
                                <h3>{u.name}</h3>
                                <p>{u.email}</p>
                                
                            </li>
                        );
                    })
                }
            </ul>


        </div>
    );
}