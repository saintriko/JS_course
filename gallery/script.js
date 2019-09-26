var section = document.getElementsByClassName('image_section')[0];

function makeInteractive(section) {
    let pictures = new Object(section.children);
    let currentPic =  new Object(pictures[0]);
    currentPic.next = ()=> currentPic = pictures[1]

    return currentPic;
}

gallery = makeInteractive(section)
console.log(gallery);
