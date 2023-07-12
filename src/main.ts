import { formatDistanceToNow } from 'date-fns';

const imageElement = document.getElementById('image') as HTMLImageElement;
const title = document.getElementById('safe_title') as HTMLElement;
const date = document.getElementById('date') as HTMLParagraphElement;

// For main page:
function gotoLink(link: string): void {
    console.log(link);
    location.href="https://t.me/kokosinka123";
}

interface ID {
    comicId: number;
}

interface JokesApi {
    img: string;
    alt: string;
    safe_title: string;
    year: number;
    month: number;
    day: number;
}

// For Jokes_API:
const email: string = 'n.salikhova@innopolis.university';

function GenerateJoke(): Promise<void> {
    console.log("Help");

    return fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`).then((response: Response) => response.json()).then((data: ID) => {
            const comic: number = data.comicId;

            fetch(`https://fwd.innopolis.university/api/comic?id=${comic}`).then((response: Response) => response.json()).then((comicData: JokesApi) => {
                    
                    const { img, alt, safe_title, year, month, day } = comicData;

                    imageElement.src = comicData.img;
                    imageElement.alt = comicData.alt;

                    title.textContent = comicData.safe_title;
                    
                    date.textContent = formatDistanceToNow(new Date(year, month, day));
                })
                .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
}
GenerateJoke();
 