/**
 * Created by Phan M Duong on 12/25/2016.
 */
export function barChartSingleLine(id, labels, data) {
  let barChartContext = $(id).get(0).getContext("2d");
  let dataBarChart = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(151,187,205,1)",
        strokeColor: "rgba(151,187,205,1)",
        highlightFill: "rgba(151,187,205,1)",
        highlightStroke: "rgba(151,187,205,1)",
        data: data
      }
    ]
  };

  /* jshint ignore:start*/
  new Chart(barChartContext).Bar(dataBarChart);
  /* jshint ignore:end */
}
