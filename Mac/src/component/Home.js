import React, {  } from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <div className='container'>
        <div class="accordion my-2" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#TaskManger" aria-expanded="true" aria-controls="TaskManger">
                TaskManger
              </button>
            </h2>
            <div id="TaskManger" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              In task manager, you will get Detail of your System performance in RealTime like Cpu usage, Ram usage, Temperature of the System and Battery on Your Mobile Phone. Your  Work  is Only to Select  Option, It Sends Performance Detail  in Every 10sec<strong><Link className="nav-link" to="/taskManger">TaskManger</Link></strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div class="accordion my-2" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#SystemAssistant" aria-expanded="true" aria-controls="collapseOne">
                SystemAssistant
              </button>
            </h2>
            <div id="SystemAssistant" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              MyAssistant As sound says MyAssistant is working on speech recognition, You Will be using MyAssistant For desktop ShutDown and Restart, Volume Up and Volume Down, mute  and Open Some Applications on the Desktop By Using Voice <br></br><Link className="nav-link" to="/help">Command</Link>
              <strong><Link className="nav-link" to="/myAssistant">MyAssistant</Link></strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div class="accordion my-2" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ChatSystem" aria-expanded="true" aria-controls="collapseOne">
                ChatSystem
              </button>
            </h2>
            <div id="ChatSystem" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              ChatSystem is working similar to MyAssistant But the Only difference  Here  is  Chat System Send data to your Desktop By Text   <strong><Link className="nav-link" to="/chat">ChatSystem</Link></strong>          </div>
            </div>
          </div>
        </div>
      </div>   
      <div className='container'>
        <div class="accordion my-2" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Help" aria-expanded="true" aria-controls="collapseOne">
                Help
              </button>
            </h2>
            <div id="Help" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong> <Link className="nav-link" to="/Help">Help</Link></strong>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className='container'>
        <div class="accordion my-2" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#About" aria-expanded="true" aria-controls="collapseOne">
                About
              </button>
            </h2>
            <div id="About" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <strong> <Link className="nav-link" to="/about">About</Link></strong>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Home