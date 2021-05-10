import { useState } from 'react';

export default function App() {
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    message: '',
    images: 'Upload Gambar',
  });

  const API_LINK = (message) =>
    `whatsapp://send/?phone=62895326932186&text=${message}`;

  function resetForm() {
    document.getElementById('whatsappForm').reset();

    setInputs({
      name: '',
      phone: '',
      message: '',
      images: 'Upload Gambar',
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const text = `
    Pengirim: ${inputs.name}\n
    Telepon: ${inputs.phone}\n
    \n
    ${inputs.message}`;

    window.open(API_LINK(text));
    // fetchPage(API_LINK(text));

    resetForm();
  }

  function handleImage(e) {
    const imageInput = e.target;

    const filenames = Object.values(imageInput.files).map((file) => file.name);

    const compiledText = filenames.join(', ');

    console.log(compiledText);

    if (imageInput.value === '')
      return setInputs({ ...inputs, images: 'Upload Gambar' });

    setInputs({
      ...inputs,
      images: compiledText,
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
            <label
              htmlFor="image-input"
              className="input-container image-input-container"
            >
              <input
                type="file"
                name="image-input"
                id="imageInput"
                accept="image/*"
                multiple
                onChange={handleImage}
              />
              <span id="uploadText">{inputs.images}</span>
            </label>
            <button
              className="submit-button"
              id="submitButton"
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
