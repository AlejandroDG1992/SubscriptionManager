import React, { useEffect, useState } from 'react';

const UsuariosConSuscripciones = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setLoading(true);
      try {
        // Obtener todos los usuarios
        const response = await fetch('http://localhost:5001/api/users');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Usuarios y sus Suscripciones</h1>
      {usuarios.map((usuario) => (
        <div key={usuario.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h2>{usuario.name}</h2>
          <h3>Suscripciones:</h3>
          {usuario.subscriptions && usuario.subscriptions.length > 0 ? (
            <ul>
              {usuario.subscriptions.map((suscripcion) => (
                <li key={suscripcion.id}>
                  {suscripcion.service} - {suscripcion.plan_name} - {suscripcion.price}€
                  <br />
                  <small>Inicio: {suscripcion.date_init} - Fin: {suscripcion.date_end} </small>
                  <br/>
                  Proxima fecha de facturación: {suscripcion.date_billing}
                  <br />
                  Estado: <strong>{suscripcion.status}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p>Sin suscripciones</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default UsuariosConSuscripciones;
