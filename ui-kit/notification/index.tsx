import { notification } from 'antd';

class Notification {
  static info(message: string, description: string) {
    return notification.info({ message, description });
  }

  static success(message: string, description: string) {
    return notification.success({ message, description });
  }

  static warning(message: string, description: string) {
    return notification.warning({ message, description });
  }

  static error(message: string, description: string) {
    return notification.error({ message, description });
  }
}

export default Notification;
