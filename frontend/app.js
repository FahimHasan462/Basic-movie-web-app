homemoveie=async()=>{
     await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=6d946c626977506d55d69d7c175c26bd`)
  .then(res => res.json())
  .then(movie => {
    for  (let homemovie of movie["results"].slice(0,12)){
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

//movie cards for Search bar
Searchmoviecard=async(keyword)=>
    {
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6d946c626977506d55d69d7c175c26bd&query=${keyword}`)
    .then(response => response.json())
    .then(data => {
    for(let movieinfo of data.results){
      let newcCard=document.createElement("div");
      newcCard.classList.add("movie-card");
      let imgpost=document.createElement("img");
      imgpost.src=`https://image.tmdb.org/t/p/w185/${movieinfo["poster_path"]}`
      newcCard.append(imgpost);
      let movietitle=document.createElement("h3");
      movietitle.innerText=movieinfo["title"];
      newcCard.append(movietitle);
      section=document.querySelector(".movies");
      section.append(newcCard);

    }});
    }
  

let inputbtn=document.querySelector("input");
inputbtn.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      section_clear=document.querySelector(".movies").innerHTML=""
      const keyword = event.target.value;
      Searchmoviecard(keyword);

    }
  });
