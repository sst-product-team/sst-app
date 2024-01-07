import {View, Dimensions} from 'react-native';
import {LineChart, ContributionGraph} from 'react-native-chart-kit';
import {showMessage} from 'react-native-flash-message';

function Charts() {
  const chartConfig = {
    backgroundGradientFrom: `#2e2e2e`,
    backgroundGradientTo: `#2e2e2e`,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(134, 1000, 244, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  commitsData = [
    {date: '2023-11-01', count: 4, classes: ['Maths', 'Physics']},
    {date: '2023-12-01', count: 4, classes: ['Maths', 'Physics']},
  ];

  return (
    <View>
      <LineChart
        data={{
          labels: ['Jan 2024', 'Feb 2024', 'Mar 2024'],
          datasets: [
            {
              data: [95, 80, 89, 95, 100, 99],
              color: (opacity = 1) => `#aeaeff`, // optional
              labelColor: (opacity = 1) => `#1a1a1a`,
            },
            {
              data: [100, 99, 100, 98, 95, 99],
              color: (opacity = 1) => `#646464`, // optional
              labelColor: (opacity = 1) => `#1a1a1a`,
            },
          ],
          legend: ['Attendance', 'Class Average'], // optional
        }}
        bezier
        width={0.84 * Dimensions.get('window').width} // from react-native
        height={0.25 * Dimensions.get('window').height}
        yAxisLabel=""
        yAxisSuffix="%"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        style={{
          marginVertical: '5%',
          borderRadius: 16,
        }}
      />

      <LineChart
        data={{
          labels: ['01 Jan 2024', '05 Jan 2024', '10 Jan 2024'],
          datasets: [
            {
              data: [95, 98, 96],
            },
            {
              data: [99, 99, 98],
              color: (opacity = 1) => `#646464`, // optional
              labelColor: (opacity = 1) => `#1a1a1a`,
            },
          ],
          legend: ['Problem Solving Percentage'], // optional
        }}
        bezier
        width={0.84 * Dimensions.get('window').width} // from react-native
        height={0.25 * Dimensions.get('window').height}
        yAxisLabel=""
        yAxisSuffix="%"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        style={{
          marginVertical: '5%',
          borderRadius: 16,
        }}
      />
    </View>
  );
}

export default Charts;
