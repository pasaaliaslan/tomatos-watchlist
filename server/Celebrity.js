export default async function parseCelebrityInfo($) {
    let img = $('.celebrity-bio .celebrity-bio__hero-desktop').html();
    img = img.substring(img.indexOf('data-src=') + 10, img.indexOf('" src='));

    const name = $('.celebrity-bio .celebrity-bio__h1').text();

    const bioInfoElement = $('.celebrity-bio .celebrity-bio__content div').html();

    const bday = bioInfoElement
        .substring(
            bioInfoElement.indexOf('Birthday:') + 9,
            bioInfoElement.indexOf('<p class="celebrity-bio__item" data-qa="celebrity-bio-birthplace">'),
        )
        .replace('</p>', ' ')
        .replace('\n', ' ')
        .trim();

    const bplace = bioInfoElement
        .substring(
            bioInfoElement.indexOf('Birthplace:') + 11,
            bioInfoElement.indexOf('<div class="sr-only js-clamp-live-region" aria-live="polite"></div>'),
        )
        .replace('</p>', ' ')
        .replace('\n', ' ')
        .trim();

    const movies = [];
    const currentMovie = [];

    $('.scroll-x table .celebrity-filmography__tbody > tr > td').each((index, element) => {
        if (currentMovie[5] === currentMovie[5]) {
            let trimmedElement = $(element).text().trim();

            if (index % 6 == 0 || index % 6 == 1) {
                if (trimmedElement != 'No Score Yet') {
                    trimmedElement = Number(trimmedElement.substring(0, 2));
                }
            }

            if (index % 6 == 2) {
                let urlString = $(element).html();
                urlString = urlString.substring(urlString.indexOf('<a href="') + 9, urlString.indexOf('</a>'));
                urlString = urlString.substring(3, urlString.indexOf('">'));
                currentMovie[6] = urlString;
            }

            if (index % 6 == 4) {
                if (trimmedElement != '-') {
                    let coef = Number(trimmedElement.substring(1, trimmedElement.indexOf('.') + 2));
                    switch (trimmedElement.charAt(trimmedElement.indexOf('.') + 2)) {
                        case 'M':
                            trimmedElement = coef * 10 ** 6;
                            break;
                        case 'K':
                            trimmedElement = coef * 10 ** 3;
                            break;
                        default:
                            break;
                    }
                }
            }
            if (index % 6 == 5) {
                trimmedElement = Number(trimmedElement);
            }

            if (currentMovie[5] === currentMovie[5]) {
                currentMovie[index % 6] = trimmedElement;
            }

            if (index % 6 == 5 && currentMovie[5] === currentMovie[5]) {
                movies.push({
                    tomatometer: currentMovie[0],
                    audienceScore: currentMovie[1],
                    title: currentMovie[2],
                    credit: currentMovie[3],
                    boxOffice: currentMovie[4],
                    year: currentMovie[5],
                    url: currentMovie[6],
                });
            }
        }
    });

    return {
        name: name,
        img: img,
        birthday: bday,
        birthplace: bplace,
        movies: movies,
    };
}
