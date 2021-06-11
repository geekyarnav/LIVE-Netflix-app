import React from "react";
import requests from "./requests"
import "./App.css";

import Lane from "./components/Lane";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="App">

    {/* <NavBar */}
   
    <Nav />
    <Banner />

     <Lane title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      //  Boolean ByDefault ={true}
      isLargeLane
     />
     <Lane title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Lane title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Lane title="Trending" fetchUrl={requests.fetchTrending}/>
     <Lane title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Lane title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Lane title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Lane title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/> 
     <Lane title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
 
     <Footer />
       </div>
       )
}

export default App
