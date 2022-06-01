import React, {Component, Fragment} from 'react';
import imagenCurso from '../images/react-curso-img.png'
import '../styles/Cards.css'

class Cards extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Fragment>
                <div className='seccion-articulos'>
                    <p>
                        <h4>Search of Curse</h4>
                    </p>
                    <article className='articulo'>
                        <img className='imagen-curso' src={imagenCurso} alt='imagen del curso'/>
                        <h3>Server Side Rendering with React and Redux</h3>
                        <h6>Build react</h6>
                    </article>
                    <article className='articulo'>
                        <img className='imagen-curso' src={imagenCurso} alt='imagen del curso'/>
                        <h3>React - The Complet Guide</h3>
                        <h6>Build react</h6>
                    </article>
                    <article className='articulo'>
                        <img className='imagen-curso' src={imagenCurso} alt='imagen del curso'/>
                        <h3>Server Side Rendering with React and Redux</h3>
                        <h6>Build react</h6>
                    </article>
                </div>
            </Fragment>
        );
    }
}

export default Cards;