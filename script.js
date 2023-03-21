const form = document.getElementById("form");
const gender = document.getElementById("gender");
var fFeild = document.getElementById("F-feild");
var flable = document.getElementById("f-label");
var ferror = document.getElementById("f-error");
var lFeild = document.getElementById("L-feild");
var llable = document.getElementById("L-label");
var lerror = document.getElementById("L-error");
var emailFeild = document.getElementById("email-feild");
var emaillable = document.getElementById("email-lable");
var emailerror = document.getElementById("email-error");
var pFeild = document.getElementById("p-feild");
var plable = document.getElementById("p-label");
var perror = document.getElementById("phone-error");
var addFeild = document.getElementById("add-felid");
var addlabel = document.getElementById("add-label");
var adderror = document.getElementById("add-error");
var selectFeild = document.getElementById("select-felid");
var selectlabel = document.getElementById("select-label");
var selecterror = document.getElementById("select-error");
var pinFeild = document.getElementById("pin-feild");
var pinlable = document.getElementById("pin-lable");
var pinerror = document.getElementById("pin-error");
var disFeild = document.getElementById("dis-feild");
var dislable = document.getElementById("dis-label");
var diserror = document.getElementById("dis-error");


function validatefname() {
    if ((fFeild.value.length < 3) || (fFeild.value.length > 10)) {
        ferror.innerHTML = "Enter 3 to 10 letters";
        fFeild.style.borderColor = "red";
        return false;
    }

    ferror.innerHTML = " ";
    fFeild.style.borderColor = "green";
    return true;
}
function validatelname() {
    if ((lFeild.value.length = "") || (lFeild.value.length < 1) || (lFeild.value.length > 5)) {
        lerror.innerHTML = "Enter 1 to 5 letters";
        lFeild.style.borderColor = "red";
        return false;
    }
    lerror.innerHTML = "";
    lFeild.style.borderColor = "green";
    return true;
}
function validateEmail() {
    if (!emailFeild.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailerror.innerHTML = "please enter a email";
        emailFeild.style.borderColor = "red";
        return false;
    }
    emailerror.innerHTML = " ";
    emailFeild.style.borderColor = "green";
    return true;
}
function validatephone() {
    if ((pFeild.value.length > 10) || (pFeild.value.length < 10)) {
        perror.innerHTML = "Enter mobile number";
        pFeild.style.borderColor = "red";
        return false;
    }
    perror.innerHTML = " ";
    pFeild.style.borderColor = "green";
    return true;
}
function validateaddress() {
    if (!addFeild.value.match(/^[A-Z a-z 0-9 .]*$/)) {
        adderror.innerHTML = "Don't use special char";
        addFeild.style.borderColor = "red";
        return false;
    }
    adderror.innerHTML = "";
    addFeild.style.borderColor = "green";
    return true;
}
function validateselect(){
    if (selectFeild.value == "-1") {
        selecterror.innerHTML = "select state";
        selectFeild.style.borderColor = "red";
        return false;
    }
    selecterror.innerHTML = " ";
    selectFeild.style.borderColor = "green";
    return true;
}


function validatepin() {
    if ((pinFeild.value.length > 6) || (pinFeild.value.length > 6)) {
        pinerror.innerHTML = "Enter 6 digits";
        pinFeild.style.borderColor = "red";
        return false;
    }
    pinerror.innerHTML = "";
    pinFeild.style.borderColor = "green";
    return true;
}
function validatedis() {
    if (!isNaN(disFeild.value)) {
        diserror.innerHTML = "Enter only alpha";
        disFeild.style.borderColor = "red";
        return false;
    }
    diserror.innerHTML = "";
    disFeild.style.borderColor = "green";
    return true;
}



form.addEventListener('submit', e => {
    e.preventDefault();
    checkinput();
});
function checkinput() {
    const fristname = fFeild.value.trim();
    const Lnamevalue = lFeild.value.trim();
    const emailvalue = emailFeild.value.trim();
    const phonevalue = pFeild.value.trim();
    const gendervalue = document.formmy.gender.value;
    const addressvalue = addFeild.value.trim();
    const selectvalue = selectFeild.value.trim();
    const pincodevalue = pinFeild.value.trim();
    const disvalue = disFeild.value.trim();

    var gender = form.querySelectorAll('input[name="gender"]:checked');
    if (!gender.length) {
        alert('select Gender');
        return false;
    }
    var checkboxes =
        document.getElementsByName('checkd');

    var langu = "";
    var n = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            langu += checkboxes[i].value + "" + " ";
            n++;
        }
    }
    if (n == 0) {
        alert('select language');
        return false;
    }
    document.write("Frist Name:" + fristname + "<br>");
    document.write("Last Name:" + Lnamevalue + "<br>");
    document.write("Email id:" + emailvalue + "<br>");
    document.write("Phone Number:" + phonevalue + "<br>");
    document.write("Gender:" + gendervalue + "<br>");
    document.write("Address:" + addressvalue + "<br>");
    document.write("State:" + selectvalue + "<br>");
    document.write("Language:" + langu + "<br>");
    document.write("Pincode:" + pincodevalue + "<br>");
    document.write("District:" + disvalue + "<br>");
}
