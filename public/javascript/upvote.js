async function upvoteClickHandler(event) {
    event.preventDefault();
  
    console.log(event.target)
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    // console.log(id);
    
    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log(response);

      if (response.ok) {
        document.location.reload();
      } else {
        // alert(response.statusText);
        alert("It looks like you already voted on this post!")
      }
}
  
document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);