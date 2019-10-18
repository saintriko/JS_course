function translateOn(section) {
    let translate3dX = -800;
    return (delta) => {
        translate3dX = translate3dX + delta;
        section.style.setProperty('transform', `translate3d(${translate3dX}px, 0px, 0px)`);
    };
}

function makeInteractive(section) {
    const firstChild = section.firstElementChild;
    const lastChild = section.lastElementChild;
    const pictureWide = 800;
    section.appendChild(firstChild.cloneNode(true));
    section.insertBefore(lastChild.cloneNode(true), firstChild);
    const numberOfPictures = section.children.length;
    section.style.setProperty('width', `${(numberOfPictures) * pictureWide}px` );
    let currentPicture = 1;
    let setTranslate = translateOn(section);
    const next = () => {
        if (currentPicture === numberOfPictures - 2) {
            setTranslate(-800);
            setTimeout(() => {
                    section.style.setProperty('transition', "none");
                    setTranslate(pictureWide * (numberOfPictures - 2));
                    currentPicture = 1;
                    setTimeout(() => {
                        section.style.setProperty('transition', "all 200ms ease-out 0s");
                    }, 50)
                }
                , 200);
            return;
        }
        setTranslate(-800);
        currentPicture++;
    };
    const prev = () => {
        if (currentPicture === 1) {
            setTranslate(800);
            setTimeout(() => {
                section.style.setProperty('transition', "none");
                setTranslate(-pictureWide * (numberOfPictures - 2));
                currentPicture = numberOfPictures - 2;
                setTimeout(() => {
                    section.style.setProperty('transition', "all 200ms ease-out 0s");
                }, 50)
            }, 200);
            return;
        }
        setTranslate(800);
        currentPicture--;
    };
    return {next, prev};
}

const section = document.querySelector('.image_section');

const gallery = makeInteractive(section);
document.querySelector('.next').addEventListener("click", () => gallery.next());
document.querySelector('.prev').addEventListener("click", () => gallery.prev());
