<?php

function test(){
	return "Hello World";
}

function getChats($id){
	$url = "https://www.youtube.com/live_chat?v={$id}";
	$html = file_get_contents($url);
	return $html;
}