// Get form elements
const upBtn = document.getElementById("formUp");
const downBtn = document.getElementById("formDown");
const form = document.getElementById("contactForm");

// Set the initial state to 1. 
// The user has just entered their e-mail so we'll make them land on the second form field.
// The form field is pre-filled.
let state = 1;
position = () => {
    form.style.transform = `translateY(${state * -320}px)`;
};
position();
upBtn.addEventListener("click", (e) => {
    if (state === 0) {
        return;
    } else if (state === 1) {
        upBtn.classList.add("disabled");
        state--;
        position();
    } else {
        downBtn.classList.remove("disabled")
        state--;
        position();
    };
});
downBtn.addEventListener("click", (e) => {
    if (state === 2) {
        return
    } else if (state === 1) {
        downBtn.classList.add("disabled");
        state++;
        position();
    } else {
        upBtn.classList.remove("disabled")
        state++;
        position();
    }
});