import React from 'react';

const vinylTypeColors = {
	gold: '#ffd700',
	platinum: '#e5e4e2',
	silver: '#c0c0c0',
	normal: '#000000'
};

export default function VinylSVG({ className, type }) {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.33 55.33"><g fill={vinylTypeColors[type]}><circle cx="27.67" cy="27.67" r="3.62"/><path d="M27.67 0a27.67 27.67 0 1 0 0 55.33 27.67 27.67 0 0 0 0-55.33zM17.12 6.88a23.21 23.21 0 0 1 11.21-2.5c.37 0 .62.91.57 2.02l-.29 5.67c-.05 1.1-.29 1.99-.52 1.98h-.42c-2 0-3.9.43-5.6 1.2-1.01.45-2.22.18-2.78-.77l-2.9-4.9c-.56-.95-.26-2.2.73-2.7zM15.99 17.3l-4.28-3.75a1.86 1.86 0 0 1-.06-2.8c.8-.77 2.06-.61 2.73.26l3.5 4.48c.68.87.83 1.9.39 2.32-.45.43-1.45.21-2.28-.51zm1.89 10.37a9.79 9.79 0 1 1 19.58 0 9.79 9.79 0 0 1-19.58 0zm20.29 20.8a23.2 23.2 0 0 1-11.24 2.49c-.41-.01-.7-.93-.64-2.03l.31-5.68c.06-1.1.33-1.98.59-1.97h.48c1.83 0 3.58-.35 5.18-1.01 1.02-.42 2.27-.14 2.87.78l3.1 4.77c.6.93.34 2.16-.65 2.66zm5.45-3.81c-.77.72-2 .55-2.7-.3l-3.6-4.42c-.7-.85-.87-1.84-.43-2.25.44-.4 1.44-.18 2.27.55l4.28 3.74c.84.73.95 1.96.18 2.68z"/></g></svg>
	);
}