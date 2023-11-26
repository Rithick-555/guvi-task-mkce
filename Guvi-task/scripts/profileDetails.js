$(document).ready(function () {
    $.ajax({
        url: 'profile1.php',
        method: 'post',
        dataType: 'json',
        success: function (data) {
            let string = '';
            $.each(data, function (key, value) {
                string += `
                <span class="font-weight-bold">Username: </span>${value['user_name']}<br><br>
                <span class="font-weight-bold">Email: </span>${value['user_email']}<br><br>
                <span class="font-weight-bold">Date of Birth: </span>${value['user_dob']}`;

            });
            $('#Append').append(string);
        },
        error: {
        }
    });
});
    if (localStorage.email) {
        document.getElementById('Welcome').innerHTML += " Logged in as " + localStorage.getItem('email');
        $('#Logout').append(`<a class="btn btn-warning btn-sm" href="logout.php" role="button" onclick="localStorage.clear();">Logout</a>`);
        $('#GoBack').append(`<a class="btn btn-secondary btn-sm" href="loggedin.php" role="button">Go Back</a>`);
    }else {
    document.getElementById('WelcomeN').innerHTML += " Please do Login ";
    $('#Login').append(`<a class="btn btn-primary btn-sm" href="login.php" role="button">Login</a>`);
}