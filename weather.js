
	var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=b98283b2e00f192262e1cd37cf03738e";
	$.ajax({
		url: apiURI,
		dataType: "json",
		type: "GET",
		async: "false",
		success: function(resp) {
			console.log(resp);
			console.log("현재온도 : "+ (resp.main.temp- 273.15) );
			console.log("현재습도 : "+ resp.main.humidity);
			console.log("날씨 : "+ resp.weather[0].main );
			console.log("상세날씨설명 : "+ resp.weather[0].description );
			console.log("날씨 이미지 : "+ resp.weather[0].icon );
			console.log("바람   : "+ resp.wind.speed );
			console.log("나라   : "+ resp.sys.country );
			console.log("도시이름  : "+ resp.name );
			console.log("구름  : "+ (resp.clouds.all) +"%" );

			var imgURL = "http://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";
			$("#weather-img").attr("src", imgURL);
			var temp = Math.round(resp.main.temp- 273.15);
			$("#temperature").html(temp);
			var img = load_img(temp);
			$("#clothes-img").attr("src", img);
		}
	})

	function load_img(temp){
		var img;
		if (temp >= 27)
			img = "27_2.jpeg";
		else if (temp >= 23)
			img = "23_26_1.png";
		else if (temp >= 20)
			img = "20_22_1.jpeg";
		else if (temp >= 17)
			img = "17_19_1.jpeg";
		else if (temp >= 12)
			img = "12_16_1.jpeg";
		else if (temp >= 10)
			img = "10_11_1.jpeg";
		else
			img = "6_9coat1.jpeg";
		return (img);
	}
