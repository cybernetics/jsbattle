'use strict';
import {
  Text,
  TextStyle
} from 'pixi.js';

import AbstractPixiView from "../abstractPixi/AbstractPixiView.js";

export default class DebugClockView extends AbstractPixiView  {

  constructor(model) {
    super(model);
  }

  _create(container) {
    let labelStyle = new TextStyle({
        fontFamily: 'Arial',
        fontSize: 12,
        fill: '#00ff00'
    });

    this._label = new Text("clock", labelStyle);
    this._label.x = 5;
    this._label.y = 5;
    container.addChild(this._label);
  }

  update(events) {
    this._label.text = this.model.text;
  }
}
