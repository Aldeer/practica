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
                <p className='search-text'>Search for Curse</p>
                <div className='seccion-articulos'>
                    <article className='articulo'>
                        <img className='imagen-curso' src={imagenCurso} alt='imagen del curso'/>
                        <h3>Server Side Rendering with React and Redux</h3>
                        <h6>
                            Build React, Redux and React Router apps using Server Side Rendering
                            &#40;SSR&#41;, Isomorphic, and Universal JS techniques.
                        </h6>
                        <a href='#button'>Go to curse</a>
                    </article>
                    <article className='articulo'>
                        <img className='imagen-curso' src={imagenCurso} alt='imagen del curso'/>
                        <h3>React - The Complet Guide</h3>
                        <h6>Div in and learn React from scratch! Learn ReactJS, Redux 
                            React Routing, Animations, Next.js basics and way more.
                        </h6>
                        <a href='#button'>Go to curse</a>
                    </article>
                    <article className='articulo'>
                        <img className='imagen-curso' src={imagenCurso} alt='imagen del curso'/>
                        <h3>The Complete React Web Developer Course &#40;with Redux&#41;</h3>
                        <h6>
                            Learn how to build and launch React web applications ussing React v16,
                            Redux, Webpack, React-Router v4 and more.
                        </h6>
                        <a href='#button'>Go to curse</a>
                    </article>
                </div>
            </Fragment>
        );
    }
}

export default Cards;