import React,{Component, Fragment} from 'react';
import '../styles/Navbar.css'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Fragment className='fragment'>
                <nav>
                    <a className='nav-enlace' href='#home'>Home</a>
                    <a className='nav-enlace' href='#home'>Nostros</a>
                    <a className='nav-enlace' href='#home'>Contacto</a>
                </nav>
            </Fragment>
        );
    }
}

export default Navbar;