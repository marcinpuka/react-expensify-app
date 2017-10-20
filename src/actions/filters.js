// set Text Filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER', 
    text 
});

// sort By Amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

// sort By Date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE', 
    sortBy: 'date'
});

// set start Date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE', 
    startDate
});

// set end Date 
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE', 
    endDate
});