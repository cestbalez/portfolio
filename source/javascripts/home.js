function fadeOutHome() {
  // Defining variables
  let homeOne = document.querySelectorAll('.home-1');
  const buttonOne = document.querySelector('.home-next.home-1');
  let homeTwo = document.querySelectorAll('.home-2');
  const buttonTwo = document.querySelector('.home-next.home-2');
  const codeLanguages = document.querySelectorAll('.code-languages');
  const classNames = ['deg360', 'deg180', 'deg225', 'deg270', 'deg315'];
  const stepSize = 0.025;

  // Initializing eventListener function
  buttonOne.addEventListener('click', (event) => {
  // Add class to start animation
  console.log(codeLanguages);
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
