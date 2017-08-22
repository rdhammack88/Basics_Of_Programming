$(document).ready(function() {
   
    $('#accordion').accordion({
        header: "h3",
        collapsible: true,
        heightStyle: "content"
    });
    
    $('.tabs').tabs();
    
    $('#htmlLink').click(function(e) {
        
        e.preventDefault();
        
        $('#html#htmlOverview').show();
    });
});