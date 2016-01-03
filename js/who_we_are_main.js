$.ajax({
	url: '/json/dbatg_team.json',
	type: 'GET',
	success: function(data){
		htmldata = create_event_html(data.data);
		var ni = document.getElementById('columns');
		ni.innerHTML += htmldata;
	}
});

function create_event_html( raw_data ){
	var tempHtml = '';
	for(var i=0 ; i<raw_data.length; i++){
		var role = 'admin';
		tempHtml += '<div class="pin '+role+'">';
		tempHtml += '<img src="'+raw_data[i].member_img+'" />';
		tempHtml += '<h3>'+raw_data[i].post+'</h3>';
		tempHtml += '<h4>'+raw_data[i].member_name+'</h4>';
		tempHtml += '<p class="member_since"> Member since '+raw_data[i].member_from+' </p>';
		tempHtml += '<p class="member_details">'+raw_data[i].member_details+'</p></div>';
	}
	var htmldata = tempHtml;

	return htmldata;
}

$("#footer_content").load("../footer.html");
$("#header_container").load("../menu.html");