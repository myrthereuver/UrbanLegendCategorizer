

/// making the dissertation drop work on the homepage
$(".dissertation").draggable({ cursor: "crosshair", revert: "invalid"});
$("#drop").droppable({ accept: ".dissertation", 
    drop: function(event, ui) {
        //console.log("drop");
        var dropped = ui.draggable;
        var droppedOn = $(this);
        $(dropped).detach().appendTo(droppedOn);   // actually move element to new container

        // set up brinkey options and save gold brinkeys
        suggestedBrinkeys = dropped.data('suggested-brinkeys').split(';');
        goldBrinkeys = dropped.data('gold-brinkeys').split(';');
		var cat1 = suggestedBrinkeys[0];
		var cat2 = suggestedBrinkeys[1];
		var cat3 = suggestedBrinkeys[2];

	
        $('#suggested-brinkey-container').html(''); // empty div, in case there's any left over from previous analysis
		$('#suggested-brinkey-container2').html(''); // empty div, in case there's any left over from previous analysis
		$('#suggested-brinkey-container3').html(''); // empty div, in case there's any left over from previous analysis
        $('#suggested-brinkey-container').append('<p class="suggested-brinkey" data-brinkey="'+cat1+'">'+cat1+'  <span class="ui-icon ui-icon-arrow-4"></span></p>');
        $('#suggested-brinkey-container2').append('<p class="suggested-brinkey" data-brinkey="'+cat2+'">'+cat2+' <span class="ui-icon ui-icon-arrow-4"></span></p>');
	$('#suggested-brinkey-container3').append('<p class="suggested-brinkey" data-brinkey="'+cat3+'">'+cat3+'  <span class="ui-icon ui-icon-arrow-4"></span></p>');
	
	    
        makeBrinkeysDroppable()
		makeBrinkeysDroppable2()
		makeBrinkeysDroppable3()
	    


        // place title and abstract
        $('span#title').html(dropped.find('h3').html());
        $('span#abstract').html(dropped.find('.abstract').html());
        $('span#cover-image').html(dropped.find('img'));
         
        $('#darkness').fadeIn();
        $('#loading').fadeIn();
        setTimeout(function(){ 
            $('#home').fadeOut(500, function(){
                window.scrollTo(0, 0);
                $('#darkness').fadeOut();
                $('#loading').fadeOut();
                $('#select-brinkeys').fadeIn();
            });
        }, 1500);
    }
});


function makeBrinkeysDroppable(){
    // making the brinkeys drop work
    $(".suggested-brinkey").draggable({ cursor: "crosshair", revert: "invalid"});
    $("#selected-brinkeys-drop").droppable({ accept: ".suggested-brinkey", 
        drop: function(event, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().appendTo(droppedOn); 
            if($('#brinkey-placeholder')){
                $('#brinkey-placeholder').hide();
            }
        }
    });
    $("#suggested-brinkey-container").droppable({ 
        accept: ".suggested-brinkey"
    });
	$("#suggested-brinkey-container2").droppable({ 
		accept: ".suggested-brinkey"
    });
	$("#suggested-brinkey-container3").droppable({ 
        accept: ".suggested-brinkey"
    });

	
}

function makeBrinkeysDroppable2(){
    // making the brinkeys drop work
    $(".suggested-brinkey").draggable({ cursor: "crosshair", revert: "invalid"});
    $("#selected-brinkeys-drop2").droppable({ accept: ".suggested-brinkey", 
        drop: function(event, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().appendTo(droppedOn); 
            if($('#brinkey-placeholder')){
                $('#brinkey-placeholder').hide();
            }
        }
    });
    $("#suggested-brinkey-container").droppable({ 
        accept: ".suggested-brinkey"
    });
	$("#suggested-brinkey-container2").droppable({ 
		accept: ".suggested-brinkey"
    });
	$("#suggested-brinkey-container3").droppable({ 
        accept: ".suggested-brinkey"
    });
}


function makeBrinkeysDroppable3(){
    // making the brinkeys drop work
    $(".suggested-brinkey").draggable({ cursor: "crosshair", revert: "invalid"});
    $("#selected-brinkeys-drop3").droppable({ accept: ".suggested-brinkey", 
        drop: function(event, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().appendTo(droppedOn); 
            if($('#brinkey-placeholder')){
                $('#brinkey-placeholder').hide();
            }
        }
    });
    $("#suggested-brinkey-container").droppable({ 
        accept: ".suggested-brinkey"
    });
	$("#suggested-brinkey-container2").droppable({ 
		accept: ".suggested-brinkey"
    });
	$("#suggested-brinkey-container3").droppable({ 
        accept: ".suggested-brinkey"
    });
}

// display results after button click
$('#check-result').click(function(){
    goldBrinkeysCopy = goldBrinkeys.slice(0);
    correctBrinkeys = 0;
    $('.suggested-brinkey').each(function(){
        if(goldBrinkeys.includes($(this).data('brinkey'))){
            $(this).addClass('correct').children('span').removeClass('ui-icon-arrow-4').addClass('ui-icon-check');
            if($(this).parent().attr('id')=='selected-brinkeys-drop'){ // only count correctly identified brinkeys
                correctBrinkeys++;
            }
            // remove brinkey from goldbrinkeyscopy, then check if any left later
            goldBrinkeysCopy.splice( $.inArray($(this).data('brinkey'), goldBrinkeysCopy), 1);
        }
        else if($(this).parent().attr('id')=='selected-brinkeys-drop') { // only show wrong answers in selected field
            $(this).addClass('incorrect').children('span').removeClass('ui-icon-arrow-4').addClass('ui-icon-close');
        }
    });
    correctRatio = correctBrinkeys / goldBrinkeys.length;
    
    if(correctRatio == 0){
        message = "Helaas, je hebt geen correcte keywords aangegeven!";
    }
    else if(correctRatio < 1){
        message = "Prima gedaan, je hebt er een paar goed!";
    }
    else if(correctRatio == 1){
        message = "Alles goed, geweldig!";
    }
    message = "Het computermodel vindt sommige broodjeaapverhalen moeilijker te identificeren dan andere!"
    message += "<Br/><br/>Hieronder is aangegeven met groen en rood welke classificaties correct waren volgens onze database, en welke niet.";
    
    
    // deal with gold brinkeys that weren't suggested
    missingBrinkeyFound = false;
    goldBrinkeysCopy.forEach(function(entry) {
        $('#gold-brinkeys').append('<p class="suggested-brinkey correct" data-brinkey="'+entry+'">'+entry+' <span class="ui-icon ui-icon-check"></span></p>');
        missingBrinkeyFound = true;
    });
    
    
    if(missingBrinkeyFound){
        message += "<Br/><br/> Onderaan staan de categorie-labels die correct zijn volgens de database. Onderaan kun je ook de hierarchie bekijken, om te kijken of een andere, gerelateerde categorie misschien beter past.";
        $('#missing-gold-brinkeys').fadeIn();
    }
    
    $("#dialog p").html(message);
    $( "#dialog" ).dialog();
    $('.back-btn.hidden').fadeIn();
    
});



// back button
$('.back-btn').click(function(){
    $('#select-brinkeys').fadeOut(500, function(){
        location.reload();
    });
});

$('button').click(function(){
		$('#myFrame').prop('src','treant-js-master/examples/collapsable/index.html').show()
})

// dissertation tooltip
$( function() {
    $( '.dissertation' ).tooltip();
});
