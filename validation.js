// validation script here

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});

//validation function

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    telephone: /^\d{11}$/,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};



