jQuery(document).ready(function($){
    window.owner_name = "Eitan Wagner";

    var path = window.location.pathname;

    // Root-level pages (index.html or "/") get the full navbar; pages under /projects/ get the smaller one
    if (path.indexOf('/projects/') === -1){
        //    Navbar
        $.get("elements/nav.html", function(data){
            $("#nav-placeholder").replaceWith(data);
            document.getElementById('navbar-brand').innerHTML = window.owner_name;
        });
        //  Footer
        $.get("elements/footer.html", function(data){
            $("#footer-placeholder").replaceWith(data);
            document.getElementById('footer-owner').innerHTML = window.owner_name;
            var year = new Date().getFullYear();
            document.getElementById('footer-copyright').innerHTML = "Copyright @ "+year;
            });
    } else {
        //    Navbar
        $.get("../elements/nav-smaller.html", function(data){
            $("#nav-placeholder").replaceWith(data);
            document.getElementById('navbar-brand').innerHTML = window.owner_name;
        });

        //  Footer
        $.get("../elements/footer.html", function(data){
            $("#footer-placeholder").replaceWith(data);
            document.getElementById('footer-owner').innerHTML = window.owner_name;
            var year = new Date().getFullYear();
            document.getElementById('footer-copyright').innerHTML = "Copyright @ "+year;
            });
    }
});