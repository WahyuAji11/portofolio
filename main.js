function toggleDetail(e) {
    const target = $(e.target);

    if($(target).hasClass("active")) {
        $(target).html("Moore Info").removeClass("active")
    } else {
        $(target).html("Less info").addClass("active")
    }


    const item = target.closest(".about-exp-item");
    const detail = item.find(".about-exp-item-detail");

    detail.slideToggle();
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")
    
    if(!$(email).val()) {
        alert("Email is required")
    } else if(!$(subject).val()) {
        alert("Subject is required")
    } else if(!$(message).val()) {
        alert("Message is required")
    } else {
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }

    event.preventDefault();
}

function openEmailClient() {
    const destinationEmail = "zerostudio2001@gmail.com";
    const subject = document.getElementById("inp_subject").value;
    const message = document.getElementById("inp_message").value;

    // Compose the email link with the destination email, subject, and message
    const mailtoLink = `mailto:${destinationEmail}?subject=${subject}&body=${message}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
}
