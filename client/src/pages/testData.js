/*eslint-disable*/
const options = {
    animationEnabled: true,
    title: {
        text: 'Garden Maintenance'
    },
    axisY: {
        title: 'Number of Times',
        interval: 2,
        includeZero: false
    },
    toolTip: {
        shared: true
    },
    data: [
        {
        type: 'spline',
        name: 'Water',
        showInLegend: true,
        dataPoints: [
            { y: 6, label: 'Jan' },
            { y: 12, label: 'Feb' },
            { y: 3, label: 'Mar' },
            { y: 11, label: 'Apr' },
            { y: 9, label: 'May' },
            { y: 5, label: 'Jun' },
            { y: 2, label: 'Jul' },
            { y: 12, label: 'Aug' },
            { y: 4, label: 'Sept' },
            { y: 0, label: 'Oct' },
            { y: 3, label: 'Nov' },
            { y: 5, label: 'Dec' }
        ]
    },
    {
        type: 'spline',
        name: 'Weed',
        showInLegend: true,
        dataPoints: [
            { y: 5, label: 'Jan' },
            { y: 7, label: 'Feb' },
            { y: 5, label: 'Mar' },
            { y: 2, label: 'Apr' },
            { y: 2, label: 'May' },
            { y: 5, label: 'Jun' },
            { y: 2, label: 'Jul' },
            { y: 8, label: 'Aug' },
            { y: 5, label: 'Sept' },
            { y: 0, label: 'Oct' },
            { y: 5, label: 'Nov' },
            { y: 9, label: 'Dec' }
        ]
    },
    {
        type: 'spline',
        name: 'Prune',
        showInLegend: true,
        dataPoints: [
            { y: 2, label: 'Jan' },
            { y: 0, label: 'Feb' },
            { y: 9, label: 'Mar' },
            { y: 0, label: 'Apr' },
            { y: 2, label: 'May' },
            { y: 5, label: 'Jun' },
            { y: 2, label: 'Jul' },
            { y: 8, label: 'Aug' },
            { y: 5, label: 'Sept' },
            { y: 0, label: 'Oct' },
            { y: 5, label: 'Nov' },
            { y: 1, label: 'Dec' }
        ]
    }
    ]
};

export default options;