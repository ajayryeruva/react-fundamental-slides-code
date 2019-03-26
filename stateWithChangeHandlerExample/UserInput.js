import React from 'react';


class UserInput extends React.Component {
    //function UserInput(props) {

    state = {
        txt: ''
    }

    handleSubmit = () => {
        const { changeValue } = this.props
        const val = document.getElementById("userinp").value
        changeValue(val)
    }

    handleChange = (e) => {

        if (isNaN(e.target.value)) {
            console.log("only numbers")
        } else {
            this.setState({ txt: e.target.value })
        }
    }
    render() {
        // const { changeValue, children } = this.props

        return (
            <div>
                <input
                    id="userinp"
                    type="text"
                    name="userInput"
                    onChange={this.handleChange}
                    value={this.state.txt}
                />

                <button onClick={this.handleSubmit}>
                    submit
                </button>

            </div>
        );
    }
}

export default UserInput;
