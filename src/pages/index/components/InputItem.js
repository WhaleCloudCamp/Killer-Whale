import React from "react";
import styles from "./rightItem.less";

class InputItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    const { handleBlur ,type} = this.props;
    return (
        <div className={styles.fqvwjT} >
        <div className={styles.dcJAHC}>
          <span style={{ fontsize: "11px" }} className={styles.ikRkvd}>
            {type}
          </span>
        </div>
        <div className={styles.ffgvpT}>
          <div className={styles.ggjvuQ}>
            <input
              tabIndex="-1"
              className={styles.iqAZmK}
              value={value}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InputItem;
