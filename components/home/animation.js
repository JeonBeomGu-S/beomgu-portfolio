import React from 'react';
// import Lottie from 'react-lottie-player';
import dynamic from 'next/dynamic';

const LottiePlayer = dynamic(() => import('react-lottie-player'), {
  ssr: false, // 서버 측 렌더링을 비활성화
});

import lottieJson from '/public/main-animation.json';

export default function Example() {
  return <LottiePlayer loop animationData={lottieJson} play />;
}
