const commentFormHandler = async function(event) {
<<<<<<< HEAD
<<<<<<< HEAD
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  
    if (body) {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);  
=======

=======
>>>>>>> 2e1793e0f2e58533db589ae7d8dae281719bd183
  event.preventDefault();
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf('/') + 1);
  const movie_id = id;
  const comment_text = document.querySelector('input[name="comment_text"]').value;
  if (comment_text) {
    await fetch('/api/comments/' + movie_id, {
      method: 'POST',
      body: JSON.stringify({
        movie_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.location.reload();
  }
};
<<<<<<< HEAD

document.querySelector('.frmComment').addEventListener('submit', commentFormHandler);
>>>>>>> main
=======
document.querySelector('.frmComment').addEventListener('submit', commentFormHandler);
>>>>>>> 2e1793e0f2e58533db589ae7d8dae281719bd183
