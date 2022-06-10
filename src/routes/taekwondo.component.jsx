import { connectFirestoreEmulator } from 'firebase/firestore';
import React, { useState } from 'react';
import { quizResults } from '../util/logic';

const Taekwondo = () => {
	const [formData, setFormData] = useState({});
	const [popQuiz, popQuizState] = useState(false);
	const [quizSection, setQuizSection] = useState(true);
	const [popInfo, popInfoState] = useState(false);

	const handleOnChange = (e) => {
		const { name, checked } = e.target;
		setFormData({ ...formData, [name]: checked });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		const res = await quizResults(formData);
		console.log(res);
		popQuizState(false);
		setQuizSection(true);
	};

	const handlePopState = () => {
		popQuizState(!popQuiz);
	};
	const handleNext = (e) => {
		e.preventDefault();
		setQuizSection(false);
		document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
		
	};

	return (
		<div className='taekwondo-container'>
			<div className='side-bar'>
				<div className='quiz-box'>
					<p>
						Find out the programs that will benefit you the most with a Quick
						Quiz.
					</p>
					<button type='button' onClick={handlePopState}>
						Take Quiz
					</button>
				</div>
				<div className='recommendation'>
					<p>Your score is 10 your recommended programs are</p>
					<ol>
						<li>Someshit</li>
						<li>Someshit</li>
					</ol>{' '}
				</div>
			</div>
			<div className='main-content'>
				<h3>Behavioral Taekwondo Programs</h3>
				<div className='self-control'>
					<h2>Level 1-Self-Control</h2>
					<p>
						Self-Control and basic taekwondo principles are combined in this
						course along with foundational process teaching aimed at core
						principles of decision making and leadership skill development.{' '}
					</p>
					<div className='belts'>
						<div className='belt'>
							<div className='white box'></div>
							<p>White Belt</p>
						</div>
						<div className='belt'>
							<div className='yellow box'></div>
							<p>Yellow Belt</p>
						</div>
						<div className='belt'>
							<div className='orange box'></div>
							<p>Orange Belt</p>
						</div>
					</div>
				</div>
				<div className='self-awareness'>
					<h2>Level 2-Self-Awareness</h2>
					<p>
						Self-Awareness and novice taekwondo principles are brought together
						with lessons that are designed to expand upon the processing skills
						introduced with self-control. These lessons are designed to increase
						ones awareness of the power they hold to influence there environment
						through self evident accomplishments while introducing steps of true
						confidence development.{' '}
					</p>
					<div className='belts'>
						<div className='belt'>
							<div className='green box'></div>
							<p>Green Belt</p>
						</div>
						<div className='belt'>
							<div className='purple box'></div>
							<p>Purple Belt</p>
						</div>
						<div className='belt'>
							<div className='lightBlue box'></div>
							<p>Light Blue Belt</p>
						</div>
					</div>
				</div>
				<div className='strength'>
					<h2>Level 3-Strength of Character</h2>
					<p>
						Strength-of-Character and advanced taekwondo principles, standing on
						the principles established in the previous courses advanced
						practitioners start developing their own concrete sense of self.
						Introducing lesson to master over a life time, possessing the
						ability to lead with morally sound character and free from adverse
						influence that surrounds marks the traits of student who has the
						endurance and commitment to complete this course.{' '}
					</p>
					<div className='belts'>
						<div className='belt'>
							<div className='darkBlue box'></div>
							<p>Dark Blue Belt</p>
						</div>
						<div className='belt'>
							<div className='brown box'></div>
							<p>Brown Belt</p>
						</div>
						<div className='belt'>
							<div className='red box'></div>
							<p>Red Belt</p>
						</div>
					</div>
				</div>
				<div className='black-belt'>
					<h2>Black Belt Classes</h2>
					<p>
						Black Belt Classes are not for the faint of heart. Black belt
						classes are not for bragging rights but rather are designed to break
						down every detail and rebuild your skills to a new level that is
						only limited by ones own perception of what is possible. Completion
						of these class earns you privileges only available to those who
						endure were others have failed.{' '}
					</p>
					<div className='belts'>
						<div className='belt'>
							<div className='deputy box'></div>
							<p>Deputy Black Belt</p>
						</div>
						<div className='belt'>
							<div className='black box'></div>
							<p>Black Belt</p>
						</div>
					</div>
				</div>
				{popInfo && (
					<div className='info-container'>
						<div>X</div>
						<h2>Taekwondo and self-Control</h2>
						<p>
							A blend of behavioral lesson that enable our students to balance
							self management skills in order to achieve in taekwondo and life.{' '}
						</p>
						<p>THis class is held Mon-Fri 4-5-pm</p>
						<button>Enroll</button>
					</div>
				)}
			</div>
			{popQuiz && (
				<div className='pop-up-quiz'>
					<form onSubmit={handleSubmit}>
						<h2>Checking the box returns a true response</h2>
						{quizSection ? (
							<>
								<div className='section-one'>
									<ul>
										<li>
											<p>
												Does the potential student have any undesired behaviors?
											</p>

											<input
												type='checkbox'
												name='true1'
												id='true1'
												onChange={handleOnChange}
											/>
										</li>
										<li>
											<p>
												Place a question here it will need to be styled up too
												two lines?
											</p>
											<input
												type='checkbox'
												name='true2'
												id='true2'
												onChange={handleOnChange}
											/>
										</li>
										<li>
											<p>
												Place a question here it will need to be styled up too
												two lines?
											</p>
											<input
												type='checkbox'
												name='true3'
												id='true3'
												onChange={handleOnChange}
											/>
										</li>
										<li>
											<p>
												Place a question here it will need to be styled up too
												two lines?
											</p>
											<input
												type='checkbox'
												name='true4'
												id='true4'
												onChange={handleOnChange}
											/>
										</li>
										<li>
											<p>
												Place a question here it will need to be styled up too
												two lines?
											</p>
											<input
												type='checkbox'
												name='true5'
												id='true5'
												onChange={handleOnChange}
											/>
										</li>
									</ul>
								</div>
								<button type='button' onClick={handleNext}>
									Next
								</button>
							</>
						) : (
							<>
								<div id="section-two" className='section-two'>
									<ul>
										<li>
											<p>
												Place a question here it will need to be styled up too
												two lines?
											</p>
											<input
												type='checkbox'
												name='true6'
												id='true6'
												onChange={handleOnChange}
											/>
										</li>
										<li>
											<p>
												Place a question here it will need to be styled up too
												two lines?
											</p>
											<input
												type='checkbox'
												name='true7'
												id='true7'
												onChange={handleOnChange}
											/>
										</li>
										<li>
											<p>
												Place a question here it will need to be styled up too
												two lines?
											</p>
											<input
												type='checkbox'
												name='true8'
												id='true8'
												onChange={handleOnChange}
											/>
										</li>
										<li>
											<p>
												Place a question here it will need to be styled up too
												two lines?
											</p>
											<input
												type='checkbox'
												name='true9'
												id='true9'
												onChange={handleOnChange}
											/>
										</li>
										<li>
											<p>
												Place a question here it will need to be styled up too
												two lines?
											</p>
											<input
												type='checkbox'
												name='true10'
												id='true10'
												onChange={handleOnChange}
											/>
										</li>
									</ul>
								</div>
								<button type='submit'>Submit</button>
							</>
						)}
					</form>
				</div>
			)}
		</div>
	);
};

export default Taekwondo;
