document.getElementById('downloadForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const videoUrl = document.getElementById('videoUrl').value;
    const apiUrl = `https://social-media-video-downloader.p.rapidapi.com/smvd/get/all?url=${encodeURIComponent(videoUrl)}`;

    console.log('API URL:', apiUrl);  // Log the API URL for debugging

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c84f74e945msha765b1a36148fabp142f84jsncc13fa0e3377',  // Ensure this is your actual API key
            'x-rapidapi-host': 'social-media-video-downloader.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        if (response.ok) {
            const result = await response.json();
            console.log('API Response:', result);  // Log the API response
            // Process the result as needed
            const downloadLink = result.download_url; // Adjust this according to the actual API response
            if (downloadLink) {
                window.location.href = downloadLink;
            } else {
                console.error('Download link not found in response.');
            }
        } else {
            console.error('Error:', response.status, response.statusText);
            const errorResponse = await response.text();
            console.error('Error response:', errorResponse);  // Log the error response for more details
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
});
