import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
export var getCounterValue = createSelector(getCounter, function (counter) { return counter.value; });
