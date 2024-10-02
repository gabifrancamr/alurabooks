import React from "react";
import { Card } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Componentes/Card',
    component: Card
} as ComponentMeta<typeof Card>

export const CardComponent = () => {
    return (
        <Card>
            <h1>Olá, eu sou um card</h1>
        </Card>
    )
}