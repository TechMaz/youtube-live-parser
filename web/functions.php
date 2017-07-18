<?php

function test(){
	return "Hello World";
}

function getChats($id){
	$url = "https://youtube-live-chat-scraper.herokuapp.com/scrape/{$id}";
	$json = file_get_contents($url);
	return $json;
}