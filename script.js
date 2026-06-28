
const API_KEY="a10e3623";

let page=1;
let query="batman";

async function searchMovies(){

query=document.getElementById("searchInput").value;
page=1;
loadMovies();

}

async function loadMovies(){

let url=`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`;

let res=await fetch(url);
let data=await res.json();

display(data.Search);

document.getElementById("pageNumber").innerText=page;

}


function display(movies){

let box=document.getElementById("movies");

box.innerHTML="";

if(!movies){
box.innerHTML="<h2>No movies found</h2>";
return;
}

movies.forEach(movie=>{

box.innerHTML+=`

<div class="card">

<img src="${movie.Poster}">

<h2>${movie.Title}</h2>

<p>${movie.Year}</p>

<button onclick="info('${movie.imdbID}')">
Details
</button>

</div>

`;

});

}


async function info(id){

let res=await fetch(
`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
);

let m=await res.json();

alert(
`Title: ${m.Title}
Year: ${m.Year}
Rating: ${m.imdbRating}

${m.Plot}`
);

}


function nextPage(){
page++;
loadMovies();
}


function previousPage(){

if(page>1){
page--;
loadMovies();
}

}


loadMovies();
