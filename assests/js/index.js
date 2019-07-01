$(document).ready( function () {
   var table = $('#table_id').DataTable();
} );


$("#create-new-price").click(() => {
    swal.fire({
        showCancelButton:true,
        
        html:`<div class = swal-card> 
                <h4>New Global Price</h4>
                <label>Unit</label><input id="input1" type="text" placeholder ='ex. "lb", "item", or "bag"'>
                <label>Cost per Unit</label><input id="input2" type="text" placeholder = "ex. 0.00">
                <label>Cost per Unit for Rush Orders</label><input id="input3" type="text" placeholder = "ex. 0.00">
                <label>Driver Pay per Unit</label><input id="input3" type="text" placeholder = "ex. 0.00">
                <label>Driver Pay per Unit for Rush Orders</label><input id="input3" type="text" placeholder = "ex. 0.00">
                <h6>Note: These changes will take effect only for orders created after the current data and time</h6>
              </div>`,
        
        preConfirm:function(){
                        in1= $('#input1').val();
                        in2= $('#input2').val();
                        in3 = $('#input3').val();
                        in4 = $('#input3').val();
                        in5 = $('#input3').val();
        }
    })
                         
        
})

