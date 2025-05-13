document.addEventListener('DOMContentLoaded', function() {
    // Get joke on initial load
    getJoke();
    
    // Add click event listener to the button
    document.getElementById('new-joke-btn').addEventListener('click', getJoke);
    
    // Add event listeners for joke type radio buttons
    const radioButtons = document.querySelectorAll('input[name="joke-type"]');
    radioButtons.forEach(button => {
      button.addEventListener('change', getJoke);
    });
  });
  
  function getJoke() {
    const jokeText = document.getElementById('joke-text');
    jokeText.textContent = 'Loading...';
    
    // Get selected joke type
    const selectedType = document.querySelector('input[name="joke-type"]:checked').value;
    
    // Different APIs based on joke type
    let apiUrl;
    
    switch(selectedType) {
      case 'programming':
        apiUrl = 'https://v2.jokeapi.dev/joke/Programming?type=single';
        break;
      case 'dad':
        apiUrl = 'https://icanhazdadjoke.com/';
        break;
      default:
        apiUrl = 'https://v2.jokeapi.dev/joke/Miscellaneous,Pun?type=single';
    }
    
    // Fetch joke from API
    if (selectedType === 'dad') {
      fetch(apiUrl, {
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          jokeText.textContent = data.joke;
        })
        .catch(error => {
          jokeText.textContent = 'Failed to fetch joke. Please try again!';
          console.error('Error fetching joke:', error);
        });
    } else {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.type === 'single') {
            jokeText.textContent = data.joke;
          } else if (data.type === 'twopart') {
            jokeText.textContent = `${data.setup}\n\n${data.delivery}`;
          }
        })
        .catch(error => {
          jokeText.textContent = 'Failed to fetch joke. Please try again!';
          console.error('Error fetching joke:', error);
        });
    }
  }
  
  // Sample joke data if API fails
  const backupJokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Why was the computer cold? It left its Windows open.",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem."
  ];