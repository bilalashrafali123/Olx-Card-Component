import React from 'react'
import Card from './components/Card'
import './App.css'



const App = () => {
  return (
  <>

      <h1 className='mt-4 text-center text-4xl'>Olx Card Component..</h1>
      <br />
      <br />
      <div className='flex justify-center flex-wrap gap-5'>
  
      <Card img = "https://images.unsplash.com/photo-1646122244998-20579990557f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8am9yZGFuc3xlbnwwfHwwfHx8MA%3D%3D" brand = "Nike"   name = "Air force 1"  
            description = "A very amazing pair of sneakers" price = "Rs:2000" />
           
            
      <Card img ="https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vdHxlbnwwfHwwfHx8MA%3D%3D"  brand = "Air Jordan" name = "Air Jordan Univ Blue" description = "All time great sneakers" price = "Rs:5000" />
      <Card img = "https://images.unsplash.com/photo-1578986175247-7d60c6df07c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D"   brand = "Onitsuka Tiger " name = "Onitsuka Tiger Mexico 66" description = "All time Fav sneakers"  price = "Rs:6000"
       />
      <Card img = "https://images.unsplash.com/photo-1575456456278-936c89ccdb7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D" brand = "Puma"  name = "Puma sneakers "   description = "Puma the best in the world" price = "Rs:8000" />
      <Card img = "https://images.unsplash.com/photo-1535595278992-7d1e59b30194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D" brand = "Zara"  name = "Boots "   description = "Black boots with high ankle look too" price = "Rs:9000" />
      <Card img = "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D" brand = "HnM"  name = "Sports Shoes "   description = "Sports Shoes with best grip" price = "Rs:7500" />
      </div>
    </>
  );
};

export default App;
