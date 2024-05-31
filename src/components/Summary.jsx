import quizCompleteLogo from '../assets/quiz-complete.png'
import QUESTION from '../questions.js'

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === QUESTION[index].answers[0]);

    const skippedAnsersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctAnsersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const wrongAnswerShare = 100 - skippedAnsersShare - correctAnsersShare;

    return (
        <div id="summary">
            <img src={quizCompleteLogo} alt="icon-complete" />
            <h2>คะแนนของคุณ...</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedAnsersShare}%</span>
                    <span className='text'>ข้าม</span>
                </p>
                <p>
                    <span className='number'>{correctAnsersShare}%</span>
                    <span className='text'>ตอบถูก</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswerShare}%</span>
                    <span className='text'>ตอบผิด</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';
                    if (answer === null) {
                        cssClass += ' skipped';
                    } else if (answer === QUESTION[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTION[index].text}</p>
                            <p className={cssClass}>{answer ?? 'ข้าม'}</p>
                        </li>)
                })}

            </ol>
        </div>
    );
}