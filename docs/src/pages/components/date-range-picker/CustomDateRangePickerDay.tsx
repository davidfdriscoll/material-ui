import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import { DateRange } from '@material-ui/lab/DateRangePicker';
import StaticDateRangePicker from '@material-ui/lab/StaticDateRangePicker';
import DateRangePickerDay, {
  DateRangePickerDayProps,
} from '@material-ui/lab/DateRangePickerDay';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  highlight: {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  firstHighlight: {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  endHighlight: {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
}));

export default function CustomDateRangePickerDay() {
  const classes = useStyles();
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  const renderWeekPickerDay = (
    date: Date,
    dateRangePickerDayProps: DateRangePickerDayProps<Date>,
  ) => {
    return (
      <DateRangePickerDay
        {...dateRangePickerDayProps}
        className={clsx(dateRangePickerDayProps.className, {
          [classes.firstHighlight]: dateRangePickerDayProps.isStartOfHighlighting,
          [classes.endHighlight]: dateRangePickerDayProps.isEndOfHighlighting,
          [classes.highlight]: dateRangePickerDayProps.isHighlighting,
        })}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        label="date range"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderDay={renderWeekPickerDay}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
