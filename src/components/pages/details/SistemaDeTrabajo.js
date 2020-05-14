import React from 'react';
import TrabajoEnEquipo from '../../../assets/trabajo-en-equipo.png';
import Template from './Template';

const SistemaDeTrabajo = () => {
	const title = 'Sistema de Trabajo';
	const list = [
		{
			id: 1,
			bold: 'trabajo en equipo > ',
			description: 'nos concebimos como un gran organismo que no existe sin cada una de sus partes.'
		},
		{
			id: 2,
			bold: 'primero el otro > ',
			description:
				' no tenemos empleados ni proveedores sino clientes internos y su satisfacción habilita una maquinaria autoevolutiva.'
		},
		{
			id: 3,
			bold: 'buenas prácticas > ',
			description:
				'orden, limpieza, respeto, puntualidad y valor a lo acordado constituyen la estructura sólida en las participamos y  confiamos.'
		},
		{
			id: 4,
			bold: 'metodologías ágiles > ',
			description:
				'procesos mínimos, medibles y controlados permiten grandes infraestructuras con niveles ínfimos de error.'
		}
	];

	const description =
		'Creemos en una dialéctica de poner al otro en primer lugar que logra en el otro, el deseo de ponernos primero. Así, se activa un mecanismo constante y virtuoso donde la búsqueda del placer en nuestro hacer es lo primero: nos prende fuego la creación y el combustible es el disfrute de compartirla.';

	const altImage = 'Trabajo en equipo';
	return (
		<Template
			title={title}
			list={list}
			description={description}
			image={TrabajoEnEquipo}
			altImage={altImage}
			imageSize="420px"
		/>
	);
};

export default SistemaDeTrabajo;
