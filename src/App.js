import './App.css';
import { Counter } from './Counter/Counter';
import { ImgName } from './ImgName/ImgName';
import { Watch } from './Watch/Watch';

function App() {
  return (
    <div className="App">
      <h1>learn react</h1>
      <Watch />
      {/* <ImgName myName="Shubham" handleClick={handleClick} />
      <Counter /> */}
    </div>
  );
}

export default App;
