const toProperCase = (str) => {
    let words = str.split(" ");
    words.forEach((word, i) => {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    return (words.join(" "));
};

const toSentenceCase = (str) => {
    let sentences = str.split(". ");
    for(let i = 0; i < sentences.length; i++){
        let words = sentences[i].split(" ");
        words.forEach((word, i) => {
            if (i === 0) {
                words[i] = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
            } else {
                words[i] = word.toLowerCase();
            }
        });
        sentences[i] = words.join(" ");
    }
    return (sentences.join(". "));
};


document.getElementById("upper-case").addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = toProperCase(text);
});
document.getElementById("sentence-case").addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = toSentenceCase(text);
});
