# Movies4Movies - Discover Your Next Favorite Film

**📌 Overview**

This web application helps users discover cool movies based on their favorite genre using The Movie Database (TMDB) API. Just select a genre, and the app will fetch and display a list of trending or highly-rated movies for you to explore.

**🛠 Technologies Used**

Frontend: JavaScript, React.js, Tailwind CSS

Backend: Node.js, Express.js

API: TMDB (The Movie Database API)

Deployment: Vercel, Netlify, or Heroku

**🚀 Features**

🎭 Genre-Based Suggestions – Get movie recommendations tailored to your favorite genre.

🔥 Trending & Popular Movies – Discover the hottest movies currently trending.

📜 Movie Details – View ratings, overviews, release dates, and more.

🔍 Search Functionality – Find specific movies quickly.

📺 Watchlist Feature (Optional) – Save movies for later viewing.

🌙 Dark Mode Support – Enjoy the app in both light and dark themes.

**📂 Project Structure**
```
movie-suggester/
│── public/
│── src/
│   │── components/    # UI components (MovieCard, GenreSelector, etc.)
│   │── pages/         # Main pages (Home, Favorites, Search)
│   │── utils/         # Helper functions (API calls, formatting, etc.)
│── .gitignore
│── package.json
│── tailwind.config.js
│── README.md
│── index.js
│── App.js
```

**⚡ Setup & Installation**

Clone the repository:
```
git clone [https://github.com/yourusername/movie-suggester.git
cd movie-suggester](https://github.com/Squarehead2/Movies4Movies/)
```
Install dependencies:
```
npm install
```
Get TMDB API Key:

Sign up at TMDB

Generate an API key from the developer section.

Create a .env file and add:
```
REACT_APP_TMDB_API_KEY=your_api_key_here
```
Run the development server:
```
npm start
```
Open in browser:
Visit http://localhost:3000 to use the app.

**🚀 Deployment**

To deploy the app, use Vercel, Netlify, or Heroku:
