import React from 'react';
// import Lottie from 'react-lottie-player';
import dynamic from 'next/dynamic';

const LottiePlayer = dynamic(() => import('react-lottie-player'), {
  ssr: false, // Disable the SSR due to deployment
});

import lottieJson from '/public/main-animation.json';

export default function Example() {
  return <LottiePlayer loop animationData={lottieJson} play />;
}
