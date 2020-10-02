import React from 'react'
import Field from './Field'
import { storiesOf } from "@storybook/react";
import { actions } from '@storybook/addon-actions';

const defaultFieldData = {
    type : 'text',
    fieldValue: 'Godwin',
    handleChange : (e)=>{ actions(e)},
    disabledValue : false
}

/*storiesOf("Components/Field", module)
    .add("default",() =>  <Field {...defaultFieldData} />)*/

export default {
    component : Field,
    title : "Components/ Field",
}

export const TEXT = (args)=> <Field {...args} />
TEXT.args = {
    ...defaultFieldData,
    fieldValue : "Default"
}