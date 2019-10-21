function translateOn(section, pictureWide) {
    let translate3dX = 0;
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
    setTranslate(-800);
    setTimeout(() => {
        section.style.setProperty('transition', "all 200ms ease-out 0s")
    });

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

let x0 = null;
section.addEventListener('touchstart', lock, false);
section.addEventListener('touchend', move, false);


function lock(e) {
    x0 = e.changedTouches[0].pageX;
    console.log(x0);
};

function move(e) {
    if (x0 || x0 === 0) {
        let dx = e.changedTouches[0].pageX - x0;
        if (dx > 0) {
            gallery.next();
        } else if (dx < 0) {
            gallery.prev();
        }
    }
};
