import { Router } from 'express';

const router = Router();

// Simulación de almacenamiento en memoria para las solicitudes
const accessRequests: any[] = [];

// Ruta GET para /access-request (para listar todas las solicitudes, si es necesario)
router.get('/access-request', (req, res) => {
    res.json(accessRequests);
});

// Ruta POST para /access-request (para crear una nueva solicitud de acceso)
router.post('/access-request', async (req, res) => {
    const { email, application, environment, duration } = req.body;

    // Validar que se reciban todos los campos necesarios
    if (!email || !application || !environment || !duration) {
        return res.status(400).send('Faltan campos requeridos.');
    }

    // Crear una nueva solicitud
    const newRequest = {
        email,
        application,
        environment,
        duration,
        status: 'pending' // Estado inicial de la solicitud
    };

    // Agregar la nueva solicitud al almacenamiento en memoria
    accessRequests.push(newRequest);
    console.log('Nueva solicitud de acceso:', newRequest);

    res.status(201).send('Solicitud de acceso registrada.');
});

// Ruta POST para /approve-request (para aprobar o rechazar solicitudes)
router.post('/approve-request', async (req, res) => {
    const { requesterEmail, approved } = req.body;

    // Buscar la solicitud correspondiente en el almacenamiento
    const request = accessRequests.find(req => req.email === requesterEmail);

    if (!request) {
        return res.status(404).send('Solicitud no encontrada.');
    }

    // Actualizar el estado de la solicitud
    request.status = approved ? 'approved' : 'rejected';

    if (approved) {
        console.log(`Solicitud de ${requesterEmail} ha sido aprobada.`);
    } else {
        console.log(`Solicitud de ${requesterEmail} ha sido rechazada.`);
    }

    res.send('Decisión registrada.');
});

// Exporta el enrutador
export default router;
