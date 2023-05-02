import React, { useEffect } from 'react'


import './EmbeddedTwiter.css'

const EmbeddedTwiter = () => {
 useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      className="twitter-timeline"
      href="https://twitter.com/share"
   data-url="https://ejemplo.com"
   data-text="Echa un vistazo a este sitio web"
   data-via="OpenAI"
   data-lang="en"
   data-size="large"
   data-related="TwitterDev"
   data-hashtags="ejemplo, twitter">
    
      Tweets by TwitterDev
    </a>
  );
}


export default EmbeddedTwiter