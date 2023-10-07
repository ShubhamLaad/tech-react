import './App.css';
import { Counter } from './Counter/Counter';
import { Gallery } from './Gallery/Gallery';
import { ImgName } from './ImgName/ImgName';
import { Watch } from './Watch/Watch';

function App() {
  return (
    <div className="App">
      <h1>learn react</h1>
      {/* <Watch /> */}
      {/* <ImgName myName="Shubham" handleClick={handleClick} />
      <Counter /> */}
      <Gallery />
    </div>
  );
}

export default App;
