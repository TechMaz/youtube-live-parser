<?php

require('../vendor/autoload.php');
include 'functions.php';

$app = new Silex\Application();
$app['debug'] = true;

// Register the monolog logging service
$app->register(new Silex\Provider\MonologServiceProvider(), array(
  'monolog.logfile' => 'php://stderr',
));

//DB
$dbopts = parse_url(getenv('DATABASE_URL'));
$app->register(new Csanquer\Silex\PdoServiceProvider\Provider\PDOServiceProvider('pdo'),
               array(
                'pdo.server' => array(
                   'driver'   => 'pgsql',
                   'user' => $dbopts["user"],
                   'password' => $dbopts["pass"],
                   'host' => $dbopts["host"],
                   'port' => $dbopts["port"],
                   'dbname' => ltrim($dbopts["path"],'/')
                   )
               )
);

// Register view rendering
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));

//Web handlers

$app->get('/', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  $content = 'empty';
  return $app['twig']->render('index.twig', array('content' => $content));
});

$app->get('/video/{vid}', function($vid) use($app) {
  $chats_array = [];
  return $app['twig']->render('video.twig', array('vid' => $vid, 'chats' => $chats_array));
});

$app->get('/url/{url}', function($url) use($app) {
  $content = file_get_contents($url);
  return $app['twig']->render('url.twig', array('content' => $content));
});

$app->get('/db/', function() use($app) {
  $st = $app['pdo']->prepare('SELECT name FROM test_table');
  $st->execute();

  $names = array();
  while ($row = $st->fetch(PDO::FETCH_ASSOC)) {
    $app['monolog']->addDebug('Row ' . $row['name']);
    $names[] = $row;
  }

  return $app['twig']->render('database.twig', array(
    'names' => $names
  ));
});

$app->run();
