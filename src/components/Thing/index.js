import './style.scss';
import HelloJPG from './../../assets/images/hello.jpg';
const root = document.querySelector('#root');
const module = 'Thing';

root.innerHTML += `<div id="${module}"></div>`;

const $Thing = document.querySelector(`#${module}`);
$Thing.innerHTML += `<img src="${HelloJPG}" />`;

export default () => console.log('hello world from thing');