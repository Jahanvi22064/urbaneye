import React from "react";
import Navbar from "../navbar/Navbar";
import hero from '../../images/see.gif';
const Index = () => {
    const backgroundStyle = {
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };
    return (
        <div style={{ 
            height: '100vh', // Ensure the gradient covers the full view height
            overflow: 'hidden', 
            ...backgroundStyle
        }}>
            <section>
                <div className="w-full relative pb-10 px-6 xl:px-0 ">
                    {/* <Navbar/> Optionally include the navbar */}
                    <div className="pt-12 lg:flex items-center relative z-10 container mx-auto">
                        <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <p tabIndex="0" className=" uppercase text-2xl mb-20 mt-0 font-bold" style={{color:'white'}}>Let's find your close ones with our recognition systems</p> 
                        </div>
                        <div role="contentinfo" className="w-full lg:w-1/2 h-full mt-50 ml-40">
                           
                            
                            
                        </div>
                      
                    </div>
                    
                </div>
                <div className="  w-1/2 h-full relative py-40 mt-10 px-5" style={{ color: 'deepskyblue',
                    position: 'absolute', 
                        top: '450px',
                        left: '0',
                        paddingBottom: '10px' }}>
                                <p tabIndex="0" className="font-regular mb-0"></p>
                            </div>
            </section>
            <style>
                {`
                /* Custom styles and animations */
                .top-100 {
                    animation: slideDown 0.5s ease-in-out;
                }
                @keyframes slideDown {
                    0% {
                        top: -50%;
                    }
                    100% {
                        top: 0;
                    }
                }
                * {
                    outline: none !important;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    -webkit-tap-highlight-color: transparent;
                }
                /* Hide scroll bars */
                body {
                    overflow: hidden;
                }

                `
                }
            </style>
        </div>
    );
};

export default Index;
