import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

import { useState } from 'react';

const Home = () => {

  const [userInput, setUserInput] = useState('');
  // call setUserInput and set to whatever is in the textarea.
  // allows value of userInput to always be what is in the textarea.
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>👋 hi, I'm Pac, Capsule's AI assistant</h1>
          </div>
          <div className="header-subtitle">
            <h2>Need help understanding some of our documentation? Ask here.</h2>
          </div>
          {/* Add this code here*/}
          <div className="prompt-container">
            <textarea 
              placeholder="start typing here" 
              className="prompt-box" 
              value={userInput}
              onChange={onUserChangedText}
            />
            <div className="prompt-buttons">
              <a className="generate-button" onClick={null}>
                <div className="generate">
                  <p>Generate</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;