async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;
    const post_about = document.querySelector('input[name="post-about"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url,
        post_about
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    console.log(response)
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-btn').addEventListener('click', newFormHandler);
  
  
  
  
  
  
  
  