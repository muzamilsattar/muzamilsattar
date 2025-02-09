import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id='project'>
      <h2>My Projects</h2>
      <div className='projects'>
        {/* Project 1: Daraz Landing Page Clone */}
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
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='GitHub' />
                </a>
                <a
                  href='https://ecommerce-sale-project.vercel.app/'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={externalLink} alt='Live Demo' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>Daraz Landing Page Clone</h3>
              <p>
                Fully responsive web page clone using Tailwind CSS and React. Features smooth
                animations and a visually appealing design.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 2: Worldwise TODO List */}
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
                  href='https://github.com/muzamilsattar/wolrdwise'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='GitHub' />
                </a>
                <a href='https://muziworldwise.vercel.app/' target='_blank' rel='noreferrer'>
                  <img src={externalLink} alt='Live Demo' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>Worldwise App</h3>
              <p>
                A React app that lets users track and save city locations for their trip, featuring
                an interactive map.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>React-Leaflet Map</li>
                <li>Local JSON Server</li>
                <li>useContext</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 3: Omni Food Website */}
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
                  href='https://github.com/muzamilsattar/muzifood'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='GitHub' />
                </a>
                <a href='https://muzifood.netlify.app/' target='_blank' rel='noreferrer'>
                  <img src={externalLink} alt='Live Demo' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>Omni Food Website</h3>
              <p>
                Interactive food delivery website built with HTML, CSS, and JavaScript. Features
                smooth animations and a beautiful layout.
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

        {/* Project 4: Movie Search App */}
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
                <a href='https://github.com/muzamilsattar/movies' target='_blank' rel='noreferrer'>
                  <img src={githubIcon} alt='GitHub' />
                </a>
                <a href='https://movieezverse.vercel.app/' target='_blank' rel='noreferrer'>
                  <img src={externalLink} alt='Live Demo' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>Movie Search App</h3>
              <p>
                A React.js app that fetches movies from the OMDB API, allowing users to search and
                add movies to their watchlist.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>React.js</li>
                <li>OMDb API</li>
                <li>CSS</li>
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
                <title>Folder</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
                <a
                  href='https://github.com/muzamilsattar/pizzaorder'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='Visit site' />
                </a>
                <a href='https://reduxpizza.vercel.app/' target='_blank' rel='noreferrer'>
                  <img src={externalLink} alt='Visit site' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>React Redux Pizza App</h3>
              <p>
                Redux Pizza is a modern pizza-ordering web app built with React.js, Redux Toolkit,
                and Tailwind CSS. It features a sleek, user-friendly interface and smooth state
                management.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>React.js</li>
                <li>Redux Toolkit</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
