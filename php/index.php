<?php 
	header("Access-Control-Allow-Origin: *");
	
	$POST = json_decode(file_get_contents("php://input"), true);
	
	switch($POST["action"]) {
		case "fetchdir" :
			// create the root source dir folder, if not exists
			if(!file_exists($POST["source_dir"])) {
				mkdir($POST["source_dir"]);
			}
			
			$filelist = getFileList($POST["source_dir"]);
			
			echo json_encode($filelist);
			
			break;
			
		case "loadfile" :
			
			echo json_encode(array(
				"content" => file_get_contents($POST["filepath"])
			));
			
			break;
	}

/**
 *	recursively get the file tree structure of the specified directory.
 *
 *	@param $dir the relative path of the root directory.
 *
 *	@return an array of entries. Each entry is an associative array containing "name" and optionally a "children" array of entries.
 */
function getFileList($dir, $id="0") {
	$filelist = [];
	if($handle = opendir($dir)) {
		while(false !== ($filename = readdir($handle))) {
			if($filename != "." && $filename != "..") {
				$filepath = $dir . "/" . $filename;
				$next_id = $id . count($filelist);
				$entry = array(
					"name" => $filename,
					"expanded" => false,
					"id" => $next_id,
					"filepath" => $filepath
				);
				if(is_dir($filepath)) {
					$entry["children"] = getFileList($filepath, $next_id);
				}
				$filelist[] = $entry;
			}
		}
		closedir($handle);
	}
	return $filelist;
}