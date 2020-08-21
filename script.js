var Btn = document.querySelector('.click');
var URLinput = document.querySelector('.Url');

Btn.addEventListener('click', () => {
    console.log(`Url: ${URLinput.value}`);
    sendURL(URLinput.value);
});

function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}