import './App.css';
import { Counter } from './Counter/Counter';
import { ImgName } from './ImgName';

function App() {
  const handleClick = () => {
    alert('hi');
  };
  return (
    <div className="App">
      <h1>learn react</h1>
      <ImgName myName="Shubham" handleClick={handleClick} />
      <ImgName myName="Suraj Sir" />
      <ImgName myName="Yogesh" />
      <Counter />
    </div>
  );
}

export default App;
