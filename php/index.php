<?php 
	header("Access-Control-Allow-Origin: *");
	
	$POST = json_decode(file_get_contents("php://input"), true);
	
	if($POST["action"] == "fetchdir") {
		
		// create the root source dir folder, if not exists
		if(!file_exists($POST["source_dir"])) {
			mkdir($POST["source_dir"]);
		}
		
		$filelist = getFileList($POST["source_dir"]);
		
		echo json_encode($filelist);
		
	}

/**
 *	recursively get the file tree structure of the specified directory.
 *
 *	@param $dir the relative path of the root directory.
 *
 *	@return an array of entries. Each entry is an associative array containing "name" and optionally a "children" array of entries.
 */
function getFileList($dir) {
	$filelist = [];
	if($handle = opendir($dir)) {
		while(false !== ($entry = readdir($handle))) {
			if($entry != "." && $entry != "..") {
				$filepath = $dir . "/" . $entry;
				if(is_dir($filepath)) {
					$filelist[] = array(
						"name" => $entry,
						"children" => getFileList($filepath)
					);
				} else {
					$filelist[] = array("name" => $entry);
				}
			}
		}
		closedir($handle);
	}
	return $filelist;
}