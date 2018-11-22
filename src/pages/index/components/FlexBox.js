import styles from "./rightItem.less";

const FlexBox = ({ data, parentId, changeItemProp }) => {
  const { direction, wrap, align, justify } = data;
  //   direction: "row",
  // wrap: "nowrap",
  // align: "center",
  // justify: "around"
  const changeDirection = e => {
    changeItemProp &&
      changeItemProp({
        id: parentId,
        key: "direction",
        value: e.target.value,
      });
  };
  const changeWrap = e => {
    changeItemProp &&
      changeItemProp({
        id: parentId,
        key: "wrap",
        value: e.target.value,
      });
  };
  const changejustify1 = e => {
    changeItemProp &&
      changeItemProp({
        id: parentId,
        key: "align",
        value: e.target.value,
      });
  };
  const changeAlign = e => {
    changeItemProp &&
      changeItemProp({
        id: parentId,
        key: "justify",
        value: e.target.value,
      });
  };
  return (
    <div className={styles.gYgSTP}>
      <h3 className={styles.ezwJzw}>弹性布局</h3>
      <div className={styles.jGrEJN} onChange={changeDirection}>
        <label tabIndex="-1" className={styles.cOMjSK}>
          <input
            type="radio"
            name={direction}
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={direction === "row"}
            value="row"
          />

          <div tabIndex="-1" className={styles.dnRfIM}>
            Row
          </div>
        </label>

        <label tabIndex="-1" className={styles.kQVkKw}>
          <input
            type="radio"
            name={direction}
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={direction === "column"}
            value="column"
          />

          <div tabIndex="-1" className={styles.exTzhA}>
            Column
          </div>
        </label>
      </div>

      <div className={styles.hSWRFI} onChange={changejustify1}>
        <label tabIndex="-1" className={styles.cOMjSK}>
          <input
            type="radio"
            name="flex-justify"
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={align === "start"}
            value="start"
          />

          <div tabIndex="-1" className={styles.dnRfIM}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.5 4.5H4.5" strokeLinecap="round" />

              <rect x="8.5" y="4.5" width="8" height="4" />

              <rect x="8.5" y="8.5" width="8" height="4" />
            </svg>
          </div>
        </label>

        <label tabIndex="-1" className={styles.hiCKBi}>
          <input
            type="radio"
            name="flex-justify"
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={align === "center"}
            value="center"
          />

          <div tabIndex="-1" className={styles.cDdTdm}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.5 12.5H4.5" strokeLinecap="round" />
              <rect x="8.5" y="8.5" width="8" height="4" />
              <rect x="8.5" y="12.5" width="8" height="4" />
            </svg>
          </div>
        </label>

        <label tabIndex="-1" className={styles.hiCKBi}>
          <input
            type="radio"
            name="flex-justify"
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={align === "end"}
            value="end"
          />

          <div tabIndex="-1" className={styles.cDdTdm}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.5 20.5H4.5" strokeLinecap="round" />
              <rect x="8.5" y="12.5" width="8" height="4" />
              <rect x="8.5" y="16.5" width="8" height="4" />
            </svg>
          </div>
        </label>
        <label tabIndex="-1" className={styles.kQVkKw}>
          <input
            type="radio"
            name="flex-justify"
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={align === "stretch"}
            value="stretch"
          />
          <div tabIndex="-1" className={styles.exTzhA}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.5 4.5H4.5" strokeLinecap="round" />
              <path d="M20.5 20.5H4.5" strokeLinecap="round" />
              <rect x="10.5" y="4.5" width="4" height="16" />
            </svg>
          </div>
        </label>
      </div>

      <div className={styles.hSWRFI} onChange={changeAlign}>
        <label tabIndex="-1" className={styles.cOMjSK}>
          <input
            type="radio"
            name="flex-align"
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={justify === "start"}
            value="start"
          />

          <div tabIndex="-1" className={styles.dnRfIM}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 4.5V20.5" strokeLinecap="round" />
              <rect x="4.5" y="8.5" width="4" height="8" />
              <rect x="8.5" y="8.5" width="4" height="8" />
            </svg>
          </div>
        </label>

        <label tabIndex="-1" className={styles.hiCKBi}>
          <input
            type="radio"
            name="flex-align"
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={justify === "center"}
            value="center"
          />

          <div tabIndex="-1" className={styles.cDdTdm}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.5 4.5V20.5" strokeLinecap="round" />
              <rect x="8.5" y="8.5" width="4" height="8" />
              <rect x="12.5" y="8.5" width="4" height="8" />
            </svg>
          </div>
        </label>

        <label tabIndex="-1" className={styles.hiCKBi}>
          <input
            type="radio"
            name="flex-align"
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={justify === "end"}
            value="end"
          />

          <div tabIndex="-1" className={styles.cDdTdm}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.5 4.5V20.5" strokeLinecap="round" />
              <rect x="12.5" y="8.5" width="4" height="8" />

              <rect x="16.5" y="8.5" width="4" height="8" />
            </svg>
          </div>
        </label>

        <label tabIndex="-1" className={styles.hiCKBi}>
          <input
            type="radio"
            name="flex-align"
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={justify === "around"}
            value="around"
          />

          <div tabIndex="-1" className={styles.cDdTdm}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.5 4.5V20.5" strokeLinecap="round" />
              <rect x="4.5" y="8.5" width="4" height="8" />
              <rect x="16.5" y="8.5" width="4" height="8" />
            </svg>
          </div>
        </label>
        <label tabIndex="-1" className={styles.kQVkKw}>
          <input
            type="radio"
            name="flex-align"
            tabIndex="-1"
            className={styles.kxMiOH}
            defaultChecked={justify === "between"}
            value="between"
          />
          <div tabIndex="-1" className={styles.exTzhA}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.5 4.5V20.5" strokeLinecap="round" />
              <path d="M4.5 4.5V20.5" strokeLinecap="round" />
              <rect x="4.5" y="8.5" width="4" height="8" />
              <rect x="16.5" y="8.5" width="4" height="8" />
            </svg>
          </div>
        </label>
      </div>

      <div className={styles.gAtluJ}>
        <div className={styles.jKDcpJ}>
          <span className={styles.ikRkvd}>Wrap</span>
        </div>

        <div className={styles.jAAByG} onChange={changeWrap}>
          <label tabIndex="-1" className={styles.cOMjSK}>
            <input
              type="radio"
              name="flex-wrap"
              tabIndex="-1"
              className={styles.kxMiOH}
              defaultChecked={wrap === "wrap"}
              value="wrap"
            />

            <div tabIndex="-1" className={styles.dnRfIM}>
              Warp
            </div>
          </label>
          <label tabIndex="-1" className={styles.kQVkKw}>
            <input
              type="radio"
              name="flex-wrap"
              tabIndex="-1"
              className={styles.kxMiOH}
              defaultChecked={wrap === "nowrap"}
              value="nowrap"
            />
            <div tabIndex="-1" className={styles.exTzhA}>
              NoWarp
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
export default FlexBox;
