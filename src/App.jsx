import { useState } from 'react';

export default function App() {
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const API_LINK = (message) =>
    `https://api.whatsapp.com/send?phone=62895326932186&text=${message}`;

  function handleSubmit(e) {
    e.preventDefault();

    const text = `
    Pengirim: ${inputs.name}\n
    Telepon: ${inputs.phone}\n
    \n
    ${inputs.message}`;

    window.open(API_LINK(text));
    // fetchPage(API_LINK(text));

    setInputs({
      name: '',
      phone: '',
      message: '',
    });
  }

  // async function fetchPage(link) {
  //   const pageHtml = await fetch(link);
  //   document.getElementById('whatsappPopup').innerHTML = pageHtml;
  //   console.log(pageHtml);
  // }

  return (
    <div className="App">
      <div className="container">
        <div className="inner-container">
          <h2 className="title">Message form</h2>
          <form action="/" method="POST" id="whatsappForm">
            <label htmlFor="sender-name" className="input-container">
              <input
                type="text"
                name="sender-name"
                className="input"
                id="senderNameInput"
                value={inputs.name}
                onChange={(event) =>
                  setInputs({ ...inputs, name: event.target.value })
                }
                required
              />
              <span>Nama</span>
            </label>
            <label htmlFor="phone-number" className="input-container">
              <input
                type="text"
                name="phone-number"
                className="input"
                id="phoneNumberInput"
                value={inputs.phone}
                onChange={(event) =>
                  setInputs({ ...inputs, phone: event.target.value })
                }
                required
              />
              <span>No. HP</span>
            </label>
            <label htmlFor="message-text" className="input-container">
              <textarea
                type="text"
                name="message-text"
                className="input"
                value={inputs.message}
                onChange={(event) =>
                  setInputs({ ...inputs, message: event.target.value })
                }
                required
              ></textarea>
              <span>Pesan</span>
            </label>
            <button
              className="submit-button"
              id="submitBut"
              onClick={handleSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="whatsapp-popup" id="whatsappPopup"></div>
    </div>
  );
}
