import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import './app.scss';

function App() {
  return (
    <div className='app'>
      <div className='app__header'>
        <img src='src/assets/images/logo.svg' />
      </div>
      <div className='app__content'>
        <div className='app__content__left'>
          <img src='src/assets/images/illustration-mockups.svg' />
        </div>
        <div className='app__content__right'>
          <h1 className='app__content__title'>Build The Community Your Fans Will Love</h1>
          <p className='app__content__subtitle'>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
            connections with your users as you engage in genuine discussion.
          </p>
          <button className='app__content__button'>Register</button>
        </div>
      </div>
      <div className='app__footer'>
        <p class='app__footer__attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href='https://github.com/OliverSchrader' target='_blank'>
            Oliver Schrader
          </a>
          .
        </p>
        <div className='app__footer__icons'>
          <div className='app__footer__icon'>
            <FaFacebookF />
          </div>
          <div className='app__footer__icon'>
            <FaTwitter />
          </div>
          <div className='app__footer__icon'>
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
