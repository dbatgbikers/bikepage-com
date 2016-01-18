function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var event_id = getParameterByName('event_id');
var url = '/json/'+event_id+'.json';

$.ajax({
	url: url,
	type: 'GET',
	success: function(data){
		event_details = data.data[0];

		var event_content = document.getElementById('event_content');
		event_content.innerHTML = event_details.event_html;

		var total_distance = document.getElementById('total_distance');
		total_distance.innerHTML = event_details.total_kms;

		var date_duration = document.getElementById('date_duration');
		date_duration.innerHTML = event_details.event_date_duration;

		var time_duration = document.getElementById('time_duration');
		time_duration.innerHTML = event_details.event_time_duration;

		var event_title = document.getElementById('event_title_h2');
		event_title.innerHTML = event_details.event_name;

		document.getElementById("event_main_cover_img").src=event_details.event_image;
	}
});