import React, { PureComponent } from "react";
import ReplyScoreMore from "./ReplyScoreMore";
import ReplyForm from "./ReplyForm";

class CommentTools extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {formShown: false};
  }

  showForm = () => {
    this.setState({formShown: true});
  };

  hideForm = () => {
    this.setState({formShown: false});
  };

  render() {
    return (
      <div>
        <ReplyScoreMore score={this.props.score} showForm={this.showForm}/>
        {this.state.formShown && <ReplyForm closeForm={this.hideForm}/>}
      </div>
    );
  }
}

export default CommentTools;