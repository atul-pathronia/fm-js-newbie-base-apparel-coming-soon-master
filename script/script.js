"use strict";

const submitBtn = document.querySelector(".submitBtn");
const inputText = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");
const errorImg = document.querySelector(".error-image");
const formGroup = document.querySelector(".form-group");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!inputText.value || !inputText.value.includes("@")) {
    errorImg.style.display = "block";
    errorMsg.style.display = "block";
    formGroup.style.borderColor = "#f96262";
    setTimeout(() => {
      errorImg.style.display = "none";
      errorMsg.style.display = "none";
      formGroup.style.borderColor = "#ce9797";
      inputText.value = "";
      submitBtn.style.backgroundColor = "#f96262";
    }, 3000);
  } else {
    inputText.value = "";
    errorMsg.style.display = "block";
    errorMsg.textContent = "Thank you for subscribing";
  }
});
