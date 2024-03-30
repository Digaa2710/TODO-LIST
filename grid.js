const container = document.querySelector(".container");

async function fetchPhotos() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`);
    const data = await res.json();
    displayAlbumsAndPhotos(data);
}
  
function displayAlbumsAndPhotos(albums) {
    const albumGrid = document.createElement("div");
    albumGrid.className = "album-grid";

    albums.forEach((album) => {
        const albumCard = document.createElement("div");
        albumCard.className = "album-card";

        const title = document.createElement("h3");
        title.innerText = album.title;
        const img = document.createElement("img");
        img.src = album.thumbnailUrl;
        img.alt = album.title;
        albumCard.appendChild(img);

        albumCard.appendChild(title);
        albumGrid.appendChild(albumCard);
    });

    container.innerHTML = "";
    container.appendChild(albumGrid);
}

document.addEventListener('DOMContentLoaded', fetchPhotos)