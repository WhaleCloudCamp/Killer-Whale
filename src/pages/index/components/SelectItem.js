import React from "react";
import styles from "./rightItem.less";
import choose from "../../../assets/web/choose.png";
class SelectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.changeItemProp({
      id: this.props.parentId,
      key: this.props.type,
      value: event.target.value
    });
  }

  render() {
    const { value } = this.state;
    const { type, optionsValue } = this.props;
    return (
      <div className={styles.inputmain}>

        <div className={styles.fqvwjT}>

          <span style={{ fontSize: "11px" }} className={styles.ikRkvd}>
            {type}
          </span>

          <div className={styles.ffgvpT}>
            <div className={styles.ggjvuQs}>
              <div className={styles.gsl}></div>
              <select
                tabIndex="-1"
                className={styles.iqAZmKs}
                value={value}
                onChange={this.handleChange}
              >
                {optionsValue &&
                  optionsValue.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>

            


          </div>
          <img src={choose} className={styles.bell} alt=""  onClick={()=>{}} />

        </div>
        <div className={styles.line}>

        </div>

      </div>
    );
  }
}

export default SelectItem;
