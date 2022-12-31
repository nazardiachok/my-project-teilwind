import React from "react";
import {Routes, Route} from "react-router-dom";
import PostsList from "./features/posts/PostsList";

import Navigation from "./components/Navigation";

function App() {
  
  return (
    <div>
     <Navigation></Navigation>
      <Routes>
        
        <Route path="/" element={<PostsList></PostsList>}></Route>
        <Route path="/favourites" ></Route>
      </Routes>
    </div>
  );
}

export default App;
