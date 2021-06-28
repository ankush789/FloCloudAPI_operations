const sendApplicationDataInput = document.querySelector('#sendApplicationDataInput');
const sendGeneralDataInput = document.querySelector('#sendGeneralDataInput');
const sendApplicationDataBtn = document.querySelector('.sendApplicationDataBtn');
const requestApplicationDataBtn = document.querySelector('.requestApplicationDataBtn');
const sendGeneralDataInputBtn = document.querySelector('.sendGeneralDataInputBtn')
const output__1 = document.querySelector('.output__1');
const output__2 = document.querySelector('.output__2');

const outputText = '<p><strong>Output:</strong></p>';

sendApplicationDataBtn.addEventListener('click', (e) => {
  e.preventDefault();
  output__1.classList.remove('hidden');
  const message = sendApplicationDataInput.value;
  floCloudAPI.sendApplicationData(message).then((data) => {
    // for (const [key, obj] of Object.entries(data)) {
    //   a = obj;
    //   console.log(obj);
    // }
    output__1.innerHTML = outputText + JSON.stringify(data, null, 4);
    sendApplicationDataInput.value = '';
  });
});
requestApplicationDataBtn.addEventListener('click', (e) => {
  e.preventDefault();
  output__2.classList.remove('hidden');

  floCloudAPI.requestApplicationData().then((data) => {
    // for (const [key, obj] of Object.entries(data)) {
    //   a = obj;
    //   console.log(obj);
    // }
    output__2.innerHTML = outputText + JSON.stringify(data, null, 4);
  });
});

sendGeneralDataBtn.addEventListener('click', (e) => {
  e.preventDefault();
  output__3.classList.remove('hidden');
  const message = sendGeneralDataInput.value;
  floCloudAPI.sendGeneralData(message).then((data) => {
    // for (const [key, obj] of Object.entries(data)) {
    //   a = obj;
    //   console.log(obj);
    // }
    output__3.innerHTML = outputText + JSON.stringify(data, null, 4);
    sendGeneralDataInput.value = '';
  });
});