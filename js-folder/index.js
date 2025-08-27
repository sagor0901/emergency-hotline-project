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
    alert("balance nai");
    return;
  }
  const callRate = balance - 20;
  // console.log(callRate);
  document.getElementById(id).innerText = callRate;
}

//all call button working start here
const historyData = [];

document
  .getElementById("national-emargency-call")
  .addEventListener("click", function () {
    toSubtraction("coin");

    const data = {
      serviceName: "Fire Service Number",
      serviceNumber: 999,
      date: new Date().toLocaleTimeString(),
    };

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
document
  .getElementById("police-helpline-call")
  .addEventListener("click", function () {
    toSubtraction("coin");
  });
