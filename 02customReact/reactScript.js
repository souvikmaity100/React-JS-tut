// ------- model 1 ----------
// function customRender(reactElement, maincontainer) {
//     let domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     maincontainer.appendChild(domElement);
// }


// ------- model 2 ----------
function customRender(reactElement, maincontainer) {
    let domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop == 'childern') continue;

        domElement.setAttribute(prop, reactElement.props[prop])
    }

    maincontainer.appendChild(domElement);
}


let reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'go to google'
}

let main = document.getElementById('root')

customRender(reactElement, main);
