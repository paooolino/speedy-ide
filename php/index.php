<?php 
	header("Access-Control-Allow-Origin: *");
	
	$POST = json_decode(file_get_contents("php://input"), true);
	
	if($POST["action"] == "fetchdir") {
		
		// create the root source dir folder, if not exists
		if(!file_exists($POST["source_dir"])) {
			mkdir($POST["source_dir"]);
		}
		
		$filelist = array();
		if ($handle = opendir(".")) {
			while ($entry = readdir($handle)) {
				$filelist[] = $entry;
			}
			closedir($handle);
		}
		
		echo json_encode($filelist);
		
	}
	