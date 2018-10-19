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
  AutoComplete
} from "antd";
import { isThisTypeNode } from "typescript";

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
      newData[key] =
        typeof newData[key] === "number" ? parseInt(data[key]) : data[key];
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
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>
          ID:
          {data.id}
        </h2>
        <h2>
          类型:
          {data.component.type}
        </h2>
        <h2>属性:</h2>
        {Object.keys(data.component.props).map((key, index) => {
          return (
            <FormItem {...formItemLayout} label={key} key={index}>
              {getFieldDecorator(data.id+"-component-props-" + key, {
                initialValue: data.component.props[key] || ""
              })(<Input />)}
            </FormItem>
          );
        })}
        <h2>样式:</h2>
        {Object.keys(data.component.style).map((key, index) => {
          return (
            <FormItem {...formItemLayout} label={key} key={index}>
              {getFieldDecorator(data.id+"-component-style-" + key, {
                initialValue: data.component.style[key]
              })(<Input />)}
            </FormItem>
          );
        })}
        {
          // <FormItem {...formItemLayout} label={data.id}>
          //   {getFieldDecorator("email")(<Input />)}
          // </FormItem>
          // <FormItem {...formItemLayout} label={data.id}>
          //   {getFieldDecorator("prefix", {
          //     initialValue: "86"
          //   })(
          //     <Select style={{ width: 70 }}>
          //       <Option value="86">+86</Option>
          //       <Option value="87">+87</Option>
          //     </Select>
          //   )}
          // </FormItem>
        }
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            更新
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(RegistrationForm);
