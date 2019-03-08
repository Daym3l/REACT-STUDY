import React, {Component} from 'react';
import ReactSelect from 'react-select';

class CheckedSelect extends Component {
    state = {
        options: [{label: 'Chocolate', value: 'chocolate', disabled: true},
            {label: 'Vanilla', value: 'vanilla'},
            {label: 'Strawberry', value: 'strawberry'},
            {label: 'Caramel', value: 'caramel'},],
        selectedOptions: [{label: 'Vanilla', value: 'vanilla'}]
    }

    handleOnChange = val => this.setState({selectedOptions: val})

    render() {
        return <div style={{width: 300, margin: "auto"}}>
            <label><h4>MULTISELECT</h4></label>
            <ReactSelect
                name="form-field-name"
                isMulti
                value={this.state.selectedOptions}
                options={this.state.options}
                onChange={this.handleOnChange}/>
        </div>

    }
}

export default CheckedSelect