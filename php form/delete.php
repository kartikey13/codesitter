<style>
    <?php
    include './css/style.css';
    ?>
</style>

<?php
include 'database.php';
$id = $_REQUEST['id'];
$query = " DELETE FROM blogs WHERE id= '".$id."'";
$result = $conn->query($query);
?>
<table>
                <thead>
                    <tr>
                    <th><strong>Name</strong></th>
                    <th><strong>Email</strong></th>
                    <th><strong>Info</strong></th>
                    <th><strong>Edit</strong></th>
                    <th><strong>Delete</strong></th>
                    </tr>
                </thead>

<?php    $sql = "SELECT * FROM blogs";
if($result = $conn->query($sql)){
while($row = mysqli_fetch_assoc($result))
{
?>
<tbody> 
    <tr> 
        <td><?php echo $row["title"];?></td> 
        <td><?php echo  $row["email"];?></td> 
        <td><?php echo $row["info"];?></td> 
        <td>
        <a href="updateform.php?id=<?php echo $row["id"]; ?>">Edit</a>
        </td>
        <td>
        <a href="delete.php?id=<?php echo $row["id"]; ?>">Delete</a>
        </td>
    </tr>
</tbody>

    
<?php            } 
}?>
</table>
