# 🔐 AES ve SHA-256 Şifreleme Uygulaması

Bu proje, metin tabanlı verileri AES algoritması ile şifreleme/çözme ve SHA-256 algoritması ile özet (hash) alma işlemleri gerçekleştiren bir web uygulamasıdır. Uygulama tamamen istemci tarafında (client-side) çalışır ve herhangi bir sunucuya ihtiyaç duymaz.

## 🎯 Projenin Amacı

- **AES (Advanced Encryption Standard)** ile güvenli veri şifreleme ve çözme işlemleri yapmak.
- **SHA-256 (Secure Hash Algorithm)** ile metinlerden geri döndürülemez dijital özetler üretmek.
- Web teknolojilerini (HTML, CSS, JavaScript) kullanarak kriptografi konularını görsel ve interaktif bir şekilde uygulamak.

---

## 🧩 Teknolojiler

| Teknoloji     | Açıklama                                  |
|---------------|--------------------------------------------|
| HTML5         | Sayfa yapısını oluşturmak için kullanıldı. |
| CSS3          | Arayüz tasarımı ve stillendirme.           |
| JavaScript    | Şifreleme, çözme ve hash işlemleri.        |
| CryptoJS      | AES ve SHA-256 işlemleri için kullanıldı. *(Harici script olarak çağrılmış olabilir.)* |

---

## 📁 Dosya Yapısı

📦 ÖDEV
├── AESveSHA_256_UYGULAMASİ.html # Ana HTML dosyası

├── AESveSHA.html # Ana HTML dosyası

├── js1.js # ESveSHA_256_UYGULAMASİ.html js kodları

├── js2.js # AESveSHA.html js kodları

├── style1.css # ESveSHA_256_UYGULAMASİ.html css kodları

├── style2.css # AESveSHA.html css kodları

├── image0.png # Uygulamanın ekran görüntüsü

├── image1.png# Uygulamanın ekran görüntüsü

├── image2.png# Uygulamanın ekran görüntüsü

├── image3.png # Uygulamanın ekran görüntüsü



---

## 🖥️ Kullanım Talimatları

1. Proje klasörünü bilgisayarınıza indirin veya kopyalayın.
2. `AESveSHA_256_UYGULAMASİ.html` dosyasını çift tıklayarak tarayıcıda açın.
3. Açılan tarayıcıda uygulamayı aç butonuna tıklayın.
4. AES Panelinde:
   - Metin girin.
   - `Şifrele` butonu ile AES algoritması kullanarak şifreleyin.
   - `Şifreyi Çöz` ile şifrelenmiş veriyi tekrar çözüp orijinaline ulaşın.
5. SHA-256 Panelinde:
   - Metin girin.
   - `Hash Oluştur` butonuna tıklayarak SHA-256 özeti oluşturun.
6. `Kopyala` butonu ile sonuçları panoya aktarabilirsiniz.

---

## 📸 Ekran Görüntüsü

![Uygulama Görseli](ödev/image0.png)
![Uygulama Görseli](ödev/image1.png)
![Uygulama Görseli](ödev/image2.png)
![Uygulama Görseli](ödev/image3.png)

---

## 🔐 Kriptografi Açıklamaları

- **AES (Advanced Encryption Standard):** Simetrik şifreleme algoritmasıdır. Aynı anahtar hem şifreleme hem de çözme işlemleri için kullanılır.
- **SHA-256:** Tek yönlü bir özetleme algoritmasıdır. Geri çözülemez ve genellikle veri doğrulama, parola saklama gibi işlemlerde kullanılır.

---

## ⚠️ Notlar

- Uygulama sadece eğitim ve demo amaçlıdır.
- Gerçek dünya uygulamalarında, güvenli anahtar yönetimi, HTTPS ve sunucu tarafı şifreleme önemlidir.

---

## 🧑‍💻 Geliştirici

Bu uygulama **[ROJİN ORHAN]** tarafından geliştirilmiştir.  
Haziran 2025 – Kriptografi Projesi

---

## 📝 Lisans

Bu proje kişisel, akademik ve eğitim amaçlı serbestçe kullanılabilir.
