import MergeSort from '../MergeSort'
import {
    equalArr,
    notSortedArr,
    reverseArr,
    sortedArr,
    SortTester,
} from '../../SortTester'
import Sort from '../../Sort';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 79
const NOT_SORTED_ARRAY_VISITING_COUNT = 102
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 87
const EQUAL_ARRAY_VISITING_COUNT = 79

describe('MergeSort', () => {
    it('should sort array', () => {
        SortTester.testSort(MergeSort)
    })

    it('should sort array with custom comparator', () => {
        SortTester.testSortWithCustomComparator(MergeSort)
    })

    it('should do stable sorting', () => {
        SortTester.testSortStability(MergeSort)
    })
})