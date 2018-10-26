import { connect } from 'dva';
import styles from './index.less';
import {   } from 'antd';
import share from '../../assets/share.png'
import triangle from '../../assets/triangle.png'
import classify from '../../assets/classify.png'
import bell from '../../assets/bell.png'
import plus from '../../assets/plus-sign.png'
import more from '../../assets/more.png'
function App({global,dispatch}) {
    return (
        <div className={styles.normal}>
            <div className={styles.col}>
                <div className={styles.tip+" "+styles.leftPadding}>
                    <img src={classify} className={styles.classify}/>
                </div>
              <div className={styles.leftContent}>
                <div className={styles.title+" "+styles.leftPadding}>
                  <span className={styles.titleText}>Button</span>
                </div>
                <div className={styles.sizeModule+" "+styles.leftPadding}>
                  <div className={styles.itemTip}>
                    <span className={styles.sizeTipText}>Size</span>
                    <div className={styles.itemIcon}>
                      <img src={more} className={styles.more}/>
                      <img src={plus} className={styles.plus}/>
                    </div>
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemContentText}>Size1</span>
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemContentText}>Size1</span>
                  </div>
                </div>
                <div className={styles.colorModule+" "+styles.leftPadding}>
                  <div className={styles.itemTip}>
                    <span className={styles.sizeTipText}>Color</span>
                    <div className={styles.itemIcon}>
                      <img src={more} className={styles.more}/>
                      <img src={plus} className={styles.plus}/>
                    </div>
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemContentText}>Gray</span>
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemContentText}>Blue</span>
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemContentText}>Green</span>
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemContentText}>Red</span>
                  </div>
                </div>
                <div className={styles.alignmentModule+" "+styles.leftPadding}>
                  <div className={styles.itemTip}>
                    <span className={styles.sizeTipText}>Alignment</span>
                    <div className={styles.itemIcon}>
                      <img src={more} className={styles.more}/>
                      <img src={plus} className={styles.plus}/>
                    </div>
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemContentText}>Left</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.colCenter}>
                <div className={styles.tip+" "+styles.tipCenter}>
                  <div className={styles.circle}>

                  </div>
                  <div className={styles.tipSelect}>
                    <div className={styles.selectItemOne}>
                      <span className={styles.tipText}>Theme</span>
                    </div>
                    <div className={styles.selectCenter}>
                      <span className={styles.tipText}>Editor</span>
                    </div>
                    <div className={styles.selectItemThird}>
                      <span className={styles.tipText}>Composer</span>
                      <img src={triangle} className={styles.triangle}/>
                    </div>
                  </div>
                  <div>
                    <img src={share} className={styles.share}/>
                  </div>
                </div>
              <div className={styles.centerContent}>
                <div className={styles.contentDisplay}>
                  <span className={styles.contentText}>Button</span>
                </div>
              </div>
            </div>

            <div className={styles.col}>
                <div className={styles.tipRight}>
                  <img src={bell} className={styles.bell}/>
                  <div className={styles.blueCircle}>

                  </div>
                </div>
              <div className={styles.rightContent}></div>
            </div>
        </div>
    );
}
export default connect(({global})=>({global}))(App);
