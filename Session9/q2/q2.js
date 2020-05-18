const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

function getMonths() {
  let eachMonth = new Map();
  eachMonth.set('jan', 31);
  eachMonth.set('feb', 28);
  eachMonth.set('mar', 31);
  eachMonth.set('apr', 30);
  eachMonth.set('may', 31);
  eachMonth.set('jun', 30);
  eachMonth.set('jul', 31);
  eachMonth.set('aug', 31);
  eachMonth.set('sep', 30);
  eachMonth.set('oct', 31);
  eachMonth.set('nov', 30);
  eachMonth.set('dec', 31);
  return eachMonth;
}

function removeOverlapInterval(interval, strategy) {
    let finalIntervals = [];
    if (strategy == 1) {
      finalIntervals = strategy_1(interval);
    } else {
      finalIntervals = strategy_2(interval);
    }
      return finalIntervals;
  }

function sortIntervals(Interval) {
  return Interval.sort((initial, final) => {
    let initial_index = months.indexOf(initial);
    let final_index = months.indexOf(final);
    return initial_index - final_index;
  });
}

function strategy_2(intervals) {
    const range = [];
    const date_interval = new Map();
    intervals.map((interval) => {
      date_interval.set(
          interval[0].split('-')[1],
          interval[0].split('-')[0],
      );
      date_interval.set(
          interval[1].split('-')[1],
          interval[1].split('-')[0],
      );
      range.push(interval[0].split('-')[1]);
    });
    range.push(intervals[intervals.length - 1][1].split('-')[1]);
    let sortRange = sortIntervals(range);
    return createIntervals(sortRange, date_interval);
  }

function strategy_1(intervals) {
  let range = [];
  const date_interval = new Map();
  intervals.map((interval) => {
    date_interval.set(
        interval[0].split('-')[1],
        interval[0].split('-')[0],
    );
    date_interval.set(
        interval[1].split('-')[1],
        interval[1].split('-')[0],
    );
    range.push(interval[0].split('-')[1]);
    range.push(interval[1].split('-')[1]);
  });
  const sortBoundaries = sortIntervals(range);

  return createIntervals(sortBoundaries, date_interval);
}

function createIntervals(range, date_interval) {
  let new_intervals = [];
  for (let k = 0; k < range.length - 1; k++) {
    let interval = [];
    let leftinterval =
    date_interval.get(range[k]) + '-' + range[k];
    let rightinterval =
    date_interval.get(range[k + 1]) +
      '-' +
      range[k + 1];

    if (k + 1 < range.length - 1) {
      if (date_interval.get(range[k + 1]) == 1) {
        let previous_month = months[months.indexOf(range[k + 1]) - 1];
        let intervaldate = getMonths().get(previous_month);
        rightinterval = intervaldate + '-' + previous_month;
      } else {
        rightinterval =
        date_interval.get(range[k + 1]) -
          1 +
          '-' +
          range[k + 1];
      }
    }
    interval = [leftinterval, rightinterval];
    new_intervals.push(interval);
  }

  return new_intervals;
}

(function () {
  let intervals = [
    ['1-jan', '30-jun'],
    ['2-feb', '23-may'],
    ['3-mar', '8-jul'],
  ];
  console.log(removeOverlapInterval(intervals, 1));
  console.log(removeOverlapInterval(intervals, 2));
})();
