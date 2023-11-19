
import './App.css';
import {images} from './data';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Card from './components/singlecard/card';
import { useEffect, useState } from 'react';
import Sticky from './components/sticky-footer/sticky';



function App() {
 
  const sortCategories =Array.from(new Set(images.map((item) => item.category)));
  const [selectedCategory, setSelectedCategory] = useState("recommended");
  const [filteredImages,setFilteredImages] = useState(images);

  useEffect(()=> {
    const newFilteredImages = images.filter((item) => item.category === selectedCategory);
    setFilteredImages(newFilteredImages);
  },[selectedCategory])

  return (
    <div className="App">
       <Header sortCategories={sortCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
       <div className='container'>
       {filteredImages.map((item)=>{
        return(
           <div>
             <Card id={item.id} img={'images/' + item.url}  productname={item.name} descripition={item.owners}  likes={item.likes}  views={item.views} />
          </div>
        )
       })}
       </div>
      
        <Footer/>
       <Sticky/>
    
    </div>
  );
}

export default App;
