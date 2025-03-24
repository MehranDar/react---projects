import React from 'react'
import Alert from '../components/Alert'

function AlertApp() {
  return (
    <div  className="container mx-auto">
    <Alert type={"success"} message={"successful login"}/>
    <Alert type={"Info"} message={"time Triggerred"} delay={true}/>
    <Alert type={"success"} message={"my button"} delay={true} delayTime={1000}/>
    </div>
  );
}

export default AlertApp
