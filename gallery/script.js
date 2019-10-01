function makeInteractive(section) {
    const numberOfPictures = section.children.length;
    const pictureWide = 800;
    section.style.width = numberOfPictures * pictureWide + "px";
    let translate3dX = 0;
    let currentPicture = 0;
    let obj = {}
    obj.next = () => {
        if (currentPicture < numberOfPictures - 1) {
            translate3dX = translate3dX - pictureWide;
            section.style.transform = `translate3d(${translate3dX}px, 0px, 0px)`;
            currentPicture++;
        }
    }
    obj.prev = () => {
        if (currentPicture > 0) {
            translate3dX = translate3dX + pictureWide;
            section.style.transform = `translate3d(${translate3dX}px, 0px, 0px)`;
            currentPicture--;
        }
    }
    return obj;
}

var section = document.getElementsByClassName('image_section')[0];
gallery = makeInteractive(section);
document.getElementsByClassName('next')[0].addEventListener("click", () => gallery.next());
document.getElementsByClassName('prev')[0].addEventListener("click", () => gallery.prev());
