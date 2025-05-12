// 🔹 Fetch Latest Movie
homemoveie=async()=>{
     await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=6d946c626977506d55d69d7c175c26bd`)
  .then(res => res.json())
  .then(movie => {
    for  (let homemovie of movie["results"].slice(0,6)){
      let newcCard=document.createElement("div");
      newcCard.classList.add("movie-card");
      let imgpost=document.createElement("img");
      imgpost.src=`https://image.tmdb.org/t/p/w185/${homemovie["poster_path"]}`
      newcCard.append(imgpost);
      let movietitle=document.createElement("h3");
      movietitle.innerText=homemovie["title"];
      newcCard.append(movietitle);
      section=document.querySelector(".movies");
      section.append(newcCard);
    }

  })}
  homemoveie()