

let image = document.getElementsByTagName("img")[0];
let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", switchImage);

function switchImage() {

    if (image.src === "https://pbs.twimg.com/profile_images/958086982466490368/MkUQ8jQZ_400x400.jpg") {

        image.src = "https:i.kym-cdn.com/entries/icons/original/000/021/569/lilmayo.jpg";
    } else {

        image.src = "https://pbs.twimg.com/profile_images/958086982466490368/MkUQ8jQZ_400x400.jpg"  
    }
}