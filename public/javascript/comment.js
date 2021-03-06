async function commentFormHandler(event) {
    event.preventDefault();

    console.log(event.target);
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(comment_text, post_id);
  
  if (comment_text) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      console.log(response)
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Comment must be a minimum of 5 characters");
      }
    }
  }
  
  document.querySelector('.comment-btn').addEventListener('click', commentFormHandler);