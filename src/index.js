import React, {Component, createRef} from 'react';

export default class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputRef: createRef()
    }
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(e) {
    const {onFileOpend} = this.props;
    onFileOpend(e.target.filse)
  }

  handleClick(e) {
    e.stopPropagation();
    const {inputRef} = this.state;
    inputRef.current.click()
  }

  render() {
    const {
      handleFileChange,
      handleClick,
      props: {style, children}
    } = this;

    return (
      <div onClick={handleClick} style={style} >
        <input type="file" hidden onchange={handleFileChange} />
        {children}
      </div>
    )
  }
}
