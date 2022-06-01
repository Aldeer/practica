import React,{Component, Fragment} from 'react';
import '../styles/Headers.css'

class Headers extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Fragment>
                <nav>
                    <p>React &amp; Material-UI Sample Application </p>
                </nav>
            </Fragment>
        );
    }
}

export default Headers;