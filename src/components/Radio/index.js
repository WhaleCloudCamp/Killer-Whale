import {Radio} from 'antd-mobile'
import 'antd-mobile/lib/radio/style';
export default class Radios extends React.Component {
    render() {
        return (
           
            <Radio
           
                defaultChecked={this.props.defaultChecked}
                checked={this.props.checked}
                disabled={this.props.disabled}
                
            >
                {this.props.title}
             </Radio>
             
        )
    }
}