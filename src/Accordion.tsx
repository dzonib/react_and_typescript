import React, { Component } from "react"

interface AccordionProps {
    children: React.ReactNode
    preview: string
}

interface AccordianState {
    open: boolean
}

export default class Accordion extends Component<AccordionProps, AccordianState> {

    state = {
        open: false,
    }

    render() {
        if (this.state.open) {
            return (
                <>
                    {this.props.children}
                    <br/>
                    <div onClick={() => this.setState({open: false})}>Close</div>
                </>
            )
        }
        return (
            <>
                {this.props.preview}
                <br/>
                <div onClick={() => this.setState({ open: true })}>Open</div>
            </>
        )
    }
}