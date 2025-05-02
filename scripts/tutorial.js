function copyCode() {
    const code = document.getElementById("codeText").innerText;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert("Code gekopieerd!");
      })
      .catch((err) => {
        alert("Kopiëren mislukt.");
        console.error(err);
      });
  }
