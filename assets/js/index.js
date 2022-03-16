

$("#add_user").submit(function(event){
    alert("Data Submitted!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serialzeArray();
    console.log(unindexed_array)
})