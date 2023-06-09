import * as React from 'react';
import {withRouter} from 'react-router-dom';
import IncluscoreAppCommon from './IncluscoreAppCommon';
import IncluscoreMenu from './layout/IncluscoreMenu';
import './IncluscoreAppAnswers.scss';
import {TextToInterpretedTextHelper} from './helpers/TextToInterpretedTextHelper';
import {QuestionDto} from '../../../server/src/incluscore/dto/question.dto';
import {IncluscoreDto} from '../../../server/src/incluscore/dto/incluscore.dto';
import {IncluscoreWrappedComponentProps} from '../../typings/incluscore-app';
import {ThemeDto} from '../../../server/src/incluscore/dto/theme.dto';
import {UserThemeDto} from '../../../server/src/incluscore/dto/user-theme.dto';
import {tr} from '../../translations/TranslationsUtils';
import {Translation} from 'react-i18next';

interface IncluscoreAppThemesState {
	incluscore: IncluscoreDto;
}

class IncluscoreAppAnswers extends IncluscoreAppCommon<IncluscoreWrappedComponentProps, IncluscoreAppThemesState> {
	getUserThemeByThemeId = (themeId) => {
		const userThemes = this.props.launch.userThemes;
		if (userThemes) {
			return userThemes.find((u) => {
				return u && u.userId.id === window.connectedUser.id && u.themeId.id === themeId;
			});
		}
		return null;
	};

	getQuestionById = (questionId: QuestionDto, themeId: string) => {
		const incluscore = this.props.incluscore;
		const theme = incluscore.themes.find((t) => t.id === themeId);
		return theme.questions.find((q) => q && q.id === questionId.id);
	};

	move() {
		var i = 0
		if (i == 0) {
		  i = 1;
		  var elem = document.getElementById("myBar");
		  var width = 10;
		  var id = setInterval(frame, 10);
		  function frame() {
			if (width >= 80) {
			  clearInterval(id);
			  i = 0;
			} else {
			  width++;
			  elem.style.width = width + "%";
			  elem.innerHTML = width  + "%";
			}
		  }
		}
	}

	getStats = () => {
		const incluscore = this.props.incluscore;
		const userThemes = this.props.launch.userThemes;
		let nbGoodAnswers = 0;
		let nbBadAnswers = 0;
		let nbQuestions = 0;
		userThemes.forEach((ut) => {
			const theme = incluscore.themes.find((t) => t.id === ut.themeId.id);
			theme.questions.forEach((q) => {
				const userAnswer = ut.answers.find((a) => a.questionId.id === q.id);
				if (userAnswer) {
					nbQuestions++;
					if (userAnswer.isAGoodAnswer) {
						nbGoodAnswers++;
					} else {
						nbBadAnswers++;
					}
				}
			});
		});
		return {nbGoodAnswers, nbBadAnswers, nbQuestions};
	}
	
	renderStats = () => {
		const {nbGoodAnswers, nbBadAnswers, nbQuestions} = this.getStats();
		return (
			<div className={'stats-container'}>
				<div className={'stats'}>
					<div className={'stat'}>
						<p className={'c-liquorice m-0'}>{nbGoodAnswers}</p>
						<p className={'c-liquorice m-0'}>
							<Translation ns={['translation', 'incluscore']}>
								{(t) => <>{t('Nombre de bonne réponse', {ns: 'incluscore'})}</>}
							</Translation>
						</p>
					</div>

					<div className={'stat'}>
						<p className={'c-liquorice m-0'}>{nbBadAnswers}</p>
						<p className={'c-liquorice m-0'}>
							<Translation ns={['translation', 'incluscore']}>
								{(t) => <>{t('Nombre de mauvaise réponse', {ns: 'incluscore'})}</>}
							</Translation>
						</p>
					</div>
					
					<div className={'stat'}>
						<p className={'c-liquorice m-0'}>{nbQuestions}</p>
						<p className={'c-liquorice m-0'}>
							<Translation ns={['translation', 'incluscore']}>
								{(t) => <>{t('Nombre total de réponse', {ns: 'incluscore'})}</>}
							</Translation>
						</p>
					</div>

					<div className={'stat'}>
						<div className='myProgress' onClick={this.move}>
							<p className={'c-liquorice m-0'} id='myBar'>{Math.round((nbGoodAnswers / nbQuestions) * 100)}%</p>
						</div>
						<p className={'c-liquorice m-0'}>
							<Translation ns={['translation', 'incluscore']}>
								{(t) => <>{t('Pourcentage de bonne réponse', {ns: 'incluscore'})}</>}
							</Translation>
						</p>
					</div>
				</div>
			</div>
		);
	};

	renderSingleAnswerRow(question: QuestionDto, isAGoodAnswer: boolean, last: boolean) {
		return (
			<div
				id={question.id}
				className={`
					question-result
					${last ? 'last' : ''}
					${isAGoodAnswer ? 'good' : 'bad'}
				`}
			>
				{isAGoodAnswer && (
					<div className={'good-answer-explanation-container'}>
						<p className={'label-you-answered-well m-0'}>
							<Translation ns={['translation', 'incluscore']}>
								{(t) => <>{t('answers.good', {ns: 'incluscore'})}</>}
							</Translation>
						</p>
						<img
							draggable={false}
							className={'img-good-answer d-inline-block'}
							src={'/img/incluscore-app/check-answer.svg'}
							alt={'good-answer'}
						/>
					</div>
				)}

				<div className={'a-title'}>
					<p className={'c-liquorice m-0'}>
						{TextToInterpretedTextHelper.getInterpretation(tr(question, 'title'))}
					</p>
				</div>
				<div className={'a-explanation'}>
					<p className={'c-liquorice m-0'}>
						{TextToInterpretedTextHelper.getInterpretation(tr(question, 'answerExplanation'))}
					</p>
				</div>
				<div className={'a-answers'}>
					{question.propositions.map((p, i) => {
						return (
							<p key={i} className={`m-0 ${p.isAGoodAnswer ? 'good-answer' : 'bad-answer'}`}>
								{TextToInterpretedTextHelper.getInterpretation(tr(p, 'title'))}
							</p>
						);
					})}
				</div>
			</div>
		);
	}

	renderThemeResult(theme: ThemeDto, userTheme: UserThemeDto) {
		const answeredQPopulated = theme.questions.filter((q) =>
			userTheme?.answers?.find((a) => a.questionId.id === q.id),
		);
		if (!answeredQPopulated || answeredQPopulated.length < 1) {
			return null;
		}
		return (
			<>
				<button
					className="basic-btn incluscore-collapsible"
					type="button"
					data-toggle="collapse"
					data-target={'#all-questions-container-' + theme?.id}
					aria-expanded="false"
					aria-controls="collapseAnswer"
				>
					{tr(theme, 'name')}
				</button>
				<div id={'all-questions-container-' + theme?.id} className={'collapse'}>
					{!answeredQPopulated || answeredQPopulated.length < 1 ? (
						<div className={'d-flex justify-content-center align-items-center w-100'}>
							<p className={'m-lg-3 later-pls'}>
								<Translation ns={['translation', 'incluscore']}>
									{(t) => <>{t('answers.hereLater', {ns: 'incluscore'})}</>}
								</Translation>
							</p>
						</div>
					) : (
						<>
							{answeredQPopulated?.length > 0 &&
								answeredQPopulated.map((questionAnswered, i) => {
									const last = i === userTheme.answers.length - 1;
									const answer = userTheme.answers.find(
										(a) => a.questionId.id === questionAnswered.id,
									);
									const isAGoodAnswer = answer.userAnswer.isAGoodAnswer;
									return (
										<div className={'all-answers-ut-container'} key={i}>
											{questionAnswered &&
												this.renderSingleAnswerRow(questionAnswered, isAGoodAnswer, last)}
										</div>
									);
								})}
						</>
					)}
				</div>
			</>
		);
	}

	render() {
		const incluscore = this.props.incluscore;
		const isInclucard = this.props.incluscore.isInclucard;
		return (
			<>
				<IncluscoreMenu isInclucard={isInclucard} goToMethod={(path) => this.props.incluscoreAppGoTo(path)} />
				<div className={'incluscore-app answers'}>
					<div>
						{incluscore &&
							incluscore.themes &&
							incluscore.themes.length &&
							incluscore.themes.map((theme, index) => {
								const userTheme = this.getUserThemeByThemeId(theme.id);
								return (
									<div className={'theme-answers-container'} key={index}>
										{this.renderThemeResult(theme, userTheme)}
									</div>
									
								);
							})}
					</div>
					<div>
						{this.renderStats()}
						{this.move()}
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(IncluscoreAppAnswers);
