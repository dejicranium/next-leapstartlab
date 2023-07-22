import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import variables from '../styles/variables.module.scss'
import { Logo } from '../components/Logo';
import { Project } from '../components/Project';
import { Experiment } from '../components/Experiment';
import { ExperimentsContainer } from '../components/ExperimentsContainer';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

export default function Home() {
  const experiments = [
      {video_link: "https://youtube.com/embed/OtaxZNCYetQ"}, 
      {video_link: "https://youtube.com/embed/z8vQ1zMFt2I"}, 
      {video_link: "https://youtube.com/embed/6pz8WCWwrFw"},
  ]

  const projects = [
    {
      name: "FocusTug",
      thumbnail: "https://i.ibb.co/6tp2KhX/Screenshot-2023-07-01-at-12-40-04.png",
      description: "The AI productivity web extension",
      link: "https://www.focustug.com"

    },
    {
      name: "Waypal",
      thumbnail: "https://i.ibb.co/fQsLhGh/Screenshot-2023-07-20-at-03-56-20.png",
      description: "Find travel partners to the same destination",
      link: "http://waypal.co"

    },
    {
      name: "Afflee",
      thumbnail: "https://i.ibb.co/WWhSWFR/Screenshot-2023-07-20-at-03-58-46.png",
      description: "Connect with African freelance marketers to push your products.",
      link: "https://www.afflee.com"

    },
    {
      name: "PointsBud",
      thumbnail: "https://i.ibb.co/KDjpMDY/Screenshot-2023-07-20-at-04-02-16.png",
      description: "Customer retention platform for restaurants",
      link: "https://www.pointsbud.com/menu/circa-lagos"

    },
    {
      name: "Lendsqr V1 APIs",
      thumbnail: "https://i.ibb.co/tYz2pkQ/Screenshot-2023-07-20-at-04-03-53.png",
      description: "Lending infrastructure for financial institutions",
      link: "https://lendsqr.com"

    },
      {name: "OpenBanking Nigeria APIs",
      thumbnail: "https://i.ibb.co/G95009n/Screenshot-2023-07-20-at-04-07-53.png",
      description: "APIs for Open Banking in Nigeria",
      link: "https://openbanking.ng"
    }
  ]



  const flutterwaveStyle = {
    filter: "brightness(0.5) invert(1)"
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Leap Start Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.header}>
          <div className={styles.header__container}>
            <Logo></Logo>

            <div className={styles.header__ctas}>

              <a href='#about'>About</a>
              <a href='#projects'>Projects</a>
              <a href='#experiments'>Experiments</a>
              <a className={styles.header__ctas__button} href='#contact'>Contact</a>

           </div>


          </div>



          <div className={styles.hero} id="about">
            <div className={styles.hero__container}>
              
              <h2>
                <div className={styles.hero__header}>
                  <div className={styles.hero__header__word1}>Design<span className={styles.underline}>s</span></div>
                  <div className={styles.hero__header__word2}>Experiment<span className={styles.underline}>s</span></div>
                  <div className={styles.hero__header__word3}>Product<span className={styles.underline}>s</span></div>
                </div>
              </h2>

              <p className={styles.hero__lead}>Turn your ideas into reality</p>
              <p className={styles.hero__subline}>We help founders launch products and automate their business processes.</p>

              <div className={styles.hero__trusted__container}>
                <p className={styles.hero__trusted}>Trusted by</p>
                <div className={styles.hero__companies}>
                  <Image width="200" height="100" style={flutterwaveStyle }  src="https://www.afflee.com/_nuxt/img/flutterwave-logo.311915c.svg"></Image>
                  <Image width="200" height="100"  src="https://theboroughlagos.com/wp-content/uploads/2018/10/Artboard-1-copy.png"></Image>

                </div>
              </div>

            </div>            
          </div>


          <div className={styles.groups} id="projects">
            <div className={styles.groups__container}>
              <h3 className={styles.groups__header}>Projects</h3>
              <p>Here are some samples of our work...</p>
              <div className={styles.groups__products}>
                {projects && projects.map((project, index)=> (
                  <Project link={project.link} key={index} name={project.name} thumbnail={project.thumbnail} description={project.description}>

                  </Project>
                ))}
               
              </div>
             
            </div>
          </div>

          <div className={styles.needhelp}>
            <div className={styles.needhelp__form}>
              <h3>Need help? Contact us!</h3>
              <p>
                At LeapStart Lab, we believe in transforming ideas into reality. 
                
              </p>

              <p>
              Whether you're a visionary founder seeking to bring your product to life or looking to streamline your operations with cutting-edge automations, our expert team is here to guide you every step of the way. Reach out to us now and let's embark on a journey to achieve your goals together!
              </p>

              <Button text="Tell us about your project" onClick={()=>{document.getElementById('contact').scrollIntoView(true)}}></Button>

            </div>

            <Image src='/contact.png' height="300" width="400"></Image>

          </div>



          <div className={styles.groups} id="experiments">
            <div className={styles.groups__container}>
              <h3 className={styles.groups__header}>Experiments</h3>
              <p>We love experiments and are always keen to try out new possibilities</p>
              <div className={styles.groups__experiments}>
                <ExperimentsContainer experiments={experiments}></ExperimentsContainer>
               
              </div>
             
            </div>
          </div>
        </div>

        <Contact></Contact>
        <Footer></Footer>
        
      </main>
      <style jsx global>{`
        html,
        body {
          background: #222436;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        h1,h2,h3,h4 {
          font-family: 'Quicksand', sans-serif !important;        
        }
        p, a, input, {
          font-family: 'Montserrat', sans-serif;
        }


      `}</style>
    </div>
  )
}
