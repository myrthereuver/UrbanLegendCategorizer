
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
        goldBrinkeys = dropped.data('gold-brinkeys').split(';');
        $('#suggested-brinkey-container').html(''); // empty div, in case there's any left over from previous analysis
        for(key in suggestedBrinkeys){
            $('#suggested-brinkey-container').append('<p class="suggested-brinkey" data-brinkey="'+suggestedBrinkeys[key]+'">'+suggestedBrinkeys[key]+' <span class="ui-icon ui-icon-arrow-4"></span></p>');
        }
        makeBrinkeysDroppable()


// making the dissertation drop work on the homepage
$(".dissertation").draggable({ cursor: "crosshair", revert: "invalid"});
$("#drop").droppable({ accept: ".dissertation", 
    drop: function(event, ui) {
        //console.log("drop");
        var dropped = ui.draggable;
        var droppedOn = $(this);
        $(dropped).detach().appendTo(droppedOn);   // actually move element to new container

		
		// set up brinkey options and save gold brinkeys
        suggestedBrinkeys2 = dropped.data('suggested-brinkeys2').split(';');
        goldBrinkeys2 = dropped.data('gold-brinkeys2').split(';');
        $('#suggested-brinkey-container2').html(''); // empty div, in case there's any left over from previous analysis
        for(key in suggestedBrinkeys2){
            $('#suggested-brinkey-container2').append('<p class="suggested-brinkey2" data-brinkey2="'+suggestedBrinkeys2[key]+'">'+suggestedBrinkeys2[key]+' <span class="ui-icon ui-icon-arrow-4"></span></p>');
        }
        makeBrinkeysDroppable2()
		


// making the dissertation drop work on the homepage
$(".dissertation").draggable({ cursor: "crosshair", revert: "invalid"});
$("#drop").droppable({ accept: ".dissertation", 
    drop: function(event, ui) {
        //console.log("drop");
        var dropped = ui.draggable;
        var droppedOn = $(this);
        $(dropped).detach().appendTo(droppedOn);   // actually move element to new container

				
		// set up brinkey options and save gold brinkeys
        suggestedBrinkeys3 = dropped.data('suggested-brinkeys3').split(';');
        goldBrinkeys3 = dropped.data('gold-brinkeys3').split(';');
        $('#suggested-brinkey-container3').html(''); // empty div, in case there's any left over from previous analysis
        for(key in suggestedBrinkeys3){
            $('#suggested-brinkey-container3').append('<p class="suggested-brinkey3" data-brinkey3="'+suggestedBrinkeys3[key]+'">'+suggestedBrinkeys3[key]+' <span class="ui-icon ui-icon-arrow-4"></span></p>');
        }
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

// display results after button click
$('#check-result').click(function(){
    goldBrinkeysCopy2 = goldBrinkeys2.slice(0);
    correctBrinkeys = 0;
    $('.suggested-brinkey2').each(function(){
        if(goldBrinkeys2.includes($(this).data('brinkey2'))){
            $(this).addClass('correct').children('span').removeClass('ui-icon-arrow-4').addClass('ui-icon-check');
            if($(this).parent().attr('id')=='selected-brinkeys-drop2'){ // only count correctly identified brinkeys
                correctBrinkeys2++;
            }
            // remove brinkey from goldbrinkeyscopy, then check if any left later
            goldBrinkeysCopy2.splice( $.inArray($(this).data('brinkey2'), goldBrinkeysCopy2), 1);
        }
        else if($(this).parent().attr('id')=='selected-brinkeys-drop2') { // only show wrong answers in selected field
            $(this).addClass('incorrect').children('span').removeClass('ui-icon-arrow-4').addClass('ui-icon-close');
        }
    });
    correctRatio2 = correctBrinkeys2 / goldBrinkeys2.length;
    
    if(correctRatio2 == 0){
        message = "Helaas, je hebt geen correcte keywords aangegeven!";
    }
    else if(correctRatio2 < 1){
        message = "Prima gedaan, je hebt er een paar goed!";
    }
    else if(correctRatio2 == 1){
        message = "Alles goed, geweldig!";
    }
    message = "De keywords zijn opgeslagen in het systeem!"
    message += "<Br/><br/>Hieronder is aangegeven met groen en rood welke keywords door een andere catalogiseerder zijn toegekend.";
    
    // deal with gold brinkeys that weren't suggested
    missingBrinkeyFound = false;
    goldBrinkeysCopy2.forEach(function(entry) {
        $('#gold-brinkeys2').append('<p class="suggested-brinkey2 correct" data-brinkey2="'+entry+'">'+entry+' <span class="ui-icon ui-icon-check"></span></p>');
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


function makeBrinkeysDroppable3(){
    // making the brinkeys drop work
    $(".suggested-brinkey3").draggable({ cursor: "crosshair", revert: "invalid"});
    $("#selected-brinkeys-drop3").droppable({ accept: ".suggested-brinkey3", 
        drop: function(event, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().appendTo(droppedOn); 
            if($('#brinkey-placeholder3')){
                $('#brinkey-placeholder3').hide();
            }
        }
    });
    $("#suggested-brinkey-container3").droppable({ 
        accept: ".suggested-brinkey3"
    });
}

// display results after button click
$('#check-result').click(function(){
    goldBrinkeysCopy3 = goldBrinkeys3.slice(0);
    correctBrinkeys = 0;
    $('.suggested-brinkey3').each(function(){
        if(goldBrinkeys3.includes($(this).data('brinkey3'))){
            $(this).addClass('correct').children('span').removeClass('ui-icon-arrow-4').addClass('ui-icon-check');
            if($(this).parent().attr('id')=='selected-brinkeys-drop2'){ // only count correctly identified brinkeys
                correctBrinkeys3++;
            }
            // remove brinkey from goldbrinkeyscopy, then check if any left later
            goldBrinkeysCopy3.splice( $.inArray($(this).data('brinkey3'), goldBrinkeysCopy3), 1);
        }
        else if($(this).parent().attr('id')=='selected-brinkeys-drop3') { // only show wrong answers in selected field
            $(this).addClass('incorrect').children('span').removeClass('ui-icon-arrow-4').addClass('ui-icon-close');
        }
    });
    correctRatio3 = correctBrinkeys3 / goldBrinkeys3.length;
    
    if(correctRatio3 == 0){
        message = "Helaas, je hebt geen correcte keywords aangegeven!";
    }
    else if(correctRatio3 < 1){
        message = "Prima gedaan, je hebt er een paar goed!";
    }
    else if(correctRatio3 == 1){
        message = "Alles goed, geweldig!";
    }
    message = "De keywords zijn opgeslagen in het systeem!"
    message += "<Br/><br/>Hieronder is aangegeven met groen en rood welke keywords door een andere catalogiseerder zijn toegekend.";
    
    // deal with gold brinkeys that weren't suggested
    missingBrinkeyFound = false;
    goldBrinkeysCopy2.forEach(function(entry) {
        $('#gold-brinkeys2').append('<p class="suggested-brinkey2 correct" data-brinkey2="'+entry+'">'+entry+' <span class="ui-icon ui-icon-check"></span></p>');
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

