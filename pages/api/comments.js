// pages/api/comments.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, comment } = req.body;

    // Тут ви можете зберегти дані у вашу базу даних
    // Для демонстрації ми просто виведемо їх у консоль
    console.log({ name, email, comment });

    // Відповідаємо повідомленням про успішну операцію
    res.status(200).json({ message: 'Коментар успішно відправлено' });
  } else {
    res.status(405).json({ message: 'Метод не дозволено' });
  }
}
