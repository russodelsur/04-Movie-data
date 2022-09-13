let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };

  const movieGallery = document.querySelector('.movie-gallery');

  for (let i = 0; i < Object.keys(movieData).length; i++) {
    const poster = document.createElement('poster');
    const image = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    const movieInfo = Object.values(movieData);

    image.src = `./assets/${Object.keys(movieData)[i]}.jpg`;
    image.alt = `an image of ${Object.keys(movieData)[i]} poster`
    h3.textContent = Object.keys(movieData)[i].toUpperCase() + " - " + movieInfo[i].rating ;

    p.textContent = movieInfo[i].plot;
    // p.textContent = movieInfo[i].cast;
    // p.textContent = movieInfo[i].year;
    

    poster.append(image);
    poster.append(h3);
    poster.append(p);

    movieGallery.append(poster);
}

console.log(movieGallery);
console.log(Object.keys(movieData).length);

const titles = Object.keys(movieData);

let text = "";
for (let x in titles) {
  text += titles[x] + " ";
}

// if (typeof movieData === "undefined") {
//   text = "x is undefined";
// } else {
//   text = "x is defined";
// }
  
  // Object.values(movieData);

  // document.getElementById("movies").innerHTML = text;
  // // document.getElementById("plot").innerHTML = text;

  console.log(text);
  console.log(Object.keys(movieData));
