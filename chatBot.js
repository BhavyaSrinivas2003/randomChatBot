function chatbotFun() {
    let chatbotMsgList = ["Hi", "Hey", "good things take time", "enjoy the moment", "be in the moment", "Good Morning", "What's Up", "Good Evening", "u r beautiful the way ur", "How can I help you?", "Thank You"];
    let chatContainer = document.getElementById("chatContainer");
    let chatMsgListLength = chatbotMsgList.length;

    function sendMsgBtn() {
        let userInput = document.getElementById("userInput");
        let userInputValue = userInput.value;
        let userInputContainerDiv = document.createElement("div");
        userInputContainerDiv.classList.add("msg-to-chatbot-container");
        let userInputContainer = document.createElement("span");
        userInputContainer.classList.add("msg-to-chatbot");
        userInputContainer.textContent = userInputValue;
        userInput.value = "";
        userInputContainerDiv.appendChild(userInputContainer);
        chatContainer.appendChild(userInputContainerDiv);
        let count = Math.ceil(Math.random() * chatMsgListLength - 1);
        let chatInputContainerDiv = document.createElement("div");
        chatInputContainerDiv.classList.add("msg-from-chatbot-container");
        let chatInputContainer = document.createElement("span");
        chatInputContainer.textContent = chatbotMsgList[count];
        chatInputContainer.classList.add("msg-from-chatbot");
        chatInputContainerDiv.appendChild(chatInputContainer);
        chatContainer.appendChild(chatInputContainerDiv);
    }
}