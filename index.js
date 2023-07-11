const express = require('express');
const app = express();

// Middleware для парсинга JSON тела запроса
app.use(express.json());

// Обработка GET запроса на главную страницу
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Вложенные маршруты
app.get('/users', (req, res) => {
    // Логика обработки запроса для получения пользователей
    res.send('users');
});

app.post('/users', (req, res) => {
    // Логика обработки запроса для создания пользователя
});

// Обработка ошибок
app.use((err, req, res, next) => {
    // Обработка ошибки
});

// Разные виды запросов и передача данных
app.get('/data', (req, res) => {
    // Обработка GET запроса с использованием параметров из query строки
    const queryParam = req.query.param;

    // Логика обработки запроса
});

app.post('/data', (req, res) => {
    // Обработка POST запроса с данными в теле запроса
    const requestBody = req.body;

    // Логика обработки запроса
});

app.put('/data/:id', (req, res) => {
    // Обработка PUT запроса с параметрами в URL и данными в теле запроса
    const id = req.params.id;
    const requestBody = req.body;

    // Логика обработки запроса
});

app.patch('/data/:id', (req, res) => {
    // Обработка PATCH запроса с параметрами в URL и данными в теле запроса
    const id = req.params.id;
    const requestBody = req.body;

    // Логика обработки запроса
});

app.delete('/data/:id', (req, res) => {
    // Обработка DELETE запроса с параметрами в URL
    const id = req.params.id;

    // Логика обработки запроса
});

// Роут для загрузки документа (картинки)
app.post('/upload', (req, res) => {
    // Логика загрузки документа

    // Возвращение ответа
});

// Добавьте этот обработчик, чтобы предоставить возможность GET запроса на /upload
app.get('/upload', (req, res) => {
    res.send('Upload endpoint');
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
