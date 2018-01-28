import React, { PureComponent } from "react";

class ReplyForm extends PureComponent {
  componentDidMount() {
    this.commentArea.focus();
  }

  sumbitNotImplemented = (event) => {
    event.preventDefault();
    console.error("Commenting is not implemented.");
    this.props.closeForm();
  }

  render() {
    return (
      <form className="mb-3" onSubmit={this.sumbitNotImplemented}>
        <div className="form-group mb-2">
          <textarea
            className="form-control" id="commentText" rows="7"
            ref={(input) => { this.commentArea = input; }}
          >
          </textarea>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span
            className="large short-line text-very-muted no-selection pl-2" role="button"
            onClick={this.props.closeForm}
          >
            ×
          </span>
          <button type="submit" className="btn text-muted">
            ADD COMMENT
          </button>
        </div>
      </form>
    );
  }
}

export default ReplyForm;