import _ from "lodash";

export function component(props) {

    const element = document.createElement('div');

    element.innerHTML = _.join(props.welcomeParts, ' ');
    element.classList.add('hello');

    return element;
}

