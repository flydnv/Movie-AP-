const section = document.querySelector(".section");
const path = "http://image.tmdb.org/t/p/w500";
fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=1c107ac0fc3773c6b752c2fb2bb7c62f&language=en-US&page=1"
)
  .then((a) => a.json())
  .then((a) => {
    // console.log(a);
    let results = Object.entries(a.results);
    console.log(results);
    results = results.sort((a, b) => b.popularity - a.popularity);
    // console.log(results[0][1].original_title);
    for (i = 0; i < results.length; i++) {
      // console.log(results[i][1].popularity);
      const box = document.createElement("div");
      box.classList.add("box");
      section.append(box);
      const h1 = document.createElement("h1");
      h1.textContent = results[i][1].original_title;
      box.append(h1);
      const image = document.createElement("img");
      image.setAttribute("src", `${path}${results[i][1].poster_path}`);
      box.append(image);
      const about = document.createElement("div");
      const imdb = document.createElement("h3");
      imdb.textContent = `IMDB: ${results[i][1].vote_average}`;
      about.append(imdb);
      const popularity = document.createElement("h2");
      popularity.textContent = `POP: ${results[i][1].popularity}`;
      about.append(popularity);
      box.append(about);
      about.classList.add("about")
    }
  });
