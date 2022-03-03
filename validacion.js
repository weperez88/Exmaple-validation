<script>
    (function() {
        const myform = document.querySelector('#form_orden');
        myform.noValidate = true;
        myform.addEventListener('submit', validateForm);
    }());

    function validateForm(e) {
        const form = e.target;
        const field = Array.from(form.elements);

        field.forEach(i => {
            if (i.checkValidity()) {
                i.parentElement.classList.remove('invalid');
            } else {
                i.parentElement.classList.add('invalid');
            }
        });

        var payment_method;
        var radios = document.getElementsByName('checkPayment');
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                payment_method = radios[i].value;
                break;
            }
        }

        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }
</script>