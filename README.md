# Minneapolis Tattoo Academy

Landing del curso de tatuaje para principiantes. Español por defecto; el header cambia a inglés. El formulario de inscripción va a **FormSubmit** (`refernantattoo@gmail.com`).

## Cómo está armado

El formulario manda un Server Action. El servidor:

1. Valida y normaliza (email, Instagram, teléfono).
2. Envía los datos a [FormSubmit](https://formsubmit.co/documentation).
3. FormSubmit escribe a `refernantattoo@gmail.com` y manda una **confirmación automática** al email del interesado (`_autoresponse`).

La primera vez hay que abrir el correo de activación que FormSubmit manda a `refernantattoo@gmail.com` y confirmar el formulario. El dominio del sitio es `https://www.minneapolistattooacademy.com/`.

## Local

```bash
npm install
npm run dev
```
