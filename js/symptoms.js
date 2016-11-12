$("#modal").hide();

	// Close Modal
$(function() {
  $(".fa-times").click(function() {
  	$("#modal").fadeOut(750);
  	$("#head4").delay(500).fadeIn(750);
	  $("#h8").css("z-index", 0);
	  $("#h4").css("z-index", 1);
  });
});
	// Close Modal

    
  // Hair
$(function() {
  $("#u-Hair").click(function() {
    $("#modal").fadeIn(750);
    $("#head4").fadeOut(750);
    $("#h4").css("z-index", 0);
    $("#h8").css("z-index", 1);
    $("#sympLocation").text("Hair");
    var htmlList = "";
    var diseases = ["Lupus","Thyroid Problems","Cancer","Heavy Metal Poisoning","HIV","Asrcoidosis","Late Stage Syphilis"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Hair

	// Eyes
$(function() {
  $("#u-Eyes").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Eyes");
    var htmlList = "";
    var diseases = ["Refractive Errors","Glaucoma","Cataract","Amblyopia","Diabetic Retinopathy","Retinal Detachment or Tear","Dry Eye Syndrome","Pink Eye"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Eyes

	// Ears
$(function() {
  $("#u-Ears").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Ears");
    var htmlList = "";
    var diseases = ["Mastoiditis","Meniere's Disease","Meningioma","Noise Induced Hearing Loss","Balance Disorder","Benign Paroxysmal Positional Vertigo"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Ears

	// Nose
$(function() {
  $("#u-Nose").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Nose");
    var htmlList = "";
    var diseases = ["Common Cold","Postnasal Drip","Catarrh","Atrophic Rhinitis","Polychondritis","Wegener's Granulomatosis","Allergic Rhinitis","Rhinitis","Frostbite"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Nose

	// Mouth
$(function() {
  $("#u-Mouth").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Mouth");
    var htmlList = "";
    var diseases = ["Wegener's Granulomatosis","Dermatitis Herpetiformis","Linear IgA Disease","Lichen Planus","Oral Cancer","Idiopathic: Aphthous Ulcers or Recurrent Aphthous Stomatitis"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Mouth

	// Throat
$(function() {
  $("#u-Throat").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Throat");
    var htmlList = "";
    var diseases = ["Croup","Mouth Disorders","Sore Throat","Speech and Communication Disorders","Swallowing Disorders","Throat Cancer","Tonsils and Adenoids","Voice Disorders"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Throat

	// Shoulder
$(function() {
  $("#m-Shoulders").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Shoulders");
    var htmlList = "";
    var diseases = ["Rotator Cuff Disease","Shoulder Instabilitiy","Adhesive Capsulitis"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Shoulder

	// Biceps
$(function() {
  $("#m-Biceps").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Biceps");
    var htmlList = "";
    var diseases = ["Cold Agglutinin Disease","Cryoglobinemia","Dermatomyositis","Mixed Connective Tissue Disorder","Polymyositis","Raynaud's Disease","Rheumatoid Arthritis"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Biceps

	// Triceps
$(function() {
  $("#m-Triceps").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Triceps");
    var htmlList = "";
    var diseases = ["Brachial Plexus Injury","Chronic Fatigue Syndrome","Claw Hand","Dermatomyositis","Lower Motor Neuron Disorder","Pyramidal Tract Injury","Saturday Night Palsy","Ulnar Nerve Palsy"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Triceps

	// Forearms
$(function() {
  $("#m-Forearms").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Forearms");
    var htmlList = "";
    var diseases = ["Diabetes","Peripheral Artery Disease","Peripheral Neuropathy","Chemical Burn","Heat Burn","Peripheral Nerve Trauma","Peripheral Nerve Compression","Compartment Syndrome"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Forearms

	// Elbows
$(function() {
  $("#m-Elbows").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Elbows");
    var htmlList = "";
    var diseases = ["Fracture","Sprain and Strains","Tennis Elbow","Septic Arthritis","Pinched Nerve","Bursitis"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Elbows

	// Hands
$(function() {
  $("#m-Hands").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Hands");
    var htmlList = "";
    var diseases = ["Hand-arm Vibration Syndrome","Carpal Tunnel Syndrome","Dupuytren's Contracture","Mallet Finger","Osteoarthritis","Raynaud's Phenomenon","Repetitive Strain Injury","Rheumatoid Arthritis"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Hands

	// Chest
$(function() {
  $("#m-Chest").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Chest");
    var htmlList = "";
    var diseases = ["Allergies","Asthma","Cold, Flu & Cough","Cystic Fibrosis","Pulmonary Hypertension","Smoking Cessation","Tuberculosis"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Chest

	// Back/Spine
$(function() {
  $("#m-Back").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Back/Spine");
    var htmlList = "";
    var diseases = ["Sciatica","Radiculopathy","Lumbar Disk Disease","Cervical Disk Rupture","Spinal Stenosis","Degenerative Disk Disease","Arthritis of the Spine"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Back/Spine

	// Abdomen
$(function() {
  $("#m-Abdomen").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Abdomen");
    var htmlList = "";
    var diseases = ["Gallstones","Celiac Disease","Crohn's Disease","Ulcerative Colitis","Irritable Bowel Syndrome","Diverticulitis"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Abdomen

	// Genitalia
$(function() {
  $("#l-Genitalia").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Genitalia");
    var htmlList = "";
    var diseases = ["HIV/AIDS","Hepatitis","Chancroid","Trichomoniasis","Human Papillomavirus","Herpes","Gonorrhea","Chlamydia"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Genitalia

	// Legs
$(function() {
  $("#l-Legs").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Legs");
    var htmlList = "";
    var diseases = ["Diabetic Ulcer"," Arterial Ulcer","Venous Ulcer","Melanoma","Peripheral Vascular Disease","Varicose Veins"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Legs

	// Knees
$(function() {
  $("#l-Knees").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Knees");
    var htmlList = "";
    var diseases = ["Arthritis","Osgood-Schlatter Disease"," Illiotibial Band Syndrome","Osteochondritis Dissecans","Chondromalacia"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Knees

	// Ankles
$(function() {
  $("#l-Ankles").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Ankles");
    var htmlList = "";
    var diseases = ["Tendonitis","Arthritis"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Ankles

	// Feet
$(function() {
  $("#l-Feet").click(function() {
  	$("#modal").fadeIn(750);
  	$("#head4").fadeOut(750);
	  $("#h4").css("z-index", 0);
	  $("#h8").css("z-index", 1);
    $("#sympLocation").text("Feet");
    var htmlList = "";
    var diseases = ["Athlete's Foot","Gout","Morton's Neuroma","Nonsteroidal Anti-inflammatory Drugs and Ulcers","Rheumatoid Arthritis","Lupus"];
    for (var i = 0; i < diseases.length; i++) {
      htmlList += "<a href='https://google.com/search?q=" + diseases[i] + "' target='_blank'>" + diseases[i] + "</a><br>"
    }
    $("#symps").html(htmlList);
  });
});
	// Feet