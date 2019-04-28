// id = # class = .
$(document).ready(function(){
  $('#form-reg').submit(function(e){

    // this will prevent submit
    e.preventDefault()
   // console.log($('#userphoto')[0].files[0]);
 


    // set value by
    // $('#username').val('eded')
    var data ={
      //key value
      username : $('#username').val(),
      password : $('#password').val(),
      address : $('#address').val(),
      userphoto : $('#userphoto')[0].files[0]
    }
    console.log(data['username'])


    var formdata = new FormData();
    //object 

    for (key in data){
      console.log(key)
      console.log(data[key])
    }
    for (key in data){
      formdata.append(key, data[key]);
    }

    $.ajax(
{
  url :"http://localhost:3000/registration",
  method:"post",
  contentType: false,
  processData: false,
  data: formdata,
  dataType:'json',
  success: function(result,status){

        },
        error:function(jqXHR,status){

        }
}
      )



     // formdata.append(username, $('#username').val());
     // formdata.append(password, $('#password').val());
     // formdata.append(address, $('#username').val());

//     // console.log(data.username+'||'+data.password);
//     console.log(data.username);
//     console.log(data.password);
//     console.log(data.address);

// //     $('#btnsubmit').click(()=>{
// //        $('#btnsubmit').addClass('newnew')
// //    })

//   // pass value in key and object or json
//     $.ajax(
//       {
//         url: 'http://localhost:3000/registration',
//         method:'POST',
//         data:JSON.stringify(data),
//         contentType:'application/json',
//         dataType:'json',
//         success: function(result,status,jqXHR){
// console.log(result);
// console.log(status);
//         },
//         error:function(jqXHR,status){

//         }
//       }
//     )

   })
 })
