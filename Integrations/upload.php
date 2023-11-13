<?php
  $file_name = $_FILES['file']['name']; //getting file name
  $tmp_name = $_FILES['file']['tmp_name']; //getting temp_name of file 
  $file_up_name = time().$file_name; //making file name dynamic by adding time before file name
  move_uploaded_file($tmp_name, "files/".$file_up_name); //(create a 'files' folder which is the specified) that files will be moved to with dynamic name 
?>