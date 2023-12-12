/* import logo from './logo.svg'; */
/* import { useState } from 'react';
import './App.css';
import Flake from './snow-effect/flake/component' */
import Snow from './snow-effect/snow/component';
/* import { randColor, randInt } from './helpers/generators'; */



function App() {

/*   let [showChild,setShowChild] = useState(true) */

  return (
    <div className='App'>
      <Snow quantity={5}/>
    </div>
/*     <div className="App">
      {showChild && <Flake 
        size={randInt(20,40)}
        color={randColor()}
        top={0}
        left={randInt(0,100)}
        whenDone={()=>{setShowChild(false)}}
      />}
    </div> */
  );
}

export default App;
