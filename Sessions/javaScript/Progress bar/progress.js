let percentage = parseInt(prompt('What is the progress:'));
if (isNaN(percentage) || percentage < 0 || percentage > 100)
    throw new Error('Invalid Percentage!');

let color;
if (percentage <= 20)
    color = 'darkred';
else if (percentage <= 50)
    color = 'orange';
else
    color = 'green';

let progressBar = document.getElementById('bar');
progressBar.style.backgroundColor = color;
progressBar.style.width = `${percentage}%`;