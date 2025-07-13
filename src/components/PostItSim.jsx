import { useState, useRef } from 'react'
import { v4 as uuid } from 'uuid'
import { PostIt } from './PostIt'

export function PostItSim() {
	const [postIts, setPostIts] = useState([])

	const titleRef = useRef()
	const descriptionRef = useRef()
	const isImportantRef = useRef()

	const agregarTarea = () => {
		const title = titleRef.current.value
		const description = descriptionRef.current.value
		const isImportant = isImportantRef.current.checked
		const descInput = document.getElementById('description')
		const header = document.getElementsByTagName('header').item(0)
		if (description === '') {
			descInput.focus()
			descInput.style.animation =
				'pulse 1s ease-in-out infinite alternate'
			header.classList.add('show-after')
			descInput.oninput = () => {
				descInput.style.animation = ''
				header.classList.remove('show-after')
			}
			return
		}
		setPostIts(prevPostIts => {
			const newPostIt = {
				id: uuid(),
				title: title,
				description: description,
				isImportant: isImportant,
			}
			return [...prevPostIts, newPostIt]
		})
		titleRef.current.value = null
		descriptionRef.current.value = null
		isImportantRef.current.checked = false
	}

	const eliminarTarea = id => {
		const otrosPostIts = postIts.filter(postIt => postIt.id !== id)
		setPostIts(otrosPostIts)
	}

	return (
		<div className='container-fluid'>
			<header>
				<h1 className='fw-bold'>Post-it Simulator!</h1>
				<div className='d-flex flex-column flex-sm-row column-gap-5 row-gap-3 my-2'>
					<input
						type='text'
						ref={titleRef}
						className='form-control'
						placeholder='Título'
						name='title'
						id='title'
					/>
					<input
						type='text'
						ref={descriptionRef}
						className='form-control'
						placeholder='Descripción (campo requerido)'
						name='description'
						id='description'
					/>
					<div className='form-check align-self-center'>
						<label className='form-check-label text-white'>
							<input
								className='form-check-input'
								type='checkbox'
								ref={isImportantRef}
								name='isImportant'
								id='isImportant'
							/>
							¡Importante!
						</label>
					</div>
					<button
						type='button'
						onClick={agregarTarea}
						className='btn btn-dark'
						id='agregarTarea'
					>
						AGREGAR
					</button>
				</div>
			</header>
			<main className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-5 g-5'>
				{postIts.map(postIt => (
					<PostIt
						postIt={postIt}
						key={postIt.id}
						eliminarTarea={eliminarTarea}
					/>
				))}
			</main>
			<footer></footer>
		</div>
	)
}
