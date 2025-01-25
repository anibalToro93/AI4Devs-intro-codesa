function reverseString() {
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('result').innerText = reversed;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reverseForm').addEventListener('submit', (event) => {
        event.preventDefault();
        reverseString();
    });
});