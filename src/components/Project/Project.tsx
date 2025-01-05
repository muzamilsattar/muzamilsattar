import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id='project'>
      <h2>My Projects</h2>
      <div className='projects'>
        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#23ce6b'
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <title>Folder</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
                <a
                  href='https://github.com/muzamilsattar/ecommerce-sale-project'
                  target='\_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='Visit site' />
                </a>
                <a
                  href='https://ecommerce-sale-project.vercel.app/'
                  target='\_blank'
                  rel='noreferrer'>
                  <img src={externalLink} alt='Visit site' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>Daraz Landing Page Clone</h3>
              <p>
                Developed a highly accurate fully responsive single page web page clone using
                Tailwind and React-js. The page features a responsive design, smooth animations, and
                a visually appealing layout.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>React-js</li>
                <li>Tailwind CSS</li>
                <li>BootStrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#23ce6b'
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'>
                {" "}
                <title>Folder</title>{" "}
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>{" "}
              </svg>
              <div className='project-links'>
                <a
                  href='https://github.com/muzamilsattar/wolrdwise'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='Visit site' />
                </a>
                <a href='https://wolrdwise.vercel.app/' target='_blank' rel='noreferrer'>
                  <img src={externalLink} alt='Visit site' />
                </a>{" "}
              </div>
            </header>
            <div className='body'>
              <h3>Worldwise Application for choosing TODO List </h3>
              <p>
                {" "}
                Developed a WorldWise app using React, enabling users to set their todo City list by
                clicking on the map and select it for thier trip . A world map that tracks your
                footsteps into every city you can think of. Never forget your wonderful experiences,
                and show your friends how you have wandered the world.
              </p>
            </div>
            <footer>
              {" "}
              <ul className='tech-list'>
                {" "}
                <li>React-leaflet Map </li> <li>local json server</li> <li>useContext</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#23ce6b '
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <title>Folder</title>{" "}
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>{" "}
              </svg>
              <div className='project-links'>
                <a
                  href='https://github.com/muzamilsattar/muzifood'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='Visit site' />{" "}
                </a>
                <a href='https://muzifood.netlify.app/' target='_blank' rel='noreferrer'>
                  <img src={externalLink} alt='Visit site' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>Omni Food project in HTML/CSS</h3>
              <p>
                Developed an interactive website for a food delivery company using HTML, CSS, and
                JavaScript. The website features a responsive design, smooth animations, and a
                visually appealing layout.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#23ce6b '
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'>
                <title>Folder</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
<<<<<<< HEAD
                <a href='https://github.com/muzamilsattar/movies' target='_blank' rel='noreferrer'>
=======
                <a href='https://github.com/muzamilsattar/muzamilsattar' target='_blank' rel='noreferrer'>
>>>>>>> 53dfed4d5e08db8f8fc9e612d0009d680195fde3
                  <img src={githubIcon} alt='Visit site' />
                </a>
                <a href='https://movieezverse.vercel.app/' target='_blank' rel='noreferrer'>
                  <img src={externalLink} alt='Visit site' />
                </a>
              </div>
            </header>
            <div className='body'>
<<<<<<< HEAD
              <h3>Movies Searhing Website in React-Js</h3>
              <p>
                {/* movies searching and adding to watch list app in react */}
                Developed a movie searching and adding to watch list app in React. The app uses the
                OMDB API to fetch movie data and allows users to add movies to their watch list. The
                app also features a search bar to filter movies by title and a pagination feature to
                display a limited number of movies per page.
=======
              <h3>OMDb Movie Search and Watchlist App</h3>
              <p>
               A React.js app to search for movies using the OMDb API and add them to a personalized watchlist. Discover, 
                organize, and track your favorite movies effortlessly!
>>>>>>> 53dfed4d5e08db8f8fc9e612d0009d680195fde3
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
<<<<<<< HEAD
                <li>React-Js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Fetch API</li>
=======
                <li>omdb ID</li>
                <li>React-js</li>
              
                <li>CSS</li>
                <li>Vercel</li>
>>>>>>> 53dfed4d5e08db8f8fc9e612d0009d680195fde3
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#23ce6b'
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <title>Code</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
                <a href='#' target='_blank' rel='noreferrer'>
                  <img src={githubIcon} alt='Visit site' />
                </a>
                <a href='#' target='_blank' rel='noreferrer'>
                  <img src={externalLink} alt='Visit site' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>Real-Time Hand Gesture-Driven 3D Object Manipulation</h3>
              <p>
                Developed a real-time hand gesture recognition system for intuitive 3D object
                manipulation. Leveraged a multimodal approach integrating OpenCV for video
                processing, MediaPipe for hand detection/landmark extraction, and scikit-learn for
                machine learning model training. Achieved 95.2% accuracy in hand gesture
                classification with efficient real-time performance.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>OpenCV</li>
                <li>MediaPipe</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#23ce6b '
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'>
                <title>Folder</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
                <a href='#' target='_blank' rel='noreferrer'>
                  <img src={externalLink} alt='Visit site' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>VeloCityAI</h3>
              <p>
                VelocityAI is a website that allows users to get instant answers to any question and
                generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI,
                users can type in text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
