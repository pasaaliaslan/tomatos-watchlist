# Tomato's Watchlist

[Tomato's Watchlist](https://tomatos-watchlist.herokuapp.com) is a full stack app where you can search your favorite movie celebrities, see the movies they contributed, and add the ones you are interested in into your watchlist. 
The data presented in this website is extracted from [Rotten Tomatoes](https://www.rottentomatoes.com).

## Architechture
### Client
Client directory includes frontend components of the website. 
- [React](https://reactjs.org) with [Typescript](https://www.typescriptlang.org) is used to create all user interfaces and middlewares.
- [React-Bootstrap](https://react-bootstrap.github.io) is used for modern style.
- [Axios](https://www.npmjs.com/package/axios) is utilized to make API calls in middleware.

### Server
Server directory includes backend components of the website. 
- [Express.js](https://expressjs.com) is used to create the server instance.
- [Axios](https://www.npmjs.com/package/axios) is utilized to pull html data from Rotten Tomatos
- [Cheerio.js](https://cheerio.js.org) is used to parse html data.

## Credits
All celebrity and movie data presented in this app are scraped from [Rotten Tomatoes](https://www.rottentomatoes.com). The app is for personal and non-commercial usage only, specifically to leverage the author's coding practices. On any irregular traffic on the website itself or on this github page, they will both be closed permanently without a question to not violate any benefit of [Rotten Tomatoes](https://www.rottentomatoes.com).
