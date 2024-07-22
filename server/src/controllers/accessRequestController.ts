import { Request, Response } from "express";
import nodemailer from "nodemailer";

let accessRequests: { email: string; application: string; environment: string; timestamp: Date }[] = [];

export const requestAccess = async (req: Request, res: Response) => {
	const { email, application, environment, accessDuration, approver } = req.body;

	// Validación de acceso
	const isValid = validateAccess(email, application, environment, accessDuration, approver);
	if (!isValid) {
		return res.status(400).send({ message: "Solicitud inválida" });
	}

	// Guardar la solicitud para la verificación de tiempo
	accessRequests.push({ email, application, environment, timestamp: new Date() });

	// Enviar correo al aprobador
	await sendApprovalEmail(approver, email, application, environment);

	res.status(201).send({ message: "Solicitud enviada exitosamente" });
};

const validateAccess = (
	email: string,
	application: string,
	environment: string,
	accessDuration: string,
	approver: string
) => {
	// 1. Verificar que el correo pertenezca a @skydropx.com
	if (!email.endsWith("@skydropx.com")) {
		console.error("Correo inválido: debe ser un correo de @skydropx.com");
		return false;
	}

	// 2. Validar que la aplicación sea válida
	const validApplications = ["Shipkraken", "SoloEnvios", "Skydropx Pro", "Carrier Service", "ecommerce-service"];
	if (!validApplications.includes(application)) {
		console.error("Aplicación inválida");
		return false;
	}

	// 3. Validar que el ambiente sea válido
	const validEnvironments = ["production", "staging", "sandbox", "development"];
	if (!validEnvironments.includes(environment)) {
		console.error("Ambiente inválido");
		return false;
	}

	// 4. Validar duración de acceso
	const validAccessDurations = ["15", "60", "180", "360", "540", "168"];
	if (!validAccessDurations.includes(accessDuration)) {
		console.error("Duración de acceso inválida");
		return false;
	}

	// 5. Validar que el aprobador sea válido
	const validApprovers = ["diego@skydropx.com", "juanma.maffei@skydropx.com", "ricardo@skydropx.com"];
	if (!validApprovers.includes(approver)) {
		console.error("Aprobador inválido");
		return false;
	}

	// 6. Verificar que el desarrollador no haya solicitado acceso a la misma aplicación en el mismo ambiente en menos de 24 horas
	const now = new Date();
	const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

	const recentRequest = accessRequests.find(
		(request) =>
			request.email === email &&
			request.application === application &&
			request.environment === environment &&
			request.timestamp > twentyFourHoursAgo
	);

	if (recentRequest) {
		console.error("El desarrollador ya ha solicitado acceso a esta aplicación en este ambiente en menos de 24 horas.");
		return false;
	}

	// Si todas las validaciones pasan
	return true;
};

const sendApprovalEmail = async (
	approver: string,
	requesterEmail: string,
	application: string,
	environment: string
) => {
	const transporter = nodemailer.createTransport({
		service: "gmail", // Usar Gmail
		auth: {
			user: "marize.mijares@skydropx.com", // Tu correo
			pass: "Gretta45**", // Tu contraseña (considera usar una contraseña de aplicación si es necesario)
		},
	});

	const mailOptions = {
		from: "marize.mijares@skydropx.com",
		to: approver,
		subject: "Nueva solicitud de acceso",
		text: `El desarrollador ${requesterEmail} ha solicitado acceso a ${application} en ${environment}.`,
	};

	await transporter.sendMail(mailOptions);
};
