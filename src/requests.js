const API_KEY ="e8fa736b9b5833696bbc588d4b375d33";

const requests = [

    {
      id : 1,
      title:"Trending",
      link:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
      islargeRow :false,
    },
    {
      id : 2,
      title:"NetflixOriginals",
      link:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
      islargeRow :true,
    },
    {
      id : 3,
      title:"TopRated",
      link:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      islargeRow :true,
    },
    {
      id : 4,
      title:"ActionMovies",
      link:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
      islargeRow :true,
    },
    {
      id : 5,
      title:"ComedyMovies",
      link:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
      islargeRow :true,
    },
    {
      id : 6,
      title:"HorrorMovies",
      link:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
      islargeRow :true,
    },
    {
      id : 7,
      title:"RomanceMovies",
      link: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      islargeRow :true,
    },
    {
      id : 8,
      title:"Documentaries",
      link:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
      islargeRow :true,
    }
    
];
  
  export default requests;