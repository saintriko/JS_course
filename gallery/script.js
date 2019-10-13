function makeInteractive(section) {
    let numberOfPictures = section.children.length;
    const pictureWide = 800;
    section.style.width = numberOfPictures * pictureWide + "px";
    let translate3dX = 0;
    let currentPicture = 0;
    let obj = {}

    obj.next = () => {
        translate3dX = translate3dX - pictureWide;
        section.style.transform = `translate3d(${translate3dX}px, 0px, 0px)`;
        currentPicture++;
        if (currentPicture == numberOfPictures - 1) {
            section.appendChild(section.children[currentPicture - 3].cloneNode(true));
            numberOfPictures++;
            section.style.width = numberOfPictures * pictureWide + "px";
        }
    }
    obj.prev = () => {
        if (currentPicture == 0) {
            section.insertBefore(section.children[3], section.firstChild,);
            // section.style.transition = `all 0ms ease-out 0s`;
            translate3dX = translate3dX - pictureWide;
            section.style.transform = `translate3d(${translate3dX}px, 0px, 0px)`;
            currentPicture = 1;
        }

        translate3dX = translate3dX + pictureWide;
        section.style.transform = `translate3d(${translate3dX}px, 0px, 0px)`;
        currentPicture--;

    }
    return obj;
}

var section = document.getElementsByClassName('image_section')[0];

gallery = makeInteractive(section);
document.getElementsByClassName('next')[0].addEventListener("click", () => gallery.next());
document.getElementsByClassName('prev')[0].addEventListener("click", () => gallery.prev());
