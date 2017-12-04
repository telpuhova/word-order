// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     var blocks = $("#input").val().split(' ');
//     var words = [];
//     var numbers = [];
//     var memIndex = 0;
//
//     blocks.forEach(function(block){
//       var flag = false;
//       var index = 0;
//       words.forEach(function(word) {
//         if (block === word) {
//           memIndex = index;
//           flag = true;
//         }
//         index += 1;
//       });
//
//       if (flag) {
//         numbers[memIndex] += 1;
//       }
//       else {
//         words.push(block);
//         numbers.push(1);
//       }
//     });
//
//     var index = 0;
//     words.forEach(function(word) {
//       $("#result").append("<li>" + word + " " + numbers[index] + "</li>")
//       index += 1;
//     });
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var blocks = $("#input").val().split(' ');
    blocks.sort();
    var index = -1;
    var wordCount = 1;
    blocks.forEach(function(block){
      if (index === (blocks.length - 2)){
        wordCount += 1;
        $("#result").append("<li>" + blocks[index] + " " + wordCount + "</li>");
        console.log("else if");
        wordCount = 1;
      } else if (block === blocks[index]){
        wordCount += 1;
        console.log(block + " word count " + wordCount);
        console.log("index " + index);
      } else {
        $("#result").append("<li>" + blocks[index] + " " + wordCount + "</li>");
        console.log("else");
        wordCount = 1;
      }
      index += 1;
    });
  });
});
