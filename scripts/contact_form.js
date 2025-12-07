document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactFormElement')
    const success = document.getElementById('successMessage')

    success.style.display = 'none'

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        const name = document.getElementById('name').value.trim()
        const email = document.getElementById('email').value.trim()
        const message = document.getElementById('message').value.trim()

        document.getElementById('nameError').textContent = ''
        document.getElementById('emailError').textContent = ''
        document.getElementById('messageError').textContent = ''

        let isValid = true

        if (name === '') {
            document.getElementById('nameError').textContent = 'Lūdzu, ievadiet vārdu'
            isValid = false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (email === '' || !emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Lūdzu, ievadiet derīgu e-pasta adresi'
            isValid = false
        }

        if (message === '') {
            document.getElementById('messageError').textContent = 'Lūdzu, ievadiet ziņojumu'
            isValid = false
        }

        if (isValid) {
            form.style.display = 'none'
            success.style.display = 'flex'

            setTimeout(() => {
                form.reset();
                form.style.display = 'block'
                success.style.display = 'none'
            }, 3000);
        }
    })
})