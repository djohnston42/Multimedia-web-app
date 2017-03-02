<?php include_once $_SERVER['DOCUMENT_ROOT'] .
		'/Webapp2/admin/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Manage Users</title>
	</head>
	<body>
		<h1>Manage Users</h1>
		<p><a href="?add">Add new user</a></p>
		<form action="" method="get">
			<p>View users satisfying the following criteria:</p>
			<div>
				<label for="literature">By literature:</label>
				<select name="literature" id="literature">
					<option value="">Any literature</option>
					<?php foreach ($literatures as $literature): ?>
						<option value="<?php htmlout($literature['id']); ?>"><?php
								htmlout($literature['title']); ?></option>
					<?php endforeach; ?>
				</select>
			</div>
			<div>
				<label for="text">Containing text:</label>
				<input type="text" name="text" id="text">
			</div>
			<div>
				<input type="hidden" name="action" value="search">
				<input type="submit" value="Search">
			</div>
		</form>
		<p><a href="..">Return to admin home</a></p>
	</body>
</html>
