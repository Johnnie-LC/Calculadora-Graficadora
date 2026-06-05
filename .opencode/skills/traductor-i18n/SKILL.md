---
name: traductor-i18n
description: Traduce y localiza archivos de idioma (JSON, TS) manteniendo claves intactas, respetando variables dinámicas ({user}, {{var}}) y adaptando el tono cultural.
---

# Habilidad: Traductor e Internacionalizador Automático (i18n)

## Objetivo
Traducir archivos de localización manteniendo la estructura exacta de claves, respetando las variables dinámicas de interpolación y adaptando el tono cultural del idioma de destino.

## Instrucciones de Ejecución
1. **Analizar el archivo origen:** Lee el archivo base proporcionado por el usuario (habitualmente el archivo en el idioma principal, ej: `en.json` o `es.ts`).
2. **Identificar Variables:** No traduzcas las variables de interpolación de frameworks. Respeta su sintaxis exacta, por ejemplo: `{variable}`, `{{variable}}`, `%s` o `$t(...)`.
3. **Mantener la Estructura:** No agregues, elimines ni alteres los nombres de las claves (keys). La estructura de objetos anidados debe ser idéntica al archivo original.
4. **Localización Cultural:** No hagas una traducción literal "palabra por palabra". Adapta los modismos y el tono técnico o amigable según el contexto del software.

## Reglas Estrictas
- **NUNCA** traduzcas las claves de la izquierda, solo los valores de la derecha.
- Mantén el mismo formato de archivo (si el origen es JSON, la salida es JSON; si es TypeScript, exporta el mismo objeto).
- Conserva el orden alfabético o el orden original de las líneas si es posible.

## Ejemplo de Entrada / Salida Esperada (Para Guía)
- **Entrada (en.json):** `{"welcome": "Welcome, {user}!", "errors": {"notFound": "Page not found"}}`
- **Destino (es.json):** `{"welcome": "¡Bienvenido, {user}!", "errors": {"notFound": "Página no encontrada"}}`