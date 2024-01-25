'use client'
import React, { useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import useScreenSize from '../hooks/useScreenSize';

type HomepageProps = {
    scrollToSection: string | null,
    handleScrollComplete: ()=>void,
}

export default function Homepage({scrollToSection, handleScrollComplete}:HomepageProps){
    const screenSize = useScreenSize();

    useEffect(() => {
        if (scrollToSection) {
          // Perform scroll action to the specified section
          const targetSection = document.getElementById(scrollToSection);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
    
            // Notify the parent component that the scroll is complete
            handleScrollComplete();
          }
        }
      }, [scrollToSection, handleScrollComplete]);

    return (
        <main>
            <div className='flex flex-col gap-10 xl:gap-5 bg-softOpal h-full md:h-[calc(100vh-59px)] p-5 xl:p-20'>
                <div className="flex flex-1 justify-center items-center pt-10 xl:pt-0">
                    <img
                        src="../images/GIVHER_Primary_NavySmoke.png"
                        alt="Givher Logo"
                        className="w-full max-w-[1000px]"
                        width={1024}
                        height={448}
                        />
                </div>
                <div className='flex items-center justify-center gap-[30px]'>
                    <a href="mailto:alina@givher.com" aria-label="Email Alina Hernandez">
                    <LazyLoadImage
                            src="../images/mail-icon.png"
                            alt="mail"
                            width={30}
                            height={30}
                            effect="blur"
                            />
                    </a>
                    <a href="https://www.instagram.com/givherllc/" target="_blank" aria-label="Givher Instagram" rel="noreferrer">
                    <LazyLoadImage
                            src="../images/ig-icon.png"
                            alt="mail"
                            width={30}
                            height={30}
                            effect="blur"
                            />
                    </a>    
                </div>
            </div>
            <div id="about" className="scroll-mt-[59px] flex flex-1 flex-col justify-center items-center bg-mauvelous font-visby h-full xl:h-[calc(100vh-59px)]">
                <div className='flex flex-1 flex-col justify-center items-center w-5/6 max-w-screen-xl pt-10 pb-10'>
                <h1 className="font-ramenson text-navySmoke text-2xl md:text-6xl self-start pb-4">About</h1>
                <div className="flex flex-col justify-center items-center space-y-5 text-justify text-sm md:text-base">
                <p>
                Givher LLC is a dynamic and forward-thinking company specializing in fundraising, event development, and political hospitality. Founded and led by Alina Hernandez, a robust policy and advocacy leader, Givher LLC provides services to non-profit organizations, political action committees, and advocacy groups in achieving their missions and expanding their impact. Partnering with Givher LLC will help elevate your mission and add the extra flare you never knew you were missing.
                </p>
                <p>At the heart of Givher LLC&apos;s mission is a commitment to effective and innovative fundraising strategies. Understanding the unique challenges in securing financial support, Givher LLC offers a comprehensive suite of services tailored to each client&apos;s specific objectives. These services include developing personalized fundraising plans, identifying new avenues for donor development, organizing engaging fundraising events, and managing donor relationships to foster long-term loyalty and support.</p>
                <p>In addition to fundraising, Givher LLC excels in event development. Recognizing the critical role of events in raising awareness and engaging stakeholders, Givher LLC takes a holistic approach to event planning and execution. From conceptualizing event themes that resonate with an organization&pos;s mission and values to managing every detail of the event lifecycle &mdash; including venue selection, marketing, program design, and logistics &mdash; Givher LLC ensures each event is well-organized, memorable, and lucrative.</p>
                <p>Combining Alina&apos;s experience in public policy, technology, and various artistic and educational pursuits, their diverse background provides a rich and unique perspective that guides the company&apos;s approach. With a passion for advancing equality and representation, Givher LLC is not just a service provider but a partner committed to empowering its clients and contributing to positive social change.</p>
                </div>
                </div>
            </div>
            <div id="team" className="scroll-mt-[59px]">
                <div className="flex justify-center h-full xl:h-[calc(100vh-59px)] bg-navySmoke">
                    <div className="flex flex-col xl:flex-row items-center xl:items-between xl:space-x-5 w-5/6 max-w-screen-xl pt-10 xl:pt-0 xl:gap-10">
                        {screenSize.width < 1280 && (
                        <div className="flex items-center justify-center w-4/6 xl:w-1/2 pb-10 xl:pt-0 xl:self-end">
                            <LazyLoadImage
                                src="../images/alina-crop-mobile.png"
                                className="w-full self-end"
                                alt="Alina Hernandez"
                                effect="blur"
                                width={400}
                            />
                        </div>
                        )}
                        <div className='flex flex-1 flex-col justify-center items-center xl:w-1/2 sm:pl-0 pb-10 xl-pb-0'>
                            <h1 className="font-ramenson text-electricYellow text-2xl md:text-6xl self-start pb-4">Alina Hernandez</h1>
                            <h2 className="font-visbyBold text-softOpal text-xl md:text-4xl self-start">Founder and Principal</h2>
                            <div className="h-1 bg-electricYellow w-1/6 self-start mb-6 mt-3"/>
                            <div className="flex flex-col justify-center items-center space-y-5">
                            <p className='text-softOpal text-justify text-sm md:text-base font-visby'>
                            Alina Hernandez (she/they) is known for their quiet yet influential presence. With a gift for making people feel heard and valued, Alina treats each individual with the star quality they inherently possess. This approach resonates deeply in every space they occupy. Alina&apos;s philosophy on life and strategy in the workplace is refreshingly unconventional. Alina is a unique example of authenticity, living a life marked by joy, creativity, and an unyielding commitment to treating everyone with kindness and respect.</p>
                            <p className='text-softOpal text-justify text-sm md:text-base font-visby'>
                            As the founder and principal of Givher LLC, Alina has demonstrated exceptional leadership in fundraising, event development, and political hospitality, leveraging their extensive background in policy and advocacy. Before founding Givher LLC, Alina played pivotal roles in advancing equality and civil rights, notably as Principal Consultant for the California Legislative LGBTQ Caucus and President of the Capitol LGBTQ Association. This blend of personal attributes and professional accomplishments makes Alina Hernandez an exemplary leader, uniquely equipped to guide Givher LLC toward impactful and meaningful success.
                            </p>
                            </div>
                        </div>
                        {screenSize.width >= 1280 && (
                        <div className="flex items-center justify-center w-4/6 xl:w-1/2 xl:self-end">
                            <LazyLoadImage
                                src="../images/alina-crop.png"
                                className="w-[95%] self-end"
                                wrapperClassName='w-full h-full flex items-end'
                                alt="Alina Hernandez"
                                effect="blur"
                                placeholderSrc="../images/alina-crop-placeholder.png"
                            />
                        </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center h-full xl:h-[calc(100vh-59px)] bg-mauvelous">
                <div className="flex flex-col xl:flex-row items-center xl:items-between xl:space-x-5 pt-10 xl:pt-0 xl:gap-10 w-5/6 max-w-screen-xl">
                        {screenSize.width < 1280 && (
                        <div className="flex items-center justify-center w-4/6 xl:w-1/2 pb-10 xl:pt-0 xl:self-end">
                            <LazyLoadImage
                                src="../images/jay-headshot-mobile.png"
                                className="w-full self-end"
                                alt="Jay Franco"
                                effect="blur"
                                width={400}
                            />
                        </div>
                        )}
                        
                        {screenSize.width >= 1280 && (
                        <div className="flex items-center justify-center w-4/6 xl:w-1/2 xl:self-end">
                        <LazyLoadImage
                                src="../images/jay-headshot.png"
                                className="w-[95%] self-end"
                                wrapperClassName='w-full h-full flex items-end'
                                    alt="Jay Franco"
                                effect="blur"
                                placeholderSrc="../images/jay-headshot-placeholder.png"
                            />
                        </div>
                        )}
                        <div className='flex flex-1 flex-col justify-center items-center xl:w-1/2 sm:pl-0 pb-10 xl-pb-0'>
                            <h1 className="font-ramenson text-navySmoke text-2xl md:text-6xl self-start pb-4">Jay Franco</h1>
                            <h2 className="font-visbyBold text-softOpal text-xl md:text-4xl self-start">Fundraising Associate</h2>
                            <div className="h-1 bg-electricYellow w-1/6 self-start mb-6 mt-3"/>
                            <div className="flex flex-col justify-center items-center space-y-5">
                            <p className='text-black text-justify text-sm md:text-base font-visby'>
                            Jay Franco is a community advocate residing on Miwok/Nisenan land. He has gained much of his political experience as a field coordinator working within many local grassroots&apos; initiatives. The most notable of these experiences includes a nearly decade-long effort to establish a fund for equitable youth programs and prevention services in the City of Sacramento. His efforts were shared in the EMMY-nominated award winning documentary, &ldquo;City Rising: Youth & Democracy,&rdquo; produced by KCET/PBS SoCal. 
                            He gained further knowledge by participating in various community-led workshops and fellowships aimed to develop regional leaders with a racial-equity lens. He has training in Youth Mental Health First Aid and previously led after school programs for high schoolers centered around socio-emotional awareness and civic empowerment.
                            </p>
                            <p className='text-black text-justify text-sm md:text-base font-visby'>
                            He recently finished a Capitol internship for the Assembly where he provided constituent services and legislative research for the office of Asm. David Alvarez (AD 80). During his time in the Assembly, he also participated in the 2023 Water Policy Academy in coordination with the California Latino Capitol Association Foundation.
                            He currently serves as a Treasurer for the youth advocacy organization, Youth Forward. He looks forward to continuing his work as a supporter of community groups and initiatives with efforts to build a healthy & thriving environment for all. 
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="flex flex-1 flex-col items-center bg-softOpal font-visby">
                <div className='flex flex-1 flex-col justify-center items-center p-10 max-w-screen-xl'>
                    <div className="flex flex-col justify-center items-center gap-5 p-12">
                        <div>916-296-4656</div>
                        <div>alina@givher.com</div>
                        <div className='flex items-center justify-center gap-[20px]'>
                            <a href="mailto:alina@givher.com" aria-label="Email Alina Hernandez" className='flex items-center'>
                                <LazyLoadImage
                                    src="../images/mail-icon.png"
                                    alt="mail"
                                    className="w-full"
                                    width={20}
                                    height={20}
                                    effect="blur"
                                    />
                            </a>
                            <a href="https://www.instagram.com/givherllc/" target="_blank" aria-label="Givher Instagram" rel="noreferrer">
                                <LazyLoadImage
                                    src="../images/ig-icon.png"
                                    alt="mail"
                                    width={20}
                                    height={20}
                                    effect="blur"
                                    />
                            </a>   
                        </div>
                       
                    </div>
                </div>
            </div>
        </main>
    )
}