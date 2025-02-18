document.addEventListener("DOMContentLoaded", () => {
    let codeElements = document.getElementsByTagName('code');
    for (let i = 0; i < codeElements.length; i++) {
        let span = document.createElement('span');
        span.style.color = 'red';
        span.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        span.innerText = ' False ';
        codeElements[i].innerHTML = codeElements[i].innerHTML.replaceAll('False', span.outerHTML);
    }
});