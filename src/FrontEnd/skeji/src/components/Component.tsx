import React, { SyntheticEvent } from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

class TestComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentEnthusiasm: this.props.enthusiasmLevel || 1,
        };
    }

    onIncrement = (event: SyntheticEvent) => {
        this.updateEnthusiasm(1);
    }

    onDecrement = (event: SyntheticEvent) => {
        this.updateEnthusiasm(-1);
    }

    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        return (
            <div>
                Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.onDecrement}>-</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.onIncrement}>+</button>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </div>
        )
    }

    updateEnthusiasm(change: number) {
        this.setState((currentState) => {
            return { currentEnthusiasm: currentState.currentEnthusiasm + change };
        });
    }
}

export default TestComponent;

function getExclamationMarks(numChars?: number) {
    return Array(numChars! + 1).join('!');
}