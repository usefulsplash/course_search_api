var updateView = async (button) => {
  if (button.dataset.querytype == "by_code") {
    let querycode = document.querySelector("#codeQuery").value;
    api = `https://restapi-course-search.herokuapp.com/api/by_course_code/${querycode}`;
    document.querySelector("#codeQuery").value = "";
  }
  if (button.dataset.querytype == "by_title") {
    let querytitle = document.querySelector("#titleQuery").value;
    api = `https://restapi-course-search.herokuapp.com/api/by_title/${querytitle}`;
    document.querySelector("#titleQuery").value = "";
  }
  if (button.dataset.querytype == "by_instructor") {
    let queryname = document.querySelector("#instructorQuery").value;
    api = `https://restapi-course-search.herokuapp.com/api/by_instructor/${queryname}`;
    document.querySelector("#instructorQuery").value = "";
  }
  if (button.dataset.querytype == "by_level") {
    let querylevel = document.querySelector("#levelQuery").value;
    api = `https://restapi-course-search.herokuapp.com/api/by_level/${querylevel}`;
    document.querySelector("#levelQuery").value = "";
  }
  if (button.dataset.querytype == "combined") {
    let cqueryname = document.querySelector("#combinedNameQuery").value;
    let cquerylevel = document.querySelector("#combinedLevelQuery").value;
    api = `https://restapi-course-search.herokuapp.com/api/combined_query/${cqueryname}/${cquerylevel}`;
    document.querySelector("#combinedNameQuery").value = "";
    document.querySelector("#combinedLevelQuery").value = "";
  }
  const data = await fetch(api);
  const model = await data.json();
  render_view(model);
};

var render_view = (model) => {
  var source = document.querySelector("#show_results_view").innerHTML;
  var template = Handlebars.compile(source);
  var html = template(model);

  document.querySelector("#results").innerHTML = html;
};
