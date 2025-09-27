window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(location.search);
    const region = params.get('region');

    if (region === 'japan') {
        document.getElementById('japan').checked = true;
    }
});
