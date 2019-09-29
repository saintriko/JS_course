var section = document.getElementsByClassName('image_section')[0];

function makeInteractive(section) {
    const numberOfPictures = section.children.length;
    let translate3dX = 0;
    let currentPicture = 0;
    section.style.transform = `translate3d(${translate3dX}px, 0px, 0px)`;
    let obj = {}
    obj.next = () => {
        if (currentPicture < numberOfPictures - 1) {
            translate3dX = translate3dX - 800;
            section.style.transform = `translate3d(${translate3dX}px, 0px, 0px)`;
            currentPicture++;
        }
        return currentPicture;
    }
    obj.prev = () => {
        if (currentPicture > 0) {
            translate3dX = translate3dX + 800;
            section.style.transform = `translate3d(${translate3dX}px, 0px, 0px)`;
            currentPicture--;
        }
        return currentPicture;
    }
    return obj;
}

gallery = makeInteractive(section)
console.log(gallery);

document.getElementsByClassName('next')[0].addEventListener("click", () => gallery.next());
document.getElementsByClassName('prev')[0].addEventListener("click", () => gallery.prev());
