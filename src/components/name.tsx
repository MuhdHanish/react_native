import React from 'react'
import { TextComponent } from './text-component'
import { style } from '../utils/style';

export const Name = ({ name }: { name: string }) => {
    return <TextComponent style={style.shadowStyle} text={`My name is ${name}.`} />;
};