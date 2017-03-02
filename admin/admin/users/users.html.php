<?php include_once $_SERVER['DOCUMENT_ROOT'] .
		'/Webapp2/admin/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Manage users: Search Results</title>
	</head>
	<body>
		<h1>Search Results</h1>
		<?php if (isset($users)): ?>
			<table>
				<tr><th>User</th><th>Options</th></tr>
				<?php foreach ($users as $user): ?>
				<tr valign="top">
					<td><?php htmlout($user['text']); ?></td>
					<td>
						<form action="?" method="post">
							<div>
								<input type="hidden" name="id" value="<?php
										htmlout($user['id']); ?>">
								<input type="submit" name="action" value="Edit">
								<input type="submit" name="action" value="Delete">
							</div>
						</form>
					</td>
				</tr>
				<?php endforeach; ?>
			</table>
		<?php endif; ?>
		<p><a href="?">New search</a></p>
		<p><a href="..">Return to Admin home</a></p>
	</body>
</html>
