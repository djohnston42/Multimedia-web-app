<?php
include_once $_SERVER['DOCUMENT_ROOT'] .
		'/Webapp2/admin/includes/magicquotes.inc.php';

if (isset($_GET['add']))
{
	$pagetitle = 'New Literature';
	$action = 'addform';
	$title = '';
	$id = '';
	$button = 'Add literature';

	include 'form.html.php';
	exit();
}

if (isset($_GET['addform']))
{
	include $_SERVER['DOCUMENT_ROOT'] . '/Webapp2/admin/includes/db.inc.php';

	$title = mysqli_real_escape_string($link, $_POST['title']);
	$sql = "INSERT INTO literature SET
			title='$title'";
	if (!mysqli_query($link, $sql))
	{
		$error = 'Error adding submitted literature.';
		include 'error.html.php';
		exit();
	}

	header('Location: .');
	exit();
}

if (isset($_POST['action']) and $_POST['action'] == 'Delete')
{
	include $_SERVER['DOCUMENT_ROOT'] . '/Webapp2/admin/includes/db.inc.php';
	$id = mysqli_real_escape_string($link, $_POST['id']);

		// Delete the literature
	$sql = "DELETE FROM literature WHERE id='$id'";
	if (!mysqli_query($link, $sql))
	{
		$error = 'Error deleting literature.';
		include 'error.html.php';
		exit();
	}

	header('Location: .');
	exit();
}

// Display literature list
include $_SERVER['DOCUMENT_ROOT'] . '/Webapp2/admin/includes/db.inc.php';
$result = mysqli_query($link, 'SELECT id, title FROM literature');
if (!$result)
{
	$error = 'Error fetching authors from database!';
	include 'error.html.php';
	exit();
}

while ($row = mysqli_fetch_array($result))
{
	$literatures[] = array('id' => $row['id'], 'title' => $row['title']);
}

include 'authors.html.php';
?>
