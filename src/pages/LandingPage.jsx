import "./LandingPage.css" 
import { useState } from 'react';

const Panel = (props) => {
  const [openClass, setOpenClass] = useState('');
  const [activeClass, setActiveClass] = useState('');

  function toggleOpen() {
    console.log("Hello");
    if(openClass === '') {
      setOpenClass('open');
    }
    if (openClass === 'open') {
      setOpenClass('');
    }
  }

  function toggleActive(e) {
    if(activeClass === '' && openClass === 'open') {
      setActiveClass('open-active');
    }
    if (activeClass === 'open-active' && openClass === '') {
      setActiveClass('');
    }
  }

  function handlePanelOnClick(){
    toggleOpen();
  }

  return (
    <div className={`panel panel${props.panelNumber} ${openClass} ${activeClass}`}
          onClick={()=>{
            handlePanelOnClick();
          }}
          onTransitionEnd={()=>{
            console.log("onTransitionEnd")
            toggleActive();
          }}>
          {props.panelText.map((text, index)=>{
            return (<p key={index}>{text}</p>)
          })}
    </div>
  )
}

const LandingPage = () => {
  return (
    <div>
      <div className='panels mt-16 '>
        <Panel panelNumber={1} panelText={["you", "buy", "now" ]}/>
        <Panel panelNumber={2} panelText={["we", "sell", "shit"]}/>
        <Panel panelNumber={3} panelText={["can", "trade", "too"]}/>
        <Panel panelNumber={4} panelText={["you", "create", "shit"]}/>
      </div>
    </div>
  );
};
export default LandingPage;
