import React from 'react'
import styles from "./rightItem.less";
import StyleInputItem from './StyleInputItem';
import { Accordion } from 'antd-mobile';

class RightStyle extends React.Component {

    changeStyleItemProp = (data) => {

        for (var keys in this.props.value) {

            if (keys === data.key && data.typeId == this.props.type) {
                this.props.value[data.key] = data.value

            }
        }
        this.props.changeItemProp({
            id: this.props.parentId,
            key: this.props.type,
            value: this.props.value
        });


    }

    render() {

        const { value, type } = this.props;

        return (
        
            <Accordion >
            <Accordion.Panel header={<div className={styles.myaccordion}>{type}</div>}  >

                {Object.keys(value).map(items => {

                    if (typeof value[items] == "string") {

                        return (
                            <StyleInputItem
                                typeId={type}
                                type={items}
                                value={value[items]}
                                key={items}
                                changeStyleItemProp={this.changeStyleItemProp}
                                isNumber={false}
                            >
                            </StyleInputItem>


                        )

                    } else if (typeof value[items] == 'number') {

                        return (
                            <StyleInputItem
                                typeId={type}
                                type={items}
                                value={value[items]}
                                key={items}
                                changeStyleItemProp={this.changeStyleItemProp}
                                isNumber={true}
                            >
                            </StyleInputItem>


                        )
                    }
                })
                }
                </Accordion.Panel>

            </Accordion>
        )
    }
}

export default RightStyle;

