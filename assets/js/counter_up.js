function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

//IntersectionObserver
let observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateValue("projects", 400, 459, 3000);
      animateValue("collabs", 1, 3, 3000);
      animateValue("clients", 200, 283, 3000);
      animateValue("cands", 3, 9, 3000);
      observer.disconnect();
    }
  });
});

// observing the target elements
let projects = document.getElementById("projects");
let collabs = document.getElementById("collabs");
let clients = document.getElementById("clients");
let cands = document.getElementById("cands");

observer.observe(projects);
observer.observe(collabs);
observer.observe(clients);
observer.observe(cands);