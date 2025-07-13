export function PostIt({ postIt, eliminarTarea }) {
	const { id, title, description, isImportant } = postIt
	const handleClick = () => eliminarTarea(id)
	return (
		<div className='col'>
			<article
				className='card overflow-auto'
				style={{
					backgroundColor: isImportant ? '#EC7063' : '#FFFFCC',
				}}
			>
				<button
					onClick={handleClick}
					type='button'
					className='btn-close position-absolute end-0'
					aria-label='Close'
				></button>
				<section className='card-body'>
					<h2
						className='card-title fw-bold fs-4'
						contenteditable='plaintext-only'
					>
						{title}
					</h2>
					<p
						className='card-text reenie-beanie-regular fw-medium fs-3'
						contenteditable='plaintext-only'
					>
						{description}
					</p>
				</section>
			</article>
		</div>
	)
}
