import React from 'react'
import { TextComponent } from './text-component'

export const Name = ({ name }: { name: string }) => {
    return <TextComponent text={`My name is ${name}.`} />;
};