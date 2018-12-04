import { Tooltip, Popconfirm, notification } from "antd";
import styles from "./right.less";
import share from "../../../assets/web/download.png";

const RightTitle = ({ onAction, dPage, gPage, showPage }) => {
  const confirm = item => dPage && dPage(item);
  const createPage = (item = []) => {
    const name = prompt("请输入新页面英文名");
    if (!name && name !== 0) {
    } else if (name && /^[a-zA-Z0-9]+$/.test(name)) {
      gPage && gPage({ name: name, components: JSON.parse(JSON.stringify(item)) });
    } else {
      notification.error({
        message: "页面名称只能是英文和数字",
        description: "",
      });
    }
  };
  return (
    <div className={styles.tipRight}>
      <div className={styles.tipRightSub}>
        <div>
          <Tooltip placement="bottomLeft" title="新建页面">
            <img src={share} className={styles.bell} alt="" onClick={() => createPage()} />
          </Tooltip>
        </div>
        <div>
          <Tooltip placement="bottom" title="复制当前页面">
            <img
              src={share}
              className={styles.bell}
              alt=""
              onClick={() => createPage(showPage.components)}
            />
          </Tooltip>
        </div>
        <div>
          <Tooltip placement="bottomRight" title="删除当前页面">
            <Popconfirm
              title="确定删除这个页面吗?"
              onConfirm={() => confirm(showPage)}
              okText="确定"
              cancelText="取消"
            >
              <img src={share} className={styles.bell} alt="" />
            </Popconfirm>
          </Tooltip>
        </div>
      </div>
      <div>
        <Tooltip placement="bottomLeft" title="下载源码">
          <img
            src={share}
            className={styles.bell}
            alt=""
            onClick={() => onAction({ type: "global/downloadCode" })}
          />
        </Tooltip>
      </div>
    </div>
  );
};
export default RightTitle;
