import React, { Component } from 'react';
import {ConfigProvider,message} from "antd";

import zhCN from 'antd/lib/locale-provider/zh_CN';

import './main.css';

import moment from "moment";
import 'moment/locale/zh-cn';
import {MyRoute} from "./router";

moment.locale('zh-cn');
message.config({
    top:60,
});

class Main extends Component {
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <MyRoute />
            </ConfigProvider>
        )
    }
}

export default Main;
