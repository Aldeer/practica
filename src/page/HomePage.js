import React,{Component, Fragment} from 'react';
import Headers from '../components/Headers';
import Cards from '../components/Cards';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Fragment>
                <Headers/>
                <Cards/>
            </Fragment>
        );
    }
}

export default HomePage;