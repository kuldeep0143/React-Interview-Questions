import "./App.css";
import useTimer from "./useTimer";

function App() {
  const timer = useTimer();
  return (
    <div>
      <h1>useTimer Custom Hook</h1>
      <div>
        <h2>Seconds :{timer.seconds}</h2>
        <h4>Timer is {timer.isActive ? "active" : "paused"}</h4>
      </div>
      <div>
        <button onClick={timer.start}>Start</button>
        <button onClick={timer.pause}>Pause</button>
        <button onClick={timer.resume}>Resume</button>
        <button onClick={timer.reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
