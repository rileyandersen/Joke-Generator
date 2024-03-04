// Array containing 15 light-hearted jokes with authors
const jokesArray = [
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
       
        "author": "Anonymous"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
       
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
     
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
       
        "author": "Nature Lover"
    },
    // Adding 5 more jokes with myself (Riley Andersen) as the author
    {
        "joke": "Why was the apple building so dark? Because it had no Windows.",

        "author": "Riley Andersen"
    },
    {
        "joke": "Why was 6 afraid of 7? Because 7 8 9!",

        "author": "Riley Andersen"
    },
    {
        "joke": "How does Darth Vader prefer his toast? On the dark side.",

        "author": "Riley Andersen"
    },
    {
        "joke": "What type of sandals do frogs wear? Open-toad.",

        "author": "Riley Andersen"
    },
    {
        "joke": "Why did the gym close down? It just didn't work out!",

        "author": "Riley Andersen"
    }
];

// Get references to the HTML elements
const jokeText = document.querySelector('#forthejokestext p');
const authorText = document.querySelector('#fortheauthor p');
const jokeButton = document.querySelector('#get-joke-button');

// Function to display a random joke
function displayRandomJoke() {
    // Get a random joke from jokesArray
    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    const randomJoke = jokesArray[randomIndex];

    // Update the HTML elements with the joke and author
    jokeText.textContent = randomJoke.joke;
    authorText.textContent = `- ${randomJoke.author}`;
}

// Add a click event listener to the button
jokeButton.addEventListener('click', displayRandomJoke);

// Initially, display a random joke when the page loads
displayRandomJoke();