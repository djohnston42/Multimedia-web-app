<?php include_once $_SERVER['DOCUMENT_ROOT'] .
		'/Webapp2/admin/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Manage Literature</title>
	</head>
	<body>
		<h1>Manage Literature</h1>
		<p><a href="?add">Add new literature</a></p>
		<ul>
			<?php foreach ($literatures as $literature): ?>
				<li>
					<form action="" method="post">
						<div>
							<?php htmlout($literature['title']); ?>
							<input type="hidden" name="id" value="<?php
									echo $literature['id']; ?>">
							<input type="submit" name="action" value="Edit">
							<input type="submit" name="action" value="Delete">
						</div>
					</form>
				</li>
			<?php endforeach; ?>
		</ul>
		<p><a href="..">Return to admin home</a></p>
	</body>
</html>
