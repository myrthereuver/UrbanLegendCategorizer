
// making the dissertation drop work on the homepage
$(".dissertation").draggable({ cursor: "crosshair", revert: "invalid"});
$("#drop").droppable({ accept: ".dissertation", 
    drop: function(event, ui) {
        //console.log("drop");
        var dropped = ui.draggable;
        var droppedOn = $(this);
        $(dropped).detach().appendTo(droppedOn);   // actually move element to new container

        // set up brinkey options and save gold brinkeys
        suggestedBrinkeys = dropped.data('suggested-brinkeys').split(';');
		HOOFDcat = suggestedBrinkeys[0]
		SUBcat = suggestedBrinkeys[1]
		BRUNcat = suggestedBrinkeys[2]
        goldBrinkeys = dropped.data('gold-brinkeys').split(';');
		HOOFDcatGold = gold-brinkeys[0]
		SUBcatGold = gold-brinkeys[1]
		BRUNcatGold = gold-brinkeys[2]
        $('#suggested-brinkey-container').html(''); // empty div, in case there's any left over from previous analysis
        $('#suggested-brinkey-container2').append('<p class="suggested-brinkey" data-brinkey='+HOOFDcat+' <span class="ui-icon ui-icon-arrow-4"></span></p>');
        $('#suggested-brinkey-container3').append('<p class="suggested-brinkey" data-brinkey='+SUBcat+' <span class="ui-icon ui-icon-arrow-4"></span></p>');
        $('#suggested-brinkey-container').append('<p class="suggested-brinkey" data-brinkey='+BRUNcat+' <span class="ui-icon ui-icon-arrow-4"></span></p>');
        makeBrinkeysDroppable()
        
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
				$('#select-brinkeys2').fadeIn();
				$('#select-brinkeys3').fadeIn();
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
}

function makeBrinkeysDroppable2(){
    // making the brinkeys drop work
    $(".suggested-brinkey2").draggable({ cursor: "crosshair", revert: "invalid"});
    $("#selected-brinkeys-drop2").droppable({ accept: ".suggested-brinkey2", 
        drop: function(event, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().appendTo(droppedOn); 
            if($('#brinkey-placeholder2')){
                $('#brinkey-placeholder2').hide();
            }
        }
    });
    $("#suggested-brinkey-container2").droppable({ 
        accept: ".suggested-brinkey2"
    });
}

function makeBrinkeysDroppable3(){
    // making the brinkeys drop work
    $(".suggested-brinkey3").draggable({ cursor: "crosshair", revert: "invalid"});
    $("#selected-brinkeys-drop3").droppable({ accept: ".suggested-brinkey3", 
        drop: function(event, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().appendTo(droppedOn); 
            if($('#brinkey-placeholder2')){
                $('#brinkey-placeholder2').hide();
            }
        }
    });
    $("#suggested-brinkey-container3").droppable({ 
        accept: ".suggested-brinkey3"
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
    message = "De keywords zijn opgeslagen in het systeem!"
    message += "<Br/><br/>Hieronder is aangegeven met groen en rood welke keywords door een andere catalogiseerder zijn toegekend.";
    
    
    // deal with gold brinkeys that weren't suggested
    missingBrinkeyFound = false;
    goldBrinkeysCopy.forEach(function(entry) {
        $('#gold-brinkeys').append('<p class="suggested-brinkey correct" data-brinkey="'+entry+'">'+entry+' <span class="ui-icon ui-icon-check"></span></p>');
        missingBrinkeyFound = true;
    });
    
    
    if(missingBrinkeyFound){
        message += "<Br/><br/>Er zijn ook nog keywords die niet in de gesuggereerde lijst zitten, maar wel door de KB zijn toegekend, die staan rechts onderaan.";
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

// dissertation tooltip
$( function() {
    $( '.dissertation' ).tooltip();
});

