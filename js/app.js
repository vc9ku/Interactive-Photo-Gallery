const $photoItem = document.querySelectorAll('.photo-item');
const $linkPicture = document.querySelectorAll(".picture");
const $imageModal = document.querySelector(".image-modal");
const $picture = document.querySelectorAll(".pic");
const $containerModal = document.querySelector(".container-modal")
const $rightArrow = document.querySelector(".right")
const $leftArrow = document.querySelector(".left")
const $description = document.querySelector(".description")
const $blackBackground = document.querySelector(".black-background")
const $cross = document.querySelector(".cross")

let photoData = [];

$linkPicture.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    }); 
});

for (let i = 0; i < $picture.length; i++) {
    $picture[i].addEventListener('click', (e) => {
        photoData.push($picture[i].src);
        const picSrc = $picture[i].getAttribute("src");
        const picDsc = $picture[i].getAttribute("title")
        console.log(picSrc.replace('thumbnail/', ''));
        $containerModal.style.display = "block";
        $imageModal.innerHTML = `<img src="${picSrc.replace('thumbnails/', '')}" alt="Image" class="modal-image">`;
        // $containerModal.style.backgroundImage = `url(${picSrc.replace('thumbnails/', '')})`;
        $description.innerHTML = "Description: " + picDsc
        $blackBackground.style.display = "block"

        $cross.addEventListener("click", () => {
            $containerModal.style.display ="none"
            $blackBackground.style.display="none"
        })

        $rightArrow.addEventListener("click", () => {
            // $picture[i].setAttribute("src", "./img/thumbnails/02.jpg")
            
        })
    });
}

