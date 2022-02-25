import axios from 'axios';
import cheerio from 'cheerio';
import express from 'express';
import parseCelebrityInfo from './Celebrity.js';
import parseMovieInfo from './Movie.js';

const PORT = process.env.PORT | 8000;

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/getCelebrity/:celebrity', (req, res) => {
    axios(`http://www.rottentomatoes.com/celebrity/${req.params.celebrity}`)
        .then(async (response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            await parseCelebrityInfo($)
                .then((celebrityInfo) => {
                    res.status(200);
                    res.send(celebrityInfo);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch(() => {
            res.status(404);
            res.send('Not Found');
        });
});

app.get('/getMovie/:path', (req, res) => {
    axios(`https://www.rottentomatoes.com/m/${req.params.path}`)
        .then(async (response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            await parseMovieInfo($)
                .then((movieInfo) => {
                    res.status(200);
                    res.send(movieInfo);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch(() => {
            res.status(404);
            res.send('Not Found');
        });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
