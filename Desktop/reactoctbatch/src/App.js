import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import Cards from './card.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Resume from './resume.js';

// import Surya from './surya.js';

// import Header from './header.js';
// import StateComponent from './state.js';
// import Head from './props.js';

// function App() {
  // return React.createElement("div",{class:'surya'},React.createElement('h2','null',React.createElement('p','null','kalyan')));
  // return React.createElement("h2",{style:{color:"red"}},'venkat');
  // return (
  //   <div className="App">
  //    <h1>Good evening students</h1>
  //    <p>Welcome to apssdc</p>
  //    <Header></Header>
  //    <StateComponent/>
  //    <Head name="venkat">
  //    <p>This venkat</p>
  //    <p>Hai all</p>
  //    </Head>

  //    <Head name="veera">
  //     <p>This veera</p>
  //    <p>Hai everyone</p>
  //    </Head>
  //   </div>
  // );



//}

// class App extends React.Component{
//   render(){
//     return(
//     <div>
//     <Surya/>
//     </div>
//     );
//   }
// }

function App(){
  return(
    <div className="App">
    <BrowserRouter>
    <Route exact path="/" component={Cards}/>

    <Route exact path="/resume" component={Resume}/>
    </BrowserRouter>


    </div>

    );
}


export default App;
