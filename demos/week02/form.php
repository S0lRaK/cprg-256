<?php

namespace Debugging7\JetBrains;

?>
<!DOCTYPE html>
<html>
<head>
    <title>Web Application</title>
</head>
<body>
<form method="POST">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name"/>
    <input type="submit" value="Show Greeting"/>
</form>
<?php
if (isset($_REQUEST['name'])) {
    echo '<h2>Hello, ' . htmlentities($_REQUEST['name']) . '</h2>';
}
?>
</body>
</html>



