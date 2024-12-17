import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {
  return (
    <section id="comment-list">
      <h4>Comments:</h4>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
};

export default CommentList;
