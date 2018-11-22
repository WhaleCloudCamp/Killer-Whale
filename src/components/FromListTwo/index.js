import React from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const immerObj = (data, newData) => {
  Object.keys(data).map((key, index) => {
    const keynames = key.split("-");
    if (keynames.length > 1) {
      newData[keynames[1]][keynames[2]][keynames[3]] =
        typeof newData[keynames[1]][keynames[2]][keynames[3]] === "number"
          ? parseInt(data[key])
          : data[key];
    } else {
      newData[key] = typeof newData[key] === "number" ? parseInt(data[key]) : data[key];
    }
  });
  return newData;
};
class RegistrationForm extends React.Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
      console.log("Received values of form: ", values);
      const { data, onSubmit } = this.props;
      const immerData = immerObj(values, data);
      onSubmit && onSubmit(immerData);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { data } = this.props;
    console.log(data);
    const formItemLayout = {
      labelCol: {
        xs: { span: 10 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 14 },
        sm: { span: 14 },
      },
      label: {
        fontSize: "20px",
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const labelStyle = {
      fontSize: "16px",
      float: "left",
      paddingLeft: "10px",
      fontWeight: "500",
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <div
          style={{
            paddingRight: "10px",
          }}
        >
          <div
            style={{
              paddingTop: "10px",
            }}
          >
            <Row type="flex" align="middle">
              <Col span={10}>
                <span style={{ paddingLeft: "10px", fontWeight: "bold", fontSize: "16px" }}>
                  ID
                </span>
              </Col>
              <Col span={14}>
                <div style={{}}>
                  <Input placeholder="ID" value={data.id} />
                </div>
              </Col>
            </Row>
          </div>

          <div
            style={{
              paddingTop: "10px",
            }}
          >
            <Row type="flex" align="middle">
              <Col span={10}>
                <span style={{ paddingLeft: "10px", fontWeight: "bold", fontSize: "16px" }}>
                  类型
                </span>
              </Col>
              <Col span={14}>
                <div style={{}}>
                  <Input placeholder="类型" value={data.component.type} />
                </div>
              </Col>
            </Row>
          </div>

          <div
            style={{
              paddingTop: "10px",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <span style={{ paddingLeft: "10px", fontWeight: "bold", fontSize: "16px" }}>
                属性
              </span>
            </div>
            <div>
              {Object.keys(data.component.props).map((key, index) => {
                let keyNode = React.createElement("label", { style: labelStyle }, key);
                return (
                  <FormItem {...formItemLayout} label={keyNode} key={index} colon={false}>
                    {getFieldDecorator(data.id + "-component-props-" + key, {
                      initialValue: data.component.props[key] || "",
                    })(<Input />)}
                  </FormItem>
                );
              })}
            </div>
          </div>

          <div
            style={
              {
                // paddingTop: "10px"
              }
            }
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <span style={{ paddingLeft: "10px", fontWeight: "bold", fontSize: "16px" }}>
                样式
              </span>
            </div>
            <div>
              {Object.keys(data.component.style).map((key, index) => {
                let keyNode = React.createElement("label", { style: labelStyle }, key);
                return (
                  <FormItem {...formItemLayout} label={keyNode} key={index} colon={false}>
                    {getFieldDecorator(data.id + "-component-style-" + key, {
                      initialValue: data.component.style[key],
                    })(<Input />)}
                  </FormItem>
                );
              })}
            </div>
          </div>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              更新
            </Button>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export default Form.create()(RegistrationForm);
