
  // Matrix arka plan animasyonu (önceki örnekten)
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  let width, height;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const letters = '0123456789';
  const fontSize = 20;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#f0f0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(draw, 60);

  // AES şifreleme ve şifre çözme fonksiyonları (CryptoJS kullanılıyor)
  const input = document.getElementById('aes-input');
  const keyInput = document.getElementById('aes-key');
  const encryptBtn = document.getElementById('encrypt-btn');
  const decryptBtn = document.getElementById('decrypt-btn');
  const aesOutput = document.getElementById('aes-output');

  encryptBtn.addEventListener('click', () => {
    const text = input.value.trim();
    const key = keyInput.value.trim();

    if (!text || !key) {
      aesOutput.textContent = 'Lütfen metin ve anahtar giriniz!';
      return;
    }

    try {
      const encrypted = CryptoJS.AES.encrypt(text, key).toString();
      aesOutput.textContent = encrypted;
    } catch (e) {
      aesOutput.textContent = 'Şifreleme sırasında hata oluştu.';
    }
  });

  decryptBtn.addEventListener('click', () => {
    const encryptedText = input.value.trim();
    const key = keyInput.value.trim();

    if (!encryptedText || !key) {
      aesOutput.textContent = 'Lütfen şifreli metin ve anahtar giriniz!';
      return;
    }

    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
      if (!decrypted) throw new Error();
      aesOutput.textContent = decrypted;
    } catch (e) {
      aesOutput.textContent = 'Şifre çözme başarısız. Anahtar doğru mu?';
    }
  });

  // SHA-256 hash fonksiyonu
  const shaInput = document.getElementById('sha-input');
  const hashBtn = document.getElementById('hash-btn');
  const shaOutput = document.getElementById('sha-output');

  hashBtn.addEventListener('click', () => {
    const text = shaInput.value.trim();
    if (!text) {
      shaOutput.textContent = 'Lütfen metin giriniz.';
      return;
    }

    try {
      const hash = CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
      shaOutput.textContent = hash;
    } catch (e) {
      shaOutput.textContent = 'Hash hesaplama sırasında hata oluştu.';
    }
  });
  function copyToClipboard(elementId) {
  const outputElement = document.getElementById(elementId);
  const text = outputElement.textContent;

  if (!text) {
    alert('Kopyalanacak bir metin bulunamadı.');
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    alert('Metin panoya kopyalandı!');
  }).catch(() => {
    alert('Kopyalama başarısız.');
  });
}

