/* Ashot_Erik */
 function initialize() 
        {
       var mapProp = {
                     center:new google.maps.LatLng(39.8272818, 46.7625134),
                          zoom:9,
                       mapTypeId:google.maps.MapTypeId.ROADMAP
                     };
         var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
       
         google.maps.event.addDomListener(window, 'load', initialize);
        }
         google.maps.event.addDomListener(window, 'load', initialize);

  //Arman
	function hide1() {
		document.getElementById("d2").style.display = "none";
		document.getElementById("d3").style.display = "none";
		document.getElementById("d4").style.display = "none";
		document.getElementById("d1").style.display = "block";
	}

	function hide2() {
		document.getElementById("d1").style.display = "none";
		document.getElementById("d3").style.display = "none";
 	 	document.getElementById("d4").style.display = "none";
		document.getElementById("d2").style.display = "block";
	}

	function hide3() {
		document.getElementById("d1").style.display = "none";
		document.getElementById("d2").style.display = "none";
                document.getElementById("d4").style.display = "none";
		document.getElementById("d3").style.display = "block";
	}
	function hide4() {
                document.getElementById("d1").style.display = "none";
                document.getElementById("d2").style.display = "none";
                document.getElementById("d3").style.display = "none";
                document.getElementById("d2_2").style.display = "block";
        }



 function hide1_20() {
                document.getElementById("d2_2").style.display = "none";
                document.getElementById("d2_3").style.display = "none";
                document.getElementById("d2_4").style.display = "none";
        	document.getElementById("d2_5").style.display = "none";
	        document.getElementById("d2_1").style.display = "block";
        }

        function hide2_20() {
                document.getElementById("d2_1").style.display = "none";
                document.getElementById("d2_3").style.display = "none";
                document.getElementById("d2_4").style.display = "none";
	        document.getElementById("d2_5").style.display = "none";
	        document.getElementById("d2_2").style.display = "block";
        }

        function hide3_20() {
                document.getElementById("d2_1").style.display = "none";
                document.getElementById("d2_2").style.display = "none";
                document.getElementById("d2_4").style.display = "none";
                document.getElementById("d2_5").style.display = "none";
		document.getElementById("d2_3").style.display = "block";
        }
        function hide4_20() {
                document.getElementById("d2_1").style.display = "none";
                document.getElementById("d2_2").style.display = "none";
                document.getElementById("d2_3").style.display = "none";
		document.getElementById("d2_5").style.display = "none";
                document.getElementById("d2_4").style.display = "block";
        }
	function hide5_20() {
                document.getElementById("d2_1").style.display = "none";
                document.getElementById("d2_2").style.display = "none";
                document.getElementById("d2_3").style.display = "none";
                document.getElementById("d2_4").style.display = "none";
                document.getElementById("d2_5").style.display = "block";
        }

0

	function hide10_3() {
		document.getElementById("d2_2_2").style.display = "none";
		document.getElementById("d2_2_1").style.display = "none";
	}

		function hide20_3() {
		document.getElementById("d2_2_1").style.display = "none";
		document.getElementById("d2_2_2").style.display = "none";

	}


	function hide10_4() {
                document.getElementById("d2_2_1_2").style.display = "none";
                document.getElementById("d2_2_1_3").style.display = "none";
                document.getElementById("d2_2_1_4").style.display = "none";
                document.getElementById("d2_2_1_1").style.display = "block";
	}
        function hide20_4() {
                document.getElementById("d2_2_1_1").style.display = "none";
                document.getElementById("d2_2_1_3").style.display = "none";
                document.getElementById("d2_2_1_4").style.display = "none";
                document.getElementById("d2_2_1_2").style.display = "block";
	}
	function hide30_4() {
                document.getElementById("d2_2_1_1").style.display = "none";
                document.getElementById("d2_2_1_2").style.display = "none";
                document.getElementById("d2_2_1_4").style.display = "none";
                document.getElementById("d2_2_1_3").style.display = "block";
	}
	function hide40_4() {
                document.getElementById("d2_2_1_1").style.display = "none";
                document.getElementById("d2_2_1_2").style.display = "none";
                document.getElementById("d2_2_1_3").style.display = "none";
                document.getElementById("d2_2_1_4").style.display = "block";
	}
 
 
       function hide10_5() {
                document.getElementById("d2_2_2_2").style.display = "none";
                document.getElementById("d2_2_2_3").style.display = "none";
                document.getElementById("d2_2_2_1").style.display = "block";
	}
        function hide20_5() {
                document.getElementById("d2_2_2_1").style.display = "none";
                document.getElementById("d2_2_2_3").style.display = "none";
                document.getElementById("d2_2_2_2").style.display = "block";
	}
        function hide30_5() {
                document.getElementById("d2_2_2_1").style.display = "none";
                document.getElementById("d2_2_2_2").style.display = "none";
                document.getElementById("d2_2_2_3").style.display = "block";
	}





        function hide10_6() {
                document.getElementById("d2_4_2").style.display = "none";
                document.getElementById("d2_4_3").style.display = "none";
                document.getElementById("d2_4_4").style.display = "none";
                document.getElementById("d2_4_1").style.display = "block";
	}
        function hide20_6() {
                document.getElementById("d2_4_1").style.display = "none";
                document.getElementById("d2_4_3").style.display = "none";
                document.getElementById("d2_4_4").style.display = "none";
                document.getElementById("d2_4_2").style.display = "block";
	}
        function hide30_6() {
                document.getElementById("d2_4_1").style.display = "none";
                document.getElementById("d2_4_2").style.display = "none";
                document.getElementById("d2_4_4").style.display = "none";
                document.getElementById("d2_4_3").style.display = "block";
	}
        function hide40_6() {
                document.getElementById("d2_4_1").style.display = "none";
                document.getElementById("d2_4_2").style.display = "none";
                document.getElementById("d2_4_3").style.display = "none";
                document.getElementById("d2_4_4").style.display = "block";
        }

