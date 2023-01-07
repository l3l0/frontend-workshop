import './style.css';
import './app.scss';
import { component } from "./component";
import { component as ts_component } from "./ts-component.ts";
import { component as complex_ts_component } from './ts-complex-component.ts';

document.body.appendChild(component({welcomeParts: ['Hello', 'World']}));
document.body.appendChild(ts_component({welcomeParts: ['Hello', 'World2']}));
document.body.appendChild(complex_ts_component({title: 'Test', content: 'Some test content', actions: ['Action 1']}));
