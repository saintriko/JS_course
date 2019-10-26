function setTranslate(section) {
    let translate3dX = 0;
    return (delta) => {
        translate3dX = translate3dX + delta;
        section.style.setProperty('transform', `translate3d(${translate3dX}px, 0px, 0px)`);
    };
}

function defer(setTranslate, pictureWide) {
    setTimeout(() => {
        section.style.setProperty('transition', "all 200ms ease-out 0s");
        setTranslate(pictureWide);
    }, 50);
}

function setSwipe(movePicture, numberOfPictures) {
    let currentPicture = 1;

    return (pictureWide, direction) => {
        if (direction === "prev") pictureWide = -pictureWide;
        if (currentPicture === numberOfPictures - 2 && direction === "next" || currentPicture === 1 && direction === "prev") {
            section.style.setProperty('transition', "none");
            movePicture(pictureWide * (numberOfPictures - 2));
            defer(movePicture, -pictureWide);
            currentPicture = direction === "next" ? 1 : direction === "prev" ? numberOfPictures - 2 : undefined;
            return;
        }
        currentPicture = direction === "next" ? currentPicture + 1 : direction === "prev" ? currentPicture - 1 : undefined;
        movePicture(-pictureWide);
    }
}

function makeInteractive(section) {
    const firstChild = section.firstElementChild;
    const lastChild = section.lastElementChild;

    section.appendChild(firstChild.cloneNode(true));
    section.insertBefore(lastChild.cloneNode(true), firstChild);

    const numberOfPictures = section.children.length;
    const pictureWide = 800;
    section.style.setProperty('width', `${numberOfPictures * pictureWide}px`);

    const movePicture = setTranslate(section, pictureWide);
    movePicture(-800);
    setTimeout(() => {
        section.style.setProperty('transition', "all 200ms ease-out 0s")
    });
    let swipePicture = setSwipe(movePicture, numberOfPictures);

    const next = () => {
        swipePicture(pictureWide, "next");
    };

    const prev = () => {
        swipePicture(pictureWide, "prev");
    };

    section.addEventListener('touchstart', lock, false);
    section.addEventListener('touchmove', move, false);
    section.addEventListener('touchend', swipe, false);

    let x0 = null;

    function lock(e) {
        x0 = e.changedTouches[0].pageX;
    }

    function move(e) {
        console.log(x0 - e.changedTouches[0].pageX);

    }

    function swipe(e) {
        if (x0 || x0 === 0) {
            let dx = e.changedTouches[0].pageX - x0;

            if (dx < 0) {
                gallery.next();
            } else if (dx > 0) {
                gallery.prev();
            }
        }
    }

    return {next, prev};
}

const section = document.querySelector('.image_section');

const gallery = makeInteractive(section);
document.querySelector('.next').addEventListener("click", () => gallery.next());
document.querySelector('.prev').addEventListener("click", () => gallery.prev());