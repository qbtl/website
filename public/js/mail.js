function send() {
    var link = 'mailto:q.boitel2002@google.com?from=' + document.getElementById('email').value +
        '&subject=Message from ' +
        document.getElementById('nom').value + ' (' + document.getElementById("email").value + ')' +
        '&body=' + document.getElementById('sujet').value;
    window.location.href = link;
}