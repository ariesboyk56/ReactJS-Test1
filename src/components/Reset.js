import React from 'react';
class Reset extends React.Component {
  onReset=()=>{
    this.props.onSettingDefault(true);
  }
    render() {
    return (
      <button type="button" className="btn btn-primary" onClick={this.onReset}>Reset</button>
    );
  }
}

export default Reset;
