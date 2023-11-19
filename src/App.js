
import './App.css';
import {images} from './data';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Card from './components/singlecard/card';
import { useEffect, useState } from 'react';
import Sticky from './components/sticky-footer/sticky';



function App() {
  const [matches, setMatches] = useState(false);

    useEffect(() => {
      const mql = window.matchMedia("(max-width:600px)");
      mql.addEventListener("change", resize);
      function resize(e) {
          if (e.matches) { // If media query matches
             setMatches(true)
          } else {
             setMatches(false)

          }
      }
      return () => {
          mql.removeEventListener("change", resize);
      }
  },[]);
  console.log(matches);
  const sortCategories =Array.from(new Set(images.map((item) => item.category)));
  const [selectedCategory, setSelectedCategory] = useState("recommended");
  const [filteredImages,setFilteredImages] = useState(images);

  useEffect(()=> {
    const newFilteredImages = images.filter((item) => item.category === selectedCategory);
    setFilteredImages(newFilteredImages);
  },[selectedCategory])

  return (
    <div className="App">
       <Header sortCategories={sortCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} media={matches}/>
       <div className='container'>
       {filteredImages.map((item)=>{
        return(
           <div>
             <Card id={item.id} img={'images/' + item.url}  productname={item.name} descripition={item.owners}  likes={item.likes}  views={item.views} />
          </div>
        )
       })}
       </div>
      
        <Footer media={matches}/>
       <Sticky/>
    
    </div>
  );
}

export default App;
