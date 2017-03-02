<?php include_once $_SERVER['DOCUMENT_ROOT'] .
		'/Webapp2/admin/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title><?php htmlout($pagetitle); ?></title>
	</head>
	<body>
		<h1><?php htmlout($pagetitle); ?></h1>
		<form action="?<?php htmlout($action); ?>" method="post">
			<div>
				<label for="title">Title: <input type="text" name="title"
						id="title" value="<?php htmlout($title); ?>"></label>
			</div>
			<div>
				<input type="hidden" name="id" value="<?php
						htmlout($id); ?>">
				<input type="submit" value="<?php htmlout($button); ?>">
			</div>
		</form>
	</body>
</html>
