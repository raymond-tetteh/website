import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import ProjectCard from '@/components/projects/ProjectCard';
import Seo from '@/components/Seo';
import TechnologyCard from '@/components/technologies/TechnologyCard';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const HomePage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [activeTab, setActiveTab] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const q = gsap.utils.selector(ref);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tl = useRef<any>(gsap.timeline({ paused: true }));

  useEffect(() => {
    // const element = ref.current;
    tl.current = gsap.to(q('#projects-tab'), {
      scrollTrigger: {
        trigger: q('#projects'),
        start: 'top 20%',
        end: 'bottom 80%',
        onEnter: () => setActiveTab('projects'),
        onEnterBack: () => setActiveTab('projects'),
        scroller: '#section-2',
        scrub: 0.2,
      },
    });

    tl.current = gsap.to(q('#technologies-tab'), {
      scrollTrigger: {
        trigger: q('#technologies'),
        start: 'top 80%',
        end: 'bottom 80%',
        onEnter: () => setActiveTab('technologies'),
        onEnterBack: () => setActiveTab('technologies'),
        scroller: '#section-2',
        scrub: 0.2,
      },
    });

    // tl.current = gsap.to(
    //   q("#stacks-tab"),
    //   {
    //     scrollTrigger: {
    //       trigger: q("#stacks"),
    //       start: "top 80%",
    //       end: "bottom 80%",
    //       onEnter: () => setActiveTab('stacks'),
    //       onEnterBack: () => setActiveTab('stacks'),
    //       scroller: "#section-2",
    //       scrub: 0.2
    //     }
    //   }
    // );
  }, [q]);

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-[#151515] text-white'>
          <video
            autoPlay
            loop
            muted
            className='absolute hidden h-screen w-screen object-cover md:block'
          >
            <source src='/video/splash.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video>

          <div className='z-1 absolute hidden min-h-screen min-w-full bg-[#151515]/[0.8] md:block'></div>

          <div className='z-10 flex flex-col overflow-hidden md:mx-60 md:h-screen md:flex-row md:gap-20'>
            {/* Left  */}
            <div className='relative flex h-screen flex-col gap-10 md:w-2/5'>
              <video
                autoPlay
                loop
                muted
                className='min-w-screen absolute z-0 h-screen w-auto object-cover md:hidden'
              >
                <source src='/video/splash.webm' type='video/webm' />
                Your browser does not support the video tag.
              </video>
              <div className='z-1 absolute min-h-screen min-w-full bg-[#151515]/[0.8] md:hidden'></div>
              <div className='z-10 flex h-screen flex-col justify-center gap-5 px-4 md:relative md:my-28 md:justify-start md:gap-10'>
                <div>
                  <h1 className='text-6xl md:text-7xl'>Hello, </h1>
                  <h1 className='whitespace-nowrap text-6xl md:text-7xl'>
                    I&apos;m Raymond.
                  </h1>
                  <h3 className='mt-3'>A Passionate Software Engineer</h3>
                </div>

                <div>
                  <p>
                    I am Raymond Tetteh. A 22-year-old software engineer based
                    in Ghana. I am a{' '}
                    <span className='font-bold underline'>
                      Computer Engineering
                    </span>{' '}
                    student but I have been a{' '}
                    <span className='font-bold underline'>self-taught</span>{' '}
                    self-taught developer for over 3 years. I enjoy taking
                    mobile apps and beautiful web applications from design to a{' '}
                    <span className='font-bold underline'>
                      fully working product.
                    </span>{' '}
                  </p>
                </div>

                <div className='hidden flex-col gap-8 text-xs font-bold uppercase tracking-widest md:flex'>
                  <div
                    id='projects-tab'
                    className={`flex w-min items-center gap-2 ${
                      activeTab == 'projects'
                        ? 'ml-2 scale-110 text-sm text-white duration-700'
                        : 'text-gray-300'
                    }`}
                  >
                    <div>01</div>
                    <div
                      className={`h-0 border-b border-white ${
                        activeTab == 'projects' ? 'w-8' : 'w-5 border-gray-300'
                      }`}
                    ></div>
                    <div>Projects</div>
                  </div>

                  <div
                    id='technologies-tab'
                    className={`flex w-min items-center gap-2 ${
                      activeTab == 'technologies'
                        ? 'ml-2 scale-110 text-sm text-white duration-700'
                        : ' text-gray-300'
                    }`}
                  >
                    <div>02</div>
                    <div
                      className={`h-0 border-b border-white ${
                        activeTab == 'technologies'
                          ? 'w-8'
                          : 'w-5 border-gray-300'
                      }`}
                    ></div>
                    <div>Technologies</div>
                  </div>

                  {/* <div id="stacks-tab" className={`flex items-center gap-2 w-min ${activeTab == 'stacks' ? 'scale-110 duration-700 ml-2 text-white text-sm' : 'text-gray-300'}`}>
                    <div>03</div>
                    <div className={`h-0 border-b border-white ${activeTab == 'stacks' ? 'w-8' : 'w-5 border-gray-300'}`}></div>
                    <div >Stacks</div>
                  </div> */}
                </div>

                {/* Social Links  */}
                <div className='absolute bottom-20 flex items-center gap-5 md:bottom-0 '>
                  <div className='hidden h-12 w-12 rounded-full bg-white md:flex'>
                    {' '}
                  </div>
                  <UnstyledLink
                    className='cursor-pointer'
                    href='https://twitter.com/theLazyDevGuy'
                  >
                    <div className='flex items-center gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 30 30'
                        fill='#ffffff'
                      >
                        <path d='M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295	C22.92,5.084,21.534,4.436,20,4.436c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215	c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439	c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23	c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705	c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396	c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z' />
                      </svg>

                      <span>Twitter</span>

                      <svg
                        fill='#fff'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        className='h-5 w-5'
                      >
                        <path d='M 9 2 L 9 3 L 12.292969 3 L 6.023438 9.273438 L 6.726563 9.976563 L 13 3.707031 L 13 7 L 14 7 L 14 2 Z M 4 4 C 2.894531 4 2 4.894531 2 6 L 2 12 C 2 13.105469 2.894531 14 4 14 L 10 14 C 11.105469 14 12 13.105469 12 12 L 12 7 L 11 8 L 11 12 C 11 12.550781 10.550781 13 10 13 L 4 13 C 3.449219 13 3 12.550781 3 12 L 3 6 C 3 5.449219 3.449219 5 4 5 L 8 5 L 9 4 Z' />
                      </svg>
                    </div>
                  </UnstyledLink>

                  <UnstyledLink
                    className='cursor-pointer'
                    href='https://www.linkedin.com/in/raymond-t-64679a9a/'
                  >
                    <div className='flex items-center gap-2'>
                      <svg
                        fill='#ffffff'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 30 30'
                        className='h-5 w-5'
                      >
                        <path d='M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z' />
                      </svg>

                      <span>LinkedIn</span>

                      <svg
                        fill='#fff'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        className='h-5 w-5'
                      >
                        <path d='M 9 2 L 9 3 L 12.292969 3 L 6.023438 9.273438 L 6.726563 9.976563 L 13 3.707031 L 13 7 L 14 7 L 14 2 Z M 4 4 C 2.894531 4 2 4.894531 2 6 L 2 12 C 2 13.105469 2.894531 14 4 14 L 10 14 C 11.105469 14 12 13.105469 12 12 L 12 7 L 11 8 L 11 12 C 11 12.550781 10.550781 13 10 13 L 4 13 C 3.449219 13 3 12.550781 3 12 L 3 6 C 3 5.449219 3.449219 5 4 5 L 8 5 L 9 4 Z' />
                      </svg>
                    </div>
                  </UnstyledLink>

                  <UnstyledLink
                    className='cursor-pointer'
                    href='mailto:raymondtetth111@gmail.com'
                  >
                    <div className='flex items-center gap-2'>
                      <svg
                        fill='#ffffff'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        className='h-5 w-5'
                      >
                        <path d='M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z' />
                      </svg>

                      <span>Email</span>

                      <svg
                        fill='#fff'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        className='h-5 w-5'
                      >
                        <path d='M 9 2 L 9 3 L 12.292969 3 L 6.023438 9.273438 L 6.726563 9.976563 L 13 3.707031 L 13 7 L 14 7 L 14 2 Z M 4 4 C 2.894531 4 2 4.894531 2 6 L 2 12 C 2 13.105469 2.894531 14 4 14 L 10 14 C 11.105469 14 12 13.105469 12 12 L 12 7 L 11 8 L 11 12 C 11 12.550781 10.550781 13 10 13 L 4 13 C 3.449219 13 3 12.550781 3 12 L 3 6 C 3 5.449219 3.449219 5 4 5 L 8 5 L 9 4 Z' />
                      </svg>
                    </div>
                  </UnstyledLink>
                </div>
              </div>
            </div>

            {/* Right  */}
            <div
              id='section-2'
              ref={ref}
              className='no-scrollbar z-10 flex flex-col gap-4 overflow-x-auto overflow-y-scroll px-4 pb-4 md:w-3/5 md:gap-40 md:px-10 md:pb-40'
            >
              <div id='projects' className='relative pt-4 md:pt-14'>
                <div className='sticky top-0 left-0 right-0 py-5 uppercase tracking-widest shadow-md md:hidden'>
                  Projects
                </div>
                <div className=' flex flex-col gap-4'>
                  <ProjectCard
                    name='SuaCode.ai'
                    technology='flutter'
                    description='Learn to code on your phone with friends and Kwame, an AI TA'
                    rating='2,000'
                  />
                  <ProjectCard
                    name='Learn With Mochi'
                    technology='Next.js'
                    description='A simple programming kit that will change how your child sees the world.'
                    rating='10,000'
                  />
                  <ProjectCard
                    name='Nimdee'
                    technology='Flutter | Next.js'
                    description='Learn basic IT skills at the tap of a finger'
                    rating='40'
                  />
                  <ProjectCard
                    name='MiNFT'
                    technology='Web3 | Next.js'
                    description='The place for crowd-source alpha on the hottest NFT projects'
                    rating='1,200'
                  />
                </div>
              </div>

              <div id='technologies' className='relative'>
                <div className='sticky top-0 left-0 right-0 py-5 uppercase tracking-widest shadow-md md:hidden'>
                  Technologies
                </div>
                <div className='flex-col gap-4 md:flex md:flex-row'>
                  <div className='mb-4 flex flex-col gap-4 md:w-1/2'>
                    <TechnologyCard
                      icon={
                        <svg
                          fill='#ffffff'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          className='mr-3 h-10 w-10'
                        >
                          <path d='M3.5 12.5L6.5 15.5 19 3 13 3zM19 12L13 12 8 17 13 22 19 22 14 17z' />
                        </svg>
                      }
                      name='Flutter'
                      desc='Experience with flutter. I have built 3 android and ios apps using flutter to date.'
                      rating='3.5'
                    />
                    <TechnologyCard
                      icon={
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='mr-3 h-10 w-10'
                          viewBox='0 0 20 20'
                          fill='#fff'
                        >
                          <path
                            fillRule='evenodd'
                            d='M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      }
                      name='Backend'
                      desc='Experience with NodeJS and some databases including mongodb, postgres and mysql. I have build a total to 4 websites and 2 dashbaords and some tools with a combination of these technologies.'
                      rating='3.0'
                    />
                    <TechnologyCard
                      icon={
                        <svg
                          fill='#ffffff'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 50 50'
                          className='mr-3 h-10 w-10'
                        >
                          <path d='M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9509974 22.90625 7.4023438 C 21.147758 5.9719089 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.404125 12.173992 10.763672 14.412109 C 10.888559 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671996 41.431263 26.366006 42.068338 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.413715 46.164908 36.748047 45.394531 C 38.082379 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.855304 39.195312 35.617188 C 39.031899 34.599965 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677151 15.800695 32.435744 15.435401 30.046875 15.220703 C 28.847638 13.559329 27.615404 12.045781 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015452 7.6275969 21.642578 8.9511719 C 22.267037 9.4591336 22.905298 10.047651 23.548828 10.673828 C 22.297283 12.027473 21.054862 13.55414 19.847656 15.230469 C 17.468889 15.449074 15.236606 15.81635 13.201172 16.310547 C 13.014826 15.545537 12.849558 14.798586 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.238404 12.677734 8.9140625 C 12.960128 7.5897208 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791172 13.029071 26.605956 13.99916 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.91454 18.402344 28.810547 C 17.668186 27.538949 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.548828 17.410156 C 33.197299 17.615841 34.745083 17.901405 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725422 19.243926 32.140408 18.316416 31.548828 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398803 20.758169 13.190811 22.834118 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 15.341797 27.365234 C 15.762496 28.177853 16.200028 28.993283 16.671875 29.810547 C 17.041048 30.449973 17.418073 31.072393 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 34.619141 27.365234 C 35.143284 28.605725 35.599609 29.819681 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765252 28.981717 34.201083 28.171917 34.619141 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.64638 35.904859 22.092967 37.709497 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842987 33.980548 37.069013 34.98935 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.468699 43.247993 35.748047 43.664062 C 35.027395 44.080132 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.399747 28.314453 41.076172 C 27.678439 40.558811 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882144 35.473968 21.867188 34.101562 z' />
                        </svg>
                      }
                      name='UI/UX'
                      desc='I have used UI/UX tools such as Figma and Adobe XD.'
                      rating='3.5'
                    />
                  </div>
                  <div className='flex flex-col gap-4 md:w-1/2'>
                    <TechnologyCard
                      icon={
                        <svg
                          fill='#ffffff'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 50 50'
                          className='mr-3 h-10 w-10'
                        >
                          <path d='M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9509974 22.90625 7.4023438 C 21.147758 5.9719089 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.404125 12.173992 10.763672 14.412109 C 10.888559 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671996 41.431263 26.366006 42.068338 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.413715 46.164908 36.748047 45.394531 C 38.082379 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.855304 39.195312 35.617188 C 39.031899 34.599965 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677151 15.800695 32.435744 15.435401 30.046875 15.220703 C 28.847638 13.559329 27.615404 12.045781 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015452 7.6275969 21.642578 8.9511719 C 22.267037 9.4591336 22.905298 10.047651 23.548828 10.673828 C 22.297283 12.027473 21.054862 13.55414 19.847656 15.230469 C 17.468889 15.449074 15.236606 15.81635 13.201172 16.310547 C 13.014826 15.545537 12.849558 14.798586 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.238404 12.677734 8.9140625 C 12.960128 7.5897208 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791172 13.029071 26.605956 13.99916 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.91454 18.402344 28.810547 C 17.668186 27.538949 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.548828 17.410156 C 33.197299 17.615841 34.745083 17.901405 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725422 19.243926 32.140408 18.316416 31.548828 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398803 20.758169 13.190811 22.834118 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 15.341797 27.365234 C 15.762496 28.177853 16.200028 28.993283 16.671875 29.810547 C 17.041048 30.449973 17.418073 31.072393 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 34.619141 27.365234 C 35.143284 28.605725 35.599609 29.819681 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765252 28.981717 34.201083 28.171917 34.619141 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.64638 35.904859 22.092967 37.709497 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842987 33.980548 37.069013 34.98935 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.468699 43.247993 35.748047 43.664062 C 35.027395 44.080132 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.399747 28.314453 41.076172 C 27.678439 40.558811 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882144 35.473968 21.867188 34.101562 z' />
                        </svg>
                      }
                      name='Front End'
                      desc='Experience with ReactJS, NextJs, Tailwind, GSAP and PHP Laravel. I have build a total to 4 websites and 2 dashbaords and some tools with a combination od these technologies.'
                      rating='4.0'
                    />
                    <TechnologyCard
                      icon={
                        <svg
                          fill='#ffffff'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 48 48'
                          className='mr-3 h-10 w-10'
                        >
                          <path
                            fill='#ffa000'
                            d='M25.01,8.565c-0.386-0.753-1.466-0.755-1.848,0l-2.347,4.426L15.404,2.547 c-0.471-0.874-1.798-0.653-1.952,0.325L8.003,37.997L30.25,18.75L25.01,8.565z'
                          />
                          <path
                            fill='#ff5717'
                            d='M25.795 22.604L20.815 12.992 8.003 37.997z'
                          />
                          <path
                            fill='#ffca28'
                            d='M35.859,11.838c-0.13-0.802-1.115-1.12-1.69-0.544L8.003,38.002l14.479,7.614 c0.917,0.512,2.034,0.512,2.951,0.001L40,38.005L35.859,11.838z'
                          />
                        </svg>
                      }
                      name='Firebase'
                      desc='Experience with Firebase Services I have built various application using firebase services such as firestore, storage, cloud functions, dynamic links, hosting among others.'
                      rating='4.0'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
