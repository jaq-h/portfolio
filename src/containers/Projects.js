import React, { Component } from 'react';
import {   Icon, } from 'semantic-ui-react'
export class Projects extends Component {
    render() {
        return (
            <div className='page'  >
                <a href="/mesh-media-player" >
                    <h1 className='title'>  Mesh Media Player </h1> 
                    <hr/>
                    
                        <h2 className='desc'>  Play your music and video library all in one place!</h2>
                        <h2 className='desc'>  
                        JavaScript <i class="icon-javascript"></i>&nbsp;&nbsp;
                        React.js<Icon name='react'/> &nbsp;&nbsp;  
                        NPM <i class="icon-npm"></i>   &nbsp;&nbsp;
                        Ruby on Rails <i class="icon-ruby-on-rails-alt"></i>   &nbsp;&nbsp;
                        PostgreSQL <i class="icon-postgres"></i>   &nbsp;&nbsp;
                        Heroku <i class="icon-heroku"></i>   &nbsp;&nbsp;
                        jQuery <i class="icon-jquery"></i>   &nbsp;&nbsp;
                        Spotify SDK/Web API<Icon name='spotify'/>&nbsp;&nbsp;
                        YouTube API<Icon name='youtube'/>&nbsp;&nbsp;
                        </h2>
                    
                    <img src="https://gdurl.com/S8Wp" alt="Demo"/>
               </a>
               <a href="/fractal-design" >
                    <h1 className='title'>Fractal Design</h1> 
                    <hr/>

                    <h2 className='desc'>Customize your own fractal animation with different colors, effects, and more! </h2>
                    <img src="https://gdurl.com/S8Wp" alt="Demo"/>
               </a>
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
