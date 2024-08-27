function moveEyes(event) {
  const eye1 = document.getElementById('eye1');
  const pupil1 = document.getElementById('pupil1');
  const eye2 = document.getElementById('eye2');
  const pupil2 = document.getElementById('pupil2');

  // Center of each eye
  const rect1 = eye1.getBoundingClientRect();
  const rect2 = eye2.getBoundingClientRect();
  const eyeCenter1 = {
    x: rect1.left + rect1.width / 2,
    y: rect1.top + rect1.height / 2
  };
  const eyeCenter2 = {
    x: rect2.left + rect2.width / 2,
    y: rect2.top + rect2.height / 2
  };

  // Calculate distance from center
  const dx1 = event.clientX - eyeCenter1.x;
  const dy1 = event.clientY - eyeCenter1.y;
  const dx2 = event.clientX - eyeCenter2.x;
  const dy2 = event.clientY - eyeCenter2.y;

  // Radius limits to ensure the pupil stays within the eye
  const maxRadius = (eye1.offsetWidth - pupil1.offsetWidth) / 2;

  // Limit the movement by max radius
  const angle1 = Math.atan2(dy1, dx1);
  const distance1 = Math.min(maxRadius, Math.hypot(dx1, dy1));
  const x1 = distance1 * Math.cos(angle1);
  const y1 = distance1 * Math.sin(angle1);

  const angle2 = Math.atan2(dy2, dx2);
  const distance2 = Math.min(maxRadius, Math.hypot(dx2, dy2));
  const x2 = distance2 * Math.cos(angle2);
  const y2 = distance2 * Math.sin(angle2);

  // Set the position of the pupils
  pupil1.style.transform = `translate(${x1}px, ${y1}px)`;
  pupil2.style.transform = `translate(${x2}px, ${y2}px)`;
}

export default moveEyes;
