import React, {Component} from "react"

export default class defaultInput extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>
                    {this.props.required ? <small className="text-danger mr-1">*</small> : ""}
                    {this.props.label}
                </label>
                <input type={this.props.type} min={this.props.min} max={this.props.max} step={this.props.step}
                       id={this.props.id} value={this.props.value}
                       onChange={e => this.props.onChangeValue(e.target.value)}
                       className="form-control" placeholder={this.props.placeholder}/>
            </div>
        )
    }
}