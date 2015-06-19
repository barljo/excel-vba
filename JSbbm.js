/*

    requires Talk2Watch Pro 30.0.3.4
    
*/

var request = {
    target: "sys.bbmk",
    action: "bb.action.OPEN",
};  

blackberry.invoke.invoke(
    request,
    
    // success
    function() {
        console.log('success');

    // fail
    }, function(e) {
       console.log('error');
       console.log(e);
    }
);
