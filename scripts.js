document.getElementById("memeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  var imageUrl = document.getElementById("imageUrl").value;
  var topText = document.getElementById("topText").value;
  var bottomText = document.getElementById("bottomText").value;

  // Create meme div
  var memeDiv = document.createElement("div");
  memeDiv.classList.add("meme");

  // Create image element
  var img = document.createElement("img");
  img.src = imageUrl;
  memeDiv.appendChild(img);

  // Create top text element
  var topTextDiv = document.createElement("div");
  topTextDiv.classList.add("top-text");
  topTextDiv.textContent = topText;
  memeDiv.appendChild(topTextDiv);

  // Create bottom text element
  var bottomTextDiv = document.createElement("div");
  bottomTextDiv.classList.add("bottom-text");
  bottomTextDiv.textContent = bottomText;
  memeDiv.appendChild(bottomTextDiv);

  // Append meme to meme container
  document.getElementById("memeContainer").appendChild(memeDiv);

  // Clear form fields
  document.getElementById("imageUrl").value = "";
  document.getElementById("topText").value = "";
  document.getElementById("bottomText").value = "";
});
