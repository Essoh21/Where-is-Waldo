function formatTime(timeInMilliseconds) {
    const minutes = Math.floor(timeInMilliseconds / 60000);
    const seconds = ((timeInMilliseconds % 60000) / 1000).toFixed(0).padStart(2, '0');
    const milliseconds = (timeInMilliseconds % 1000).toFixed(0).padStart(3, '0');
    return `${minutes}min:${seconds}s:${milliseconds}ms`;
}

export default formatTime;