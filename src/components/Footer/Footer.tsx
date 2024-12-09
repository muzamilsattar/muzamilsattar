import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import facebook from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className='footer'>
      <a href='https://muzamilsattar.vercel.app' target='_blank' className='logo'>
        <span>www.muzamil</span>
        <span>sattar.netlify</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt='React' />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className='social-media'>
        <a href='https://www.linkedin.com/in/muzamilsattar' target='_blank' rel='noreferrer'>
          <img src={linkedin} alt='Linkedin' />
        </a>
        <a href='https://github.com/muzamilsattar/' target='_blank' rel='noreferrer'>
          <img src={githubIcon} alt='GitHub' />
        </a>
        <a
          href='https://api.whatsapp.com/send/?phone=%2B923086783310&text=Hello+Muzamil'
          target='_blank'
          rel='noreferrer'>
          <img src={whatsapp} alt='Whatsapp' />
        </a>
        <a href='https://www.facebook.com/muzamilsattar.144' target='_blank' rel='noreferrer'>
          <img src={facebook} alt='Facebook' />
        </a>
        <a href='https://www.instagram.com/muzi_pulse' target='_blank' rel='noreferrer'>
          <img src={instagramIcon} alt='Instagram' />
        </a>
      </div>
    </Container>
  );
}
