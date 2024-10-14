class ProjectWindow extends HTMLElement
{
  connectedCallback()
    {
    this.innerHTML = `
    <div class="top-border">
      <div class="window-name window-name-selected">
        <div class="unicode-container unicode-character">&#128193;</div>
        <div class="text-container">Projects</div>
        <div class="spacer"></div>
      </div>
    </div>

    <div class="projects">
      <div class="project">
        <a href="pong.html"><img src="img/folder.png" alt="Pong"></a>
        <div class="project-title">Pong</div>
      </div>
      <div class="project">
        <a href="tank.html"><img src="img/folder.png" alt="Tank Wars"></a>
        <div class="project-title">Tank Wars</div>
      </div>
      <div class="project">
        <a href="mlagents.html"><img src="img/folder.png" alt="ML Agents"></a>
        <div class="project-title">ML Agents</div>
      </div>
        <div class="project">
        <a href="multiplayer.html"><img src="img/folder.png" alt="Multiplayer"></a>
        <div class="project-title">Multiplayer</div>
      </div>
      <div class="project">
        <a href="roomgen.html"><img src="img/folder.png" alt="Image Description"></a>
        <div class="project-title">Gen project</div>
      </div>
      <div class="project">
        <a href="other.html"><img src="img/folder.png" alt="Other"></a>
        <div class="project-title">Other</div>
      </div>
      <div class="project">
        <a href="blender.html"><img src="img/folder.png" alt="Blender"></a>
        <div class="project-title">Blender</div>
      </div>
    </div>

    <div class="window-bar"></div>
  `
  }
}

class SocialWindow extends HTMLElement
{
  connectedCallback()
    {
    this.innerHTML = `
    <div class="left-bar"></div>
    <div class="top-border">
      <div class="window-name window-name-selected">
        <div class="unicode-container unicode-character">&#128279;</div>
        <div class="text-container">Social</div>
        <div class="spacer"></div>
      </div>
    </div>
    <div class="social-links">
      <div class="social-link">
        <a target="_blank" href="https://github.com/wbvanderbroek"><img src="img/github-mark-white.png" alt="Image Description"></a>
      </div>
      <div class="social-link">
        <a target="_blank" href="https://www.linkedin.com/in/walter-van-der-broek/"><img src="img/linkedin-app-white-icon.png" alt="Image Description"></a>
      </div>
      <div class="social-link">Email: waltervanderbroek@gmail.com</div>
      <div class="social-link">Tel: 06 23344404</div>
      <div class="social-link"><a href="cv/cv-nl.pdf"><i class="fa-regular fa-file"></i></i> <br>CV NL</a></div>
      <div class="social-link"><a href="cv/cv-eng.pdf"><i class="fa-regular fa-file"></i></i> <br>CV ENG</a></div>
    </div>
  `
  }
}

class TopBarWindowRight extends HTMLElement
{
  connectedCallback()
    {
    this.innerHTML = `
    <div class="window-name window-name-selected">
      <div class="unicode-container unicode-character">&#128712;</div>
      <div class="text-container">Info</div>
      <div class="spacer"></div>
    </div>
  `
  }
}

class TopBarSelectedGame extends HTMLElement
{
  connectedCallback()
    {
    this.innerHTML = `
    <div id="game-view" class="window-name window-name-selected">
      <div class="unicode-container unicode-character">&#127918;</div>
      <div class="text-container">Game</div>
      <div class="spacer"></div>
    </div>
    <div id="video-view" class="window-name window-name-unselected">
      <div class="unicode-container unicode-character">&#x1F4F9;</div>
      <div class="text-container">Video</div>
      <div class="spacer"></div>
    </div>
    <div id="photo-view" class="window-name window-name-unselected">
      <div class="unicode-container unicode-character">&#128247;</div>
      <div class="text-container">Photo</div>
      <div class="spacer"></div>
    </div>
  `
  }
}

class TopBarSelectedVideo extends HTMLElement
{
  connectedCallback()
    {
    this.innerHTML = `
      <div id="game-view" class="window-name window-name-unselected">
        <div class="unicode-container unicode-character">&#127918;</div>
        <div class="text-container">Game</div>
        <div class="spacer"></div>
      </div>
      <div id="video-view" id="video-view" class="window-name window-name-selected">
        <div class="unicode-container unicode-character">&#x1F4F9;</div>
        <div class="text-container">Video</div>
        <div class="spacer"></div>
      </div>
      <div id="photo-view" class="window-name window-name-unselected">
        <div class="unicode-container unicode-character">&#128247;</div>
        <div class="text-container">Photo</div>
        <div class="spacer"></div>
      </div>
  `
  }
}

class TopBarSelectedPhoto extends HTMLElement
{
  connectedCallback()
    {
    this.innerHTML = `
    <div id="game-view" class="window-name window-name-unselected">
      <div class="unicode-container unicode-character">&#127918;</div>
      <div class="text-container">Game</div>
      <div class="spacer"></div>
    </div>
    <div id="video-view" class="window-name window-name-unselected">
      <div class="unicode-container unicode-character">&#x1F4F9;</div>
      <div class="text-container">Video</div>
      <div class="spacer"></div>
    </div>
    <div id="photo-view" class="window-name window-name-selected">
      <div class="unicode-container unicode-character">&#128247;</div>
      <div class="text-container">Photo</div>
      <div class="spacer"></div>
    </div>
  `
  }
}

class CustomHeader extends HTMLElement
{
  connectedCallback()
    {
    this.innerHTML = `
    <nav>
      <a href="index.html" class="brand">Walter van der Broek</a>
    </nav> 
  `
  }
}

customElements.define('project-window', ProjectWindow);
customElements.define('social-window', SocialWindow);
customElements.define('top-bar-window-right', TopBarWindowRight);
customElements.define('top-bar-selected-game', TopBarSelectedGame);
customElements.define('top-bar-selected-video', TopBarSelectedVideo);
customElements.define('top-bar-selected-photo', TopBarSelectedPhoto);
customElements.define('custom-header', CustomHeader);