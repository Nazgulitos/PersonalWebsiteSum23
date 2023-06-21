// For main page:
function gotoLink(link) {
    console.log(link);
    location.href="https://t.me/kokosinka123";
};

// For Jokes_API:
const email = 'n.salikhova@innopolis.university';
    function GenerateJoke() {
        fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`).then(response => response.json()).then(data => {
        const comicId = data;
        console.log(comicId);

        fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`).then(response => response.json()).then(comicData => {
            const { img, alt, safe_title, year, month, day } = comicData;

            document.getElementById('image').src = img;
            document.getElementById('image').alt = alt;
            document.getElementById('safe_title').textContent = safe_title;
            document.getElementById('date').textContent = new Date(year, month, day).toLocaleDateString();
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
}
