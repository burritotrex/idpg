document.querySelectorAll('.service').forEach(input => {
    input.addEventListener('change', () => {
        let total = [...document.querySelectorAll('.service:checked')]
                     .reduce((sum, el) => sum + Number(el.value), 0);
        document.getElementById('total').textContent = total;
    });
});
