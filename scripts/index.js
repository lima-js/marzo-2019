const social = container => {
  [...container.children].forEach(child => {
    fetch('assets/images/' + child.className + '.svg')
      .then(response => response.text())
      .then(svg => { child.innerHTML = svg });
  });
};

const main = () => {
  social(document.querySelector('.social'));
};

window.addEventListener('load', main);
