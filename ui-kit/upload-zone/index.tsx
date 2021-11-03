import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

interface Upload {
  callbackUploadTracks: (any) => void;
}

const View: React.FC<Upload> = (props) => {
  const onChange = (info) => {
    if (info.file.status === 'done') {
      props.callbackUploadTracks(info.fileList.map((item: any) => item.originFileObj));
    }
  };

  const onRemove = (file: any) => {
    // file.originFileObj
    // props.callbackUploadTracks(info.fileList.map((item: any) => item.originFileObj));
  };

  return (
    <Dragger accept="audio/*" multiple={true} onChange={onChange} onRemove={onRemove}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag audio tracks to this area to upload</p>
    </Dragger>
  );
};

export default View;
