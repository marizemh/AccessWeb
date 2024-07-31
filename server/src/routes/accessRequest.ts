import { Router } from 'express';

const router = Router();

router.post('/approve-request', async (req, res) => {
    const { requesterEmail, approved } = req.body;

    // Aquí puedes implementar la lógica para guardar la decisión en una base de datos o en memoria
    if (approved) {
        console.log(`Solicitud de ${requesterEmail} ha sido aprobada.`);
    } else {
        console.log(`Solicitud de ${requesterEmail} ha sido rechazada.`);
    }

    res.send('Decisión registrada.');
});

// Exporta el enrutador
export default router;
