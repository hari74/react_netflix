import React from 'react';
import Slider from '../slider/Slider';
import Searchfilter from '../Pages/searchfilter/Searchfilter';

const Search = ({ search, show }) => {
    const filteredMovies = show.filter((movie) =>
    movie.title && movie.title.toLowerCase().startsWith(search.toLowerCase())
  );
  
  console.log("filer",filteredMovies);

  return (
    <div className='filterbgcolormain'>
      <div className="movies-container">
        {/* {filteredMovies.map(e=>{
          return <h1>e.original_title</h1>
        })} */}
        <Searchfilter data={filteredMovies}/>
      </div>
    </div>
  );
};

export default Search;

