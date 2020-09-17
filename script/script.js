function initialize() {
    document.getElementById('chat-button').addEventListener("click", showIframe);
    document.getElementById('close-button').addEventListener("click", hideIframe);
}
function hideIframe() {
    const closeButton = document.getElementById('close-button');
    closeButton.style.display = "none";
    const chatButton = document.getElementById('chat-button');
    chatButton.style.display = "block";
    const chatFrame = document.getElementById('chat-frame');
    chatFrame.style.display = "none";
}

function showIframe() {
    const closeButton = document.getElementById('close-button');
    closeButton.style.display = "block";
    const chatButton = document.getElementById('chat-button');
    chatButton.style.display = "none";
    const chatFrame = document.getElementById('chat-frame');
    chatFrame.style.display = "block";

}
