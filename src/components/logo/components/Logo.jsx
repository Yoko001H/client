import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {Application} from '../../../api/Application';
import { ServerAddress } from '../../../api/const/ConstDefine';

const logo = require('./images/logo.png');

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <Link to="/" className="logo-text">
          <img src={logo}/>{'    '}
          {Application.name + "-" + ServerAddress.Envirment}
        </Link>
        
      </div>
    );
  }
}
