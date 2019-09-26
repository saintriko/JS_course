var section = document.getElementsByClassName('image_section')[0];

function makeInteractive(section) {
    let pictures = new Object(section.children);
    pictures.index = 0;
    pictures.currentPic = pictures[pictures.index];
    pictures.next = () => {
        pictures.currentPic = pictures[pictures.index + 1]
        pictures.index =  pictures.index + 1 ;
    };
    return pictures;
}

gallery = makeInteractive(section)
console.log(gallery);
