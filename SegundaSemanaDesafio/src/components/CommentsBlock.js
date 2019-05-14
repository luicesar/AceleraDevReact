import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser, isLogged } from "../services/loginService";
import commentsService from "../services/commentsService";

class CommentsBlock extends Component {
  state = {
    comment: "",
    comments: commentsService.get(this.props.recipe)
  };

  handleSubmit = event => {
    const { recipe } = this.props;
    const { comment } = this.state;

    event.preventDefault();

    try {
      commentsService.insert(recipe, { comment });

      this.setState({
        comment: "",
        comments: commentsService.get(recipe)
      });
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleRemoveComment = comment => {
    const { recipe } = this.props;

    try {
      commentsService.delete(recipe, comment);

      this.setState({
        comments: commentsService.get(recipe)
      });
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  renderComment = comment => (
    <div className="Comment media text-muted pt-3" key={comment.date}>
      <FontAwesomeIcon className="mr-2" size="3x" icon="user-circle" />
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">@{comment.author}</strong>
        {comment.comment}
      </p>
      {getUser() && getUser().username === comment.author && (
        <FontAwesomeIcon
          icon="trash"
          onClick={() => this.handleRemoveComment(comment)}
        />
      )}
    </div>
  );

  render() {
    const { comments, comment } = this.state;

    return (
      <div className="text-left">
        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h6 className="border-bottom border-gray pb-2 mb-0">Comments</h6>
          {comments.length === 0 ? (
            <p>No comments</p>
          ) : (
            comments.map(this.renderComment)
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Comment {!isLogged() && "(You must be logged to comment)"}
            </label>
            <textarea
              disabled={!isLogged()}
              value={comment}
              onChange={this.handleChange}
              required="required"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Insert your comment"
            />
          </div>
          <button
            disabled={!isLogged()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CommentsBlock;
