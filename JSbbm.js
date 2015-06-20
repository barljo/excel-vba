/*

    requires Talk2Watch Pro 30.0.3.4
    
*/

var bbmreq = {
    target: "sys.bbm",
    action: "bb.action.OPEN",
};  

blackberry.invoke.invoke(
    bbmreq,
    
    // success
    function() {
        console.log('success');

    // fail
    }, function(e) {
       console.log('error');
       console.log(e);
    }
);
