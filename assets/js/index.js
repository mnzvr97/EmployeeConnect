

$("#add_user").submit(function(event){
    Swal.fire('Data uploaded successfully!');
    setTimeout(function(){
       location.reload(1);
     }, 4000);
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url" : `/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        Swal.fire('Data updated successfully!');
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        } 

        if(confirm("Do you confirm deletion?")){
            $.ajax(request).done(function(response){
                Swal.fire('Data deleted successfully!');
                setTimeout(function(){
                    window.location.reload(1);
                 }, 2000);
            })
        }
    })
}