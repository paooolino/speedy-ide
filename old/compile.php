<?php

define("OUTPUT_PATH", "dist/speedy.php");

$html = file_get_contents("build/index.html");
$html = str_replace(
	'<script src="bundle.js"></script>', 
	'<script>' . PHP_EOL . file_get_contents("build/bundle.js") . PHP_EOL . '</script>' . PHP_EOL, 
	$html
);
$html = str_replace(
	'<link rel="stylesheet" href="tachyons.min.css" type="text/css" />', 
	'<style>' . PHP_EOL . file_get_contents("build/tachyons.min.css") . PHP_EOL . '</style>' . PHP_EOL, 
	$html
);
$html = str_replace(
	'<link rel="stylesheet" href="screen.css" type="text/css" />', 
	'<style>' . PHP_EOL . file_get_contents("build/screen.css") . PHP_EOL . '</style>' . PHP_EOL, 
	$html
);
	
file_put_contents(
	OUTPUT_PATH,
	'<?php if(empty($_POST)) { ?>' . PHP_EOL . PHP_EOL .
	$html . PHP_EOL .
	'<?php } else { ?>' . PHP_EOL .
	'<?php } ?>' .PHP_EOL
);
