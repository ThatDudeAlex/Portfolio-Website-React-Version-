import React from "react";
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from "./SectionHeading";
import '../css/about.css';

const About = ({ id }) => {
    return (
        <div id={id} className="pt-xs-5 mt-xs-5 mt-md-0 pt-md-0">
    
            <Container>
                <div id="about-top-container">
                    
                    <div id="about-quick-info">
                        <h2 id="about-text1"> Hey there! I'm</h2>
                        <h1 id="about-name"> Alex Nunez</h1>
                        <h3 id="about-text2">
                            I'm a software developer and student at the
                            <br></br>
                            University of Central Florida
                        </h3>

                        <div>
                        
                            {/* Location Icon */}
                            <div className="about-link">
                                <svg className="about-link-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                                viewBox="0 0 512 512" white-space = "pre-wrap" height= "16">

                                    <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
			                            c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
			                            c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                                </svg>
                                
                                Orlando, FL
                            </div>

                            {/* email icon */}
                            <div className="about-link">
                                <a href="mailto: alex@alexjnunez.com" >
                                    <svg className="about-link-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                        white-space = "pre-wrap" height="16">
                                    
                                        <path d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646
                                            c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719
                                            C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z" />
                                        <path d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885
                                            c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542
                                            C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333
                                            v-268.25C512,132.927,509.583,129.146,505.813,127.406z" />                      
                                    </svg>
                                </a>

                                <a href="mailto: josenunez1692@gmail.com">
                                    josenunez1692@gmail.com
                                </a>
                            </div>

                            {/* LinkedIn Icon */}
                            <div className="about-link">
                                <a href="http://www.linkedin.com/in/alex-nunez-76545617b" target="_blank" rel="noopener noreferrer">
                                    <svg className="about-link-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                        white-space="pre-wrap" height="16">

                                        <path d="M467,198.699c-37.8-33.6-86.4-32.399-105.601-30.599c-26.699,2.999-45.599,13.2-59.399,24.3V181c0-8.401-6.599-15-15-15    H180c-8.401,0-15,6.599-15,15v300c0,8.399,6.599,15,15,15h107c8.401,0,15-6.601,15-15V309.399c0-15,19.799-30,40.8-30.899    c14.7-0.3,32.401,5.7,34.2,36V481c0,8.399,6.599,15,15,15h105c3.9,0,7.8-1.5,10.499-4.501C510.5,488.8,512,484.9,512,481V320.499    C511.7,266.199,496.7,225.399,467,198.699z" />
                                        <path d="M120,166H15c-8.401,0-15,6.599-15,15v300c0,8.399,6.599,15,15,15h105c8.401,0,15-6.601,15-15V181    C135,172.599,128.401,166,120,166z" />
                                        <path d="M67.5,16C30.3,16,0,42.999,0,76c0,32.999,30.3,60,67.5,60S135,108.999,135,76C135,42.999,104.7,16,67.5,16z" />
                                    </svg>
                                </a>

                                <a href="http://www.linkedin.com/in/alex-nunez-76545617b" target="_blank" rel="noopener noreferrer">
                                    alex-nunez-76545617b
                                </a>
                            </div>

                            {/* Github Icon */}
                            <div className="about-link">
                                <a href="https://github.com/ThatDudeAlex" target="_blank" rel="noopener noreferrer">
                                    <svg className="about-link-icon" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
                                </a>

                                <a href="https://github.com/ThatDudeAlex" target="_blank" rel="noopener noreferrer">
                                    github.com/ThatDudeAlex
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="about-portrait">
                        <img src="/images/me.jpg"
                            className="p-0 mb-3 mb-md-0" alt="Alex Nunez" id="profile-img"/>
                    </div>
                </div>



                <SectionHeading
                        sectionName="ABOUT"
                        headingColor="black"
                />

                <Row className="mt-4">
                    <Col id="about-introduction">

                        <p>
                            
                            My full name is Jose A Nunez, but i go by Alex. I’m an immigrant to the United States, graduating with my B.S in <strong>Computer Science</strong> this December 2019.
                    
                            For as long as I can remember, I have always had a <strong>deep</strong> fascination for
                            both <strong>Technology</strong> & <strong>Business</strong>.
                            My interest in technology led me to attend a technical high school, that offered a program in <strong>Business Computer Programming</strong>. 
                            Once I got a taste of what programming was, I knew that it was something that I wanted to pursue. Recently I 
                            have taken a greater interest in developing <strong>web applications</strong>, but I’m interested in <strong>all aspects</strong> of development. 
                        </p>

                        <p>
                            My <strong>immediate goals</strong> are to begin a full-time position as a <strong>software engineer</strong>, become a well-rounded web developer, 
                            and continue learning more about team management, leadership, and entrepreneurship. My <strong>medium-term goals</strong> are to fully 
                            master my craft, <strong>lead</strong> a team and <strong>excel</strong> at it, and to learn from firsthand experience how a company is run, how it’s structured, 
                            and what are the <strong>traits</strong> that make a <strong>successful</strong> leader. My <strong>long-term goal</strong> has remained the same for many years, and that’s <strong>entrepreneurship</strong>. 
                            I intend to work as hard as I can in my career, so that in the process I can pick up the necessary skills required for a 
                            successful business venture. 
                        </p>

                        <p>
                            Please read my <strong>Bio</strong> if you would like to learn more about me, or if you
                            would like a copy of my resume, please click on the <strong>Resume</strong> link.
                            I will finish this introduction with a quote that I hold dear, and try to live by:
                        </p>

                        <blockquote className="blockquote text-right introduction" id="about-quote">
                            <p className="mb-0">Vision Without Execution, Is Hallucination</p>
                            <footer className="blockquote-footer" id="quote-contributor">Thomas Edison</footer>
                        </blockquote>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;