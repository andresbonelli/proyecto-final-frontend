<p >
    <img width="100%" src="https://github.com/user-attachments/assets/7b177163-3f7e-48f7-a95e-e90149dc7852"> 
</p>

# Proyecto individual módulo Front End

## Aplicación eCommerce sin pasarela de pagos

## Características

- Como usuario visitante:
  - Navegar la tienda, filtrar productos por categoría (en sub paginas).
  - Ver página de detalles de un producto.
  - Ordenar por precio, más vendidos y más nuevos.
  - Agregar productos a carrito de compras persistente en almacenamiento local.
  - Llegar a última instancia de check-out, donde será instado a regitrarse para completar una compra.
- Como usuario registrado (comprador):
  - Crear una cuenta distinguida tanto por nombre de usuario como e-mail.
  - Modificar datos personales (Nombre, apellido y lista de domicilios de envío), persistente en base de datos.
  - Completar una compra en un simulacro de pago exitoso.
  - Ver historial de compras con detalle de fecha y productos, persistente en base de datos.
- Como usuario empleado (vendedor):
  - Acceder a ruta protegida panel de administrador.
  - Crear, editar, eliminar productos.
  - Ver lista de productos y estadísticas básicas de ventas (filtrado unicamente a sus productos creados).
- Como usuario administrador:
  - Todos los privilegios de empleado.
  - Ver lista de usuarios.
  - Crear nuevos usuarios con rol de empleado (vendedor)
  - Activar y desactivar usuarios, otorgar rol de administrador a los empleados.

## Requisitos

- Node.js (v18.x +)
- npm (v10.x +)

## Instalación

1. Clonar repositorio

```bash
git clone https://github.com/andresbonelli/proyecto-final-frontend
```

2. Navegar a directorio raíz

```bash
cd proyecto_final_frontend
```

3. Instalar dependencias

```bash
npm install
```

4. Crear archivo `.env.local` y añadir a gitignore

```bash
touch .env.local
echo '.env.local' >> .gitignore
```

5. Añadir variables de entorno a `.env.local`:
<details>
<summary>(ver variables)</summary>

> NEXT_PUBLIC_API_URL="https://vocal-nelie-andresbonelli-1d085aa1.koyeb.app"
> SECRET_KEY="encryption_key"  
> NODE_ENV="development"

</details>

6. Ejecutar modo de desarrollo.

```bash
npm run dev
```

> Navegar a la App expuesta en [http://localhost:3000](http://localhost:3000)

## Despliegue demo: https://proyecto-final-frontend-navy.vercel.app/

> [!NOTE]  
> En una futura implementación del backend se añadirá servicio de mail transaccional para verificación de nuevos registros, cambio de contraseña y confirmación de compra.
