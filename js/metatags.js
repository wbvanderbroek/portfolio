function addMetaTags() {
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "Programming, Programmer, C#, Java, HTML, CSS, JS, JavaScript, Python, Developer, Software, Software Developer, Unity, Game Developer, Game development, Blender, 3D Modeling, Unity3D, Game, Game Engine, Game Design, Git, GitHub, Android Studio, Visual Studio, Meta Quest, XR, AR, VR, Bluetooth, Multiplayer, Multiplayer Games, Intership, Intern";
    
    const metaAuthor = document.createElement('meta');
    metaAuthor.name = "author";
    metaAuthor.content = "Walter van der Broek";

    const favIcon = document.createElement('link');
    favIcon.setAttribute('rel', 'icon');
    favIcon.type = "image/png";
    favIcon.href = "./img/favicon.png"

    // Open Graph Title
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = "Walter van der Broek - Software Developer Portfolio";

    // Open Graph Description
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = "Portfolio of Walter van der Broek, a passionate software developer specializing in game development, Unity and C#.";

    // Open Graph Image
    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = "./img/mountainss.png";

    // Open Graph Type
    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = "website";


    document.head.appendChild(metaKeywords);
    document.head.appendChild(metaAuthor);
    document.head.appendChild(favIcon);

    document.head.appendChild(ogTitle);
    document.head.appendChild(ogDescription);
    document.head.appendChild(ogImage);
    document.head.appendChild(ogType); 
  }

  window.addEventListener('DOMContentLoaded', addMetaTags);