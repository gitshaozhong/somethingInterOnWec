import { useEffect } from "react";
import { useAppStore } from "./stores/app";
import { useUserStore } from "./stores/user";
import { notificationsService } from "./services/notifications";
import "./app.scss";

function App({ children }: { children: React.ReactNode }) {
  const { checkLogin } = useUserStore();
  const { init, setUnreadCount } = useAppStore();
  const { token } = useUserStore();

  useEffect(() => {
    init();
    checkLogin();
  }, []);

  // 未读消息数存入 store，自定义 TabBar 从 store 读取显示徽标
  // 使用 notifications 接口：统计系统消息 + 订单确认未读，排除广告消息
  useEffect(() => {
    if (!token) return;
    const fetchUnread = async () => {
      try {
        const res = await notificationsService.unreadCount();
        if (res.ok) {
          setUnreadCount(res.count);
        }
      } catch (e) {
        // 忽略
      }
    };
    fetchUnread();
    const timer = setInterval(fetchUnread, 30000);
    return () => clearInterval(timer);
  }, [token]);

  return children;
}

export default App;