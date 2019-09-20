# AMP Form Validations

### Running

```
npm install
npm run dev
```

### Usage

The idea is put validations in every input like this:

```pug
input(
	name="name",
    data-validations="required",
    data-validation-required="\\S+",
    data-validation-required-message="this field is required"
)
```

Every Validation goes in `data-validations` attribute, comma separated. then, for each validation, must add 2 attributes `data-validation-VALIDATION` and `data-validation-VALIDATION-message`, where `VALIDATION` is in `data-validations`.

You can see more in `views/pages/contact.pug`, where are the form controls with validations.
And `public/js/form-validator.js` file, to see how validation works.