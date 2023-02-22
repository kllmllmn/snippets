<template>
  <h1 @click="createConnect">Chat Room</h1>
  <input id="sendTxt" type="text" />
  <button id="sendBtn">发送</button>
</template>

<script setup>
import io from "socket.io-client";

let socket = null;
const createConnect = () => {
  socket = io("ws://localhost:4090/");
  function showMessage(str, type) {
    let div = document.createElement("div");
    div.innerHTML = str;
    if (type == "enter") {
      div.style.color = "blue";
    } else if (type == "leave") {
      div.style.color = "red";
    }
    document.body.appendChild(div);
  }

  document.getElementById("sendBtn").onclick = function () {
    let txt = document.getElementById("sendTxt").value;
    if (txt) {
      console.log(txt);
      socket.emit("message", txt);
    }
  };

  socket.on("enter", function (data) {
    showMessage(data, "enter");
  });

  socket.on("message", function (data) {
    showMessage(data, "message");
  });

  socket.on("leave", function (data) {
    showMessage(data, "leave");
  });
};
</script>

<style scoped lang="less"></style>
