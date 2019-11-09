
const today = document.getElementById('date');
var button1 = document.getElementById('delete')
var input = document.getElementById('userData');
var savedEvent = document.getElementById('savedData');
var calendar = [
    { a: "" }
]





setInterval(() => {
    const now = moment();
    const date = now.format('dddd MMM Do YYYY');
    today.textContent = date;
}, 1000);






$("#save").click(function (event) {
    event.preventDefault()
    var data = input
    localStorage.setItem("event", data.value);
    $("#savedData").html(localStorage.getItem("event")

    )
    data.value="";

});



$("#delete").click(function () {
    localStorage.clear()




});


/*function renderButtons() {
    var buttons = (function(){
      return `<button>Save</button>`
    });

    $(".save").html(buttons);
  }

renderButtons();*/

