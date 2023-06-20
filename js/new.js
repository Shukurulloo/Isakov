const clear = document.getElementById("ochir");
const bttn = document.getElementById("hisoblash");
const result = document.getElementById("display");
const q = document.getElementById("q");
const ay = document.getElementById("ay");
const k = document.getElementById("k");
const bo = document.getElementById("bo");
const m = document.getElementById("m");

bttn.onclick = function () {
  const a = parseInt(document.getElementById("birinchi").value);
  const b = parseInt(document.getElementById("ikkinchi").value);

  if (q.onclick) {
    result.value = a + b;
  } else if (ay.checked) {
    result.value = a - b;
  } else if (k.checked) {
    result.value = a * b;
  } else if (bo.checked) {
    result.value = a / b;
  } else if (m.checked) {
    result.value = a % b; 
  } else {
    result.value = 0;
  }
};


clear.onclick = function () {
  result.value = "";
  document.getElementById("birinchi").value = "";
  document.getElementById("ikkinchi").value = "";
};
