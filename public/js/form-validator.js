const form = document.querySelector('form');

const validationControls = form.querySelectorAll('[data-validations]');

let errorsCount = 0;

const registerValidations = validations => event => {
    const value = event.target.value;
    const parent = event.target.parentNode;
    const error = parent.querySelector('.error');
    const validation = validations.find(({ regexp }) => !regexp.test(value));
    if(!error) return;
    if(validation) error.textContent = validation.message
    else error.textContent = '';
};

validationControls.forEach(control => {
    const validationAttribute = control.getAttribute('data-validations');
    const validations = validationAttribute
        .split(',')
        .map(validation => validation.trim())
        .map(validation => {
            const regexp = control.getAttribute(`data-validation-${validation}`);
            const message = control.getAttribute(`data-validation-${validation}-message`);
            return {
                regexp: new RegExp(regexp),
                message
            };
        });

    const error = document.createElement('span');
    error.classList.add('error');
    control.parentNode.insertBefore(error, control.nextSibling);
    
    control.addEventListener("keyup", registerValidations(validations));
    control.addEventListener("change", registerValidations(validations));
});