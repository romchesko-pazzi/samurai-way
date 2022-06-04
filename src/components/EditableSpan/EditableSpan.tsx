import React, {ChangeEvent} from 'react';

export class EditableSpan extends React.Component {

    state = {
        area: true,
        value: "123gfdfsg",
    }

    changeAreaHandler = () => {
        this.setState({
            area: !this.state.area,
        })
    }
    setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value,
        });
    }

    render() {
        return (
            <div>
                {this.state.area
                    ? <span onDoubleClick={this.changeAreaHandler}>{this.state.value}</span>
                    : <input autoFocus onBlur={this.changeAreaHandler} onChange={this.setValueHandler}
                             value={this.state.value}/>
                }
            </div>
        );
    }
}
