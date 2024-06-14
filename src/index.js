// eslint-disable-next-line no-unused-vars
import html from './index.html';
import './style.css';
import Model from './Model.js';
import View from './View.js';
import Controller from './Controller.js';

const gameList = new Controller(new Model(6, 1000), new View('nav-circle'));
