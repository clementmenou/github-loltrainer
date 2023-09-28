<?php
header('Content-Type: text/html; charset=utf-8');
// récupération du numéro de client
if (isset($_GET['action']) && $_GET['action'] === 'get_client_id') {
	sleep(rand(1,5));
	echo "1"; // Je renvoie 1 comme numéro
}
// récupération de la liste des commandes
if (isset($_GET['action']) && $_GET['action'] === 'get_command_list') {
	if (isset($_GET['clientId']) ) {
		if ( $_GET['clientId'] === '1' ) {
			sleep(rand(1,5));
			echo "chemise : short : chaussure"; // Je renvoie cette chaîne
		}
	}
}
?>