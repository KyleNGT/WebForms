$(document).ready(function(){
    $("#btn-submit").click(function(event) {    // Working!
        event.preventDefault();     // Prevents the default submit action

        // Declarations
        var contactNumber = $("#contact-input").val().trim();
        var shortBio = $("#bio-input").val().trim();
        var countryVal = $("#country").val();
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var email = $("#email-input").val().trim()

        //These array serves as a list of all user inputs and labels for validation
        var inputList = ["#name-input", "#age-input", "#guardian-input", 
            "#email-input", "#contact-input", "#address-input", "#bio-input"];
        var labelList = ["Full Name", "Birth Date", "Guardian", "E-mail", "Contact",
             "Address", "Short Bio"];
        var formList = ["#name-error", "#age-error", "#guardian-error",
            "#email-error", "#contact-error", "#address-error", "#bio-error"];

        // Specialized error-detection
        (contactNumber.length != 11) ? $("#contact-error").html("*" + "Contact number must be 11 digits.") : null;
        (shortBio.length < 20) ? $("#bio-error").html("*" + "Short Bio must be at least 20 characters."): null;
        (countryVal == 0) ? $("#country-error").html("*" + "No country selected.") : null;
        (!testEmail.test(email)) ? $("#email-error").html("*" + "Enter a valid email.") : null;
        
        // General error-detection
        for (let i = 0; i < inputList.length; i++) {
            if (($(inputList[i]).val() === "") || ($(inputList[i]).val().trim().length === 0)) {
                $(formList[i]).html("*" + labelList[i] + " should not be empty.");
            }
            
        }
    });
    
    $("#btn-reset").click(function(event) {
        $('#bio-form').trigger("reset");
    });
    $("#birthdate-input").on( "change", function(){ // In Progress
        
        var dob = $('#birthdate-input').val();  // Store DatePicker value as dob
        dob = new Date(dob);    // Convert to Date object
        var today = new Date(); 
        var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000)); // age formula
        
        $("#age-input").val(age);   // Display age in age textbox

        // Show guardian form if the age < 18.
        (age < 18) ? $(".guardian-form").show() : $(".guardian-form").hide();
    });

    $('input[name="gender"]').change(function() {
        $('#other').prop('checked') ? $("#other-form").show() : $("#other-form").hide();
    });
});

