const commentFormHandler = async function(event) {
    event.preventDefault();
  
   // const postId = document.querySelector('input[name="post-id"]').value;
    const post_content = document.querySelector('textarea[name="comment_body"]').value;
    var url = window.location.pathname;
    const movie_id = url.substring(url.lastIndexOf('/') + 1);
    // const title = url.substring(url.lastIndexOf('/') + 1);
    if (post_content) {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_content,
          movie_id,
          // title,
          
         
          
      
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);  