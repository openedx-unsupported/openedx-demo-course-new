// apiTrigger.js

//This function sends anonymous feedback to a cloud database for analysis and continuous improvement. 

function sendFeedbackToAPI(unitName, feedback, anonUserId) {
    const url = 'https://uaof2y7gf3.execute-api.us-east-1.amazonaws.com/prod/demox_feedback';
    const apiKey = 'demox_dummy_key_shareable'; // This is a public key with very strict limits to prevent abuse
    const pathname = window.location.pathname;

    const data = {
        PathName: pathname,
        UnitName: unitName,
        Feedback: feedback,
        AnonUserId: anonUserId
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


}

// Attach event listeners to the buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.emoji-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove highlight from all buttons
            buttons.forEach(btn => btn.classList.remove('emoji-button-highlighted'));
            
            // Highlight the clicked button
            this.classList.add('emoji-button-highlighted');

        });
    });
});
