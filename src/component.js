export default (text = "Videos, Websites, Print") => {
    const element = document.createElement("div");
    element.innerHTML = text;
    return element;
};