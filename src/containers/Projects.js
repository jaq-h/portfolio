import React, { Component } from 'react';
import {   Icon, } from 'semantic-ui-react'
export class Projects extends Component {
    render() {
        return (
            <div className='page'  >
                {/* MESH  */}
                <a >
                <div className='project-header'>
                    <hr/>
                    <span>
                        <h1 className='title'> <Icon name='music'/>Mesh Media Player <Icon name='video'/>  </h1>         
                        <h2 className='desc'>  Play your music and video library all in one place!</h2>
                    </span> 
                    <hr/>
                </div>
                    <a className='desc' href='https://github.com/jaq-h/mesh'> 
                        <h2> <Icon name='github' />App Repository  </h2> 
                    </a>
                    <h1 className='title'>Video Demo:</h1> 
                    <iframe width="800" height="500" src="https://www.youtube.com/embed/UqTkVGYnRwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                      
                    <h1 className='title'>Technologies Used:</h1>
                    <h2 className='desc'>  
                        <i class="icon-javascript">JavaScript </i>&nbsp;&nbsp;
                        <i class="icon-reactjs"> React.js </i> &nbsp;&nbsp;  
                        <i> <Icon name='edit'/>Semantic UI &nbsp;&nbsp;</i>
                        <i class="icon-npm"> NPM </i>   &nbsp;&nbsp;
                        <i class="icon-ruby-on-rails-alt">Ruby on Rails</i>   &nbsp;&nbsp;
                        <i class="icon-postgres"> PostgreSQL</i>   &nbsp;&nbsp;
                        <i class="icon-heroku"> Heroku </i>   &nbsp;&nbsp;
                        <i class="icon-jquery"> jQuery</i>   &nbsp;&nbsp;
                        <i><Icon name='spotify'/>Spotify SDK/Web API &nbsp;&nbsp; </i>
                        <i> <Icon name='youtube'/>YouTube API&nbsp;&nbsp; </i> 
                    </h2>
                    <span>&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;</span>

               </a>
               {/* FRACTAL  */}
               <a >
               <div className='project-header'>
                    <hr/>
                    <h1 className='title'> <Icon name='star outline'/>Fractal Design <Icon name='paint brush'/></h1> 
                    <h2 className='desc'>Customize your own fractal animation with different colors and effects! </h2>
                    <hr/>
                </div>
                    <a className='desc' href='https://github.com/jaq-h/fractal-design'> 
                        <h2> <Icon name='github' />App Repository  </h2> 
                    </a>
                    <a href="https://fractal-design.now.sh/">
                        <h1 className='title'> <Icon name='share'/>Live Demo:</h1>
                        <img src="https://gdurl.com/S8Wp" alt="Preview"/>
                    </a> 
                    <h1 className='title'>Technologies Used:</h1>
                    <h2 className='desc'>  
                        <i class="icon-javascript">JavaScript </i>&nbsp;&nbsp;
                        <i class="icon-reactjs"> React.js </i> &nbsp;&nbsp;     
                        <i>  <Icon name='asterisk'/>p5.js &nbsp;&nbsp;</i>
                        <i> <Icon name='edit'/>Semantic UI &nbsp;&nbsp;</i>
                        <i>  <Icon name='sliders horizontal'/>Material UI &nbsp;&nbsp;</i>
                        <i class="icon-npm"> NPM </i>   &nbsp;&nbsp;
                    
                    </h2>
                   
                    
               </a>
               <span>&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;</span>
                {/* TUBE RUNNER  */}
               <a>
                   <div className='project-header'>
                        <hr/>
                        <h1 className='title'> <Icon name='game pad'/>Tube Runner<Icon name='rocket'/></h1> 
                        <h2 className='desc'> How far can you make it through space time? </h2>
                        <hr/>
                   </div>
                    
                    <a className='desc' href='https://github.com/jaq-h/tube-runner'> 
                        <h2> <Icon name='github' />Front End Repository  </h2> 
                    </a>
                    {/* <img src="https://gdurl.com/S8Wp" alt="Demo"/> */}
                    <h1 className='title'>Technologies Used:</h1>
                    <h2 className='desc'>  
                        <i class="icon-javascript">JavaScript </i>&nbsp;&nbsp;
                        <i class="icon-reactjs"> React.js </i> &nbsp;&nbsp;  
                        <i>  <Icon name='asterisk'/>p5.js &nbsp;&nbsp;</i>
                        <i class="icon-npm"> NPM </i>   &nbsp;&nbsp;
                        <i class="icon-ruby-on-rails-alt">Ruby on Rails</i>   &nbsp;&nbsp;
                        <i class="icon-postgres"> PostgreSQL</i>   &nbsp;&nbsp;
                        <i class="icon-heroku"> Heroku </i>   &nbsp;&nbsp;
                    </h2>
                   
               </a>
                       
            </div>
        )
    }

}
export default Projects;
