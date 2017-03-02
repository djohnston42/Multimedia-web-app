<?php include_once $_SERVER['DOCUMENT_ROOT'] .
		'/Webapp2/admin/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
	<head>
	<link rel="stylesheet" type="text/css" href="/Webapp2/main.css">
			<!-- Latest compiled and minified CSS -->
			<link rel="stylesheet" href= "/Webapp2/bootstrap.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta charset="utf-8">
		<title><?php htmlout($pagetitle); ?></title>
		<style type="text/css">
		textarea {
			display: block;
			width: 100%;
		}
		</style>
	</head>
	<body>
	<div class="container">
		<h1><?php htmlout($pagetitle); ?></h1>		      
		<form action="?<?php htmlout($action); ?>" method="post">
			<div>
				<label for="text">Type your username here:</label>
				<textarea id="text" name="text" rows="1" cols="15"><?php
						htmlout($text); ?></textarea>
			</div>
			<div>
				<label for="emailtext">Type your email here:</label>
				<textarea id="emailtext" name="emailtext" rows="1" cols="15"><?php
						htmlout($emailtext); ?></textarea>
			</div>
			<div>
				<label for="literature">Literature:</label>
				<select name="literature" id="literature">
					<option value="">Select one</option>
					<?php foreach ($literatures as $literature): ?>
						<option value="<?php htmlout($literature['id']); ?>"<?php
								if ($literature['id'] == $litid)
									echo ' selected="selected"';
								?>><?php htmlout($literature['title']); ?></option>
					<?php endforeach; ?>
				</select>
			</div>
			<div>
				<input type="hidden" name="id" value="<?php
						htmlout($id); ?>">
				<input type="submit" value="<?php htmlout($button); ?>">
			</div>
		</form>
		</div>
		<script src="map.js"></script>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="jquery.min.js"></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="/Webapp2/bootstrap.min.js"></script>
	</body>
</html>
