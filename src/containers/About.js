import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <div className='page'  >

                <a >
                    <span>
                        <a className='title'>About</a> 
                    </span>
                    <hr/>

                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Full Stack Software Engineer with a background in computer science and 5 years of object-oriented programming experience. I have always been fascinated with how things worked from classical mechanics to new technology. At a young age, I would take (or break) things apart to explore what was inside. I built my first computer when I was 16 and started learning Java as my first programming language. Experience with digital art and motion design drove my interest in multi-media and user interaction while building web-app projects. I am looking forward to a role providing creative problem solving and am interested in developing applications involving music, digital art, multimedia, infotainment, automotive, and/or gaming products. I am hoping to work with a close-knit team at a company that strives to innovate the way we use technology.
                    </p>

                   
               </a>
               {/* <a >
                    <span>
                        <a className='title'>Interests/Hobbies</a> 
                    </span>
                    <hr/>

                    <p style={{paddingTop:'10px'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Some of my other hobbies include Wakeboarding, Ice Hockey, exploring the outdoors, making digital art. I also like learning mathematics, physics, chemistry, philosophy, or anything that tried to explain how and why we exist.

                    </p>

                   
               </a> */}
               
                       
            </div>
        )
    }

}
export default About;