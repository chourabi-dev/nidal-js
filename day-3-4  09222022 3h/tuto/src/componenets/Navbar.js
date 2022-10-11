export default function Navbar(props){

    const connected = props.connected;


    let blocJSX = null;


    if ( connected === true ) {
        blocJSX = <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">Profile</a>
                </li>

    } else {
        blocJSX = 
        <section>
            <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">Create account</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">Login</a>
                </li>
        </section>
    }




    return(
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">


                    {
                        blocJSX
                    }


                    
                     
                </ul>
                </div>
            </div>
            </nav>
    );

}