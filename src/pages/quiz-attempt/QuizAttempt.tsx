const QuizAttempt = () => {
  return (
    <div className="dashboard">
      <div className="header-section">
        <div className="left-section">
          <h3>Quiz Attempt List</h3>
        </div>
        <div className="right-section"></div>
      </div>
      <div className="body-section">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th className="col-sno">S.No</th>
                <th>User</th>
                <th>Quiz</th>
                <th>Score</th>
                <th>Totle Question</th>
                <th>Started At</th>
                <th>Completed At</th>
                <th className="col-action">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-ceter">1</td>
                <td>Ram Khatri</td>
                <td>Quiz</td>
                <td>Score</td>
                <td>5</td>
                <td>8:00</td>
                <td>9:00</td>
                <td className="text-ceter">
                  <div className="icon-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width={15}
                      height={15}
                      fill="red"
                    >
                      <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuizAttempt;
