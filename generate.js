const generate = document.querySelector(".open-maps-btn");
const random = document.querySelector(".codeBox");
const copy = document.querySelector(".Cpy");

const randomPasswordGrt = () => {
    const r1 = (Math.random() + 9).toString(36).substring(4).toLocaleUpperCase()
    const r2 = (Math.random() + 9).toString(36).substring(4).toLocaleUpperCase()
    const r3 = (Math.random() + 9).toString(36).substring(4).toLocaleUpperCase()
    return r1 + " " + r2 + " " + r3;
}
generate.addEventListener("click", () => {
    random.value = randomPasswordGrt();
})
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(random.value);
    alert("text is copy to clipboard!");
})