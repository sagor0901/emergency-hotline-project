//function to conver innerText to number
function togetTextToNumber(id) {
  const innerTextValue = document.getElementById(id).innerText;
  const valueConvertToNumber = parseInt(innerTextValue);
  return valueConvertToNumber;
}
// function when button click coin subtraction
function toSubtraction(id) {
  const balance = togetTextToNumber("coin");
  if (balance < 20) {
    alert("Insufficient Balance! minimum 20 coin need to call");
    return false;
  }
  const callRate = balance - 20;
  // console.log(callRate);
  document.getElementById(id).innerText = callRate;
  return true;
}

//all call button working start here
const historyData = [];
//national emergency
document
  .getElementById("national-emergency-call")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");

    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "National Emergency Number",
      serviceNumber: 999,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

    historyData.push(data);
    const historyContainer = document.getElementById("history-contianer");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });
//Police helpline
document
  .getElementById("police-helpline-call")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Police Helpline Number",
      serviceNumber: 999,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

    historyData.push(data);
    const historyContainer = document.getElementById("history-contianer");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });
//fire service
document
  .getElementById("fire-service-btn")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Fire Service Number",
      serviceNumber: 999,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

    historyData.push(data);
    const historyContainer = document.getElementById("history-contianer");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });
//ambulance
document
  .getElementById("ambulance-service-btn")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Ambulance Service",
      serviceNumber: 1994999999,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);
    historyData.push(data);
    const historyContainer = document.getElementById("history-contianer");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });
//women and child
document
  .getElementById("women-child-btn")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Women & Child Helpline",
      serviceNumber: 109,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

    historyData.push(data);
    const historyContainer = document.getElementById("history-contianer");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });

//Anti-corrupiton

document
  .getElementById("anti-corruption-btn")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Anti-Corruption Helpline",
      serviceNumber: 106,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

    historyData.push(data);
    const historyContainer = document.getElementById("history-contianer");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });
//Electricity Helpline

document
  .getElementById("electricity-btn")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Electricity Helpline",
      serviceNumber: 16216,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);
    historyData.push(data);
    const historyContainer = document.getElementById("history-contianer");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });

//Brac helpline

document.getElementById("brac-btn").addEventListener("click", function () {
  const callRateBalance = toSubtraction("coin");
  if (callRateBalance != true) {
    return;
  }

  const data = {
    serviceName: "Brac Helpline",
    serviceNumber: 16445,
    date: new Date().toLocaleTimeString(),
  };
  alert("calling" + " " + data.serviceName + " " + data.serviceNumber);
  historyData.push(data);
  const historyContainer = document.getElementById("history-contianer");
  historyContainer.innerText = "";

  for (const data of historyData) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

    historyContainer.appendChild(div);
  }
});
//Bangladesh Railway Helpline
document.getElementById("railway-btn").addEventListener("click", function () {
  const callRateBalance = toSubtraction("coin");
  if (callRateBalance != true) {
    return;
  }

  const data = {
    serviceName: "Bangladesh Railway Helpline",
    serviceNumber: 163,
    date: new Date().toLocaleTimeString(),
  };
  alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

  historyData.push(data);
  const historyContainer = document.getElementById("history-contianer");
  historyContainer.innerText = "";

  for (const data of historyData) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

    historyContainer.appendChild(div);
  }
});

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-contianer").style.display = "none";
});
//like count section
document;
const likeBtns = document.getElementsByClassName("like-btn");
for (const likeBtn of likeBtns) {
  console.log(likeBtn);
  likeBtn.addEventListener("click", function () {
    const likeCount = togetTextToNumber("like-count");
    const newLikeCount = likeCount + 1;
    document.getElementById("like-count").innerText = newLikeCount;
  });
}
// .addEventListener("click", function () {

// });
