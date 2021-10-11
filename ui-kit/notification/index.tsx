import { notification } from 'antd';

class Notification {
  static info(message: string, description?: string) {
    return notification.info({ message, description, placement: 'bottomRight' });
  }

  static success(message: string, description?: string) {
    return notification.success({ message, description, placement: 'bottomRight' });
  }

  static warning(message: string, description?: string) {
    return notification.warning({ message, description, placement: 'bottomRight' });
  }

  static error(message: string, description?: string) {
    return notification.error({ message, description, placement: 'bottomRight' });
  }
}

export default Notification;
