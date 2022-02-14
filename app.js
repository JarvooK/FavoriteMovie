const container = document.querySelector(".container");

//get data from server

const url = "https://api.themoviedb.org/3/movie/550?api_key=3e9148a87bf319db2b24c61c449c17fc"

fetch(url)
.then(Response =>{
return Response.json();
})

.then(data =>{
    console.log(data.original_title);
    console.log(data.overview);
    console.log(data.release_date);

    //format date tp get year

    let year = new Date(data.release_date).getFullYear();
    console.log(year);
    let imagepath = data.poster_path;
    let imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+imagepath;
    console.log(imageUrl);

let movieTitle = document.createElement("H1");
movieTitle.textContent = data.original_title +" "+ year;
container.appendChild(movieTitle);

let overview = document.createElement("p");
overview.textContent = data.overview;
container.appendChild(overview);

let moviePoster = document.createElement("img");
moviePoster.src = imageUrl;
container.appendChild(moviePoster);


});

