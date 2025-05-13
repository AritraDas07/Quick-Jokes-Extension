# 🤣 Quick Jokes Extension

**Quick Jokes** is a fun and lightweight Chrome extension that delivers a fresh, random joke with a single click. Choose between **General**, **Programming**, and **Dad** jokes to brighten your browsing experience instantly!

![Quick Jokes Screenshot](screenshot.png) <!-- Optional: Add a real screenshot if available -->

## 🔧 Features

* 🃏 Get a random joke instantly
* 🎯 Select from General, Programming, or Dad jokes
* 🧠 Pulls jokes from trusted public APIs:

  * [JokeAPI](https://jokeapi.dev/)
  * [icanhazdadjoke](https://icanhazdadjoke.com/)

## 📦 Files

| File                 | Description                                 |
| -------------------- | ------------------------------------------- |
| `manifest.json`      | Chrome extension manifest file (v3)         |
| `popup.html`         | The HTML layout for the popup               |
| `popup.js`           | Handles joke fetching and interaction logic |
| `popup.css` (inline) | Basic styling (embedded in `popup.html`)    |

## 🚀 How to Use

1. **Clone or Download** this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in top right).
4. Click **"Load unpacked"** and select the project directory.
5. Click the **Quick Jokes** icon and enjoy!

## 📡 Joke Sources

* **Programming Jokes:** [JokeAPI](https://v2.jokeapi.dev/joke/Programming)
* **General Jokes:** [JokeAPI](https://v2.jokeapi.dev/joke/Miscellaneous,Pun)
* **Dad Jokes:** [icanhazdadjoke](https://icanhazdadjoke.com/)

## 🛠 Tech Stack

* HTML5, CSS3 (inline)
* JavaScript (vanilla)
* Chrome Extensions API (Manifest V3)
* Public Joke APIs

## 💡 Future Improvements

* Add dark mode
* Offline joke support using the `backupJokes` array
* Support two-part jokes better
* Add loading animation or feedback
* Save favorite jokes

## 🤝 Contributing

Contributions are welcome! Open an issue or submit a pull request to suggest improvements or new features.

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

