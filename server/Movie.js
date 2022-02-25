import pretty from 'pretty';

export default async function parseMovieInfo($) {
    let img = $('.movie-thumbnail-wrap div').html();
    img = img.substring(img.indexOf('<img'), img.length);
    img = img.substring(img.indexOf('data-src="') + 10, img.length);
    img = img.substring(0, img.indexOf('">'));

    const info = pretty($('.media-body').text());

    const glossary = info.substring(info.indexOf('Movie Info') + 10, info.indexOf('Rating')).trim();

    const rating = info.substring(info.indexOf('Rating:') + 7, info.indexOf('Genre')).trim();

    let genre = info.substring(info.indexOf('Genre:') + 6, info.indexOf('Original Language:')).trim();
    genre = genre.split(',');
    for (var i = 0; i < genre.length; i = i + 1) {
        genre[i] = genre[i].trim();
    }

    let director = info.substring(info.indexOf('Director:') + 9, info.indexOf('Producer:')).trim();
    director = director.split(',');
    for (var i = 0; i < director.length; i = i + 1) {
        director[i] = director[i].trim();
    }

    let producer = info.substring(info.indexOf('Producer:') + 9, info.indexOf('Writer:')).trim();
    producer = producer.split(',');
    for (var i = 0; i < producer.length; i = i + 1) {
        producer[i] = producer[i].trim();
    }

    let writer = info.substring(info.indexOf('Writer:') + 7, info.indexOf('Release Date (Theaters):')).trim();
    writer = writer.split(',');
    for (var i = 0; i < writer.length; i = i + 1) {
        writer[i] = writer[i].trim();
    }

    let runtime = info.substring(info.indexOf('Runtime:') + 8, info.indexOf('Distributor:')).trim();
    runtime = 60 * Number(runtime[0]) + Number(runtime.substring(3, 5));

    return {
        glossary: glossary,
        rating: rating,
        genre: genre,
        director: director,
        producer: producer,
        writer: writer,
        runtime: runtime,
        img: img,
    };
}
