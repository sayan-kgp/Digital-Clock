const updateClock = () => {
    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Add leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time in HH:MM:SS AM/PM format
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').innerText = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();