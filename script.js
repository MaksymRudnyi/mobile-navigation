document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.target-burger').addEventListener('click', () => {
        document.querySelector('body').classList.toggle('toggled');
    })
})