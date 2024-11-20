document.addEventListener("DOMContentLoaded", () => {
   
    document.getElementById("color-button").addEventListener("click", () => {
      document.body.style.backgroundColor = getRandomColor();
    });
  
   
    document.getElementById("add-button").addEventListener("click", () => {
      const newElement = document.createElement("p");
      newElement.textContent = "You just created a new element! 🎉";
      newElement.style.color = getRandomColor();
      document.getElementById("dynamic-content").appendChild(newElement);
    });
  
   
    document.getElementById("toggle-button").addEventListener("click", () => {
      const content = document.getElementById("dynamic-content");
      content.style.display = content.style.display === "none" ? "block" : "none";
    });
  
    
    document.getElementById("animate-button").addEventListener("click", () => {
      const animationBox = document.createElement("div");
      animationBox.style.width = "50px";
      animationBox.style.height = "50px";
      animationBox.style.backgroundColor = getRandomColor();
      animationBox.style.margin = "20px auto";
      animationBox.style.borderRadius = "50%";
      animationBox.style.animation = "bounce 1s infinite";
      document.getElementById("dynamic-content").appendChild(animationBox);
    });
  

    document.getElementById("text-button").addEventListener("click", () => {
      const dynamicContent = document.getElementById("dynamic-content");
      dynamicContent.innerHTML = `<h2 style="color: ${getRandomColor()}">Your text has been transformed! 🚀</h2>`;
    });
  
 
    function getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  });
  

  const style = document.createElement("style");
  style.textContent = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  `;
  document.head.appendChild(style);
  