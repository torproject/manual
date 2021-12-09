$(".downloadLink").click(
    function(e) {
        e.preventDefault();

        locale = window.location.href.split('/')[3];
        //open download link in new page
        window.open( $(this).attr("href") );
        url = "/thank-you/"
        //redirect current page to success page
        if (locale != "download") {
          url = "/" + locale + url
        }
        window.location=url;
        window.focus();
    }
);
