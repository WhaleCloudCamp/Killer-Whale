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
      value: nextProps.value,
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.changeItemProp({
      id: this.props.parentId,
      key: this.props.type,
      value: event.target.value,
    });
  }

  render() {
    const { value } = this.state;
    const { type, optionsValue } = this.props;
    return (

      <div key={type}>
        <div className={styles.selectMain}>
          <span
            className={styles.selectText}
          > {type}</span>

          <select
            tabIndex="-1"
            className={styles.selectContant}
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
          <img src={choose} className={styles.selectChoose} alt="" onClick={() => { }} />
        </div>
        <div className={styles.line} />
      </div>
    );
  }
}

export default SelectItem;
