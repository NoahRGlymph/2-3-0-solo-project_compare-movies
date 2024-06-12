

document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const title = document.getElementById('title').value;
    const criticScore = document.getElementById('criticScore').value;
    const audienceScore = document.getElementById('audienceScore').value;
    const domesticGross = document.getElementById('domesticGross').value;
    const genre = document.getElementById('genre').value;

    // Create new grid item
    const newMovieDiv = document.createElement('div');
    newMovieDiv.className = 'grid-item';
    newMovieDiv.innerHTML = `
        <strong>${title}</strong><br>
        Critic Score: ${criticScore}%<br>
        Audience Score: ${audienceScore}%<br>
        Domestic Total: ${domesticGross}<br>
        Genre: ${genre}
    `;

    // Append the new item to the grid
    document.getElementById('gridContainer').appendChild(newMovieDiv);

    // Reset the form
    event.target.reset();
});
