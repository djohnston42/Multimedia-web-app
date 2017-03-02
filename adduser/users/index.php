<?php
include_once $_SERVER['DOCUMENT_ROOT'] .
		'/Webapp2/admin/includes/magicquotes.inc.php';

		include 'signup.html.php';

		if (isset($_GET['add']))
{
	$pagetitle = 'New User';
	$action = 'addform';
	$text = '';
	$emailtext ='';
	$litid = '';
	$id = '';
	$button = 'Add user';

	include $_SERVER['DOCUMENT_ROOT'] . '/Webapp2/admin/includes/db.inc.php';

	// Build the list of literature
	$sql = "SELECT id, title FROM literature";
	$result = mysqli_query($link, $sql);
	if (!$result)
	{
		$error = 'Error fetching list of literature.';
		include 'error.html.php';
		exit();
	}

	while ($row = mysqli_fetch_array($result))
	{
		$literatures[] = array('id' => $row['id'], 'title' => $row['title']);
	}
	include 'form.html.php';
	exit();
}
	if (isset($_GET['addform']))
	{
	include $_SERVER['DOCUMENT_ROOT'] . '/Webapp2/admin/includes/db.inc.php';

	$text = mysqli_real_escape_string($link, $_POST['text']);
	$emailtext = mysqli_real_escape_string($link, $_POST['emailtext']);
	$literature = mysqli_real_escape_string($link, $_POST['literature']);

	if ($literature == '')
	{
		$error = 'You must choose literature for this user.
				Click &lsquo;back&rsquo; and try again.';
		include 'error.html.php';
		exit();
	}

	$sql = "INSERT INTO user SET
			name='$text',
			email='$emailtext',
			litid='$literature'";
	if (!mysqli_query($link, $sql))
	{
		$error = 'Error adding submitted user.';
		include 'error.html.php';
		exit();
	}
}


include 'searchform.html.php';
?>
