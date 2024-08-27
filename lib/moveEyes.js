function moveEyes(event) {
  const eye1 = document.getElementById('eye1');
  const pupil1 = document.getElementById('pupil1');
  const eye2 = document.getElementById('eye2');
  const pupil2 = document.getElementById('pupil2');

  let x1 = event.clientX - eye1.offsetLeft;
  let y1 = event.clientY - eye1.offsetTop;
  let x2 = event.clientX - eye2.offsetLeft;
  let y2 = event.clientY - eye2.offsetTop;

  if (x1 < 0) x1 = 0;
  if (y1 < 0) y1 = 0;

  if (x1 > (eye1.offsetWidth - pupil1.offsetWidth)) x1 = eye1.offsetWidth - pupil1.offsetWidth;
  if (y1 > (eye1.offsetHeight - pupil1.offsetHeight)) y1 = eye1.offsetHeight - pupil1.offsetHeight;

  if (x2 < 0) x2 = 0;
  if (y2 < 0) y2 = 0;
  if (x2 > (eye2.offsetWidth - pupil2.offsetWidth)) x2 = eye2.offsetWidth - pupil2.offsetWidth;
  if (y2 > (eye2.offsetWidth - pupil2.offsetWidth)) y2 = eye2.offsetHeight - pupil2.offsetHeight;

  pupil1.style.setProperty('--x', `${x1}px`)
  pupil1.style.setProperty('--y', `${y1}px`)
  pupil2.style.setProperty('--x', `${x2}px`)
  pupil2.style.setProperty('--y', `${y2}px`)

}

export default moveEyes;