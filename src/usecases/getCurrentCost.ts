import {NATIONAL_HOLIDAYS} from '../domain/holidays';
import {CostLevel} from '../domain/light-cost';

export const getCurrentCost = (currentTime: Date): CostLevel => {
  const hours = currentTime.getHours();
  const weekDay = currentTime.getDay();
  const dateWithoutTime = currentTime.toDateString();

  const isWeekend = weekDay === 0 || weekDay === 6;
  if (isWeekend) {
    return CostLevel.low;
  }

  const isNationalHoliday = NATIONAL_HOLIDAYS.includes(dateWithoutTime);
  if (isNationalHoliday) {
    return CostLevel.low;
  }

  if ((hours > 9 && hours < 14) || (hours > 17 && hours < 22)) {
    return CostLevel.high;
  }
  if (hours > 7) {
    return CostLevel.medium;
  }
  return CostLevel.low;
};
