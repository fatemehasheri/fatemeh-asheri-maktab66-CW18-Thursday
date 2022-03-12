import './App.css';
import Clock from './ClassClock'
import Tablematrix from './TableMatrix';
import FunctionClock from './FunctionClock';
import SampleRef from './SampleRef'
const matrix =[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{color:"red"}}>class Clock</h2>
       <Clock />
       <h2 style={{color:"red"}}>Tablematrix</h2>
        <table>
        <Tablematrix matrix={matrix} />
        </table>
        <h2 style={{color:"red"}}>function Clock</h2>
        <FunctionClock /> 
        <h2 style={{color:"red"}}>Sample Ref</h2>
        <SampleRef />
      </header>
    </div>
  );
}

export default App;
