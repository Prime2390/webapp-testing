// Losowe imię
function getRandomFirstName() {
    const firstNames = ['Jan', 'Anna', 'Michał', 'Katarzyna', 'Piotr', 'Agnieszka', 'Tomasz', 'Joanna'];
    return firstNames[Math.floor(Math.random() * firstNames.length)];
  }
  
  // Losowe nazwisko
  function getRandomLastName() {
    const lastNames = ['Nowak', 'Kowalski', 'Wiśniewski', 'Wójcik', 'Kamiński', 'Zielińska', 'Szymański'];
    return lastNames[Math.floor(Math.random() * lastNames.length)];
  }
  
  // Losowy email
  function getRandomEmail() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomString = Array.from({ length: 10 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    return `${randomString}@gmail.com`;
  }
  
  // Losowe hasło
  function getRandomPassword(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  }
  
  // Losowa liczba w zakresie 1-31
  function getRandomDay() {
    return Math.floor(Math.random() * 31) + 1;
  }
  
  // Losowa liczba w zakresie 1-12
  function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1;
  }
  
  // Losowa liczba w zakresie 1-200
  function getRandomNumber(max = 200) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  // Eksport funkcji
  module.exports = {
    getRandomFirstName,
    getRandomLastName,
    getRandomEmail,
    getRandomPassword,
    getRandomDay,
    getRandomMonth,
    getRandomNumber,
  };
  