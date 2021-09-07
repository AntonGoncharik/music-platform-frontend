import React from 'react';
import { Tabs } from 'antd';

import s from './styles.module.scss';

const { TabPane } = Tabs;

interface ITab {
  name: string;
}

interface ITabs {
  onChange: (event: any) => void;
  list: ITab[];
}

const View: React.FC<ITabs> = (props) => {
  return (
    <Tabs defaultActiveKey="1" onChange={props.onChange} centered className={s.tabs}>
      {props.list.map((item) => {
        return (
          <TabPane tab={item.name} key={item.name}>
            {props.children}
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default View;
