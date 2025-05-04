// Author: Rebecca Cathey
// Date: May 4th, 2025

const chatArea = document.getElementById('chat-area');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const clearButton = document.getElementById('clear-button');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');

        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = messageText;

        const removeSpan = document.createElement('span');
        removeSpan.textContent = 'x';
        removeSpan.classList.add('remove');
        removeSpan.addEventListener('click', () => {
            messageDiv.remove();
        });

        messageDiv.appendChild(removeSpan);
        messageDiv.appendChild(messageParagraph);
        chatArea.appendChild(messageDiv);

        messageInput.value = '';
        chatArea.scrollTop = chatArea.scrollHeight;
    }
});

clearButton.addEventListener('click', () => {
    chatArea.innerHTML = '';
});