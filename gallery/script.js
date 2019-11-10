function setTranslate(section) {
    let translate3dX = 0;
    return (delta) => {
        translate3dX = translate3dX + delta;
        section.style.setProperty('transform', `translate3d(${translate3dX}px, 0px, 0px)`);
    };
}

function defer(setTranslate, pictureWide) {
    setTimeout(() => {
        section.style.setProperty('transition', "all 250ms ease-out 0s");
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
            return currentPicture;
        }
        currentPicture = direction === "next" ? currentPicture + 1 : direction === "prev" ? currentPicture - 1 : undefined;
        movePicture(-pictureWide);
        return currentPicture;
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
        section.style.setProperty('transition', "all 250ms ease-out 0s")
    });
    let swipePicture = setSwipe(movePicture, numberOfPictures);
    let currentPicture = 1;

    const next = () => {
        currentPicture = swipePicture(pictureWide, "next");
    };

    const prev = () => {

        currentPicture = swipePicture(pictureWide, "prev");
    };

    section.addEventListener('touchstart', lock, false);
    section.addEventListener('mousedown', lock, false);

    document.addEventListener('touchmove', drag, false);
    document.addEventListener('mousemove', drag, false);

    document.addEventListener('mouseup', swipe, false);
    document.addEventListener('touchend', swipe, false);

    function unify(e) {
        return e.changedTouches ? e.changedTouches[0] : e
    }

    let x0 = null;
    let touching = false;

    function lock(e) {
        e.preventDefault();
        x0 = unify(e).clientX;
        touching = true;
        section.style.setProperty('cursor', "grabbing");
    }

    let delta = null;
    let translateCurrent = -pictureWide;

    function drag(e) {
        if (touching === true) {
            delta = x0 - unify(e).clientX;
            translateCurrent = currentPicture * -pictureWide;
            let translateDrag = translateCurrent - delta;
            section.style.setProperty('transform', `translate3d(${translateDrag}px, 0px, 0px)`);
        }
    }

    const dragLimit = 300;

    async function swipe() {
        section.style.setProperty('cursor', "grab");
        if (touching === true) {
            touching = false;
            if (x0 || x0 === 0) {
                if (delta > 0) {
                    if (delta > dragLimit) {
                        gallery.next()
                    }
                    else {
                        section.style.setProperty('transform', `translate3d(${translateCurrent}px, 0px, 0px)`)
                    }
                } else if (delta < 0) {
                    if (delta < -dragLimit) {
                        gallery.prev()
                    }
                    else {
                        section.style.setProperty('transform', `translate3d(${translateCurrent}px, 0px, 0px)`)
                    }
                }
            }
        }
    }
    return {next, prev};
}

const section = document.querySelector('.image_section');

const gallery = makeInteractive(section);
document.querySelector('.next').addEventListener("click", () => gallery.next());
document.querySelector('.prev').addEventListener("click", () => gallery.prev());