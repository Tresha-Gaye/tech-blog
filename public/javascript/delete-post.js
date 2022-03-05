async function deleteFormHandler(event) {
    event.preventDefault();

    const id = event.target.dataset.postid;
    console.log(id);
    console.log(event.target);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);