import { type Notification } from '../context/ChatContextProps';

export const unreadNotificationsFunc = (notifications: Notification[] | null | undefined): Notification[] => {
    if (notifications === null || notifications === undefined) {
        return [];
    }
    return notifications.filter((n) => !n.isRead);
};
