async function editFormHandler(event) {
    event.preventDefault();

    const id = event.target.dataset.postid;
    console.log(id);
    console.log(event.target);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
}

  
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);