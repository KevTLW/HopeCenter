	// Manhattan
var mMap = L.map("mID").setView([40.7831,-73.9712], 11);
L.tileLayer("https://api.mapbox.com/styles/v1/kevtlw/ciuqb0ukg00bd2jodar53p4nu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2dGx3IiwiYSI6ImNpdXBoZmhiajAxZ2wyem13MHlta25kdmoifQ.AX0IZLGuMR7o3JYUyPkGpA", {
  maxZoom: 18
}).addTo(mMap);

			// Bellevue Hospital Center
L.marker([40.7392051,-73.9753041], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Bellevue Hospital Center<br><a target='_blank' href='https://www.google.com/maps/dir//Bellevue+Hospital+Center,+462+1st+Avenue,+New+York,+NY+10016/@40.7392051,-73.9774928,17z/data=!4m16!1m7!3m6!1s0x89c2590c212fc7a9:0x67a293dafcc5f7e0!2sBellevue+Hospital+Center!3b1!8m2!3d40.7392051!4d-73.9753041!4m7!1m0!1m5!1m1!1s0x89c2590c212fc7a9:0x67a293dafcc5f7e0!2m2!1d-73.9753041!2d40.7392051'>Directions</a>")
			// Bellevue Hospital Center

			// Coler-Goldwater Specialty Hospital
L.marker([40.7701722,-73.9420335], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Coler-Goldwater Specialty Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Coler+Goldwater+Hospital-Coler+Campus,+900+Main+Street,+New+York,+NY+10044/@40.770151,-74.0120738,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c258b611969099:0xa8fc0f73abc4d70a!2m2!1d-73.9420335!2d40.7701722'>Directions</a>")
			// Coler-Goldwater Specialty Hospital

			// Gracie Square Hospital
L.marker([40.7697066,-73.952951], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Gracie Square Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Gracie+Square+Hospital,+420+East+76th+Street,+New+York,+NY+10021/@40.7696854,-74.0229913,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c258c74f33d4b5:0x3bc0edb7f00b3c7c!2m2!1d-73.952951!2d40.7697066'>Directions</a>")
			// Gracie Square Hospital

			// Harlem Hospital Center
L.marker([40.814135,-73.939762], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Harlem Hospital Center<br><a target='_blank' href='https://www.google.com/maps/dir//NYC+Health+%2B+Hospitals%2FHarlem,+506+Lenox+Avenue,+New+York,+NY+10037/@40.8141138,-74.0098023,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f67660fb23c7:0x66994989947e146f!2m2!1d-73.939762!2d40.814135'>Directions</a>")
			// Harlem Hospital Center

			// Hospital for Special Surgery
L.marker([40.765214,-73.952963], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Hospital for Special Surgery<br><a target='_blank' href='https://www.google.com/maps/dir//Hospital+for+Special+Surgery,+535+East+70th+Street,+New+York,+NY+10021/@40.7651928,-74.0230033,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c258c3f9c03df7:0x57abf16d1f849e95!2m2!1d-73.952963!2d40.765214'>Directions</a>")
			// Hospital for Special Surgery

			// Lenox Hill Hospital
L.marker([40.7738805,-73.9607736], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Lenox Hill Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Lenox+Hill+Hospital,+100+East+77th+Street,+Hospital,+New+York,+NY+10065/@40.7738593,-74.0308139,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c258957477adad:0x2a367beae7107987!2m2!1d-73.9607736!2d40.7738805'>Directions</a>")
			// Lenox Hill Hospital

			// Manhattan Eye, Ear and Throat Hospital
L.marker([40.7641888,-73.9636301], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Manhattan Eye, Ear and Throat Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Manhattan+Eye+Ear+and+Throat+Hospital,+210+East+64th+Street,+New+York,+NY+10021/@40.7641676,-74.0336704,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c258e8ef2ec8eb:0xb8d39f256227e4a9!2m2!1d-73.9636301!2d40.7641888'>Directions</a>")
			// Manhattan Eye, Ear and Throat Hospital

			// Manhattan Psychiatric Center
L.marker([40.7888262,-73.9293689], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Manhattan Psychiatric Center<br><a target='_blank' href='https://www.google.com/maps/dir//Manhattan+Psychiatric+Center,+600+East+125th+Street,+New+York,+NY+10035/@40.788805,-73.9994092,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f5f9ae861601:0xae45b18e0a47e883!2m2!1d-73.9293689!2d40.7888262'>Directions</a>")
			// Manhattan Psychiatric Center

			// Manhattan Veterans Administration Hospital
L.marker([40.7370458,-73.9768397], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Manhattan Veterans Administration Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//VA+NY+Harbor+Healthcare+System,+423+East+23rd+Street,+New+York,+NY+10010/@40.7370246,-74.04688,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2590c9d579dd9:0x927f33ed58d181d6!2m2!1d-73.9768397!2d40.7370458'>Directions</a>")
			// Manhattan Veterans Administration Hospital

			// Memorial Sloan Kettering Cancer Center
L.marker([40.7584996,-73.9833507], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Memorial Sloan Kettering Cancer Center<br><a target='_blank' href='https://www.google.com/maps/dir//Memorial+Sloan+Kettering+Cancer+Center,+1275+York+Avenue,+New+York,+NY+10065/@40.7584996,-73.9833507,14.61z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c258c24e6de16b:0x5312b4845b552f03!2m2!1d-73.9560075!2d40.7640761'>Directions</a>")
			// Memorial Sloan Kettering Cancer Center

			// Metropolitan Hospital Center
L.marker([40.7850677,-73.9450511], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Metropolitan Hospital Center<br><a target='_blank' href='https://www.google.com/maps/dir//NYC+Health+%2B+Hospitals%2FMetropolitan,+1901+1st+Avenue,+New+York,+NY+10029/@40.7850465,-74.0150914,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c258a8d8fe5c1b:0xc7594d037ba3f984!2m2!1d-73.9450511!2d40.7850677'>Directions</a>")
			// Metropolitan Hospital Center

			// Mount Sinai Beth Israel
L.marker([40.73292,-73.983202], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Mount Sinai Beth Israel<br><a target='_blank' href='https://www.google.com/maps/dir//Mount+Sinai+Beth+Israel,+10+Nathan+D+Perlman+Place,+New+York,+NY+10003/@40.7328988,-74.0532423,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2599e2b526cc9:0xec0ab16ebbcd84c4!2m2!1d-73.983202!2d40.73292'>Directions</a>")
			// Mount Sinai Beth Israel

			// Mount Sinai Hospital
L.marker([40.7897101,-74.0227334], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Mount Sinai Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//The+Mount+Sinai+Hospital,+1468+Madison+Avenue,+New+York,+NY+10029/@40.7897101,-74.0227334,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f63dcaeeda93:0x9797c11e6d7bc63f!2m2!1d-73.9526931!2d40.7897313'>Directions</a>")
			// Mount Sinai Hospital

			// Mount Sinai St. Luke's
L.marker([40.8056371,-73.9612805], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Mount Sinai St. Luke's<br><a target='_blank' href='https://www.google.com/maps/dir//Mount+Sinai+St.+Luke's,+1111+Amsterdam+Avenue,+New+York,+NY+10025/@40.8056159,-74.0313208,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f63dbf5e303b:0x18f8abdbff485ccb!2m2!1d-73.9612805!2d40.8056371'>Directions</a>")
			// Mount Sinai St. Luke's

			// Mount Sinai West
L.marker([40.7697975,-74.0571779], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Mount Sinai West<br><a target='_blank' href='https://www.google.com/maps/dir//Mount+Sinai+West,+1000+10th+Avenue,+New+York,+NY+10019/@40.7697975,-74.0571779,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f63dbf5e303b:0x7bd728896053e9c8!2m2!1d-73.9871376!2d40.7698187'>Directions</a>")
			// Mount Sinai West

			// NewYork–Presbyterian - Allen Hospital
L.marker([40.873311,-73.9152436], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("NewYork–Presbyterian - Allen Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//NewYork-Presbyterian%2FThe+Allen+Hospital:Labor+and+Delivery,+5141+Broadway,+New+York,+NY+10034/@40.8732858,-73.9830952,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f3f2aa4e959b:0x1ebecad13faa6b69!2m2!1d-73.9130549!2d40.873307'>Directions</a>")
			// NewYork–Presbyterian - Allen Hospital

			// NewYork–Presbyterian/Columbia University Medical Center
L.marker([40.841495,-74.0130333], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("NewYork–Presbyterian/Columbia University Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Milstein+Building+-+Columbia+University+Medical+Center,+177+Fort+Washington+Avenue,+New+York,+NY+10032/@40.841495,-74.0130333,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f69b9ae9d98b:0xc4d3ca2c95038b22!2m2!1d-73.942993!2d40.8415162'>Directions</a>")
			// NewYork–Presbyterian/Columbia University Medical Center

			// NewYork–Presbyterian/Lower Manhattan Hospital
L.marker([40.7104144,-74.007342], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("NewYork–Presbyterian/Lower Manhattan Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//NewYork-Presbyterian%2FLower+Manhattan+Hospital,+170+William+Street,+New+York,+NY+10038/@40.7103892,-74.0751936,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25a2297198aa5:0x92da9e7eb069aebf!2m2!1d-74.0051533!2d40.7104104'>Directions</a>")
			// NewYork–Presbyterian/Lower Manhattan Hospital

			// NewYork-Presbyterian/Weill Cornell Medical Center
L.marker([40.7318803,-74.0020886], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("NewYork-Presbyterian/Weill Cornell Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//NewYork-Presbyterian%2FWeill+Cornell+Medical+Center,+525+East+68th+Street,+New+York,+NY+10065/@40.7646466,-74.0240627,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c258c38cc266d7:0x6d748a388196b38d!2m2!1d-73.9540224!2d40.7646678'>Directions</a>")
			// NewYork-Presbyterian/Weill Cornell Medical Center

			// New York Eye and Ear Infirmary of Mount Sinai
L.marker([40.731845,-73.9867677], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("New York Eye and Ear Infirmary of Mount Sinai<br><a target='_blank' href='https://www.google.com/maps/dir//New+York+Eye+and+Ear+Infirmary+of+Mount+Sinai,+310+East+14th+Street,+New+York,+NY+10003/@40.7318198,-74.0546193,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2599e3f466b15:0x6262dd43ac578352!2m2!1d-73.984579!2d40.731841'>Directions</a>")
			// New York Eye and Ear Infirmary of Mount Sinai

			// N.Y.U. Hospital for Joint Diseases
L.marker([40.7342432,-73.9853158], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("N.Y.U. Hospital for Joint Diseases<br><a target='_blank' href='https://www.google.com/maps/dir//Hospital+For+Joint+Diseases+Orthopaedic+Institute:+Rehabilitation+Medicine+Dept+of,+301+East+17th+Street+%23835,+New+York,+NY+10003/@40.734218,-74.0531674,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2599fe7121c2d:0x35cc2835aa40a1ed!2m2!1d-73.9831271!2d40.7342392'>Directions</a>")
			// N.Y.U. Hospital for Joint Diseases

			// N.Y.U. Langone Medical Center
L.marker([40.7466602,-74.0423964], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("N.Y.U. Langone Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//NYU+Langone%E2%80%99s+Center+for+Musculoskeletal+Care,+333+East+38th+Street,+New+York,+NY+10016/@40.7466602,-74.0423964,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25904d0acb46f:0x8ec0d89ff784e14f!2m2!1d-73.9723561!2d40.7466814'>Directions</a>")
			// N.Y.U. Langone Medical Center

			// Rockefeller Institute Hospital
L.marker([40.7628264,-73.95801], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(mMap)
  .bindPopup("Rockefeller Institute Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Rockefeller+University+Hospital,+1230+York+Avenue,+New+York,+NY+10065/@40.7628012,-74.0258616,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c258c31a802b8d:0x4dfb5d18fc0c574e!2m2!1d-73.9558213!2d40.7628224'>Directions</a>")
			// Rockefeller Institute Hospital
	// Manhattan

		// Brooklyn
var bMap = L.map("bID").setView([40.6782,-73.9442], 11);
L.tileLayer("https://api.mapbox.com/styles/v1/kevtlw/ciuqb0ukg00bd2jodar53p4nu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2dGx3IiwiYSI6ImNpdXBoZmhiajAxZ2wyem13MHlta25kdmoifQ.AX0IZLGuMR7o3JYUyPkGpA", {
  maxZoom: 18
}).addTo(bMap);

			// Brookdale University Hospital and Medical Center
L.marker([40.655066,-73.912579], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("Brookdale University Hospital and Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Brookdale+University+Hospital+and+Medical+Center/@40.8495408,-73.9183462,15z'>Directions</a>")
			// Brookdale University Hospital and Medical Center

			// Brooklyn Hospital Center
L.marker([40.6907748,-73.9779639], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("Brooklyn Hospital Center<br><a target='_blank' href='https://www.google.com/maps/dir//Brooklyn+Hospital,+121+Dekalb+Avenue,+Brooklyn,+NY+11201/@40.6907748,-73.9779639,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25bb4106857d3:0x5aa74fc3ac2f41f2!2m2!1d-73.9779639!2d40.6907748'>Directions</a>")
			// Brooklyn Hospital Center

			// Brooklyn V.A. Medical Center
L.marker([40.6087416,-74.0264817], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("Brooklyn V.A. Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Brooklyn+Va+Medical+Center:+Shakibai+Neema+MD,+800+Poly+Place,+Brooklyn,+NY+11209/@40.6087416,-74.024293,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2457db27fb5f1:0xa339d873630b73fa!2m2!1d-74.024293!2d40.6087416'>Directions</a>")
			// Brooklyn V.A. Medical Center

			// Coney Island Hospital
L.marker([40.58549,-73.965581], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("Coney Island Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//NYC+Health+%2B+Hospitals%2FConey+Island,+2601+Ocean+Parkway,+Brooklyn,+NY+11235/@40.58549,-73.965581,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2445b5ef9426f:0x5fb7c3bcf8552b1f!2m2!1d-73.965581!2d40.58549'>Directions</a>")
			// Coney Island Hospital

			// Interfaith Medical Center
L.marker([40.678208,-73.9397157], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("Interfaith Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Interfaith+Medical+Center,+1545+Atlantic+Avenue,+Brooklyn,+NY+11213/@40.678208,-73.937527,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25b87ebc5913d:0x65961b58ecb976f9!2m2!1d-73.937527!2d40.678208'>Directions</a>")
			// Interfaith Medical Center

			// Kingsbrook Jewish Medical Center
L.marker([40.659321,-73.9353527], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("Kingsbrook Jewish Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Kingsbrook+Jewish+Medical+Center,+585+Schenectady+Avenue,+Brooklyn,+NY+11203/@40.659321,-73.933164,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25b6400000000:0x6745ee72ec7a405d!2m2!1d-73.933164!2d40.659321'>Directions</a>")
			// Kingsbrook Jewish Medical Center

			// Kings County Hospital Center
L.marker([40.656571,-73.9484124], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("Kings County Hospital Center<br><a target='_blank' href='https://www.google.com/maps/dir//Kings+County+Hospital+Emergency+Room,+451+Clarkson+Avenue,+Brooklyn,+NY+11203/@40.656571,-73.9462237,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25b64336a7b5d:0xfc43a3c40a072767!2m2!1d-73.9462237!2d40.656571'>Directions</a>")
			// Kings County Hospital Center

			// Maimonides Medical Center
L.marker([40.6393127,-74.000361], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("Maimonides Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Maimonides+Medical+Center,+4802+10th+Avenue,+Brooklyn,+NY+11219/@40.6393127,-73.9981723,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25accc457649b:0x319d12e89a244ab9!2m2!1d-73.9981723!2d40.6393127'>Directions</a>")
			// Maimonides Medical Center

			// Mount Sinai Brooklyn
L.marker([40.6392915,-74.0682123], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("Mount Sinai Brooklyn<br><a target='_blank' href='https://www.google.com/maps/dir//Mount+Sinai+Brooklyn,+3201+Kings+Highway,+Brooklyn,+NY+11234/@40.6186182,-73.9429707,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c244a5cac34567:0x784f36c592530078!2m2!1d-73.9429707!2d40.6186182'>Directions</a>")
			// Mount Sinai Brooklyn

			// New York Community Hospital
L.marker([40.613838,-73.9506947], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("New York Community Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//New+York+Community+Hospital,+2525+Kings+Highway,+Brooklyn,+NY+11229/@40.613838,-73.948506,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c244bd261c4b6b:0x96556bc694270257!2m2!1d-73.948506!2d40.613838'>Directions</a>")
			// New York Community Hospital

			// New York Methodist Hospital
L.marker([40.667619,-73.9785], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("New York Methodist Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//New+York+Methodist+Hospital,+506+6th+Street,+Brooklyn,+NY+11215/@40.667619,-73.9785,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25b03091d0cb7:0x71ac48cbd65003ef!2m2!1d-73.9785!2d40.667619'>Directions</a>")
			// New York Methodist Hospital

			// NYU Lutheran Medical Center
L.marker([40.6466613,-74.0204939], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("NYU Lutheran Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//NYU+Lutheran,+150+55th+Street,+Brooklyn,+NY+11220/@40.6466766,-74.0211334,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25aac2acc684d:0x919ca29e69e645d9!2m2!1d-74.0211334!2d40.6466766'>Directions</a>")
			// NYU Lutheran Medical Center

			// University Hospital of Brooklyn
L.marker([40.6553832,-73.9460977], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bMap)
  .bindPopup("University Hospital of Brooklyn<br><a target='_blank' href='https://www.google.com/maps/dir//University+Hospital+Brooklyn+Ns,+470+Clarkson+Avenue,+Brooklyn,+NY+11203/@40.655582,-73.9438838,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25b6429f57419:0x439044f9db09b709!2m2!1d-73.9438838!2d40.655582'>Directions</a>")
			// University Hospital of Brooklyn
	// Brooklyn

		// Queens
var qMap = L.map("qID").setView([40.7282,-73.7949], 11);
L.tileLayer("https://api.mapbox.com/styles/v1/kevtlw/ciuqb0ukg00bd2jodar53p4nu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2dGx3IiwiYSI6ImNpdXBoZmhiajAxZ2wyem13MHlta25kdmoifQ.AX0IZLGuMR7o3JYUyPkGpA", {
  maxZoom: 18
}).addTo(qMap);

			// Creedmoor Psychiatric Center
L.marker([40.7414554,-73.7336469], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("Creedmoor Psychiatric Center<br><a target='_blank' href='https://www.google.com/maps/dir//Creedmoor+Psychiatric+Center,+79-25+Winchester+Boulevard,+Queens+Village,+NY+11427/@40.7414514,-73.7314582,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2621659cfec4d:0x37221e0c0ee31711!2m2!1d-73.7314582!2d40.7414514'>Directions</a>")
			// Creedmoor Psychiatric Center

			// Elmhurst Hospital Center
L.marker([40.7452289,-73.8860393], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("Elmhurst Hospital Center<br><a target='_blank' href='https://www.google.com/maps/dir//NYC+Health+%2B+Hospitals%2FElmhurst,+79-01+Broadway,+Elmhurst,+NY+11373/@40.7452249,-73.8838506,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25faa4a9f7081:0xb9f59a52f4326059!2m2!1d-73.8838506!2d40.7452249'>Directions</a>")
			// Elmhurst Hospital Center

			// The Floating Hospital
L.marker([40.7531534,-73.9440206], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("The Floating Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//The+Floating+Hospital,+41-43+Crescent+Street,+Long+Island+City,+NY+11101/@40.7509797,-73.9393591,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2592c31d581b3:0x1836dcce31583fcb!2m2!1d-73.9393591!2d40.7509797'>Directions</a>")
			// The Floating Hospital

			// Flushing Hospital Medical Center
L.marker([40.7555592,-73.8188907], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("Flushing Hospital Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Flushing+Hospital+Medical+Center,+4500+Parsons+Boulevard,+Flushing,+NY+11355/@40.7555552,-73.816702,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2603e7e81613f:0x6968e2f82b599add!2m2!1d-73.816702!2d40.7555552'>Directions</a>")
			// Flushing Hospital Medical Center

			// Forest Hills Hospital
L.marker([40.7290647,-73.8536541], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("Forest Hills Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Northwell+Health+Long+Island+Jewish+Forest+Hills,+102-01+66th+Road,+Forest+Hills,+NY+11375/@40.7290607,-73.8514654,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25e2e4d14ce8b:0x6fee5c58bcc9fef!2m2!1d-73.8514654!2d40.7290607'>Directions</a>")
			// Forest Hills Hospital

			// Jamaica Hospital
L.marker([40.7000723,-73.8184195], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("Jamaica Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Jamaica+Hospital+Medical+Center,+8900+Van+Wyck+Expressway,+Jamaica,+NY+11418/@40.7000683,-73.8162308,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c260c868ff413b:0xeb9c7cb16727b666!2m2!1d-73.8162308!2d40.7000683'>Directions</a>")
			// Jamaica Hospital

			// Long Island Jewish Medical Center
L.marker([40.7537591,-73.7109016], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("Long Island Jewish Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Northwell+Health+Federal+Credit+Union,+270-05+76th+Avenue,+New+Hyde+Park,+NY+11040/@40.7537551,-73.7087129,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c26278edb0f619:0x87bac778d3c48ce1!2m2!1d-73.7087129!2d40.7537551'>Directions</a>")
			// Long Island Jewish Medical Center

			// Mount Sinai Queens
L.marker([40.7683113,-73.9269252], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("Mount Sinai Queens<br><a target='_blank' href='https://www.google.com/maps/dir//Mount+Sinai+Hospital+Queens,+25-10+30th+Avenue,+Astoria,+NY+11102/@40.7683073,-73.9247365,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c25f4870578f43:0x909638963f87c55b!2m2!1d-73.9247365!2d40.7683073'>Directions</a>")
			// Mount Sinai Queens

			// NewYork–Presbyterian/Queens
L.marker([40.7679137,-73.8318509], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("NewYork–Presbyterian/Queens<br><a target='_blank' href='https://www.google.com/maps/dir//NewYork-Presbyterian%2FQueens,+56-45+Main+Street,+Flushing,+NY+11355/@40.7471085,-73.8254511,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2606ea68be827:0xaff89e0ec1df648e!2m2!1d-73.8254511!2d40.7471085'>Directions</a>")
			// NewYork–Presbyterian/Queens

			// Queens Hospital Center
L.marker([40.7171323,-73.8064149], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("Queens Hospital Center<br><a target='_blank' href='https://www.google.com/maps/dir//Queens+Hospital+Center,+82-68+164th+Street,+Jamaica,+NY+11432/@40.7171283,-73.8042262,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c26120e0712c63:0x6053722387853137!2m2!1d-73.8042262!2d40.7171283'>Directions</a>")
			// Queens Hospital Center

			// St. John's Episcopal Hospital South Shore
L.marker([40.5986937,-73.7554272], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("St. John's Episcopal Hospital South Shore<br><a target='_blank' href='https://www.google.com/maps/dir//St.+John's+Episcopal+Hospital,+327+Beach+19th+Street,+Far+Rockaway,+NY+11691/@40.5986896,-73.7532385,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c268ac0550491d:0xa276856b6a7cd8fc!2m2!1d-73.7532385!2d40.5986896'>Directions</a>")
			// St. John's Episcopal Hospital South Shore

			// St. Mary's Children's Hospital
L.marker([40.7765454,-73.770649], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("St. Mary's Children's Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//St.+Mary's+Hospital+For+Children,+29-01+216th+Street,+Bayside,+NY+11360/@40.7765414,-73.7684603,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c28a13026c4547:0xc23803fedea91eb3!2m2!1d-73.7684603!2d40.7765414'>Directions</a>")
			// St. Mary's Children's Hospital

			// Zucker Hillside Hospital
L.marker([40.7507608,-73.7118221], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(qMap)
  .bindPopup("Zucker Hillside Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Zucker+Hillside+Hospital,+75-59+263rd+Street,+Glen+Oaks,+NY+11004/@40.7507396,-73.7818624,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2627a0dc65beb:0x1c7125298f24ab42!2m2!1d-73.7118221!2d40.7507608'>Directions</a>")
			// Zucker Hillside Hospital
	// Queens

	// Bronx
var bxMap = L.map("bxID").setView([40.8448, -73.8648], 11);
L.tileLayer("https://api.mapbox.com/styles/v1/kevtlw/ciuqb0ukg00bd2jodar53p4nu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2dGx3IiwiYSI6ImNpdXBoZmhiajAxZ2wyem13MHlta25kdmoifQ.AX0IZLGuMR7o3JYUyPkGpA", {
  maxZoom: 18
}).addTo(bxMap);

			// Bronx Lebanon
L.marker([40.8315956,-73.905682], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bxMap)
  .bindPopup("Bronx Lebanon Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Bronx-Lebanon+Hospital+Center,+1276+Fulton+Ave,+Bronx,+NY+10456/@40.8315956,-73.905682,17z/data=!4m15!1m6!3m5!1s0x89c2f44f96ac6639:0xa1e15a511ddba70b!2sBronx-Lebanon+Hospital+Center!8m2!3d40.8315956!4d-73.9034933!4m7!1m0!1m5!1m1!1s0x89c2f44f96ac6639:0xa1e15a511ddba70b!2m2!1d-73.9034933!2d40.8315956'>Directions</a>")
    	// Bronx Lebanon

    	// Calvary Hospital
L.marker([40.8479218,-73.843982], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bxMap)
  .bindPopup("Calvary Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Calvary+Hospital,+1740+Eastchester+Road,+Bronx,+NY+10461/@40.8479218,-73.843982,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f4ac983863c3:0x2d3b06c3915b8e66!2m2!1d-73.843982!2d40.8479218'>Directions</a>")
    	// Calvary Hospital

    	// Jacobi Medical Center
L.marker([40.8559089,-73.8459297], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bxMap)
  .bindPopup("Jacobi Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//NYC+Health+%2B+Hospitals%2FJacobi,+1400+Pelham+Parkway+South,+(Corner+of+Eastchester+Road+and+Pelham+Parkway+South),+Bronx,+NY+10461/@40.857142,-73.843786,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f355bf152d0f:0x8673d77819e9ab86!2m2!1d-73.843786!2d40.857142'>Directions</a>")
    	// Jacobi Medical Center

    	// Bronx Veterans Medical Center
L.marker([40.8675394,-73.906318], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bxMap)
  .bindPopup("Bronx Veterans Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Peters+VA+Medical+Center:,+130+West+Kingsbridge+Road,+Bronx,+NY+10468/@40.868521,-73.9052721,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f38f1d3c75f5:0xa5dcc9ba7e9a1d9c!2m2!1d-73.9052721!2d40.868521'>Directions</a>")
    	// Bronx Veterans Medical Center
    	
    	// Lincoln Medical and Mental Health Center
L.marker([40.8168905,-73.9244406], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bxMap)
  .bindPopup("Lincoln Medical and Mental Health Center<br><a target='_blank' href='https://www.google.com/maps/dir//Lincoln+Medical+and+Mental+Health+Center,+234+East+149th+Street,+Bronx,+NY+10451/@40.8168905,-73.9244406,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f5cfd778a1e7:0xc1f3b54371870533!2m2!1d-73.9244406!2d40.8168905'>Directions</a>")
    	// Lincoln Medical and Mental Health Center
    	
    	// Montefiore Medical Center
L.marker([40.8800817,-73.8798383], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bxMap)
  .bindPopup("Montefiore Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Montefiore+Medical+Center+Moses+Division,+111+East+210th+Street,+Bronx,+NY+10467/@40.8800817,-73.8798383,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c292089e0812db:0xa7acedb1987fee51!2m2!1d-73.8798383!2d40.8800817'>Directions</a>")
    	// Montefiore Medical Center
    	
    	// NYC Health + Hospitals/North Central Bronx
L.marker([40.8804138,-73.8810488], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bxMap)
  .bindPopup("NYC Health + Hospitals/North Central Bronx<br><a target='_blank' href='https://www.google.com/maps/dir//NYC+Health+%2B+Hospitals%2FNorth+Central+Bronx,+3424+Kossuth+Avenue,+Bronx,+NY+10467/@40.8804138,-73.8810488,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f30cee3536c1:0x408c68251129b142!2m2!1d-73.8810488!2d40.8804138'>Directions</a>")
    	// NYC Health + Hospitals/North Central Bronx
    	
    	// St. Barnabas Hospital
L.marker([40.8533014,-73.8907812], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(bxMap)
  .bindPopup("St. Barnabas Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//SBH+Health+System,+4422+Third+Avenue,+Bronx,+NY+10457/@40.8533014,-73.8907812,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c2f47c553057e1:0x499ea0303c82f4aa!2m2!1d-73.8907812!2d40.8533014'>Directions</a>")
    	// St. Barnabas Hospital
	// Bronx

	// Staten Island
var siMap = L.map("siID").setView([40.5795,-74.1502], 11);
L.tileLayer("https://api.mapbox.com/styles/v1/kevtlw/ciuqb0ukg00bd2jodar53p4nu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2dGx3IiwiYSI6ImNpdXBoZmhiajAxZ2wyem13MHlta25kdmoifQ.AX0IZLGuMR7o3JYUyPkGpA", {
  maxZoom: 18
}).addTo(siMap);

			// Staten Island University Hospital
L.marker([40.5847492,-74.0858853], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(siMap)
  .bindPopup("Staten Island University Hospital<br><a target='_blank' href='https://www.google.com/maps/dir//Staten+Island+University+Hospital+North+Campus,+475+Seaview+Avenue,+Staten+Island,+NY+10305/@40.5847492,-74.0858853,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c24edba247143d:0xd59dc3c3d1662e48!2m2!1d-74.0858853!2d40.5847492'>Directions</a>")
			// Staten Island University Hospital

			// Richmond University Medical Center
L.marker([40.635877,-74.105557], {icon: L.AwesomeMarkers.icon({icon: "hospital-o", prefix: "fa", markerColor: "darkblue"}) }).addTo(siMap)
  .bindPopup("Richmond University Medical Center<br><a target='_blank' href='https://www.google.com/maps/dir//Richmond+University+Medical+Center,+355+Bard+Avenue,+Staten+Island,+NY+10310/@40.635877,-74.105557,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c24e13638c0ddf:0xf008a51b5f3d9e3e!2m2!1d-74.105557!2d40.635877'>Directions</a>")
			// Richmond University Medical Center
	// Staten Island