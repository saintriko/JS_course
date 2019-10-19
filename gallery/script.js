function translateOn(section, pictureWide) {
    let translate3dX = -pictureWide;
    return (delta) => {
        translate3dX = translate3dX + delta;
        section.style.setProperty('transform', `translate3d(${translate3dX}px, 0px, 0px)`);
    };
}

function swipeAnimation(delay) {
    return (setTranslate, pictureWide) => {
        setTimeout(() => {
        section.style.setProperty('transition', "all 200ms ease-out 0s");
        setTranslate(pictureWide);
        }, delay);
    }
}

function makeInteractive(section) {
    const firstChild = section.firstElementChild;
    const lastChild = section.lastElementChild;
    const pictureWide = 800;
    const delay = 50;
    section.appendChild(firstChild.cloneNode(true));
    section.insertBefore(lastChild.cloneNode(true), firstChild);
    const numberOfPictures = section.children.length;
    section.style.setProperty('width', `${numberOfPictures * pictureWide}px`);
    let currentPicture = 1;
    const setTranslate = translateOn(section, pictureWide);

    const next = () => {
        if (currentPicture === numberOfPictures - 2) {
            section.style.setProperty('transition', "none");
            setTranslate(pictureWide * (numberOfPictures - 2));
            currentPicture = 1;
            swipeAnimation(delay)(setTranslate, -pictureWide);
            return;
        }
        currentPicture++;
        setTranslate(-pictureWide);
    };

    const prev = () => {
        if (currentPicture === 1) {
            section.style.setProperty('transition', "none");
            setTranslate(-pictureWide * (numberOfPictures - 2));
            currentPicture = numberOfPictures - 2;
            swipeAnimation(delay)(setTranslate, pictureWide);
            return;
        }
        setTranslate(pictureWide);
        currentPicture--;
    };
    return {next, prev};
}

const section = document.querySelector('.image_section');

const gallery = makeInteractive(section);
document.querySelector('.next').addEventListener("click", () => gallery.next());
document.querySelector('.prev').addEventListener("click", () => gallery.prev());
