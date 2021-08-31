import React from 'react';
import { Tabs } from 'antd';

import s from './styles.module.scss';

const { TabPane } = Tabs;

interface ITabs {
  onChange: (event: any) => void;
}

const View: React.FC<ITabs> = (props) => {
  return (
    <Tabs defaultActiveKey="1" onChange={props.onChange} centered>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default View;
