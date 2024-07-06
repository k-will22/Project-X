import './App.css';
import Header from './Header.js'
import { useState } from 'react'
import News from './News.js'
import Events from './Events.js'
import Forum from './Forum.js'
import TopSecret from './TopSecret.js';

function App() {
  const [hidden, setHidden] = useState(false);
  const [showNews, setShowNews] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [showForum, setShowForum] = useState(true);
  const [showTopSecret, setShowTopSecret] = useState(true);

  function homePage() {
    setHidden(!hidden)
  }

  function displayNews() {
    setShowNews(!showNews)
    homePage()
  }

  function displayEvents() {
    setShowEvents(!showEvents)
    homePage()
  }

  function displayForum() {
    setShowForum(!showForum)
    homePage()
  }

  function displayTopSecret() {
    setShowTopSecret(!showTopSecret)
    homePage()
  }

  return (
    <div className="App">    
        <Header/>
        { hidden ? "none" : 
             <div className="middle">
             <div className="flex">
             <div 
             className="white" 
             onClick={() => displayNews()} 
             >News</div>
             &nbsp;  &nbsp;  &nbsp;  &nbsp;
             <div className="white"
             onClick={() => displayEvents()}
             >Events</div>
             &nbsp;  &nbsp;  &nbsp;  &nbsp;
             <div className="white"
             onClick={() => displayForum()}
             >Forum</div>
             </div>
             <br></br><br></br><br></br><br></br><br></br>
             <div className="red"
             onClick={() => displayTopSecret()}
             >TOP SECRET</div>
         </div> }
        { showNews ? "none" : 
        <div>
          <News/>
          <button className="button" onClick={() => displayNews()}>Go Back</button>
        </div>} 
        { showEvents ? "none" :
          <div>
          <Events/>
          <button className="button" onClick={() => displayEvents()}>Go Back</button>
        </div>}  
        { showForum ? "none" :
          <div>
          <Forum/>
          <button className="button" onClick={() => displayForum()}>Go Back</button>
        </div>}  
        { showTopSecret ? "none" :
          <div>
          <TopSecret/>
          <br></br><br></br>
          <button className="button" onClick={() => displayTopSecret()}>Go Back</button>
        </div>} 
    </div>
  );
}

export default App;
