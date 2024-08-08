import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");

  const [movie, setMovie] = useState([
    {
      Poster: "https://imgs.search.brave.com/Wyrv9FDT78jH2LWA3lsc8JDHKYtlUgqi0jmRFyfUuo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kNWQ1/eWVqcmJhOWxvLmNs/b3VkZnJvbnQubmV0/L2tleWFydC1qcGVn/L21vdmllcy9tZWRp/YS9icm93c2VyL2lu/Y2VwdGlvbl92X2Rk/X2thX3R0XzIwMDB4/MzAwMF8zMDBkcGlf/ZW4uanBn",
      Title: "Inception",
      Type: "movie",
      Year: "2010",
      imdbID: "tt1375666",
    },
    {
      Poster: "https://imgs.search.brave.com/7SiE-CbMJ2rycVSaDS2OU17HeXNidvcGrgCxk7hSD2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92YXJp/ZXR5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wNy9k/YXJra25pZ2h0Lmpw/Zz93PTEwMDAmaD01/NjMmY3JvcD0x",
      Title: "The Dark Knight",
      Type: "movie",
      Year: "2008",
      imdbID: "tt0468569",
    },
    {
      Poster: "https://imgs.search.brave.com/I9CvvSYyvSCcq8cWmB-pzdsfC5sXF26LIwiYmI2fDlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzkxZy1XalhLZTdM/LmpwZw",
      Title: "Interstellar",
      Type: "movie",
      Year: "2014",
      imdbID: "tt0816692",
    },
    {
      Poster: "https://imgs.search.brave.com/e9lFNncD-tD9Q6rgiF1Ao7HDoxDE4eCnN5krYuxPWsA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxY1luQ3lGQ1lM/LmpwZw",
      Title: "Parasite",
      Type: "movie",
      Year: "2019",
      imdbID: "tt6751668",
    },
    {
      Poster: "https://imgs.search.brave.com/5p9HrzSCB2OpqqeD_N6JcVA95CCNB0ZxNQJbAW6thm0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9sbHl3b29kcmVw/b3J0ZXIuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzAz/L3RoZV9zaGF3c2hh/bmtfcmVkZW1wdGlv/bl8tX2hfLV8xOTk0/LmpwZz93PTEyOTYm/aD03MzAmY3JvcD0x",
      Title: "The Shawshank Redemption",
      Type: "movie",
      Year: "1994",
      imdbID: "tt0111161",
    },
    {
      Poster: "https://imgs.search.brave.com/cc6_M9KZ263bkVrAWxnuT36X13S3quXUmmXCZ7y7jjQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmZpbG1hZmZpbml0/eS5jb20vYnJlYWtp/bmdfYmFkLTM0NDYw/ODU1NC1sYXJnZS5q/cGc",
      Title: "Breaking Bad",
      Type: "series",
      Year: "2008–2013",
      imdbID: "tt0903747",
    },
    {
      Poster: "https://imgs.search.brave.com/pmGny8s6_jXPjkmAYLrXjJ7rKz1F0ISfr-KEE_B2LYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtZS1vZi10/aHJvbmVzLXNlYXNv/bi04LXBpY3R1cmVz/LTV4anhnM2kzNWJu/MnhpaTQuanBn",
      Title: "Game of Thrones",
      Type: "series",
      Year: "2011–2019",
      imdbID: "tt0944947",
    },
    {
      Poster: "https://imgs.search.brave.com/Pxe_uH9k1MMKi6G__jUQfdyH7VNr38ILbxFs02dQzGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL21vdmll/cy9tZWRpYS9icm93/c2VyL01hdHJpeF8y/MDAweDMwMDAuSlBF/Rw",
      Title: "The Matrix",
      Type: "movie",
      Year: "1999",
      imdbID: "tt0133093",
    },
  ]);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const getMovie = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Please enter a movie name");
    } else {
      axios
        .get(`https://omdbapi.com/?s=${input}&apikey=fd2265b3&s`)
        .then((response) => {
          const movies = response.data.Search.map((movie) => ({
            ...movie,
            Poster: movie.Poster === "N/A" ? "https://via.placeholder.com/300x450?text=No+Image" : movie.Poster,
          }));
          setMovie(movies);
        });
    }
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-2xl font-bold text-white">
            RoseFlix
          </a> 
          <form className="flex" role="search" onSubmit={getMovie}>
            <input
              className="form-input mr-2 p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              type="search"
              placeholder="Movie Name"
              aria-label="Search"
              value={input}
              onChange={onChangeInput}
            />
            <button className="bg-blue-800 hover:bg-blue-600 text-white p-2 rounded transition duration-300" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container  mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movie &&
            movie.map((value, index) => {
              return (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105" key={index}>
                  <img src={value.Poster} className="w-full h-64 object-cover" alt="Movie Poster" />
                  <div className="p-4">
                    <h5 className="font-bold text-lg text-gray-900">{value.Title}</h5>
                    <div className="flex justify-between mt-2 text-gray-700">
                      <p>
                        <span className="font-bold">Type:</span> {value.Type}
                      </p>
                      <p>
                        <span className="font-bold">Year:</span> {value.Year}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
