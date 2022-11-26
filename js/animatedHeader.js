(function () {
  
    var headerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.previousElementSibling.classList.add('header-animation');
          // return;
        }
        // entry.target.previousElementSibling.classList.remove('header-animation');
      });
    });
  
    const arrAnimatedHeader = document.querySelectorAll('.animated-header')
  
    arrAnimatedHeader.forEach(i => {
        headerObserver.observe(i)})

  })();


