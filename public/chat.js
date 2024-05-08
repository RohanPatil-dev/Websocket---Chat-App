const socket = io();

const messageInput = document.querySelector("#message");
const sendbtn = document.querySelector("#btn");
const messages = document.querySelector(".messages");
const select = document.querySelector("#select")

const date = new Date().toLocaleTimeString()

console.log(date);

socket.on("message", ({ message, selected }) => {
    const p = document.createElement("div")
    p.className = "result"
    p.innerHTML = `
      <div class="conversations">
        <p>
          <span id="user">${selected} </span> <span id="date">${date}</span>
        </p>
        <p>${message}</p>
      </div>`
    messages.appendChild(p)
});


sendbtn.addEventListener("click", (e) => {
    const message = messageInput.value;
    const selected = select.value
    console.log(message, selected);
    socket.emit("user-message", { message, selected, date });
});