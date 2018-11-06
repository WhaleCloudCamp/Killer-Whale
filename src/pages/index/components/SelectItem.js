import React from "react";
import styles from "./rightItem.less";
class SelectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    const { handleBlur ,type} = this.props;
    return (
      <div className={styles.fqvwjT}>
        <div className={styles.dcJAHC}>
          <span style={{ fontSize: "11px" }} className={styles.ikRkvd}>
            {type}
          </span>
        </div>
        <div className={styles.ffgvpT}>
          <div className={styles.ggjvuQ}>
            <select tabIndex="-1" className={styles.iqAZmK} value={value} onChange={this.handleChange}>
            <option value="gg">Google</option>
              <option value="1">10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
              <option>35</option>
              <option>45</option>
              <option>65</option>
              <option>80</option>
              <option>Auto</option>
            </select>
            <div className={styles.hWrpYy}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                stroke="currentColor"
                style={{ display: "block" }}
              >
                <path
                  d="M14.5 5.5L12.5 3.5L10.5 5.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 9.5L12.5 11.5L10.5 9.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectItem;
