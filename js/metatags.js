function addMetaTags() {
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "Programming, Programmer, C#, Java, HTML, CSS, JS, JavaScript, Python, Developer, Software, Software Developer, Unity, Game Developer, Game development, Blender, 3D Modeling, Unity3D, Game, Game Engine, Game Design, Git, GitHub, Android Studio, Visual Studio, Meta Quest, XR, AR, VR, Bluetooth, Multiplayer, Multiplayer Games, Intership, Intern";
    
    const metaAuthor = document.createElement('meta');
    metaAuthor.name = "author";
    metaAuthor.content = "Walter van der Broek";

    document.head.appendChild(metaKeywords);
    document.head.appendChild(metaAuthor);
  }

  window.addEventListener('DOMContentLoaded', addMetaTags);