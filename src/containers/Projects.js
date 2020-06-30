import React, { Component } from 'react';
import {   Label,Button, Icon, } from 'semantic-ui-react'
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
                <Button className='git-button' icon labelPosition='left' href='https://github.com/jaq-h/mesh'>
                    <Icon name='github' />App Repository 
                </Button>
                <h1 className='title'>Video Demo:</h1> 
                <iframe width="800" height="500" src="https://www.youtube.com/embed/UqTkVGYnRwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                    
                <h1 className='title'>Technologies Used:</h1>
                <h2 className='desc'>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon className="icon-javascript"/>JavaScript
                    </Label>  
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon className="icon-reactjs"/> React.js
                    </Label>  
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='edit'/>Semantic UI   
                    </Label>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='icon-postgres'/> PostgreSQL
                    </Label>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='icon-heroku'/> Heroku
                    </Label>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='icon-jquery'/> jQuery
                    </Label>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='spotify'/>Spotify SDK/Web API
                    </Label>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='youtube'/>YouTube API
                    </Label>
                    
    
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
                <h2>
                <Button className='git-button' icon labelPosition='left' href='https://github.com/jaq-h/fractal-design'>
                    <Icon name='github' />App Repository 
                </Button>
                <Button className='git-button' icon labelPosition='left' href='https://fractal-design.now.sh/'>
                    <Icon name='share' />Live Demo
                </Button>

                </h2>
                
                <a href="https://fractal-design.now.sh/">
                    <img src="https://gdurl.com/S8Wp" alt="Preview"/>
                </a> 
                <h1 className='title'>Technologies Used:</h1>
                <h2 className='desc'>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon className="icon-javascript"/>JavaScript
                    </Label>  
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon className="icon-reactjs"/> React.js
                    </Label>  
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='asterisk'/>p5.js
                    </Label>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='edit'/>Semantic UI
                    </Label> 
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='sliders horizontal'/>Material UI
                    </Label> 
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='icon-npm'/> NPM
                    </Label>
                    
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
                   <Button className='git-button' icon labelPosition='left' href='https://github.com/jaq-h/tube-runner'>
                        <Icon name='github' />Front End Repository
                    </Button>
                    {/* <img src="https://gdurl.com/S8Wp" alt="Demo"/> */}
                    <h1 className='title'>Technologies Used:</h1>
                    <h2 className='desc'>  
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon className="icon-javascript"/>JavaScript
                    </Label>  
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon className="icon-reactjs"/> React.js
                    </Label>  
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='asterisk'/>p5.js
                    </Label>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='icon-npm'/> NPM
                    </Label>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='icon-ruby-on-rails-alt'/>Ruby on Rails
                    </Label>
                    <Label  className='ui label' icon labelPosition='left'>
                        <Icon name='icon-postgres'/> PostgreSQL
                    </Label>
                    </h2>
                   
               </a>
                       
            </div>
        )
    }

}
export default Projects;
