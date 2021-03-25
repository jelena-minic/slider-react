import './App.css';
import { Slider } from './components/Slider/Slider'



function App() {
  const images = [
    "https://picsum.photos/400/300",
    "https://picsum.photos/350/300", 
    "https://picsum.photos/500/300",
    "https://picsum.photos/600/300"
  ];
  return (
    <div className="App">
      <Slider slides={images}/>
    </div>
  );
}

export default App;
