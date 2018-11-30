function fadeOutHome() {
  // Defining variables
  let homeOne = document.querySelectorAll('.home-1');
  const buttonOne = document.querySelector('.home-next.home-1');
  let homeTwo = document.querySelectorAll('.home-2');
  const buttonTwo = document.querySelector('.home-next.home-2');
  const codeLanguages = document.querySelectorAll('.code-languages');
  const classNames = ['deg360', 'deg180', 'deg225', 'deg270', 'deg315'];
  const stepSize = 0.025;

  // Initializing eventListener function for first button
  buttonOne.addEventListener('click', (event) => {
  // Add class to start animation
    codeLanguages.forEach(function(e, i) {
      e.classList.add(classNames[i]);
    });
    buttonTwo.classList.remove('hidden');
    event.preventDefault();
  // Animate with interval
    setInterval(function() {
  // Animate out buttons and text
      homeOne.forEach(function(e) {
        if (!e.style.opacity) {
          e.style.opacity = 1;
        } else if (e.style.opacity > 0) {
          e.style.opacity -= stepSize;
        }
      });
  // Animate in button and text
      if (homeOne[0].style.opacity < 0.5) {
        homeTwo.forEach(function(e) {
          if (e.style.opacity < 1) {
            e.style.opacity = (Number(e.style.opacity) + stepSize);
          }
        });
      }
    }, 50);
  });
}

function toBackground() {
  const buttonTwo = document.querySelector('.home-next.home-2');
  const home = document.getElementById('home');
  const background = document.getElementById('background');
  const backgroundBox = document.querySelectorAll('.background-box');
  const backgroundContent = document.querySelectorAll('.background-box-content')
  buttonTwo.addEventListener('click', (event) => {
    event.preventDefault();
    background.classList.remove('hidden');
    home.classList.add('opacity0');
    setTimeout(function() {
      background.classList.add('opacity1');

      backgroundBox.forEach(function(e) {
        e.classList.add('box-height');
      });
    }, 500);
    setTimeout(function() {
      backgroundContent.forEach(function(e) {
        e.classList.remove('hidden');
        setTimeout(function() {
          e.classList.remove('opacity0')
        }, 100);
      });
      home.classList.add('hidden');
    }, 2500);
  });
}

function fromBackground() {
  console.log('background');
  const backgroundBox = document.querySelectorAll('.background-box');
  const backgroundContent = document.querySelectorAll('.background-box-content');
  const buttonThree = document.querySelector('.background .home-next');
  const buttonFour = document.querySelector('.contact.home-next');
  const projectContent = document.querySelectorAll('.project-content');
  buttonThree.addEventListener('click', (event) => {
    event.preventDefault();
    setTimeout(function() {
      backgroundBox.forEach(function(e) {
        e.classList.add('box-height-2');
      });
    }, 1750);
    backgroundContent.forEach(function(e) {
      e.classList.add('opacity-transition', 'opacity0');
      setTimeout(function() {
        e.classList.add('hidden');
      }, 2500);
    });
    setTimeout(function() {
      projectContent.forEach(function(e) {
        e.classList.remove('hidden');
        setTimeout(function() {
          e.classList.remove('opacity0')
        }, 100);
      });
    }, 4000);
    buttonThree.classList.add('opacity-transition', 'opacity0');
    setTimeout(function() {
    buttonFour.classList.add('opacity1');
    }, 1500);
    buttonFour.classList.remove('hidden');
  });
}

function fromProjects() {
  const buttonFour = document.querySelector('.contact.home-next');
  const backgroundDiv = document.querySelector('#background');
  const contactDiv = document.querySelector('#contact');
  buttonFour.addEventListener('click', (event) => {
    event.preventDefault();
    backgroundDiv.classList.add('opacity-transition', 'opacity0');
    backgroundDiv.classList.remove('opacity1');
    setTimeout(function() {
        backgroundDiv.classList.add('hidden')
      }, 3000);
    contactDiv.classList.remove('hidden');
    setTimeout(function() {
      contactDiv.classList.add('opacity-transition', 'opacity1');
      // contactDiv.classList.remove('opacity0');
    }, 2000);
  });
}
