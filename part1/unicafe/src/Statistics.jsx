export function Statistics(props) {
  const sum = props.good + props.neutral + props.bad;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={sum} />
        <StatisticLine
          text="average"
          value={(props.good * 1 + props.neutral * 0 + props.bad * -1) / sum}
        />
        <StatisticLine
          text="positive"
          value={`${parseFloat(props.good / sum) * 100} %`}
        />
      </tbody>
    </table>
  );
}

export function StatisticLine(props) {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
}
