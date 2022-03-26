$(document).ready(function() 
{
    $("#jdom a").click( evt => {
        const currentLink = evt.currentTarget;

        $(currentLink).prev().toggle();
        $(currentLink).text() === "Show more" ?
         $(currentLink).text("Show less") :
          $(currentLink).text("Show more");
    }
    );
});