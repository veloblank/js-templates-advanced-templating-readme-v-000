Handlebars.registerHelper('comment_body',
function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}










// function loadIssue(){
//   let issue = {
//     state: "closed",
//     number: 6,
//     created_at: "2016-03-31 16:23:13 UTC",
//     body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
//   }
//
//   let template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
//   let result = template(issue);
//   document.getElementsByTagName("main")[0].innerHTML += result;
// }
