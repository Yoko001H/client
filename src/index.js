import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@icedesign/base/reset.scss';
import router from './router';
import "antd/dist/antd.css";
import './global.scss';
import '../src/api/Extend';
import moment from 'moment';
import 'antd-mobile/dist/antd-mobile.css';
import 'moment/locale/zh-cn';
import { Application } from './api/Application';
import { ServerAddress } from './api/const/ConstDefine';

moment.locale('zh-cn');

const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

document.title = Application.name + "-" + ServerAddress.Envirment;

ReactDOM.render(<HashRouter>{router}</HashRouter>, ICE_CONTAINER);

