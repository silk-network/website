import './App.css'
import {useEffect, useState} from "react";
import TextTransition, {presets} from "react-text-transition";

const TEXTS = ['The Future of Cross-Chain Liquidity', 'Effortless Blockchain Interoperability', 'Efficiency. Speed. Security.', 'Interoperability. Like Never Before.', 'Cross-Chain. Perfected.', 'Seamless DeFi is Near', 'The Future of Cross-Chain Liquidity'];

function App() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="w-dvw h-dvh flex items-end">
        <div className="flex flex-col lg:flex-row gap-3 sm:mb-24 sm:ml-40 ">
          <div className="flex items-center p-10 backdrop-blur-xl bg-white/10 rounded-lg max-w-[225px]">
            <img width={145} src="./silk-mark.svg" title="profile"></img>
          </div>
          <div className="flex flex-col sm:gap-1 p-10 backdrop-blur-xl bg-white/10 rounded-lg font-['Sf_Pro_Display'] -tracking-[0.01em] text-xl sm:text-2xl font-bold ">
            <div className="w-[400px]">
              <TextTransition inline springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </div>
            <div className="opacity-50">Get Ready for Silk</div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <video className="bg-[url('https://cdn.prod.website-files.com/669678bcfc876e899748c3c5%2F6696874ccae1eb7d8f02ae13_SILKFLOWLOOPWEB-poster-00001.jpg')] object-cover w-full h-full" autoPlay loop muted playsInline data-wf-ignore="true">
          <source src="https://cdn.prod.website-files.com/669678bcfc876e899748c3c5%2F6696874ccae1eb7d8f02ae13_SILKFLOWLOOPWEB-transcode.mp4" data-wf-ignore="true"/>
          <source src="https://cdn.prod.website-files.com/669678bcfc876e899748c3c5%2F6696874ccae1eb7d8f02ae13_SILKFLOWLOOPWEB-transcode.webm" data-wf-ignore="true"/>
        </video>
      </div>
    </>
  )
}

export default App

//network, bridge, protocol, wallet