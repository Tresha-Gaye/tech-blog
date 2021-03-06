async function editFormHandler(event) {
    event.preventDefault();

    const id = event.target.dataset.postid;
    const title = document.querySelector('input[name="post-title"]').value;
    const post_about = document.querySelector('input[name="post-about"]').value;
    console.log(id);
    console.log(event.target);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          post_about
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    console.log(response);
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
}

  
document.querySelector('.save-post-btn').addEventListener('click', editFormHandler);