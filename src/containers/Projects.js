import React, { Component } from 'react';

export class Projects extends Component {
    render() {
        return (
            <div className='page'  >
                <a href="/mesh-media-player" >
                    <h1 className='title'>Mesh Media Player</h1> 
                    <h2 className='desc'> Play your music and video library all in one place </h2>
                    <img src="https://gdurl.com/S8Wp" alt="Demo"/>
               </a>
               <hr/>
               <a href="/fractal-design" >
                    <h1 className='title'>Fractal Design</h1> 
                    <h2 className='desc'>Customize your own fractal animation with different colors, effects, and more! </h2>
                    <img src="https://gdurl.com/S8Wp" alt="Demo"/>
               </a>
               <hr/>
               <a href="/tube-runner" >
                    <h1 className='title'>Tube Runner</h1> 
                    <h2 className='desc'> How far can you make it through space time? </h2>
                    <img src="https://gdurl.com/S8Wp" alt="Demo"/>
               </a>
                       
            </div>
        )
    }

}
export default Projects;
