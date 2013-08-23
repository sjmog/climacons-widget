/*function definitions*/

function roundNumber(number, digits) {
            var multiple = Math.pow(10, digits);
            var rndedNum = Math.round(number * multiple) / multiple;
            return rndedNum;
};

/*the real magic*/

$(document).ready(function() {

	//$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London', function(data) {
		//var code = data.weather.id;
		var code = 800;
		//var windSpeed = roundNumber(data.wind.speed, 1);
		var windSpeed = roundNumber(2.58, 1);
		//var windDirection = data.wind.deg;
		var windDirection = 276;
		//var rawTemp = data.main.temp;
		var rawTemp = 306.15;
		var Ctemp = rawTemp - 273.15;
		//var cloudCover = data.clouds.all;
		var cloudCover = 90;
		//var precipitationPer3Hours = data.rain.3h;
		var precipitationPer3Hours = 3;

		switch(code) {
			case (200 || 201 || 202 || 210 || 211 || 212 || 221 || 230 || 231 || 232): //thunderstorms
				//display corresponding icon
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (300):
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (301): //drizzle
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (302): //heavy intensity drizzle
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (310): //light intensity drizzle rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (311): //drizzle rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (312): //heavy intensity drizzle rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (321): //shower drizzle
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (500): //light rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (501): //moderate rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (502): //heavy intensity rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (503): //very heavy rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (504): //extreme rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (511): //freezing rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (520): //light intensity shower rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (521): //shower rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (522): //heavy intensity shower rain
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (600): //light snow
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (601): //snow
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (602): //heavy snow
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (611): //sleet
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (621): //shower snow
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (701): //mist
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (711): //smoke
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (721): //haze
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (731): //sand/dust whirls
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (741): //fog
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (800): //sky is clear
				//etc
				document.getElementById('icon').innerHTML = '<embed id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" type="image/svg+xml" />';
				

				break;
			case (801): //few clouds
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (802): //scattered clouds
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (803): //broken clouds
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (804): //overcast clouds
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (900): //tornado
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (901): //tropical storm
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (902): //hurricane
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (903): //cold
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (904): //hot
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (905): //windy
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			case (906): //hail
				//etc
				document.getElementById('icon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/cloudLightning.svg" />';
				
				break;
			default:
				//default condition
				document.getElementById('icon').innerHTML = 'Loading...';
				break;
		}
	//});
	/* render temperature */

	document.getElementById('temperature').innerHTML = '<span class="numbers">' + Ctemp + '<span class="unit">&deg;C</span></span>';

	/*render thermometer*/

	if (Ctemp <= 0) {
		document.getElementById('thermometer').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/thermometer0.svg" />';
	}
	
	else if (Ctemp > 0 && Ctemp <= 10) {
		document.getElementById('thermometer').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/thermometer25.svg" />';
	}
	
	else if (Ctemp > 10 && Ctemp <= 20) {
		document.getElementById('thermometer').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/thermometer50.svg" />';
	}
	
	else if (Ctemp >20 && Ctemp <=30) {
		document.getElementById('thermometer').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/thermometer75.svg" />';
	}
	
	else if (Ctemp > 30) {
		document.getElementById('thermometer').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/thermometer100.svg" />';
	}
	
	else {
		document.getElementById('thermometer').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/thermometer0.svg" />';
	};

	/*render wind speed*/

	document.getElementById('windSpeed').innerHTML = '<span class="numbers">' + windSpeed + '<span class="unit">m/s</span></span>';

	/*render wind gust*/

	if (windSpeed <= 1) {
		document.getElementById('windIcon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/sun.svg" />';
	}
	
	else {
		document.getElementById('windIcon').innerHTML = '<embed type="image/svg+xml" id="embeddedIcon" class="svg climacon" src="img/wind.svg" />';
	};

	/*
	    * Replace all SVG images with inline SVG
	    */
	       jQuery('embed.svg').each(function(){
	           var $img = jQuery(this);
	           var imgID = $img.attr('id');
	           var imgClass = $img.attr('class');
	           var imgURL = $img.attr('src');

	           jQuery.get(imgURL, function(data) {
	               // Get the SVG tag, ignore the rest
	               var $svg = jQuery(data).find('svg');

	               // Add replaced image's ID to the new SVG
	               if(typeof imgID !== 'undefined') {
	                   $svg = $svg.attr('id', imgID);
	               }
	               // Add replaced image's classes to the new SVG
	               if(typeof imgClass !== 'undefined') {
	                   $svg = $svg.attr('class', imgClass+' replaced-svg');
	               }

	               // Remove any invalid XML tags as per http://validator.w3.org
	               $svg = $svg.removeAttr('xmlns:a');

	               // Replace image with new SVG
	               $img.replaceWith($svg);

	           }, 'xml');

	       });

	       /*make text fit*/
	         $(".numbers").css('font-size', function () {
	         	var containerWidthRatio = $('.details').width()/600;
	         	var fontSize = containerWidthRatio * 4;
	         	return fontSize + 'rem';
	         });
	         $(".unit").css('bottom', function () {
	         	var containerWidthRatio = $('.details').width()/600;
	         	var variableBottom = containerWidthRatio * 20;
	         	return variableBottom + '%';
	         }).css('font-size', function() {
	         	var containerWidthRatio = $('.details').width()/600;
	         	var unitFontSize = 0.35/containerWidthRatio;
	         	return unitFontSize + 'em !important';
	         });
	   
});
