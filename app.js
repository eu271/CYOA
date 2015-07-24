var itemTemplate;
var gameTemplate;
var navTemplate;

var objectsById = {};
var typesById = {};

var vista = {};

var objectsSelected = {};


var loadTemplates = function(){
	itemTemplate = $('#itemTemplate').html();
	Mustache.parse(itemTemplate);
	
	gameTemplate = $('#gameTemplate').html();
	Mustache.parse(gameTemplate);
	
	navTemplate = $('#navTemplate').html();
	Mustache.parse(navTemplate);
	
	//Delete html templates.
	$('#templates').html('');
	
	//loadObjects
	for(var i=0, len = data.cardTypes.length; i < len; i++) {
		
		typesById["cardTypes-"+data.cardTypes[i].id] = data.cardTypes[i];
		
		for( var j=0, len1 = data.cardTypes[i].cards.length; j < len1; j++){
			objectsById["card-"+data.cardTypes[i].cards[j].id] = data.cardTypes[i].cards[j];
			data.cardTypes[i].cards[j]["cardType"] = data.cardTypes[i];
		}
		
	}
	
	vista["playerPoints"] = $('#game-player-points');
	
}

var renderItem = function(item){
	return Mustache.render(itemTemplate, item);
}

var renderGame = function(item){
	return Mustache.render(gameTemplate, item);
}

var renderNav = function(nav){
	return Mustache.render(navTemplate, nav);
}

var mostrarType = function(id){
	$('.cardTypes').css('display', 'none');
	$('#cardTypes-'+id).css('display', 'block');
	
	$('.navLink').removeClass('navLink-seleccionado');
	$('#navLink-cardTypes-'+id).addClass('navLink-seleccionado');
}


//This horrible monstrosity needs an update.
var click = function(id) {
	
	var obj = objectsById[id];
	var minPoints = 0,
		points = data.game.player.points,
		value = obj.value;
		
	if( obj["cardType"].isOnlyOne ){
		for( var key in objectsSelected){
			if( objectsSelected.hasOwnProperty(key) ){
				if( objectsSelected[key]["cardType"] == obj["cardType"] &&
					objectsSelected[key] != obj){
					
					var oldObject = objectsSelected[key];
					
					if ( !obj.selected ){
						if( oldObject.value > 0 ){
							if( minPoints > points - oldObject.value + value){
								alert("algo raro");
								return;
							}else{
								$('#card-'+oldObject.id).removeClass("card-selected");
								delete objectsSelected["card-"+oldObject.id];
								data.game.player.points -= oldObject.value;
								oldObject.selected = false;
							}
						}else{
							$('#card-'+oldObject.id).removeClass("card-selected");
							delete objectsSelected["card-"+oldObject.id];
							data.game.player.points -= oldObject.value;
							oldObject.selected = false;
						}
					}
				}
			}
		}
	}
		
	if( minPoints <= points + value && !obj.selected ){
		
		$('#'+id).addClass("card-selected");
		objectsSelected[id] = obj;
		
		data.game.player.points += value;
		$('#game-player-points').text(data.game.player.points);
		
				
		obj.selected = true;
	}else if ( obj.selected ){
		if ( value > 0 ) {
			if ( minPoints > points - value ){
				obj.selected = true;
				return;
			}
		}
		$('#'+id).removeClass("card-selected");
		delete objectsSelected[id];
		data.game.player.points -= value;
		
		$('#game-player-points').text(data.game.player.points);
		
		obj.selected = false;
	}else{
		obj.selected = false;
	}
}

$(document).ready(function(){
	loadTemplates();
	
	
	
	$('#game').html(renderGame(data));
	$('#cards').append(renderItem(data));
	$('#nav').append(renderNav(data));
	
	mostrarType(typesById[Object.keys(typesById)[0]].id);
	
	$('.card').click(function(){
		click($(this).attr('id'));
	});
	
});