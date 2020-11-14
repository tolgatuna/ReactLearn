import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class StreamForm extends Component {
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    renderError = (meta) => {
        const {error, touched} = meta;
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${(meta.error && meta.touched) ? 'error' : ''}`
        return (
            <div className={className}>
                <label htmlFor={input.name}>{label} : </label>
                <input id={input.name} {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        );
    }

    render() {
        return (
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Enter Title'/>
                <Field name='description' component={this.renderInput} label='Enter Description'/>
                <button className='ui button primary' type="submit">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);
