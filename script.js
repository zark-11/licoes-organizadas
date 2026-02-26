let lessons = {
  Portugues: [], Geografia: [], Matematica: [], Ciencias: [],
  Historia: [], Ingles: [], Robotica: [], EdFisica: [],
  Etica: [], Artes: []
};
let currentSubject = "Portugues";

function showTab(subject) {
  currentSubject = subject;
  document.getElementById("currentSubjectTitle").textContent = getDisplayName(subject);
  updateList();
}

function getDisplayName(subject) {
  const names = {
    Portugues: "Português", Geografia: "Geografia", Matematica: "Matemática",
    Ciencias: "Ciências", Historia: "História", Ingles: "Inglês",
    Robotica: "Robótica", EdFisica: "Educação Física", Etica: "Ética Cristã", Artes: "Artes"
  };
  return names[subject];
}

function addLesson() {
  const input = document.getElementById("lessonInput");
  const text = input.value.trim();
  if(text === "") { alert("Digite uma lição!"); return; }

  let due = new Date();
  due.setDate(due.getDate() + 2);
  lessons[currentSubject].push({text, due});
  input.value = "";
  updateList();
}

function updateList() {
  const list = document.getElementById("lessonList");
  list.innerHTML = "";
  for(let l of lessons[currentSubject]) {
    const li = document.createElement("li");
    li.textContent = `${l.text} (Entrega: ${l.due.toLocaleDateString()})`;
    list.appendChild(li);
  }
}

showTab("Portugues");
