import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Surya from './surya.js';
import Cards from './components/card';
import {BrowserRouter, Route} from 'react-router-dom';
import Resume from './components/Resume.js';

// function App() {
//   // return React.createElement('p',{style:{color:"red"}},'surya');

//   return <div><h1>surya</h1><h2>venkat</h2></div>
  

// }

// class App extends React.Component{
//   render(){
//     return(

//       // React.createElement('div',{style:{background:'yellow'}},React.createElement('h2',null,'venkat'))
//          React.createElement('div',{id:'hai'},React.createElement('h2',null,React.createElement('p',null,'narayana')))

//       );
//   }
// }

// function App(){
//   const x=(
//      <div>
//      <p>Hai everyone</p>
//      <h4>How are you</h4>
//      </div>
//     );

//     return(
//      ReactDOM.render(x,document.getElementById('root'))
//     )
// }

// class App extends React.Component{
//   render(){
//     return(
//         <div>
//          <Surya name="venkat" role="developer"></Surya>
//          <Surya name="narayana" role="Trainer"></Surya>
//         </div>
//       );
//   }
// }

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <BrowserRouter>
        <Route exact path="/" component={Cards}/>

        <Route exact path="/resume" component={Resume}/>
        
        </BrowserRouter>
      {/* <Cards/> */}
      </div>

      );
  }
}


export default App;
