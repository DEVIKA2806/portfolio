function openProject(el) {
  const projects = document.querySelectorAll('.project');
  const container = document.querySelector('.projects-content');

  // 👉 if same project clicked again → reset
  if (el.classList.contains('active')) {
    closeProject({ stopPropagation: () => {} });
    return;
  }

  container.classList.add('active');

  projects.forEach(p => {
    p.classList.remove('active');

    if (p !== el) {
      p.classList.add('hidden');   // hide others
    }
  });

  el.classList.remove('hidden');
  el.classList.add('active');
}

function closeProject(e) {
  e.stopPropagation();

  const projects = document.querySelectorAll('.project');
  const container = document.querySelector('.projects-content');

  container.classList.remove('active');

  projects.forEach(p => {
    p.classList.remove('active', 'hidden');
  });
}

function openModal() {
  document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}