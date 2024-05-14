// < !-- / ------------------- form validation------------------------------ -->
function validateForm() {
    event.preventDefault();
    var firstName = document.getElementById('firstname').value.trim();
    var lastName = document.getElementById('lastname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var isValid = true;
    if (isValid) {
        clearForm();
        openPopup();
    }
    return isValid;
}

function openPopup() {
    Swal.fire({
        icon: 'success',
        title: 'Form submitted successfully!',
        showConfirmButton: false,
        timer: 1500
    });
}
function clearForm() {
    document.getElementById('myForm').reset();
}

//   < !-- ===================== invest form ===================== -->
function investvalidateForm() {
    event.preventDefault(); // Prevent default form submission

    var firstName = document.getElementById('first_name').value.trim();
    var lastName = document.getElementById('last_name').value.trim();
    var email = document.getElementById('user_email').value.trim();
    var phone = document.getElementById('user_phone').value.trim();

    var isValid = true;

    // Validation logic...

    if (isValid) {
        clearInvestForm();
        openPopup();
    }

    return isValid;
}

function openPopup() {
    Swal.fire({
        icon: 'success',
        title: 'Form submitted successfully!',
        showConfirmButton: false,
        timer: 1500
    });
}
function clearInvestForm() {
    document.getElementById('investForm').reset(); // Reset the form fields
}

// -------------------ai-stocks forms-------------------
function NvidiavalidateForm() {
    event.preventDefault(); // Prevent default form submission
    var firstName = document.getElementById('first_name_nvidia').value.trim();
    var lastName = document.getElementById('last_name_nvidia').value.trim();
    var email = document.getElementById('user_email_nvidia').value.trim();
    var phone = document.getElementById('user_phone_nvidia').value.trim();

    var isValid = true;
    if (isValid) {
        clearNvidiaForm();
        openPopup();
    }
    return isValid;
}

function openPopup() {
    Swal.fire({
        icon: 'success',
        title: 'Form submitted successfully!',
        showConfirmButton: false,
        timer: 1500
    });
}
function clearNvidiaForm() {
    document.getElementById('nvidiaForm').reset();
}
// -----------------------------microsoft-----------------------------
function microvalidateForm() {
    event.preventDefault(); // Prevent default form submission
    var firstName = document.getElementById('first_name_micro').value.trim();
    var lastName = document.getElementById('last_name_micro').value.trim();
    var email = document.getElementById('user_email_micro').value.trim();
    var phone = document.getElementById('user_phone_micro').value.trim();

    var isValid = true;
    if (isValid) {
        clearMicroForm();
        openPopup();
    }
    return isValid;
}

function openPopup() {
    Swal.fire({
        icon: 'success',
        title: 'Form submitted successfully!',
        showConfirmButton: false,
        timer: 1500
    });
}
function clearMicroForm() {
    document.getElementById('microForm').reset();
}
// -----------------------------amozne-----------------------------
function amazonvalidateForm() {
    event.preventDefault(); // Prevent default form submission
    var firstName = document.getElementById('first_name_aws').value.trim();
    var lastName = document.getElementById('last_name_aws').value.trim();
    var email = document.getElementById('user_email_aws').value.trim();
    var phone = document.getElementById('user_phone_aws').value.trim();

    var isValid = true;
    if (isValid) {
        clearAmazonForm();
        openPopup();
    }
    return isValid;
}

function openPopup() {
    Swal.fire({
        icon: 'success',
        title: 'Form submitted successfully!',
        showConfirmButton: false,
        timer: 1500
    });
}
function clearAmazonForm() {
    document.getElementById('amazonForm').reset();
}
// -----------------------------------Palantir-----------------------------------
function ailidateForm() {
    event.preventDefault(); // Prevent default form submission
    var firstName = document.getElementById('first_name_ai').value.trim();
    var lastName = document.getElementById('last_name_ai').value.trim();
    var email = document.getElementById('user_email_ai').value.trim();
    var phone = document.getElementById('user_phone_ai').value.trim();

    var isValid = true;
    if (isValid) {
        clearAiForm();
        openPopup();
    }
    return isValid;
}

function openPopup() {
    Swal.fire({
        icon: 'success',
        title: 'Form submitted successfully!',
        showConfirmButton: false,
        timer: 1500
    });
}
function clearAiForm() {
    document.getElementById('aiForm').reset();
}
// ------------------------------------Crowd------------------------------------
function crowdvalidateForm() {
    event.preventDefault(); // Prevent default form submission
    var firstName = document.getElementById('first_name_crowd').value.trim();
    var lastName = document.getElementById('last_name_crowd').value.trim();
    var email = document.getElementById('user_email_crowd').value.trim();
    var phone = document.getElementById('user_phone_crowd').value.trim();

    var isValid = true;
    if (isValid) {
        clearCrowdForm();
        openPopup();
    }
    return isValid;
}

function openPopup() {
    Swal.fire({
        icon: 'success',
        title: 'Form submitted successfully!',
        showConfirmButton: false,
        timer: 1500
    });
}
function clearCrowdForm() {
    document.getElementById('crowdForm').reset();
}
// ------------------------------------UI Path ------------------------------------
function pathvalidateForm() {
    event.preventDefault(); // Prevent default form submission
    var firstName = document.getElementById('first_name_path').value.trim();
    var lastName = document.getElementById('last_name_path').value.trim();
    var email = document.getElementById('user_email_path').value.trim();
    var phone = document.getElementById('user_phone_path').value.trim();

    var isValid = true;
    if (isValid) {
        clearPathForm();
        openPopup();
    }
    return isValid;
}

function openPopup() {
    Swal.fire({
        icon: 'success',
        title: 'Form submitted successfully!',
        showConfirmButton: false,
        timer: 1500
    });
}
function clearpathForm() {
    document.getElementById('pathForm').reset();
}
// ----------------------------------------Arista----------------------------------------
function aristavalidateForm() {
    event.preventDefault(); // Prevent default form submission
    var firstName = document.getElementById('first_name_arista').value.trim();
    var lastName = document.getElementById('last_name_arista').value.trim();
    var email = document.getElementById('user_email_arista').value.trim();
    var phone = document.getElementById('user_phone_arista').value.trim();

    var isValid = true;
    if (isValid) {
        clearAristaForm();
        openPopup();
    }
    return isValid;
}

function openPopup() {
    Swal.fire({
        icon: 'success',
        title: 'Form submitted successfully!',
        showConfirmButton: false,
        timer: 1500
    });
}
function clearAristaForm() {
    document.getElementById('aristaForm').reset();
}