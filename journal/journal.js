tinymce.init({
    selector: "#mytextarea",
    plugins: "emoticons",
    toolbar:
      "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | emoticons",
    statusbar: false,
    menubar: false,
  });

  async function sendTextToServer() {
    // Get the content from the TinyMCE editor
    var content = tinymce.activeEditor.getContent();

    console.log("Content to send to the server:", content);
    const resp = await fetch('http://localhost:3000/journalentry', {
		method: 'POST',
		headers: {
            'Access-Control-Allow-Origin': '*',
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		  
		},
		body: JSON.stringify({content:content, timestamp: new Date()}),
	  })
    // Simulate a POST request to the server (replace this with an actual fetch)
    console.log("Simulating a POST request to the server...");
  }