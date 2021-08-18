<style>
    <?php
    include './css/style.css';
    include './css/bootstrap.min.css';
    ?>
</style>
<!DOCTYPE html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="container my-4">
    <form method="POST" action="upload.php" enctype="multipart/form-data">
    <h1>Starting form </h1>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" name="name" placeholder="Enter Title" required>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" name="email" placeholder="Enter Email" required>
            </div>
           
            <div class="form-group">
                <label>Address</label>
                <textarea class="form-control" name="address" rows="5" required></textarea>
            </div>

            <button type="Submit" name="submit" class="submit  btn btn-primary" value="Upload">Submit</button>
    </form>   
    
</div>
    
</body>
</html>