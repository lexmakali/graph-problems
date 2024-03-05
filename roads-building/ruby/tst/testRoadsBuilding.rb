require "test/unit/assertions"
include Test::Unit::Assertions
require 'set'
require 'test/unit'
require_relative '../src/RoadSystem.rb'

class YourTest < Test::Unit::TestCase
  def test_solution
    cities = 4
    roads = [[0, 1], [1, 2], [2, 3]]

    result = solution(cities, roads)

    # Expected result: [[0, 2], [0, 3], [1, 3]]
    assert_equal([[0, 2], [0, 3], [1, 3]], result)
  end

  def test_solution_empty_roads
    cities = 3
    roads = []

    result = solution(cities, roads)

    assert_equal([], result)
  end

  def test_solution_one_city
    cities = 1
    roads = []

    result = solution(cities, roads)

    assert_equal([], result)
  end

  def test_array_set_difference
    set_a = [[1, 2], [3, 4], [5, 6]]
    set_b = [[3, 4], [5, 6], [7, 8]]

    # Expected result: [[1, 2]]
    result = array_set_difference(set_a, set_b)

    assert_equal([[1, 2]], result)
  end

  def test_array_set_difference_empty_set_b
    set_a = [[1, 2], [3, 4]]
    set_b = []

    result = array_set_difference(set_a, set_b)

    assert_equal([], result)
  end

  def test_arrays_equal
    array1 = [1, 2]
    array2 = [2, 1]

    assert_equal(true, arrays_equal(array1, array2))
  end

  def test_arrays_not_equal
    array1 = [1, 2]
    array2 = [3, 4]

    assert_equal(false, arrays_equal(array1, array2))
  end
end
