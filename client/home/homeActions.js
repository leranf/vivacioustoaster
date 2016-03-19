export const changeStartDate = (date) => ({
  type: 'CHANGE_STARTDATE',
  payload: {
    date,
  },
});

export const changeEndDate = (date) => ({
  type: 'CHANGE_ENDDATE',
  payload: {
    date,
  },
});

export const changeTripType = (tripType) => ({
  type: 'CHANGE_TRIPTYPE',
  payload: {
    tripType,
  },
});

export const changeDestination = (value) => ({
  type: 'CHANGE_DESTINATION',
  payload: {
    value,
  },
});
