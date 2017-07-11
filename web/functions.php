<?php

function test(){
	return "Hello World";
}

function getChats($id){
	$url = "https://www.youtube.com/live_chat?v={$id}&is_popout=1";
	$html = file_get_contents($url);
	return $html;
}