import app from './app';
const PORT = 3003;

app.listen(PORT, () => {
    console.info(`LISTENING on PORT: ${PORT}`);
});