import React from 'react';
import ReactDom from 'react-dom';
import { ConfigProvider, DatePicker, message } from 'antd';
import 'antd/dist/antd.css';

function Hello(props){
    return <div>ooooo</div>;
}

let h1 = React.createElement('div', {id: 'myh1'}, "这是一个标题");
let a = <Hello></Hello>;


ReactDom.render(<DatePicker />, document.getElementById('app'));