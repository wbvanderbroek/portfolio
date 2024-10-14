const views = document.querySelectorAll(".window-name");

views.forEach(function (view) {
  view.addEventListener("click", function () {
    if (view.id === "game-view") {
      selectedGameSection.style.display = "block";
      selectedVideoSection.style.display = "none";
      selectedPhotoSection.style.display = "none";
    } else if (view.id === "video-view") {
      selectedGameSection.style.display = "none";
      selectedVideoSection.style.display = "block";
      selectedPhotoSection.style.display = "none";
    } else if (view.id === "photo-view") {
      selectedGameSection.style.display = "none";
      selectedVideoSection.style.display = "none";
      selectedPhotoSection.style.display = "block";
    }
  });
});
