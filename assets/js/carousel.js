const control = document.querySelectorAll('.control');

let currentItem = 0;
const item= document.querySelectorAll('.item');
const maxItems = item.length;

control.forEach(control => {
    control.addEventListener('click', () =>{

        const isLeft = control.classList.contains("arrow-left");

        if (isLeft) {
            currentItem -=1;
        } else {
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxItems -1;
        }

        item.forEach(item => item.classList.remove("current-item"));
        item[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        })

        item[currentItem].classList.add("current-item");

    });
    
});