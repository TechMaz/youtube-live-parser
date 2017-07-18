<?php

function test(){
	return "Hello World";
}

function getChats($id){
	$url = "https://youtube-live-chat-scraper.herokuapp.com/scrape/{$id}";
	$content = file_get_contents($url);
	return $content;
}

function parseChats($id){
	$content = getChats($id);
	$json = json_decode($content, true);
	return $json;
}