<?php
include_once $_SERVER['DOCUMENT_ROOT'] .
		'/Webapp2/admin/includes/magicquotes.inc.php';

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
		$error = 'Error adding submitted joke.';
		include 'error.html.php';
		exit();
	}
}

if (isset($_POST['action']) and $_POST['action'] == 'Edit')
{
	include $_SERVER['DOCUMENT_ROOT'] . '/Webapp2/admin/includes/db.inc.php';

	$id = mysqli_real_escape_string($link, $_POST['id']);
	$sql = "SELECT id, name, email, litid FROM user WHERE id='$id'";
	$result = mysqli_query($link, $sql);
	if (!$result)
	{
		$error = 'Error fetching joke details.';
		include 'error.html.php';
		exit();
	}
	$row = mysqli_fetch_array($result);

	$pagetitle = 'Edit user';
	$action = 'editform';
	$text = $row['name'];
	$emailtext = $row['email'];
	$litid = $row['litid'];
	$id = $row['id'];
	$button = 'Update user';

	// Build the list of authors
	$sql = "SELECT id, title FROM literature";
	$result = mysqli_query($link, $sql);
	if (!$result)
	{
		$error = 'Error fetching list of authors.';
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

if (isset($_GET['editform']))
{
	include $_SERVER['DOCUMENT_ROOT'] . '/Webapp2/admin/includes/db.inc.php';

	$text = mysqli_real_escape_string($link, $_POST['text']);
	$emailtext = mysqli_real_escape_string($link, $_POST['emailtext']);
	$literature = mysqli_real_escape_string($link, $_POST['literature']);
	$id = mysqli_real_escape_string($link, $_POST['id']);

	if ($literature == '')
	{
		$error = 'You must choose an author for this user.
				Click &lsquo;back&rsquo; and try again.';
		include 'error.html.php';
		exit();
	}

	$sql = "UPDATE user SET
			name='$text',
			email='$emailtext',
			litid='$literature'
			WHERE id='$id'";
	if (!mysqli_query($link, $sql))
	{
		$error = 'Error updating submitted user.';
		include 'error.html.php';
		exit();
	}
}

if (isset($_POST['action']) and $_POST['action'] == 'Delete')
{
	include $_SERVER['DOCUMENT_ROOT'] . '/Webapp2/admin/includes/db.inc.php';
	$id = mysqli_real_escape_string($link, $_POST['id']);
			// Delete the user
	$sql = "DELETE FROM user WHERE id='$id'";
	if (!mysqli_query($link, $sql))
	{
		$error = 'Error deleting user.';
		include 'error.html.php';
		exit();
	}

	header('Location: .');
	exit();
}




if (isset($_GET['action']) and $_GET['action'] == 'search')
{
	include $_SERVER['DOCUMENT_ROOT'] . '/Webapp2/admin/includes/db.inc.php';

	// The basic SELECT statement
	$select = 'SELECT id, name';
	$from   = ' FROM user';
	$where  = ' WHERE TRUE';

	$litid =  mysqli_real_escape_string($link, $_GET['literature']);
	if ($litid != '') // An author is selected
	{
		$where .= " AND litid='$litid'";
	}


	$text = mysqli_real_escape_string($link, $_GET['text']);
	if ($text != '') // Some search text was specified
	{
		$where .= " AND name LIKE '%$text%'";
	}

	$result = mysqli_query($link, $select . $from . $where);
	if (!$result)
	{
		$error = 'Error fetching users.';
		include 'error.html.php';
		exit();
	}

	while ($row = mysqli_fetch_array($result))
	{
		$users[] = array('id' => $row['id'], 'text' => $row['name']);
	}

	include 'users.html.php';
	exit();
}

// Display search form
include $_SERVER['DOCUMENT_ROOT'] . '/Webapp2/admin/includes/db.inc.php';
$result = mysqli_query($link, 'SELECT id, title FROM literature');
if (!$result)
{
	$error = 'Error fetching literature from database!';
	include 'error.html.php';
	exit();
}

while ($row = mysqli_fetch_array($result))
{
	$literatures[] = array('id' => $row['id'], 'title' => $row['title']);
}

include 'searchform.html.php';
?>
