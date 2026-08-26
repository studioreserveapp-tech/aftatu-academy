# Aftatu Academy

Landing del curso de tatuaje para principiantes. Hero en video, descripción del curso y registro al final. Los leads se guardan en **Brevo** (a veces dicho Bravo): email, teléfono SMS y atributos del contacto.

## Cómo está armado

El browser nunca habla con Brevo. El formulario manda un Server Action; el servidor:

1. Valida y normaliza (email en minúsculas, Instagram sin `@`, teléfono con lada).
2. Crea en Brevo los atributos custom si no existen (`INSTAGRAM`, `PORTFOLIO`, `NOTE`, `BACKGROUND`, `COURSE`).
3. Hace `POST /v3/contacts` con `updateEnabled: true` para upsert.
4. Mete el teléfono en `attributes.SMS` con código de país (Brevo no acepta teléfono suelto).
5. Si hay `BREVO_LIST_ID`, agrega el contacto a esa lista.
6. Si hay sender + notify, manda un mail transaccional al estudio.

Atributos que Brevo ya trae: `FNAME`, `LNAME`, `SMS`. Los demás se crean la primera vez que alguien se registra.

## Variables

Copia `.env.example` a `.env.local` (no se commitea):

| Variable | Para qué |
| --- | --- |
| `BREVO_API_KEY` | API key de Brevo. Solo servidor. |
| `BREVO_LIST_ID` | ID numérico de la lista “Curso principiantes”. |
| `BREVO_DEFAULT_COUNTRY_CODE` | Lada si el teléfono viene a 10 dígitos. Default `52`. |
| `BREVO_SENDER_EMAIL` | Remitente verificado, solo si quieres aviso por mail. |
| `BREVO_NOTIFY_EMAIL` | A dónde llega el aviso de inscripción. |
| `NEXT_PUBLIC_HERO_VIDEO_URL` | Video propio del estudio. Si no, se usa `/media/hero.mp4`. |

En Brevo: Settings → SMTP & API → API Keys. El ID de lista está en Contacts → Lists.

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Video del hero

El clip de `public/media/hero.mp4` es un loop de stills de estudio (Pexels / Unsplash). Sustitúyelo por footage propio o pon `NEXT_PUBLIC_HERO_VIDEO_URL`.
