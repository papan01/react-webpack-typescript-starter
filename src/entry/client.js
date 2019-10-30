import '../sass/style.scss';

function component() {
    const element = document.createElement('p');
    element.innerHTML = 'Hello Webpack';
    return element;
}

document.body.appendChild(component());