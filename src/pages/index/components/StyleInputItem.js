import React from "react";
import styles from "./rightItem.less";

class StyleInputItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value, id: props.typeId };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleBlur(event) {
    this.props.changeStyleItemProp({
      id: this.props.typeId,
      key: this.props.type,
      value: this.props.isNumber ? parseInt(event.target.value, 10) : event.target.value,
    });
  }

  render() {
    let { value } = this.state;
    const { type, isNumber } = this.props;
    return (
      <div className={styles.inputMains}>
        <div className={styles.inputMain}>
          <span className={styles.inputText}> {type}</span>
          <input
            type={isNumber ? "number" : "text"}
            tabIndex="-1"
            className={styles.inputContant}
            value={value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
        </div>
        <div className={styles.line} />
      </div>
    );
  }
}

export default StyleInputItem;
