$.ajax({
	url: '/json/event_data.json',
	type: 'GET',
	success: function(data){
		htmldata = create_event_html(data.data);
		var ni = document.getElementById('body_content');
		ni.innerHTML += htmldata;
	}
});

function create_event_html( raw_data ){
	var tempHtml = '';
	for(var i=0 ; i<raw_data.length; i++){
		tempHtml += '<div class="events">';
		tempHtml += '<a href="'+raw_data[i].event_url+'?event_id='+raw_data[i].event_id+'">';
		tempHtml += '<img src="'+raw_data[i].event_image+'">';
		tempHtml += '<div class="ride_name">'+raw_data[i].event_name+'</div></div>';
	}
	var htmldata = tempHtml;

	return htmldata;
}

$(".events").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".know_us").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$("#footer_content").load("../footer.html");
$("#header_container").load("../menu.html");