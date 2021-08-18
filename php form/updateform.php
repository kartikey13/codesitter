<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href="./css/style.css">

</head>
<body>
<div class="container my-4">
<?php   
include 'database.php'; 
$id = $_REQUEST['id'];
?>
    <form method="POST" action="update.php?id=<?php echo $id; ?>" enctype="multipart/form-data">
        <h1>Update form</h1>
        
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" name="name" placeholder="Enter Title" required>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" name="email" placeholder="Enter Title" required>
            </div>
           
            <div class="form-group">
                <label>Address</label>
                <textarea class="form-control" name="address" rows="5" required></textarea>
            </div>

            <button type="Submit" name="update" class="update  btn btn-primary" value="Update">Update</button>
    </form>   
  
</div>

</body>
