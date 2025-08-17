// You can add more interactive features here
    console.log("AI Web loaded successfully!");
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');

    function sendMessage() {
      const message = userInput.value.trim();
      if (message === '') return;

      addMessage(message, 'user');
      userInput.value = '';

      setTimeout(() => {
        const reply = getBotReply(message);
        addMessage(reply, 'bot');
      }, 500);
    }

    function addMessage(text, sender) {
      const msg = document.createElement('div');
      msg.classList.add('message', sender);
      msg.textContent = text;
      chatBox.appendChild(msg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotReply(input) {
      input = input.toLowerCase();
      if (input.includes('hello')) return 'Hi there! 👋';
      if (input.includes('how are you')) return 'I’m just a bunch of code, but I’m doing great!';
      if (input.includes('your name')) return 'I’m your friendly AI chatbot.';
      if (input.includes('bye')) return 'Goodbye! Have a great day!';
      return 'Sorry, I didn’t understand that. Can you try something else?';
    }
  