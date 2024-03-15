// Forma lagada
import React from "react";
import ColorTheme from "./MyColorContext";

class ClassA extends React.Component {

    render() {
        return (
            <ColorTheme.Provider value="green">
                <ClassB />
            </ColorTheme.Provider>
        )
    }
}

class ClassB extends React.Component {

    render() {
        return (
            <ColorTheme.Consumer>
                {value => <h1 style={{ color: value }}>Classe B</h1>}
            </ColorTheme.Consumer>
        )
    }
}

ClassB.contextType = ColorTheme

export default ClassA