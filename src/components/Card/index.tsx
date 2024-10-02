import React from "react"
import { ReactNode } from "react"
import styled from "styled-components"

export interface CardProps {
    children: ReactNode
}

const CardStyle = styled.div`
    padding: 48px 32px;
    background: #FFF;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export function Card({children}: CardProps) {
    return (
        <CardStyle>
            {children}
        </CardStyle>
    )
}