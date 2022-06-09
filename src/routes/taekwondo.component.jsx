import React, { useState } from 'react';

const Taekwondo = () => {
	const [popQuiz, popQuizState] = useState(false);
	const [popInfo, popInfoState] = useState(false);

	const handlePopState = () => {
		popQuizState(!popQuiz);
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
				<h3>Taekwondo Programs</h3>
				<div className='self-control'>
					<h2>Level 1-Self-Control</h2>
					<p>Self-Control and basic principles</p>
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
					<p>Self-Awareness and novice principles</p>
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
					<h2>Level 3-Strength of Charac</h2>
					<p>Strength-of-Character and advanced principles</p>
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
					<p>Black Belt Classes</p>
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
					<form>
						<ul>
							<div className='section-one'>
								<li>
									<p>
										Place a question here it will need to be styled up too two
										lines?
									</p>
									<input type='checkbox' name='true1' id='true1' />
								</li>
								<li>
									<p>
										Place a question here it will need to be styled up too two
										lines?
									</p>
									<input type='checkbox' name='true2' id='true2' />
								</li>
								<li>
									<p>
										Place a question here it will need to be styled up too two
										lines?
									</p>
									<input type='checkbox' name='true3' id='true3' />
								</li>
								<li>
									<p>
										Place a question here it will need to be styled up too two
										lines?
									</p>
									<input type='checkbox' name='true4' id='true4' />
								</li>
								<li>
									<p>
										Place a question here it will need to be styled up too two
										lines?
									</p>
									<input type='checkbox' name='true5' id='true5' />
								</li>
								<button type='button'>Next</button>
							</div>
							<div className='section-two'>
								<li>
									<p>
										Place a question here it will need to be styled up too two
										lines?
									</p>
									<input type='checkbox' name='true6' id='true6' />
								</li>
								<li>
									<p>
										Place a question here it will need to be styled up too two
										lines?
									</p>
									<input type='checkbox' name='true7' id='true7' />
								</li>
								<li>
									<p>
										Place a question here it will need to be styled up too two
										lines?
									</p>
									<input type='checkbox' name='true8' id='true8' />
								</li>
								<li>
									<p>
										Place a question here it will need to be styled up too two
										lines?
									</p>
									<input type='checkbox' name='true9' id='true9' />
								</li>
								<li>
									<p>
										Place a question here it will need to be styled up too two
										lines?
									</p>
									<input type='checkbox' name='true10' id='true10' />
								</li>
							</div>
						</ul>
					</form>
				</div>
			)}
		</div>
	);
};

export default Taekwondo;
