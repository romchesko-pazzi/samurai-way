import React, {ChangeEvent} from 'react';

type EditableSpanPropsType = {
    status: string
    updateUserStatusTC: (status: string) => void
}

type PrevStateType = {
    area: boolean,
    value: string,
}

export class EditableSpan extends React.Component<EditableSpanPropsType> {
    state = {
        area: true,
        value: this.props.status,
    }
    changeToInput = () => {
        this.setState({
            area: false,
        });
    }
    changeToSpan = () => {
        this.setState({
            area: true,
        });
        this.props.updateUserStatusTC(this.state.value);
    }
    setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value
        });
    }

    componentDidUpdate = (prevProps: EditableSpanPropsType, prevState: PrevStateType) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                value: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.area
                    ? <span onDoubleClick={this.changeToInput}>{this.props.status || "-----"}</span>
                    : <input autoFocus onBlur={this.changeToSpan}
                             onChange={this.setValueHandler}
                             value={this.state.value}/>
                }
            </div>
        );
    }
}
