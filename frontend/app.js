//movie cards
moviecard=async(keyword)=>
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
      const keyword = event.target.value;
      moviecard(keyword);

    }
  });
