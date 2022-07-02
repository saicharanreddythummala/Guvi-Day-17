
let container = document.createElement("div");
container.setAttribute("class","container")

document.body.append(container)

let timer = document.createElement("div");
timer.setAttribute("class","vh-100 text-center fs-1 d-flex align-items-center justify-content-center");

container.appendChild(timer);

let time = 10;
setTimeout(() => {
  time = time - 1;
  timer.innerHTML = time;
  setTimeout(() => {
    time = time - 1;
    timer.innerHTML = time;
    setTimeout(() => {
      time = time - 1;
      timer.innerHTML = time;
      setTimeout(() => {
        time = time - 1;
        timer.innerHTML = time;
        setTimeout(() => {
          time = time - 1;
          timer.innerHTML = time;
          setTimeout(() => {
            time = time - 1;
            timer.innerHTML = time;
            setTimeout(() => {
              time = time - 1;
              timer.innerHTML = time;
              setTimeout(() => {
                time = time - 1;
                timer.innerHTML = time;
                setTimeout(() => {
                  time = time - 1;
                  timer.innerHTML = time;
                  setTimeout(() => {
                    time = time - 1;
                    timer.innerHTML = `Happy Independence Day!!`;
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

