window.onload = function () {
    document.getElementById('my-id').style.color = "black";
    document.getElementById('my-id').setAttribute('style', 'color: pink');
    document.getElementById('my-id').addEventListener('click', changeColor);
};
function changeColor() {
    document.getElementById('my-id').style.color = "black";
}