import React, { Component } from 'react';
import {  Button, Icon, Dropdown } from 'semantic-ui-react'
export class MenuBar extends Component {
    
    render() {
        const projects = [
            { key: 'all', text: 'All', value: 'all', href:'/projects' },
            { key: 'mesh', text: 'Mesh Media Player', value: 'mesh', href:'/mesh-media' },
            { key: 'fractal', text: 'Fractal Design', value: 'fractal', href:'/fractal-design' },
            { key: 'tube', text: 'Tuber Runner', value: 'tube-runner', href:'/tube-runner' },
        ];
        const resumes = [
            { key: 'word', text: 'Word Doc', value: 'word', href:'/' },
            { key: 'pdf', text: 'PDF', value: 'pdf', href:'/' },
        ];
        return (
            <div className='menu'  >
                <span className='profile'>
                <img className='avatar' src='https://gdurl.com/J9Cp' alt=""/>

                 <a className='menu-title'>
                   Jacques Hebert
                </a>
                </span>
                   {/* <br></br> */}
               <span className='nav'>
                <Button className='nav-button' icon labelPosition='left' href='/about'>
                    <Icon name='address card' />About
                </Button>
                <Dropdown
                    button
                    className='icon'
                    floating
                    labeled
                    icon='code'
                    options={projects}
                   
                    text='Projects'
                />
                <Button className='nav-button' icon labelPosition='left' href='https://github.com/jaq-h'>
                   <Icon name='github' />GitHub
               </Button>
               <Dropdown className='nav-button'
                    button
                    className='icon'
                    floating
                    labeled
                    icon='file alternate'
                    options={resumes}
                   
                    text='Resumé'
                />
                <Button className='nav-button' icon labelPosition='left' href='https://www.linkedin.com/in/jaq-h/'>
                    <Icon name='linkedin' />LinkedIn
                </Button>
                </span>
            
            </div>
        )
    }

}
export default MenuBar;
