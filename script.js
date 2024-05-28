

var db = firebase.database();
function update() {
    var feedbackElement = document.getElementById("feedback");
    var feedback = feedbackElement.value;
    if (feedback !=""){
    db.ref("/feedback" ).set({
        Message: feedback
      })
      .then(() => {
        alert("Feedback submitted successfully");
        feedbackElement.value = "";
    });}
    else
    {
        alert("Feedback Box is Empty")
    }
  }