import { Comment } from './Comments';

export const fetchComments = async (slug: string) => {
  const response = await fetch(`https://express-d1-app.ckd-qja.workers.dev/api/comments/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }
  const data = await response.json() as { comments: Comment[] };
  return data.comments || [];
}

const CommentsFetch = async () => {
    const comments = await fetchComments("platform");
    return (
      <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    )
};

export default CommentsFetch;