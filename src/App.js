import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Tour from './components/Tour';
import data from "./data"

function App() {

  const place = data.map(item => {
    return (
      <Tour
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Header />
      <Hero />
      <div className='tour-container'>
        {place}
      </div>
    </div>
  );
}

export default App;
