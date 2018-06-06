import React from "react";

function validatePoem(text) {
  const poemLines = text.split("\n")

  if (poemLines.length !== 3) {
    return false
  }

  const firstLineWords = poemLines[0].trim().split(" ")
  const secondLineWords = poemLines[1].trim().split(" ")
  const thirdLineWords = poemLines[2].trim().split(" ")

  if (firstLineWords.length === 5
    && secondLineWords.length === 3 && thirdLineWords.length === 5) {
    return true
  } else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      isValid: false
    };
  }

  handleText = event => {
    this.setState({
      text: event.target.value,
      isValid: validatePoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleText}/>
        {!this.state.isValid ?
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
          : null
        }
      </div>
    );
  }
}

export default PoemWriter;
