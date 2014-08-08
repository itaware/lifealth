$( document ).ready(function() {
  //Don't display popup form on mobile devices
	if(Response.deviceW() >= 768) {
		$('#demoModal').modal({
      		show: false
    	});
    	$('#suscribeModal').modal({
      		show: false
    	});
	}
	else {
		$('.btn-demo').click(function() {
			$(location).attr('href',"formDemo.html");
		});
    $('.btn-suscribe').click(function() {
      $(location).attr('href',"formSuscribe.html");
    });
	}
    
});
